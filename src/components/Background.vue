<template>
  <div>
    <div class="app-bg">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "background",
};
</script>

<style lang="less" scoped>
.app-bg {
  width: 100%;
  height: 100%;
  z-index: -100;
  position: fixed;
  .bg-color {
    width: 100%;
    position: fixed;
    z-index: -97;
    opacity: 0.8;
    left: 0%;
    animation: greenMoveIn 2s;
  }
  .bg-img {
    width: 100%;
    position: fixed;
    z-index: -96;
    opacity: 0.8;
    animation: fadeIn 2s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
  @keyframes greenMoveIn {
      from {
          left: 100%;
      }
      to {
          left: 0%;
      }
  }
}
</style>