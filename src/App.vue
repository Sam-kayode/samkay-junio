<template>
  <div id="app">
    <screenSplash class="splash" :isLoading="isLoading" />
    <div v-if="!isLoading1">
      <navbar class="nav-bar" :isSwipe="isSwipe" />
      <router-view :isSwipe="isSwipe"/>
      <ScrollToTop :scrollToTop="scroll" />
      <Foot />
    </div>
  </div>
</template>




<script>
import navbar from "@/components/navbar.vue";
import screenSplash from "@/components/screenSplash.vue";
import Foot from "@/components/footer.vue";
import ScrollToTop from "@/components/scrollToTop.vue";

export default {
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
    setTimeout(() => {
      this.isLoading1 = false;
    }, 6300);
    window.addEventListener("scroll", () => {
      this.swap();
      this.scrollToTop();
    });
  },
  components: {
    navbar,
    screenSplash,
    Foot,
    ScrollToTop,
  },
  data() {
    return { isLoading: true, isLoading1: true, isSwipe: true, scroll: false };
  },

  methods: {
    /* this is a function to affect the display state of the samkay logo on the navbar and the logo on the pictures */
    swap() {
      let pos = window.pageYOffset || document.documentElement.scrollTop;
      if (pos > 10) {
        this.isSwipe = false;
      } else {
        this.isSwipe = true;
      }
    },
    /* this is a function in that communicates to the prop in the scroll to top component to affect the visibility at some point in the window  */
    scrollToTop() {
      let position = window.pageYOffset || document.documentElement.scrollTop;
      if (position > 100) {
        this.scroll = true;
      } else {
        this.scroll = false;
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
  scroll-behavior: smooth;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
