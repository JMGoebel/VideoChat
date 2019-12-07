<template>
  <div class="sign-up">
    <h3>Sign Up For Chat</h3>
    <input type="text" placeholder="User Name"><br>
    <input type="password" placeholder="Password"><br>
    <button class="button">Go</button>
    <p>Already has an account login<router-link to="/login">HERE</router-link>!</p>
  </div>
</template>

<script>
export default {
  name: "sign-up",
  data() {
    return {}
  },
  methods: {}
};
</script>

<style lang="scss">
input {
  margin: 5px;
  padding: 5px;
}
button {
  background: rgb(31,21,210);
  background: linear-gradient(319deg, rgba(31,21,210,1) 0%, rgba(49,49,153,1) 19%, rgba(0,212,255,1) 100%);
  padding: 5px 40px;
  margin: 20px;
  border-radius: 20px;
  border: 0;
  box-shadow: 2px 2px black;
  &:hover {
    background: rgb(31,21,210);
    background: linear-gradient(135deg, rgba(31,21,210,1) 0%, rgba(49,49,153,1) 19%, rgba(0,212,255,1) 100%);
  }
}
</style>
