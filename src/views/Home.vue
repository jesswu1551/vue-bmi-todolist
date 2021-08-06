<template>
  <div class="home">
    <h1>Vue Parctice</h1>
    <v-list>
      <v-list-item>
        <v-list-item-content>
        <v-list-item-title>Parctice 01 - BMI</v-list-item-title>
        <v-list-item-subtitle>BMI 計算</v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
        <v-list-item-title>Parctice 02 - BMI (續)</v-list-item-title>
        <v-list-item-subtitle>事件觸發改為 computed，並加入防呆、錯誤提示訊息</v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
        <v-list-item-title>Parctice 03 - ToDo List</v-list-item-title>
        <v-list-item-subtitle>CRUD 功能</v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
