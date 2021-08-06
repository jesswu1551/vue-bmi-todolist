<template>
  <div class="bmi">
    <BMICalculator/>
  </div>
</template>

<script>
import BMICalculator from '@/components/BMICalculator.vue'

export default {
  name: 'BMI',
  components: {
    BMICalculator
  }
}
</script>
