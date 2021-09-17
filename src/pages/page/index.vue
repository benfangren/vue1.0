<template>
  <div class="">
    <div>我的页面</div>
    <h1>封装组件练习</h1>
    <div class="box">
      <p>{{ msg }}</p>
      <button>{{ edit }}</button>
      <button>{{ ccc }}</button>
      <ul>
        <li v-for="item in arr" :key="item">{{ item }}</li>
      </ul>
      <div>
        <slot></slot>
      </div>
      <div>上面的是插槽，我是子元素。</div>
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
<style lang="less" scoped></style>
