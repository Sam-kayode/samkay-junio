<template>
  <div class="pt-5">
 <h1 class="heading text-center">
   Gallery
 </h1>

   <ul class="text-center p-0">
     
            <router-link to="/Gallery/all" class="px-2">All</router-link>
            <router-link to="/Gallery/fashion" class="px-2">Fashion</router-link>
             <router-link to="/Gallery/Beauty" class="px-2">Beauty</router-link>
              <router-link to="/Gallery/potrait" class="px-2">Potrait</router-link>

   </ul>     
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
     
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
</style>