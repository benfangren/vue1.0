<template>
  <div class="box">
    <h1>封装组件练习</h1>
    <div>
      <p>{{ msg }}</p>
      <button>{{ edit }}</button>
      <button>{{ ccc }}</button>
      <ul>
        <li v-for="item in arr" :key="item">{{ item }}</li>
      </ul>
      <div>
        <slot></slot>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["msg", "edit", "arr"],

  data() {
    return {
      ccc: "我是ccc",
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
