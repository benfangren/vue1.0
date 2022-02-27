<template>
  <div class="a1212" v-show="flag">
    <div>{{ text }}</div>
    <div>{{ text2 }}</div>
    <input type="text" v-model="name" />
    <input type="text" v-model="number" />
    <button @click="btn">保存</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["text", "text2", "flag"],
  data() {
    return {
      name: "",
      number: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    btn() {
      console.log(this.name, this.number);
      this.$emit("btn2", this.name, this.number);
      this.flag = false;
    },
    xianshi() {
      this.flag = true;
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
div div {
  width: 200px;
  height: 100px;
  border: 1px solid red;
}
.a1212 {
  width: 600px;
  height: 800px;
  background: rgb(197, 175, 175);
  /* display: none; */
  position: absolute;
  top: 500px;
  left: 500px;
  z-index: 100;
}
</style>
