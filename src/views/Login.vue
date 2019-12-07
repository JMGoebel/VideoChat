<template>
  <div class="login">
    <h3>Temp Login</h3>
    <input type="text" placeholder="User Name" v-model="email" />
    <br />
    <input type="password" placeholder="Password" v-model="password" />
    <br />
    <button class="button" @click="m_loginWithEmailAndPassword">Go</button>
    <p>
      If you don't yet have an account create on
      <router-link to="/sign-up">HERE</router-link>!
    </p>
  </div>
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
          user => {
            alert(`Hello user ${user}`);
            this.authorisedUser = user;
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

<style lang="scss">
input {
  margin: 5px;
  padding: 5px;
}
button {
  background: rgb(31, 21, 210);
  background: linear-gradient(
    319deg,
    rgba(31, 21, 210, 1) 0%,
    rgba(49, 49, 153, 1) 19%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 5px 40px;
  margin: 20px;
  border-radius: 20px;
  border: 0;
  box-shadow: 2px 2px black;
  &:hover {
    background: rgb(31, 21, 210);
    background: linear-gradient(
      135deg,
      rgba(31, 21, 210, 1) 0%,
      rgba(49, 49, 153, 1) 19%,
      rgba(0, 212, 255, 1) 100%
    );
  }
}
</style>
