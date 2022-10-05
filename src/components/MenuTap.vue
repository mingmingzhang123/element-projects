<template>
  <!-- 标签页 -->
  <el-tabs
    v-model="editableTabsValue"
    closable
    type="card"
    @edit="handleTabsEdit"
    @tab-click="handleClick"
  >
    <el-tab-pane
      :key="item.name"
      v-for="item in editableTabs"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    // 获取标签选中
    editableTabsValue: {
      get() {
        return this.$store.getters.editableTabsValue;
      },
      set(val) {
        this.$store.commit("Tags/EditTabs", val);
      },
    },
    // 获取数据源
    editableTabs: {
      get() {
        return this.$store.getters.editableTabs;
      },
      set(val) {
        this.$store.commit("Tags/closeTags", val);
      },
    },
  },
  methods: {
    // 点击标签然后跳转到对应的页面
    handleClick() {
      this.$router.push({ name: this.editableTabsValue });
    },
    // 删除标签
    handleTabsEdit(targetName, action) {
      // 判断删除页面是不是home如果是就直接返回出去不在继续执行
      if (targetName == "home") return;
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        console.log("activeName", activeName);
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);

        this.$store.commit("Tags/EditTabs", activeName);
        this.$router.push({ name: activeName });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.el-tabs.el-tabs--card.el-tabs--top {
  width: 100%;
}
</style>
