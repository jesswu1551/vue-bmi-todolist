<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/bmi">BMI</router-link> |
      <router-link to="/todo">TodoList</router-link>
    </div>
    <router-view/>
  </v-app>
</template>

<script>
</script>

<style>
#app {
  width: 600px;
  margin: 60px auto 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1976d2;
}
</style>
