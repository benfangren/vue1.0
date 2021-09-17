<template>
  <div class="">
    <div>我是表单页</div>
    <ul>
      <li v-for="item in data" :key="item.pid">
        我是aixo发送回来的数据{{ item.pid }}
      </li>
    </ul>

    <p>父子组件传参练习</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async getgooss() {
      const { data } = await this.axios.get(
        `http://jx.xuzhixiang.top/ap/api/productlist.php`
      );

      console.log(data.data);
      this.data = data.data;
    },
  },
  created() {
    this.getgooss();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped></style>
