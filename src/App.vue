<template>
  <div id="app">
    <screenSplash class="splash" :isLoading="isLoading" />
    <div v-if="!isLoading1">
      <navbar class="nav-bar" :isSwipe="isSwipe" />
      <router-view />
    </div>
  </div>
</template>




<script>
import navbar from "@/components/navbar.vue";
import screenSplash from "@/components/screenSplash.vue";

export default {
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
    setTimeout(() => {
      this.isLoading1 = false;
    }, 6300);
    window.addEventListener("scroll", this.swap);
  },
  components: {
    navbar,
    screenSplash,
  },
  data() {
    return { isLoading: true, isLoading1: true, isSwipe: true };
  },

  methods: {
    swap() {
      let pos = window.pageYOffset || document.documentElement.scrollTop;
      if (pos > 90) {
        this.isSwipe =false;
      } else {
        this.isSwipe= true;
      }
    },
  },
};
</script>
<style>
*,
*::before,
*::afer {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
