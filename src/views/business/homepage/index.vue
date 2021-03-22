<template>
  <div class="homepage" @click="bindClick">
    homepage
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {};
  },
  methods: {
    bindClick() {
      console.log("clicked");
    },
  },
};
</script>

<style></style>
