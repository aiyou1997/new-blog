<template>
  <div id="app">
    <homepage />
  </div>
</template>

<script>
import homepage from "./views/business/homepage/index.vue";
export default {
  name: "app",
  components: {
    homepage,
  },
};
</script>

<style>
#app {
  color: royalblue;
}
</style>
