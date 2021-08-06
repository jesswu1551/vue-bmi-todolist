<template>
  <div>
    <v-container class="mb-10">
      <v-row class="align-center text-center">
        <v-col>
          <v-text-field
            label="Weight"
            placeholder="Enter your weight"
            v-model="weight"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Height"
            placeholder="Enter your height"
            v-model="height"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-btn
          tile
          color="primary"
          @click="calculate()"
          >
            Calculate
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-simple-table
      fixed-header
      height="300px"
      v-show="records.length > 0"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">BMI</th>
            <th class="text-center">Weight/kg</th>
            <th class="text-center">Height/cm</th>
            <th class="text-center">Date</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr
          v-for="item in records"
          :key="item.id"
          >
            <td>{{ item.bmi }}</td>
            <td>{{ item.weight }}</td>
            <td>{{ item.height }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'BMICalculator',
  data () {
    return {
      id: 0,
      weight: 0,
      height: 0,
      records: [],
    }
  },
  methods: {
    calculate: function () {
      let weight = Number(this.weight);
      let height = Number(this.height);
      let bmi = (weight / ((height / 100) ** 2)).toFixed(1);

      if (this.weight == '' || this.height == '' || isNaN(bmi)) {
        alert('Please enter weight and height.');
        return;
      }

      this.id += 1;
      this.records.push({
        bmi: bmi,
        weight: weight,
        height: height,
        date: new Date().toLocaleString()
      });
      this.weight = 0;
      this.height = 0;
    },
  },
}
</script>

<style>

</style>