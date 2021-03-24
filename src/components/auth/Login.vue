<template>
  <div class="login continer">
    <div class="card">
      <h5 class="card-header">
        <strong>Login</strong>
      </h5>

      <!--Card content-->
      <div class="card-body">
        <!-- Form -->
        <form @submit.prevent="login" class="text-center">
          <!-- Email -->
          <div class="user-box">
            <img :src="require('@/assets/user.png')" class="img-user">
            <input v-model="email" class="email-in" type="text" id="LoginFormEmail" required>
            <label for="LoginFormEmail">E-mail</label>
          </div>
          <!-- Password -->
          <div class="user-box">
            <img :src="require('@/assets/padlock.png')" class="img-user">
            <input v-model="password" type="password" id="LoginFormPassword" required>
            <label for="LoginFormPassword">Password</label>
          </div>
          <p v-if="feedback">{{feedback}}</p>
          <div class="d-flex justify-content-around">
            <div>
              <!-- Forgot password -->
              <p class="forgot-pasw">Forgot password?</p>
            </div>
          </div>

          <!-- Login button -->
          <button
            class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
            type="submit"
          >LOGIN</button>

          <!-- Register -->
          <p>
            Not a member?
            <router-link :to="{ name: 'Signup'}">Signup</router-link>
          </p>

          <!-- Social login -->
          <p>or sign in with:</p>
          <a type="button" class="btn-floating btn-tw btn-sm">
            <i class="fa fa-facebook"></i>
          </a>

          <a type="button" class="btn-floating btn-tw btn-sm">
            <i class="fa fa-twitter"></i>
          </a>

          <a type="button" class="btn-floating btn-git btn-sm">
            <i class="fa fa-github"></i>
          </a>
        </form>
        <!-- Form -->
      </div>
    </div>
    <!-- Material form login -->
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user.uid);
            this.$router.push({
              name: "Profile",
              params: { id: cred.user.uid }
            });
          })
          .catch(err => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "please fill in both fields";
      }
    }
  }
};
</script>
<style scoped>
.login {
  height: 100vh;
  background-color: #3a4454;
}
.card {
  width: 50%;
  margin: 0 auto;
  padding-top: 2rem;
  background-color: transparent;
  color: #95969d;
  border: none;
}
input {
  width: 100%;
  padding: 10px 10px;
  font-size: 16px;
  color: white;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #95969d;
  border-left: 1px solid #95969d;
  outline: none;
  background: transparent;
  border-radius: 0%;
}
label {
  position: absolute;
  top: 0;
  left: 10px;
  padding: 10px 0;
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.user-box {
  position: relative;
  margin-bottom: 2rem;
}
.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -30px;
  left: 10px;
  color: #95969d;
  font-size: 12px;
}

input:focus {
  box-shadow: none !important;

  /*  color for border when input focuse
  border-color: black; */
}
.forgot-pasw {
  margin-top: 3rem;
}
.btn-outline-info {
  color: #3a4454;
  background-color: #fd8e1c;
  border: none;
}
.btn-rounded {
  border-radius: 2rem;
}
.login {
  color: #fd8e1c;
}
.img-user {
  width: 50px;
  position: absolute;
  left: -50px;
  bottom: 30px;
  border-bottom: 1px solid #95969d;
  padding: 0px 0.5rem 0.5rem 1rem;
}
.email-icon {
  color: #fd8e1c;
  font-size: 1.5rem;
}
</style>


