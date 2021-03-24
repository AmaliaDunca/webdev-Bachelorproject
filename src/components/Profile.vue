<template>
  <div class="container">
    <div class="row gutters">
      <div class="small-card col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="account-settings">
              <div class="user-profile">
                <div class="user-avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin">
                  <div class="icon-pic-circle">
                    <img class="icon-pic" src="../../static/camera.png" alt>
                  </div>
                </div>
                <h5 class="user-name">{{userName}}</h5>
                <h5 class="user-email">{{email}}</h5>
              </div>
              <div class="about">
                <h5 class="mb-2">About</h5>
                <p>{{description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="big-card col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card card-form h-100">
          <div class="card-body">
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h5 class="mb-4">Personal Details</h5>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="fullName">Full Name</label>
                  <input
                    v-model="userName"
                    type="text"
                    class="form-control"
                    id="fullName"
                    placeholder="Enter full name"
                  >
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="eMail">Email</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="eMail"
                    placeholder="Enter email ID"
                  >
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input
                    v-model="phone"
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Enter phone number"
                  >
                </div>
              </div>
            </div>
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h5 class="mb-4">Address</h5>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="Street">Street</label>
                  <input
                    v-model="street"
                    type="name"
                    class="form-control"
                    id="Street"
                    placeholder="Enter Street"
                  >
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="ciTy">City</label>
                  <input type="name" class="form-control" id="ciTy" placeholder="Enter City">
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="sTate">County</label>
                  <input
                    v-model="county"
                    type="text"
                    class="form-control"
                    id="sTate"
                    placeholder="Enter County"
                  >
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="zIp">Zip Code</label>
                  <input
                    v-model="zipCode"
                    type="text"
                    class="form-control"
                    id="zIp"
                    placeholder="Zip Code"
                  >
                </div>
              </div>
            </div>

            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h5 class="mb-4">Acctions</h5>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <label for="Street">What is the purpose of using this platform?</label>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <div class="form-check form-check-inline">
                    <input
                      v-model="typeUser"
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="userPostJobs"
                    >
                    <label class="form-check-label" for="inlineRadio1">I need delivey</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="typeUser"
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio4"
                      value="userDeliveryGuy"
                    >
                    <label class="form-check-label" for="inlineRadio2">I want a job in delivery</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h5 class="mb-4">About</h5>
              </div>

              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <label for="Street">Short Description</label>
                  <input
                    v-model="description"
                    type="name"
                    class="form-control"
                    id="Street"
                    placeholder="Enter Street"
                  >
                </div>
              </div>
            </div>
            <div v-if="(typeUser == 'userDeliveryGuy')" class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h5 class="mb-4">Vehicle</h5>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <label for="Street">Select Your Vehicle</label>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                <div class="form-check form-check-inline">
                  <input
                    v-model="typeCar"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="scooter"
                  >
                  <label class="form-check-label" for="inlineRadio2">
                    <div class="form-group icon-button">
                      <img class="icon-size" src="../../static/scooter.png" alt="car icon">
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                <div class="form-check form-check-inline">
                  <input
                    v-model="typeCar"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="car"
                  >
                  <label class="form-check-label" for="inlineRadio2">
                    <div class="form-group icon-button">
                      <img class="icon-size" src="../../static/car.png" alt="car icon">
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                <div class="form-check form-check-inline">
                  <input
                    v-model="typeCar"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="van"
                  >
                  <label class="form-check-label" for="inlineRadio2">
                    <div class="form-group icon-button">
                      <img class="icon-size" src="../../static/van.png" alt="car icon">
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div v-if="(typeUser == 'userDeliveryGuy')" class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h5 class="mb-4">Upload Driver Licence</h5>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="driver-continer">
                  <label for="Street">Upload File</label>
                  <div class="driver-licence">
                    <img class="icon-size" src="../../static/upload.png" alt>
                    <h2>Drop files here to upload</h2>
                    <!-- <p>OR</p>

                     <button type="button" class="btn btn-secondary btn-sm">
                      <img class="icon-camera" src="../../static/camera.png" alt>Take Picture
                    </button>-->
                    <progress max="100" :value="value" id="uploader">0%</progress>
                    <label class="custom-file-upload">
                      <input
                        class="choosen"
                        @change="uploadImage"
                        type="file"
                        value="upload"
                        id="fileButton"
                        ref="myFiles"
                      >
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="text-right">
                  <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>

                  <button
                    class="btn btn-secondary"
                    v-if="(typeUser == 'userDeliveryGuy')"
                    @click="submitUser"
                    id="submit"
                    name="submit"
                  >
                    <router-link :to="{ name: 'DeliveryService'}">Update</router-link>
                  </button>

                  <button
                    class="btn btn-secondary"
                    v-if="(typeUser == 'userPostJobs')"
                    @click="submitUser"
                    type="button"
                    id="submit"
                    name="submit"
                  >
                    <router-link :to="{ name: 'PostJobs'}">Update</router-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  props: ["id"],
  data() {
    return {
      user: [],
      documentId: null,
      userName: null,
      email: null,
      phone: null,
      street: null,
      city: null,
      county: null,
      zipCode: null,
      typeUser: null,
      typeCar: null,
      description: null,
      value: 0,
      fileButton: document.querySelector("#fileButton"),
      file: [],
      imgURL: null,
      imgRef: null
    };
  },
  methods: {
    submitUser() {
      console.log("shoud work");

      firebase
        .firestore()
        .collection("Users")
        .doc(this.documentId)
        .update({
          phone: this.phone,
          street: this.street,
          city: this.city,
          county: this.county,
          zipCode: this.zipCode,
          typeUser: this.typeUser,
          typeCar: this.typeCar,
          description: this.description,
          image: this.imgURL
        })
        .catch(err => {
          console.log(err);
        });
    },
    uploadImage(event) {
      //Get file
      this.file = this.$refs.myFiles.files[0];

      console.log(this.file);

      //Create a storage ref
      let storageRef = firebase
        .storage()
        .ref("photos/" + Date.now() + this.file.name);
      //Save the image reference, if we want to delete the picture
      this.imgRef = storageRef.fullPath;
      //upload file
      let task = storageRef.put(this.file);

      task.on("state_changed", snapshot => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.value = percentage;

        snapshot.ref.getDownloadURL().then(downloadURL => {
          //Save the image URL, if we want to view the image on the page;
          this.imgURL = downloadURL;
          console.log(this.imgURL);
          //this.$emit("clicked", this.imgURL);
        });
      });
    },
    userDetails() {
      if (this.user.phone === "null") {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    // fetch data from firestore
    firebase
      .firestore()
      .collection("Users")
      .where("user_id", "==", this.$route.params.id)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data();
          this.documentId = doc.id;
          this.userName = this.user.name;
          this.email = this.user.email;
          this.phone = this.user.phone;
          this.description = this.user.description;
          this.street = this.user.street;
          this.zipCode = this.user.zipCode;
          this.typeCar = this.user.typeCar;
          this.typeUser = this.user.typeUser;
          this.description = this.user.description;

          console.log(this.user);
        });
      });
  }
};
</script>
<style scoped>
.container {
  background: #292f3b;
  margin-top: 54px;
  width: 100vw;
  height: 100vh;
}
.account-settings .user-profile {
  margin: 0 0 1rem 0;
  padding-bottom: 1rem;
  text-align: center;
}
.account-settings .user-profile .user-avatar {
  margin: 0 0 1rem 0;
  position: relative;
}
.account-settings .user-profile .user-avatar img {
  width: 90px;
  height: 90px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
}
.account-settings .user-profile .user-avatar .icon-pic-circle {
  background-color: aliceblue;
  position: absolute;
  margin-left: 50%;
  bottom: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.account-settings .user-profile .user-avatar .icon-pic {
  /* position: absolute; */
  width: 20px;
  height: 20px;
}
.account-settings .user-profile h5.user-name {
  margin: 0 0 0.5rem 0;
}
.account-settings .user-profile h5.user-email {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
}
.account-settings .about {
  margin: 1rem 0 0 0;
  font-size: 0.8rem;
  text-align: center;
}
.card {
  background: #3a4454;
  border-radius: 5px;
  border: 0;
  color: #bcd0f7;
  width: 100%;
}
/* .big-card,
.small-card {
  padding: 0px;
} */
.card .form-control {
  border: 1px solid #596280;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 0.825rem;
  background: #292f3b;
  color: #fff;
}
.icon-size {
  width: 80px;
  padding: 5px;
}
.icon-camera {
  width: 30px;
  padding: 5px;
}
.icon-button {
  width: 80px;
  height: 80px;
  background-color: #bcd0f7;
  border-radius: 5px;
}

.driver-licence {
  margin-top: 20px;
  background-color: #bcd0f7;
  width: 300px;
  height: 200px;
  /* margin: 0 auto; */
  text-align: center;
}
.driver-licence h2,
.driver-licence p {
  font-size: 1rem;
  color: black;
}
::-webkit-file-upload-button {
  background: #fd8e1c;
  color: white;
  margin: 20px;

  /* padding: 1em; */
  /* border: solid 2px white; */
  border: none;
  border-radius: 5px;
}
.uploadImage {
  width: 90%;
}
.btn {
  background: #fd8e1c;
  color: #3a4454;
  border: none;
  border-radius: 50px;
}

a {
  text-decoration: none;
  color: #3a4454;
}
label {
  color: #95969d;
}

.choosen {
  width: 100%;
  height: 100%;
}
</style>


