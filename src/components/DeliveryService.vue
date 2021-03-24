<template>
  <div>
    <h6>Jobs</h6>
    <div class="container">
      <div v-for="(job,index) in jobs" :key="index" class="card card-padding card-delivery">
        <div class="row">
          <div class="col-sm-5 card-img-div">
            <img class="card-img" src="https://picsum.photos/150?image=641" alt>
          </div>
          <div class="col-sm-7">
            <div class="card-block">
              <h6>Name</h6>
              <p>Christian Dunca</p>
              <h6>Date</h6>
              <p>01 Jun 2021</p>
              <p>{{job.pStreet}}</p>
              <p>{{job.dStreet}}</p>
              <span>
                <h6>Time</h6>

                <p>{{time[index]}}</p>
              </span>
              <span>
                <h6>Earning</h6>
                <p>30$</p>
              </span>
              <span>
                <h6>Distance</h6>
                <p>{{distance[index]}}</p>
              </span>
              <br>
              <div class="text-center">
                <router-link :to="{ name: 'MapDelivery', params: {job:job.id}}" class="btn">
                  Read More
                  <!-- <a href="#" class="btn btn-primary"></a> -->
                </router-link>
                <!-- <a href="#" class="btn btn-primary btn-sm">Read More</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- next card-->
  </div>
</template>
<script>
import firebase from "firebase";

import { setTimeout } from "timers";
export default {
  data() {
    return {
      lat: null,
      lng: null,
      latlng: null,
      jobs: [],
      currentLocation: null,
      distance: [],
      time: [],
      directionsService: null,
      geocoder: new google.maps.Geocoder(),
      timeAtoB: null,
      timeBtoC: null
    };
  },

  methods: {
    createRoutes() {
      this.directionsService = new google.maps.DirectionsService();
      this.calculateTimeAndDistance(this.directionsService);
    },

    calculateTimeAndDistance(directionsService) {
      this.jobs.forEach(job => {
        directionsService.route(
          {
            origin: { query: this.currentLocation },
            destination: {
              query: job.dStreet + ", " + job.dCity
            },
            waypoints: [
              {
                location: job.pStreet + ", " + job.pCity,
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
              this.distance.push(
                (
                  parseFloat(response.routes[0].legs[0].distance.text) +
                  parseFloat(response.routes[0].legs[1].distance.text)
                ).toFixed(1)
              );

              this.time.push(
                parseFloat(response.routes[0].legs[0].duration.text) +
                  parseFloat(response.routes[0].legs[1].duration.text)
              );

              // console.log(this.jobs);
            } else {
              console.log("Directions request failed due to " + status);
            }
          }
        );
      });
    }
  },
  created() {
    // fetch data from firestore
    firebase
      .firestore()
      .collection("Jobs")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.data());
          let job = doc.data();
          job.id = doc.id;
          // console.log(job);
          this.jobs.push(job);
        });

        snapshot.docs.forEach(doc => {
          firebase
            .firestore()
            .collection("Jobs")
            .doc(doc.id)
            .update({ id: doc.id });
        });
      });

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
        },
        err => {
          console.log(err);
        },
        { maximumAge: 60000, timeout: 8000 }
      );
    } else {
      console.log("didn/t work");
    }
  },
  mounted() {}
};
</script>
<style scoped>
.card-padding {
  margin: 20px 20px;
}
.card-block {
  font-size: 1em;
  position: relative;
  margin: 0;
  padding: 1em;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  box-shadow: none;
  color: #fff;
}
.card {
  background: #3a4454;
  max-width: 700px;
  margin: 0 auto;
  font-size: 1em;
  overflow: hidden;
  padding: 5;
  border: none;
  border-radius: 0.28571429rem;
  margin-top: 20px;
}

.card-img {
  margin: 20px;
}

@media only screen and (max-width: 555px) {
  .card-img {
  }
  .card-img-div {
    min-width: 300px;
    min-height: 300px;
  }
}

.btn {
  margin-top: 20px;
  background: #fd8e1c;
  color: #3a4454;
  border: none;
  border-radius: 50px;
}

span {
  display: inline-block;
  margin: 0px 30px 0px 0px;
}
.card-delivery p {
  font-size: 0.8em;
  margin: 10px 0px 15px 0px;
}

h6 {
  color: #95969d;
}
</style>


