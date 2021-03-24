<template>
  <div>
    <patients-list :patients="users" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import firebase from "firebase/app";
import "firebase/firestore";
import PatientsList from "@/components/PatientsList.vue";

const db = firebase.initializeApp({ projectId: "medicare-4ccfe" }).firestore();

@Component({
  firestore: {
    users: db.collection("users"),
  },
  components: {
    PatientsList,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  users = [];

  boundUser = null;

  created() {
    this.$bind("boundUser", db.collection("users").doc("VGKJorZZH2uxEQSyo5gT"));
    console.log("Created happened");
  }

  get oneUser() {
    return db.collection("users").doc("VGKJorZZH2uxEQSyo5gT");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
