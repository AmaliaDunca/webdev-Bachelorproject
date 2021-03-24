import Vue from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "vue-router";
import GMap from "@/components/GMap";
import Signup from "@/components/auth/Signup";
import Login from "@/components/auth/Login";
import Profile from "@/components/Profile";
import DeliveryService from "@/components/DeliveryService";
import MapDelivery from "@/components/MapDelivery";
import PostJobs from "@/components/PostJobs";
import Tracking from "@/components/Tracking";
import Test from "@/components/Test";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/profile/:id",
      name: "Profile",
      component: Profile
    },
    {
      path: "/delivery",
      name: "DeliveryService",
      component: DeliveryService
    },
    {
      path: "/map-delivery/:job",
      name: "MapDelivery",
      component: MapDelivery
    },
    {
      path: "/post-jobs",
      name: "PostJobs",
      component: PostJobs
    },
    {
      path: "/tracking",
      name: "Tracking",
      component: Tracking
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    }
  ]
});
