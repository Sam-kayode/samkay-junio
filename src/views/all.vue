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
          thumb:
            "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/IMG_3085_tjpkba.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/IMG_3085_tjpkba.jpg",
        },
        {
          thumb:
            "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/FLA_4262_wqbven.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/FLA_4262_wqbven.jpg",
        },
        {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low//samkaystudios/potrait/LJS_2023_gb4pyg.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/LJS_2023_gb4pyg.jpg"},
        {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low//samkaystudios/potrait/IMG_8430_vbc5tb.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/IMG_8430_vbc5tb.jpg",
        },
        {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/LJS_0876_kkcd4c.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/LJS_0876_kkcd4c.jpg",
        },
        {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/IMG_3152_okafhv.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/IMG_3152_okafhv.jpg",
          
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/IMG_3140_rceinh.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/IMG_3140_rceinh.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/DSC_5190_bgjppo.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/DSC_5190_bgjppo.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/DSC_5840_ccqsft.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/DSC_5840_ccqsft.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/DSC_5829_po9ng1.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/DSC_5829_po9ng1.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/potrait/LJS_2455_xhdwho.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/potrait/LJS_2455_xhdwho.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/fashion/FLA_4262_hxz035.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/fashion/FLA_4262_hxz035.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/beauty/LJS_2217_sfpejs.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/beauty/LJS_2217_sfpejs.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/beauty/IMG_3061_tsky8j.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/beauty/IMG_3061_tsky8j.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/beauty/DSC_7085_jioyv8.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/beauty/DSC_7085_jioyv8.jpg",
        },
         {
          thumb: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/samkaystudios/beauty/lci04mdlfb8euxodr0re.jpg",
          src: "https://res.cloudinary.com/samkay-studios/image/upload/q_auto/samkaystudios/beauty/lci04mdlfb8euxodr0re.jpg",
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
  box-shadow:-3px 5px 15px rgb(180, 174, 174);
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
</style>