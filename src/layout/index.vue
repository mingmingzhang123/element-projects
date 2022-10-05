<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-container>
      <!-- :width="isCollapse?'200px':'65px'" -->
      <el-aside width="auto">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <el-main>
          <app-main></app-main>
        </el-main>
        <el-footer>
          <app-footer></app-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import AppAside from "./AppAside";
import AppHeader from "./Appheader";
import AppMain from "./Appmain";
import AppFooter from "./AppFooter";
import { mapGetters } from "vuex";
export default {
  components: {
    AppHeader,
    AppAside,
    AppMain,
    AppFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isCollapse"]),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #167bd8;
}

.el-aside {
  background-color: #fff;
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
}

.el-main {
  background-color: #fff;
  padding: 0;
}

.el-footer {
  background-color: #fff;
  height: 50px;
  border-top: 1px solid rgb(230, 230, 230);
  font-size: 14px;
}
</style>
