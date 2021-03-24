<template>
  <div class="job-offer">
    <div class="map map-continer">
      <h1>map</h1>
      <div class="map" id="map"></div>
    </div>
    <div class="job-description">
      <div class="card card-offer" style="width: 18rem;">
        <img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p>Name</p>
          <h6>Christian Dunca</h6>
          <p>Date</p>
          <h6>01 Jun 2021</h6>
          <span>
            <p>Time</p>
            <h6>{{timeAtoB + timeBtoC}} min</h6>
          </span>
          <span>
            <p>Earning</p>
            <h6>30$</h6>
          </span>
          <span>
            <p>Distance</p>
            <h6>{{distanceAtoB + distanceBtoC }} km</h6>
          </span>
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p>Your Location</p>
            <img :src="require('../../static/pin-yourlocation.png')" class="small-icon">
            <span>{{currentLocation}}</span>
          </li>
          <li class="list-group-item">
            <p>Pickup</p>
            <img :src="require('../../static/pin-destination.png')" class="small-icon">
            <span>{{post.pStreet}}</span>
          </li>
          <li class="list-group-item">
            <p>Delivery</p>
            <img :src="require('../../static/pin-destination.png')" class="small-icon">
            <span>{{post.dStreet}}</span>
          </li>
        </ul>
        <div class="card-body buttons-flow">
          <button
            v-on:click.prevent="startLocationUpdates"
            type="button"
            class="btn btn-outline-primary btn-lg"
          >Accept</button>
          <button
            v-on:click.prevent="stopLocationUpdates"
            type="button"
            class="btn btn-outline-danger btn-lg"
          >Reject</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { setTimeout, setInterval } from "timers";
export default {
  name: "MapDelivery",
  props: ["job"],
  data() {
    return {
      lat: 53,
      lng: -2,
      latitude: 0,
      longitude: 0,
      watchPositionId: null,
      //accuracy: null,
      marker: null,
      post: [],
      currentLocation: "",
      //markerCurrentLoc: null,
      // markerPickup: null,

      // markerDeliver: null,
      directionsService: null,
      directionsRenderer: null,
      waypts: null,
      map: null,
      bounds: null,
      distanceAtoB: null,
      distanceBtoC: null,
      timeAtoB: null,
      timeBtoC: null,
      geocoder: new google.maps.Geocoder(),
      latlng: {
        lat: "",
        lng: ""
      }
    };
  },
  methods: {
    loadMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 12,
        // maxZoom: 15,
        // minZoom: 12,
        streetViewControl: false
      });

      this.bounds = new google.maps.LatLngBounds();
      this.bounds.extend(this.latlng);
      //
      this.geocoder.geocode(
        { address: this.post.pStreet + ", " + this.post.pCity },
        (results, status) => {
          if (status === "OK") {
            this.bounds.extend(results[0].geometry.location);
          }
        }
      );
      //
      this.geocoder.geocode(
        { address: this.post.dStreet + ", " + this.post.dCity },
        (results, status) => {
          if (status === "OK") {
            this.bounds.extend(results[0].geometry.location);
          }
        }
      );

      this.map.fitBounds(this.bounds);
    },

    createRoutes() {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(this.map);
      console.log(this.currentLocation);
      this.calculateAndDisplayRoute1(
        this.directionsService,
        this.directionsRenderer
      );
    },
    calculateAndDisplayRoute1(directionsService, directionsRenderer) {
      directionsService.route(
        {
          origin: { query: this.currentLocation },
          destination: {
            query: this.post.dStreet + ", " + this.post.dCity
          },
          waypoints: [
            {
              location: this.post.pStreet + ", " + this.post.pCity,
              stopover: true
            }
          ],
          provideRouteAlternatives: false,
          travelMode: google.maps.TravelMode.DRIVING,
          drivingOptions: {
            departureTime: new Date(Date.now()), // for the time N milliseconds from now.
            trafficModel: "optimistic"
          }
        },
        (response, status) => {
          if (status === "OK") {
            console.log(response);
            this.distanceAtoB = parseFloat(
              response.routes[0].legs[0].distance.text
            );
            this.timeAtoB = parseFloat(
              response.routes[0].legs[0].duration.text
            );
            this.distanceBtoC = parseFloat(
              response.routes[0].legs[1].distance.text
            );
            this.timeBtoC = parseFloat(
              response.routes[0].legs[1].duration.text
            );

            directionsRenderer.setDirections(response);
          } else {
            console.log("Directions request failed due to " + status);
          }
        }
      );
    },

    acceptJob() {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        //this.map.setZoom(18);
        console.log(this.latitude, this.longitude);
        this.map.setCenter(
          new google.maps.LatLng(this.latitude, this.longitude)
        );

        this.marker.setPosition(
          new google.maps.LatLng(this.latitude, this.longitude)
        );
      });
    },
    startLocationUpdates() {
      this.marker = new google.maps.Marker({
        map: this.map
      });
      this.watchPositionId = setInterval(this.acceptJob, 500);
      console.log(this.watchPositionId);
    },
    stopLocationUpdates() {
      window.clearInterval(this.watchPositionId._id);
      console.log(this.watchPositionId);
      console.log("stoped");
    }
  },

  mounted() {
    //get user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.lat = pos.coords.latitude;
          this.lng = pos.coords.longitude;
          /// LATLONG to STREET CurrentLocation
          this.latlng = {
            lat: this.lat,
            lng: this.lng
          };

          this.geocoder.geocode(
            { location: this.latlng },
            (results, status) => {
              this.currentLocation = results[0].formatted_address;
              this.createRoutes();
            }
          );
          this.loadMap();
        },

        err => {
          console.log(err);
          this.loadMap();
        },
        { maximumAge: 60000, timeout: 8000 }
      );
    } else {
      //position center by defoult value
      this.loadMap();
      console.log("didn/t work");
    }
  },

  created() {
    firebase
      .firestore()
      .collection("Jobs")
      .where("id", "==", this.$route.params.job)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.post = doc.data();
          this.post.id = doc.id;
          console.log(this.post);
        });
      });
  }
};
</script>
<style scoped>
.map {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  left: 23%;
  top: 0;
  position: absolute;
  background-color: #ffffff;
}
.job-description {
  display: flex;
  justify-content: left;
  align-items: flex-end;
  height: 90vh;
}
span {
  display: inline-block;
  margin: 0px 30px 0px 0px;
}
p {
  font-size: 0.3em;
  margin: 10px 0px 5px 0px;
}
.small-icon {
  width: 1em;
}
.buttons-flow {
  text-align: center;
}
</style>


