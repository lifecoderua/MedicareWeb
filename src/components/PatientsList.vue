<template>
  <div class="patients-list">
    <h2>I am a patients list</h2>
    <table>
      <tr v-for="patient in patients" :key="patient.id">
        <td>{{ patient.first }} {{ patient.last }}</td>
        <td>{{ patient.born }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class PatientsList extends Vue {
  @Prop() private patients!: any;
}
</script>
