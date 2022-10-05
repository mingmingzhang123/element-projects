<template>
  <div class="container">
    <div class="main-tap">
      <MenuIcon />
      <MenuTap />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {
    MenuIcon: () => import("../../components/MenuIcon.vue"),
    MenuTap: () => import("../../components/MenuTap.vue"),
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
}

.main-tap {
  display: flex;
  align-items: center;
}
.el-tabs__nav{
  margin-left: 20px;
}
</style>
