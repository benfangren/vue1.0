<template>
  <div class="ds">
    list
    <Btn edit="1212" :msg="abc" :arr="arr">
      <h1>我是标签插槽</h1>
    </Btn>
    <Btn edit="1212" :msg="abc" :arr="arr">
      <h1>我是标签插槽</h1>
    </Btn>
    <Btn edit="1212" :msg="abc" :arr="arr">
      <h1>我是标签插槽11</h1>
    </Btn>
  </div>
</template>

<script>
// import axios from "axios";
import Btn from "./components/Page.vue";
export default {
  components: { Btn },
  data() {
    return {
      abc: "我是list页面",
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 988],
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
<style scoped>
.ds {
  display: flex;
  justify-content: space-between;
}
</style>
