<template>
  <v-container>
    <div class="login">
      <h3>Welcom Back!</h3>
      <input type="text" placeholder="User Name" v-model="email" />
      <br />
      <input type="password" placeholder="Password" v-model="password" />
      <br />
      <button class="button" @click="m_loginWithEmailAndPassword">Go</button>
    </div>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      authorisedUser: ""
    };
  },
  methods: {
    m_loginWithEmailAndPassword() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          // Success
          () => {
            this.$router.replace("/dashboard");
          },
          // Failer
          err => {
            alert(`oops! ${err}`);
          }
        );
    }
  }
};
</script>
