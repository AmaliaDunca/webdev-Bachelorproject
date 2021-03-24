<template>
  <div class="map">
    <h1>map</h1>
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "GMap",
  data() {
    return {
      lat: 53,
      lng: -2
    };
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      });
    }
  },
  mounted() {
    this.renderMap();
    console.log(firebase.auth().currentUser);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.google-map {
  width: 100%;
  height: 60%;
  margin: 0 auto;
  left: 0;
  top: 0;
  position: absolute;
  background-color: #ffffff;
}
</style>
