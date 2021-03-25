<template>
  <div class="patients-list">
    <h2>I am a patients list</h2>
    <PatientEdit :patient="editPatient" v-if="editPatient" />
    <table>
      <tr v-for="patient in patients" :key="patient.id">
        <td>{{ patient.first }} {{ patient.last }}</td>
        <td>{{ patient.born }}</td>
        <td><button @click="onEdit(patient)">Edit</button></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import PatientEdit from "@/components/PatientEdit.vue";

@Component({
  components: { PatientEdit },
})
export default class PatientsList extends Vue {
  @Prop() private patients!: any;

  editPatient = null;

  onEdit(patient: any) {
    this.editPatient = patient;
  }
}
</script>
