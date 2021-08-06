<template>
  <v-app>
    <v-app-bar app>
      <v-avatar class="mr-10">
        <img src="@/assets/logo.svg">
      </v-avatar>
      <v-tabs
        class="ml-n9"
      >
        <v-tab to="/">Home</v-tab>
        <v-tab to="/bmi">BMI Calculator</v-tab>
        <v-tab to="/todo">Todo List</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
</script>

<style>
#app {
  max-width: 720px;
  margin: 60px auto 0;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
