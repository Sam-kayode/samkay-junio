<template>
  <div class="home " id="top">
     <transition name="fade">
      <div class="logo2" v-if="isSwipe">
        <img src="../assets/samkay.png" alt="" /></div
    ></transition>
    <HelloWorld />
    <scrollDown />
    <b-container
      id="content"><div class="content px-2 pt-5" >
        <h3 >Welcome to Sam-kay Photography website!</h3>
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
    <b-container >
      <b-row class="py-5 text-center">
        <b-col class="cardi">
          <div class="icons text-center p-3"><b-icon icon="camera2" font-scale="3" rotate="20"></b-icon></div>
          <div class="icon-desc ">
          <h4 class="text-center p-1">
            CREATIVITY
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus illo?</p></div>
        </b-col>
        
        <b-col class="cardi">
          <div class="icons text-center p-3"><b-icon icon="hourglass-split
" font-scale="3" rotate="20"></b-icon></div>
          <div class="icon-desc ">
          <h4 class="text-center p-1">
            PRODUCTIVITY
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus illo?</p></div>
        </b-col>
         <b-col class="cardi">
          <div class="icons text-center p-3"><b-icon icon="star-fill" font-scale="3" rotate="20"></b-icon></div>
          <div class="icon-desc ">
          <h4 class="text-center p-1">
            QUALITY
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus illo?</p></div>
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import scrollDown from "@/components/scrolldown.vue";

export default {
  name: "Home",
  props:["isSwipe"],
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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    scroll-behavior: smooth;

}

.content p {
  text-align: justify;
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
  font-size: 35px;
}

.icon-desc h4{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.cardi{
  max-width:300px;
  min-width:280px;
  margin:auto;
  
}

.logo2{
  position:fixed;
  z-index:10000;
  top:40px;
  width:100%;
display:flex;
justify-content: center;
}

.logo2 img{
    width:100px;
     
}
</style>
