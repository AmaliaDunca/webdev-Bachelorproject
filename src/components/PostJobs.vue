<template>
  <div class="big-card col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    <div class="card card-form h-100">
      <div class="card-body">
        <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 class="mb-3">Addres to Pick up</h6>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="Street">Street</label>
              <input
                v-model="pStreet"
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
              <input
                v-model="pCity"
                type="name"
                class="form-control"
                id="ciTy"
                placeholder="Enter City"
              >
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="cTate">County</label>
              <input
                v-model="pCounty"
                type="text"
                class="form-control"
                id="cTate"
                placeholder="Enter County"
              >
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="zIpC">Zip Code</label>
              <input
                v-model="pZipCode"
                type="text"
                class="form-control"
                id="zIpC"
                placeholder="Zip Code"
              >
            </div>
          </div>
        </div>
        <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 class="mb-3">Addres to Deliver</h6>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="Street">Street</label>
              <input
                v-model="dStreet"
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
              <input
                v-model="dCity"
                type="name"
                class="form-control"
                id="ciTy"
                placeholder="Enter City"
              >
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="sTate">County</label>
              <input
                v-model="dCounty"
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
                v-model="dZipCode"
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
            <h6 class="mb-3">Details of Parcel</h6>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Weight</label>
                </div>
                <select v-model="weight" class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="5kg">5 kg</option>
                  <option value="15kg">15 kg</option>
                  <option value="+20kg">+20 kg</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Length</label>
                </div>
                <select v-model="length" class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1 meter">1 meter</option>
                  <option value="2 meter">5 meter</option>
                  <option value="3 meter">10 meter</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 class="mb-3">Vehicle</h6>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="form-group">
              <label for="Street">Select Transportation</label>
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

        <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 class="mb-3">Extra Informaition</h6>
          </div>

          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="form-group">
              <label for="Street">Short Description</label>
              <input
                v-model="description"
                type="name"
                class="form-control"
                id="Street"
                placeholder="Enter More details   "
              >
            </div>
          </div>
        </div>
        <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="text-right">
              <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
              <button
                @click="submitJob"
                type="button"
                id="submit"
                name="submit"
                class="btn btn-primary"
              >Get a Quote</button>
              <p>{{feedback}}</p>
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
  name: "PostJobs",
  data() {
    return {
      id: null,
      pStreet: null,
      pCity: null,
      pZipCode: null,
      pCounty: null,
      dStreet: null,
      dCity: null,
      dZipCode: null,
      dCounty: null,
      weight: null,
      length: null,
      typeCar: null,
      description: null,
      feedback: null
    };
  },
  methods: {
    submitJob() {
      if (
        this.pStreet !== null &&
        this.pCity !== null &&
        this.pZipCode !== null &&
        this.dStreet !== null &&
        this.dCity !== null &&
        this.dZipCode !== null &&
        this.weight !== null &&
        this.length !== null &&
        this.typeCar !== null &&
        this.description
      ) {
        firebase
          .firestore()
          .collection("Jobs")
          .add({
            id: this.id,
            pStreet: this.pStreet,
            pCity: this.pCity,
            pZipCode: this.pZipCode,
            pCounty: this.pCounty,
            dStreet: this.dStreet,
            dCity: this.dCity,
            dZipCode: this.dZipCode,
            dCounty: this.dCounty,
            weight: this.weight,
            length: this.length,
            typeCar: this.typeCar,
            description: this.description
          });
      } else {
        this.feedback = "compleat all filds";
        console.log("error");
      }
    },
    checkFilds() {
      if (
        pStreet == null ||
        pCity == null ||
        pZipCode == null ||
        pCounty == null ||
        dStreet == null ||
        dCity == null ||
        dZipCode == null ||
        weight == null ||
        length == null ||
        typeCar == null ||
        description == null
      ) {
        // return false;
        console.log("something");
      } else {
        //return true;
        console.log("something else");
      }
    }
  }
};
</script>
<style scoped>
.icon-button {
  width: 80px;
  height: 80px;
  background-color: #bcd0f7;
  border-radius: 5px;
}
.icon-size {
  width: 80px;
  padding: 5px;
}

.btn {
  background: #fd8e1c;
  color: #3a4454;
  border: none;
  border-radius: 50px;
}

.btn-faint {
  background: #f8b571;
}

.card {
  background: #3a4454;
  border-radius: 5px;
  border: 0;
  color: #bcd0f7;
  width: 100%;
}
.big-card,
.small-card {
  padding: 0px;
  margin: 0 auto;
}

.card .form-control,
.custom-select {
  border: 1px solid #596280;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 0.825rem;
  background: #292f3b;
  color: #fff;
}

.input-group-text {
  background: #292f3b;
  border: 1px solid #596280;
  font-size: 0.825rem;
  color: #7a7f7f;
}

h6 {
  color: #95969d;
}
</style>

