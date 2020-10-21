<template>
  <div class="home" id="top">
    <transition name="fade">
      <div class="logo2" v-if="isSwipe">
        <img src="../assets/samkay.png" alt="" /></div
    ></transition>
    <HelloWorld />
    <scrollDown />
    <b-container id="content"
      ><div class="content px-2 pt-5">
        <h3>Welcome to Samkay Photography website!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo
          voluptas, molestiae officia laboriosam obcaecati rem modi at
          provident, dignissimos pariatur maiores officiis temporibus possimus,
          explicabo atque perferendis neque fugiat?
        </p>
      </div>
    </b-container>
    <div class="logo1">
      <img src="../assets/samkay.png" alt="" />
    </div>
    <b-container>
      <b-row class="py-5 text-center">
        <b-col class="cardi">
          <div class="icons text-center p-3">
            <b-icon icon="camera2" font-scale="3" rotate="20"></b-icon>
          </div>
          <div class="icon-desc">
            <h4 class="text-center p-1">CREATIVITY</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              temporibus illo?
            </p>
          </div>
        </b-col>

        <b-col class="cardi p-2">
          <div class="icons text-center p-3">
            <b-icon
              icon="hourglass-split
"
              font-scale="3"
              rotate="20"
            ></b-icon>
          </div>
          <div class="icon-desc">
            <h4 class="text-center p-1">PRODUCTIVITY</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              temporibus illo?
            </p>
          </div>
        </b-col>
        <b-col class="cardi">
          <div class="icons text-center p-3">
            <b-icon icon="star-fill" font-scale="3" rotate="20"></b-icon>
          </div>
          <div class="icon-desc">
            <h4 class="text-center p-1">QUALITY</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              temporibus illo?
            </p>
          </div>
        </b-col>
      </b-row>

      <div class="sub-sec pl-4">
        <h2>In our Blood, <br />There Is the Creativity.</h2>
        <div class="my-4 text-left">
          <div>
            <b-icon icon="camera" font-scale="3"></b-icon>
            <h5>Studio Shooting</h5>
            <p>
              I offer a complete, tailor-made photo editorial service. I manage
              a database with journalistic photos
            </p>
          </div>
          <div>
            <b-icon icon="hdd-stack-fill" font-scale="3" class="mt-2"></b-icon>
            <h5>Print Studio</h5>
            <p>
              Besides that, I know our way around photo databases and stock
              photos, so that we always find the perfect fit
            </p>
          </div>
        </div>
      </div>
     
    </b-container>
     <div id="back" class="py-5 mt-5"> 
        <div class="to-gallery my-4 py-5 px-4 text-center">
          <h5 class="my-5">Start Something New</h5>
          <p class="my-5">
            I appreciate the raw reality of everyday life, the fleeting beauty
            of those in-between moments, and I do my very best to take every
            picture with that in mind. I want my viewers to relate to my
            photographs through recognition of and familiarity with the
            situations.
          </p>
          <b-button squared variant="info" class="button p-3"
            >GET IN TOUCH</b-button
          >
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import scrollDown from "@/components/scrolldown.vue";

export default {
  name: "Home",
  props: ["isSwipe"],
  components: {
    HelloWorld,
    scrollDown,
  },
  data() {
    return {
      parm: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.home {
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.content {
  text-align: center;
  scroll-behavior: smooth;
}

.content p {
  text-align: justify;
  font-family: "Nunito Sans", sans-serif;
}

p{
font-size:19px;
}

.logo1 {
  display: flex;
  padding: 0px;
  justify-content: center;
  width: 100vw;
}

.logo1 img {
  width: 80px;
}
.content h3 {
  font-size: 30px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bolder;
}

.icon-desc h4 {
  font-family: "Nunito Sans", sans-serif;
  font-weight: bolder;
}

.cardi {
  max-width: 300px;
  min-width: 280px;
  margin: auto;
}

.logo2 {
  position: fixed;
  z-index: 1000;
  top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.logo2 img {
  width: 100px;
}

.sub-sec h2 {
  font-weight: bolder;
  font-family: "nunito sans", sans-serif;
}





#back{
  background-size: cover;
   background: linear-gradient(rgba(24, 21, 21, 0.6), rgba(22, 20, 20, 0.6)) ,  url("https://res.cloudinary.com/sam-kay/image/upload/v1601995981/samkay%20junio/IMG_3061_xtwcsq.jpg") center center;
  background-size: cover;
  color:white;
}


.to-gallery p {
  font-size: 19px;
  font-family: "Nunito Sans", sans-serif;
}

h5 {
  font-weight: bolder;
  font-size:30px;
}

.button {
  font-family: sans-serif;
  font-weight: bolder;
  font-size: 16px;
}
</style>
