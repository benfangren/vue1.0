<template>
  <div id="app">
    <HelloWorld />
    <router-link to="/">home</router-link>
    <router-link to="/page">page</router-link>
    <router-link to="/list">list</router-link>
    <router-link to="/biaodan">biaodan</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
