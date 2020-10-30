<template>
  <div class="about pt-5" id="top">
     <transition name="fade">
      <div class="logo2" v-if="isSwipe">
        <img src="../assets/samkay.png" alt="" /></div
    ></transition>
    <div class="about-img text-center  mt-5">
       <b-img
        src="https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603288706/samkaystudios/profilePic_osn1hn.jpg"
        
        alt="Fluid image"
        class="portfolio-img">
        </b-img>
    </div>

    <b-container>
      <h1 class="my-3">Hello,</h1>
      <h4>
        I’m Sam-kay Jr, <br>a professional photographer specializing in
        Lifestyle,Potrait, and Fashion Photography living in Ibadan, Nigeria.
      </h4>
      <br />
      <p class="description">
        Great photography comes with understanding customer needs.I would like
        to give you a unique photography experience,built to serve you best and
        capture your special moments for you creatively and
        beautifully.Photography is my passion and I love to turn ideas into
        beautiful things. Looking for a caring, fun, passionate and creative
        photographer? It's me!
      </p>
      <h4 class="my-5">My Passion = Your Moments</h4>
    </b-container>
    <div class="hire-me py-5">
      <b-container>
        <p>- ALREADY LOVE MY WORKS? SO WHAT ARE YOU WAITING FOR?</p>
        <h4>Let’s Make Something Great!</h4>
        <div class="button text-center py-3">
          <b-button squared variant="info" class="button p-3">
            GET IN TOUCH
          </b-button>
        </div></b-container
      >
    </div>
  </div>
</template>

<script>
export default {
         props: ["isSwipe"],

  components: {},
};
</script>

<style scoped>
.about {
  color: #504d4d;
  line-height: 35px;
  min-height:100vh;
}
h1 {
  font-weight: bolder;
  font-family: "Nunito Sans", sans-serif;
}

h3 {
  font-weight: bolder;
}

h4 {
  font-family: "Nunito Sans", sans-serif;
  font-weight: bolder;
  line-height: 35px;
}

.description {
  font-size: 19px;
  font-family: "Nunito Sans", sans-serif;
}

.hire-me {
  background-color: #dddbdb;
  color: black;
}

.hire-me p{
font-size:20px;
  font-family: "Nunito Sans", sans-serif;
font-weight:bolder;
}
.about-img{
  background-color: #f0f0f0;

}

.portfolio-img {
  height: 500px;
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
    height:40px;

}
</style>