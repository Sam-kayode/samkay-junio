<template>
  <div id="app">
    <screenSplash class="splash"/>
        <navbar class="nav-bar"/>
    <router-view/>
  </div>
</template>




<script> 
 import navbar from '@/components/navbar.vue'
 import screenSplash from '@/components/screenSplash.vue'

export default {
 components: {
    navbar,screenSplash
  }
}
</script>
<style>


*,*::before,*::afer{
box-sizing: border-box;
}

body{
  margin:0;
  padding:0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 padding:0px;
}




#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
