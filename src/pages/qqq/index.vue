<template>
  <div class="">
    <div>我的qq页</div>
    今天周日，明天周一，好好学习git和git可视化工具。
    明天的天气非常好，是下雨天，但是我很喜欢。。哈啊哈哈哈哈哈123
    匿名插槽，具名插槽。。。。。
    <hr />
    <div>表单</div>
    <form action="">
      用户名：<input type="text" disabled /> 密码：<input type="password" />
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      type: "",
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {
    this.type = this.$route.query.type;
    console.log(this.type, "this.type");
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped></style>
