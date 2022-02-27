<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/page">page</router-link>
    <router-link to="/list">list</router-link>
    <router-link to="/biaodan">biaodan</router-link>
    <router-link to="/mytitle">mytitle</router-link>
    <router-link to="/qqq">qqq</router-link>
    <hr />
    <hr />
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
  display: inline-block;
  width: 90px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 0 100px;
  background: red;
}
</style>
