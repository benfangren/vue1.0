<template>
  <div class="">
    <form action="">
      <div>父子组件传参</div>
      <input type="text" v-model="password" />
      <input type="text" v-model="name" />
      <br />

      <hr />
      <h1>上传</h1>
      <input type="file" />
      <button @click="btn">发送参数</button>
      <input type="submit" name="上传" />
    </form>
    <Data
      :text="password"
      :text2="name"
      @btn2="name3"
      ref="refs"
      :flag="flag"
    ></Data>
    <div>1213</div>
    <div class="box11212">
      <div class="box">
        {{ name1 }}
      </div>
      <div class="box">
        {{ name2 }}
      </div>
    </div>
  </div>
</template>

<script>
import Data from "./components/data.vue";
export default {
  components: { Data },
  data() {
    return {
      name1: "",
      name2: "",
      password: "",
      name: "",
      flag: false,
    };
  },
  computed: {},
  watch: {},

  methods: {
    btn() {
      console.log(this.password, this.name);
      //   this.$refs.refs.xianshi();
      this.flag = true;
      console.log(this.flag);
    },
    name3(val, val2) {
      console.log(val, val2);
      this.name1 = val;
      this.name2 = val2;
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
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.box11212 {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>
