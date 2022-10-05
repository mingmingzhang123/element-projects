<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("Tags/getTags");
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>
