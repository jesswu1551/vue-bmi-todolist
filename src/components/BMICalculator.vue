<template>
  <div>
    <v-container class="mb-10">
      <v-row>
        <v-col>
          <v-text-field
            outlined
            label="Weight /kg"
            placeholder="Enter your weight"
            v-model="formatWeight"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            outlined
            label="Height /cm"
            placeholder="Enter your height"
            v-model="formatHeight"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <p v-if="bmi.result == 'error'">
            <span class="caption text-center grey--text">{{ bmi.msg }}</span>
          </p>
          <p v-else>
            Your BMI: <span class="font-weight-bold" style="font-size: 40px;">{{ bmi }}</span>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BMICalculator',
  data () {
    return {
      weight: 0,
      height: 0,
    }
  },
  computed: {
    formatWeight: {
      get() {
        return this.weight || '';
      },
      set(value) {
        this.weight = value;
      }
    },
    formatHeight: {
      get() {
        return this.height || '';
      },
      set(value) {
        this.height = value;
      }
    },
    bmi() {
      let weight = Number(this.weight);
      let height = Number(this.height);
      let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      if (this.weight == '' || this.height == '') {
        return { result: 'error', msg: 'Please enter weight and height.'}
      }
      if (isNaN(bmi)) {
        return { result: 'error', msg: 'Please enter number!'}
      }
      return bmi;
    },
  },
}
</script>

<style>
</style>
