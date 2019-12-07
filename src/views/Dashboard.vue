<template>
  <div class="dashboard">
    <h1>Welcome</h1>
    <p>This is the dashboard page</P>
    <button @click="m_logout">log out</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "dashboard",
  data() {
    return {};
  },
  methods: {
    m_logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      })
    }
  }
}
</script>