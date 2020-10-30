<template>
<a v-scroll-to="{ element: '#top', duration: 900 }" v-if="scrollToTop"> <div class="scrollToTop h2 mb-0">
      <b-icon icon="file-arrow-up-fill
" style="color: #c99d63;" font-scale="1.3"></b-icon>
    </div></a>
   
</template>

<script>
export default {
  props: ["scrollToTop"],


};
</script>

<style scoped>
.scrollToTop{
  position:fixed;
  bottom:22vh;
  right:30px;
  z-index:10;
   cursor:pointer;
   transform: rotate(20deg); 
   transition:.2s ease-out;
   opacity: 0.5;
}
.scrollToTop:hover{
   transform: rotate(0deg); 
   opacity: 1;

}
</style>