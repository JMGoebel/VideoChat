import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { firebaseConfig } from "@/secure/firebase.js";
import vuetify from "./plugins/vuetify";

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

let app = null;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
