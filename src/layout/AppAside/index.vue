<template>
  <div>
    <menu-bar :defaultactive="defaultactive"></menu-bar>
    
  </div>
</template>
<script>
import { getaside } from "../../api/aside";

export default {
  components: {
    MenuBar: () => import("../../components/MenuBar.vue"),
  },
  data() {
    return {
     
    };
  },
  created() {
    // this.getPermission();
  },
  methods: {
    // 获取侧边栏数据
    // async getPermission() {
    //   try {
    //     const response = await getaside();
    //     console.log(response, "response111");
    //     this.PermissionList = response.data.data.menuList;
    //     console.log(this.PermissionList, "this.PermissionList");
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // },
  },
  computed: {
    defaultactive() {
      return this.$route.meta.path;
    },
  },
};
</script>
