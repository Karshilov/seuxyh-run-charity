<template>
  <background style="text-align: center;">
    <img v-if="this.$device.isDesktop===false" src="../assets/cheers.png" height="80px" style="position: relative; z-index: -30;"/>
    <img
      width="90%"
      :src="imgRoute"
      :onerror="noData()"
    />
  </background>
</template>

<script>
import Background from "../components/Background";
export default {
  components: {
    background: Background
  },
  data() {
    return {
      imgRoute: "",
    };
  },
  created() {
      this.getImgRoute();
  },
  methods: {
    getImgRoute() {
        this.imgRoute = this.$route.query.imgRoute;
    },
    noData() {
      console.log(this.imgRoute);
    }
  }
};
</script>

<style lang="less" scoped>
</style>