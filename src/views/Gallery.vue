<template>
  <div class="pt-5 " id="top">
     <transition name="fade">
      <div class="logo2" v-if="isSwipe">
        <img src="../assets/samkay.png" alt="" /></div
    ></transition>
 <h1 class="heading text-center pt-4">
   Gallery
 </h1>

   <ul class="text-center p-0">
     
            <router-link to="/Gallery/all" class="px-2">All</router-link>
            <router-link to="/Gallery/fashion" class="px-2">Fashion</router-link>
             <router-link to="/Gallery/Beauty" class="px-2">Beauty</router-link>
              <router-link to="/Gallery/potrait" class="px-2">Potrait</router-link>

   </ul>     
    <router-view/>

  </div>
</template>

<script>
  export default {
       props: ["isSwipe"],

  }
</script>

<style scoped>
h1{
  background:url("https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603464926/samkaystudios/ll_zeqgtn.jpg");
  background-size:contain;
  font-size:85px;
background-clip: text;
-webkit-background-clip: text;
color:transparent;
font-weight:Bolder;

}
.logo2 {
  position: fixed;
  z-index: 1000;
  top: 47px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.logo2 img {
  width: 100px;
}
</style>