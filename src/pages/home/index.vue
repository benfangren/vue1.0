<template>
  <div class="">
    <template>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li
          v-for="(item, index) in count"
          :key="index"
          class="infinite-list-item"
        >
          {{ index }}---------------------------{{ item }}
        </li>
      </ul>
    </template>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          123
          <template>
            <div>
              <el-table
                :data="tableData"
                height="250"
                style="width: 100%"
                border
                :row-class-name="tableRowClassName"
              >
                <el-table-column prop="date" label="日期" width="180" sortable>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180" sortable>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180" sortable>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="180">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleClick(scope)"
                      type="text"
                      size="small"
                      >查看</el-button
                    >
                    <el-button
                      type="text"
                      size="small"
                      @click="editleClick(scope.row)"
                      >编辑</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </template></el-main
        >
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      count: 0,
      list: ["杨利强", "孟依兰"],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    load() {
      this.count += 2;
    },
    handleClick(row) {
      console.log("查看", row);
      this.$router.push({
        path: "../qqq",
        query: { type: "edit" },
      });
    },
    editleClick(row) {
      console.log("编辑", row);
      this.$router.push({
        path: "../qqq",
        query: { type: "look" },
      });
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
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  // text-align: center;
  // line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  // text-align: center;
  // line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
  // line-height: 500px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.infinite-list {
  height: 100px;
}
</style>
