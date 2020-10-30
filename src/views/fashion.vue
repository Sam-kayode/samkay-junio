<template>
  <div id="" class="text-center" >
    <div>
      <ul style="margin: 0; padding: 0" class="text-center m-2" id="gallery">
        <li
          v-for="(image, index) in media"
          :key="index"
        >
          <img
          class="card"
            :src="image.thumb"
            style=" cursor: pointer;"
            @click="openGallery(index)"
          />
        </li>
      </ul>

      <LightBox
        ref="lightbox"
        :media="media"
        :show-caption="true"
        :show-light-box="false" class="gallery"
      />
    </div>
  </div>
</template>

<script>
import LightBox from "vue-it-bigger";
import("vue-it-bigger/dist/vue-it-bigger.min.css");
export default {
    props: ["hideNav"],

  components: {
    LightBox,
  },
  data() {
    return {
      media: [
     
   
               {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/v1603875844/samkaystudios/fashion/FLA_4262_hxz035.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/v1603875844/samkaystudios/fashion/FLA_4262_hxz035.jpg",
        },
    
      ],
    };
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
  },
};
</script>

<style scoped>
.gallery{
  position:relative;
  z-index:500000000;
}

#gallery{
  list-style:none;
  -webkit-column-count:5;
  -moz-column-count:5;
  column-count:5;
  
  -webkit-column-gap:15px;
  -moz-column-gap:15px;
  column-gap:15px;
}
@media (max-width:1200px){
  #gallery{
  -webkit-column-count:5;
  -moz-column-count:5;
  column-count:5;
    
  -webkit-column-gap:15px;
  -moz-column-gap:15px;
  column-gap:15px;
}
}
@media (max-width:800px){
  #gallery{
  -webkit-column-count:3;
  -moz-column-count:3;
  column-count:3;
    
   -webkit-column-gap:15px;
  -moz-column-gap:15px;
  column-gap:15px;
}
}
@media (max-width:600px){
  #gallery{
  -webkit-column-count:3;
  -moz-column-count:3;
  column-count:3;
  -webkit-column-gap:15px;
  -moz-column-gap:15px;
  column-gap:15px;
}  
}

.card{
  width:100%;
  height:auto;
  margin: 0.1px auto 15px auto;
  box-shadow:-3px 5px 20px rgb(180, 174, 174);
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
</style>