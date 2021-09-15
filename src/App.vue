<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/page">page</router-link>
    <router-link to="/list">list</router-link>
    <router-link to="/biaodan">biaodan</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
a {
  margin: 100px;
}
</style>
