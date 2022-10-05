<template>
  <fragment>
    <template v-for="item in menuList">
      <el-submenu
        v-if="item.children && item.children.length > 0"
        :key="item.id"
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
        <menu-item :menuList="item.children"></menu-item>
      </el-submenu>
      <el-menu-item v-if="!item.children||item.children.length==0" :key="item.id" :index="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
