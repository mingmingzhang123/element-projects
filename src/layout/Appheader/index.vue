<template>
  <div class="Appheader">
    <div class="header-left">Vue、Element UI权限管理系统开发实战</div>
    <div class="header-right">
      <img
        data-v-e58f61f0=""
        src="data:image/jpeg;base64,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"
        class="userimg"
      />
      <div class="box-right">
        <div class="header-right-text">欢迎您，张明</div>
        <div class="header-right-text-size">{{date}}  {{week}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      date: null,
      week: null,
    };
  },
  created () {
    // 刚加载页面进行调用
   this.initTime()
  },
  methods: {
    initTime() {
      this.getTimeAadWeek();
      setInterval(() => {
        this.getTimeAadWeek();
      }, 1000);
    },
    getTimeAadWeek() {
      // 将返回的一、二换成星期一星期二
      const week = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      // 定义日期规范
      this.date = dayjs().format("YYYY.MM.DD HH:mm:ss");
      // 转成星期几
      this.week = week[dayjs().day()];
    },
  },
};
</script>
<style lang="scss" scoped>
.Appheader {
  height: 60px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    .userimg {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    .header-right-text {
      margin: 0 10px;
      font-weight: 600;
    }
    .header-right-text-size {
      font-size: 16px;
    }
  }
}
</style>
