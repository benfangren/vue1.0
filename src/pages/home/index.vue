<template>
  <div class="">
    <List :list="list"></List>
  </div>
</template>

<script>
import List from "./componted/list.vue";
export default {
  components: { List },

  data() {
    return {
      list: ["杨利强", "梦依兰"],
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
