<template>
  <div class="">
    <ul>
      <li v-for="item in data" :key="item.pid">
        我是aixo发送回来的数据{{ item.pid }}
      </li>
    </ul>

    <p>父子组件传参练习</p>
  </div>
</template>

<script>
import axios from "axios";
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
      const { data } = await axios.get(
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
