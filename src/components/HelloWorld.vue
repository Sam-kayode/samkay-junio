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
        "https://res.cloudinary.com/sam-kay/image/upload/v1601995981/samkay%20junio/DSC_5190_wfddyd.jpg",
        "https://res.cloudinary.com/sam-kay/image/upload/v1601995981/samkay%20junio/DSC_7085_ojc0vk.jpg",
        "https://res.cloudinary.com/sam-kay/image/upload/v1601995981/samkay%20junio/IMG_3078_l5aosz.jpg",
        "https://res.cloudinary.com/sam-kay/image/upload/v1601995981/samkay%20junio/IMG_3061_xtwcsq.jpg",
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.pic {
  height: 80vh;
  margin-top: 45px;
}

.backdrop {
  width: 100vw;
  overflow-x: hidden;
  background: rgba(209, 207, 207, 0.349);
  text-align: center;
  margin-bottom: 10vh;
}
</style>