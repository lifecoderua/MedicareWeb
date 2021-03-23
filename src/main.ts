import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import { firestorePlugin } from 'vuefire'

firebase.firestore().enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.log('Multiple application tabs open. Firestore persistence not enabled.');
    } else if (err.code == 'unimplemented') {
      console.error('Firestore Persistence is not supported.');
    }
  });


Vue.config.productionTip = false;
Vue.use(firestorePlugin);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


