<template>
  <div class="my-list">
    <ul :v-for="item in list">
      <li></li>
    </ul>
    <button>添加</button>
  </div>
</template>

<script>
export default {
  name: "my-list",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
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
