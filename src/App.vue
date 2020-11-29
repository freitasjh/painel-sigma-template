<template>
  <router-view />
</template>

<script>
export default {
  created() {
    if (window.location.pathname === "/") {
      this.$router.push("login");
    }
  },
};
</script>
