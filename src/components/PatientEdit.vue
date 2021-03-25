<template>
  <div class="patient-edit">
    <h2>I am a patient edit</h2>
    <p><input type="text" v-model="newPatientData.first" /></p>
    <p><input type="text" v-model="newPatientData.last" /></p>
    <p><input type="text" v-model="newPatientData.born" /></p>

    <button @click="onSave()">Save</button>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class PatientsList extends Vue {
  @Prop() private patient!: any;

  newPatientData = {};

  created() {
    this.newPatientData = {
      id: this.patient.id,
      ...this.patient,
    };
  }

  onSave() {
    console.log("Patient data update", this.newPatientData);
    const newPatientData = this.newPatientData;
    // this.$bind('user', users.doc(newPatientData.id));
    // this.$firestoreRefs.user.set(newPatientData);
    // debugger;
    // this.$firestoreRefs.newPatientData.set(newPatientData);
  }
}
</script>
