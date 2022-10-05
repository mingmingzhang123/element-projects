<template>
  <el-menu
    :default-active="defaultactive"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    router
    unique-opened
  >
    <menu-item :menuList="menuList"></menu-item>
  </el-menu>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  components: {
    MenuItem: () => import("./MenuItem.vue"),
  },
  props: {
    defaultactive: {
      type: String,
      default: () => "/departmentList",
    },
  },
  computed: {
    // 将vuex中的getters解构出来得到里面的状态和数据
    ...mapGetters(["isCollapse", "menuList"]),
  },
  watch: {
    $route: {
      handler(menu) {
        console.log(menu);
        const obj = {
          title: menu.meta.title,
          name: menu.name,
          path: menu.path
        };
        this.$store.commit("Tags/addeditableTabs", obj);
      },
      // 深度监听
      deep: true,
      // 刚进入页面就监听
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
