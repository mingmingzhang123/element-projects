<template>
  <div>
    <!-- {{isCollapse }} -->
    <i
      class="arrow-icon"
      :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleisCollapse"
    >
    </i>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isCollapse"]),
  },
  methods: {
    ...mapMutations({
      setisCollapse: "Menu/setisCollapse",
    }),

    handleisCollapse() {
        console.log(123 );
      this.setisCollapse();
    },
  },
};
</script>
<style lang="scss" scoped>
.arrow-icon {
  background: #eaedf1;
  border: 1px solid transparent;
  font-size: 23px;
  height: 39px;
  line-height: 39px !important;
  width: 40px;
  text-align: center;
}
</style>
