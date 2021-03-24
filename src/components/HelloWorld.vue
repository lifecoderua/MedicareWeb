<template>
  <div>
    <h1>Now I am your master</h1>
    <h3>Users</h3>
    <p>{{ users }}</p>
    <h3>Single user</h3>
    <p>{{ oneUser }}</p>
    <h3>BOUND user</h3>
    <p>{{ boundUser }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.initializeApp({ projectId: "medicare-4ccfe" }).firestore();

@Component({
  firestore: {
    users: db.collection("users"),
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
