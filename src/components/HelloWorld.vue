<template>
  <div class="helloworld">
    <div class="backdrop">
      <b-carousel fade :interval="4000" indicators>
        <b-carousel-slide v-for="img in carousel_img" :key="img">
          <template v-slot:img>
            <img :src="img" class="pic" alt="" />
          </template>
        </b-carousel-slide>
        <!-- <b-carousel-slide>
          <template v-slot:img>
            <img src="https://res.cloudinary.com/sam-kay/image/upload/v1601995981/samkay%20junio/IMG_3078_l5aosz.jpg" class="pic" alt="" />
          </template>
        </b-carousel-slide> -->
      </b-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      sliding: null,
      carousel_img: [
        "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603288705/samkaystudios/carousel1_bh1idr.jpg",
        "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603288705/samkaystudios/carousel2_lutw7j.jpg",
        "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603288701/samkaystudios/carousel3_xowla3.jpg",
        "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603288706/samkaystudios/carousel4_uos5n4.jpg",
        "https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603288706/samkaystudios/carousel5_wo62sn.jpg",
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.pic {
  max-height:85.5vh;
  margin-top: 45px;
  margin:45px auto 0 auto;
}

.backdrop {
  width: 100vw;
  overflow-x: hidden;
  background: rgba(209, 207, 207, 0.349);
  text-align: center;
  margin-bottom: 70px;
}


@media(min-height:700px){
.pic {
  height: 70vh;
  }
}


@media(min-height:900px){
.pic {
  max-height: 86vh;}
}
</style>