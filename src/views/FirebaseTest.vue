<template>
  <div class="firebase-test">
    <h1>Firebase Testing</h1>
    <ul class="status-list">
      <li>Firebase Credentials Found: <span class="fail" :class="{ pass: hasSecrets }">{{ hasSecrets }}</span></li>
      <li>Has Firebase Access: <span class="fail" :class="{ pass: hasAccess }">{{ hasAccess }}</span></li>
      <li>Writes to database: <span class="fail" :class="{ pass: hasRead }">{{ hasRead }}</span></li>
      <li>Reads from database: <span class="fail" :class="{ pass: hasWrite }">{{ hasWrite }}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "firebase-testing",
  data() {
    return {
      hasSecrets: false,
      hasRead: false,
      hasWrite: false,
      hasAccess: false,
    }
  }
};
</script>

<style lang="scss">
.status-list {
  text-align: left;
  padding: 20px;
  li {
    font-weight: 600;
    padding: 10px;
    list-style: none;
    background-color: lightgrey;
  }
  li:nth-child(2n) {
    background-color: lightblue;
  }
}
.fail {
  color: red;
  font-weight: bold;
}
.pass {
  color: green;
}
</style>
