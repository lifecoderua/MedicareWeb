<template>
  <div>
    <patients-list :patients="users" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import PatientsList from "@/components/PatientsList.vue";
import DBService from "@/services/db";

@Component({
  firestore: {
    users: DBService.db.collection("users"),
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
    this.$bind(
      "boundUser",
      DBService.db.collection("users").doc("VGKJorZZH2uxEQSyo5gT")
    );

    console.log("Created happened");
  }

  get oneUser() {
    return DBService.db.collection("users").doc("VGKJorZZH2uxEQSyo5gT");
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
