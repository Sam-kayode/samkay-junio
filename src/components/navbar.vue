<template>
  <div>
    <!-- harmburger -->
    <div id="nav-bar">
      <button
        class="harmburger"
        :class="[{ opened: toggled }]"
        @click="toggle"
        aria-label="Main Menu"
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path class="line line2" d="M 20,50 H 80" />
          <path
            class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <transition name="fade">
        <img class="logo" src="../assets/samkay.png" alt="" v-if="!isSwipe" />
      </transition>
    </div>

    <!-- logo -->

    <!--   <div class="logo">
      <img src="../assets/sensei-8-logo.png" alt />
    </div> -->

    <!-- top navigation -->

    <div class="topnav">
      <ul>
        <li class="navlink">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navlink">
          <router-link to="/about">About</router-link>
        </li>
        <li class="navlink">
          <router-link to="/about">Gallery</router-link>
        </li>
        <li class="navlink">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="navlink">
          <router-link to="/pricing">Pricing</router-link>
        </li>
      </ul>
    </div>

    <!-- side nav-->
    <transition name="fade">
      <div class="side-nav" v-if="toggled">
        <!-- <div class="paatern">  <img src="../assets/Taieri.png" alt=""></div> -->

        <ul>
          <li class="side-link" @click="toggle">
            <router-link to="/">Home</router-link>
          </li>
          <li class="side-link" @click="toggle">
            <router-link to="/about">About</router-link>
          </li>
           <li class="side-link" @click="toggle">
            <router-link to="/Gallery">Gallery</router-link>
          </li>
          <li class="side-link" @click="toggle">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="side-link" @click="toggle">
            <router-link to="/pricing">Pricing</router-link>
          </li>
          
        </ul>
      </div>
    </transition>
   
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: ["isSwipe"],
  data() {
    return { toggled: false };
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },
  },
};
</script>

<style scoped>
html {
  padding: 0px;
}
#nav-bar {
  position: fixed;
  z-index: 5000000;
  padding: 0;
  width: 100vw !important;
  height: 45px;
  background-color: white;
  border-bottom: 1px solid #b9b6b6;
}
.harmburger {
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 0;
  position: fixed;
  margin-top: 2.5px;
  left: 0;
  z-index: 40000;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 8;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}
.opened .line2 {
  stroke-dasharray: 1 90;
  stroke-dashoffset: -90;
  stroke-width: 8;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}
button {
  outline: none !important;
}

svg {
  height: 40px;
  width: 40px;
}

/* logo image */
.logo {
  position: absolute;
  width: 90px;
  top: 4px;
  right: 30px;
  z-index: 300;
}

/* .logo1 {
  position: fixed;
  z-index: 2000;
  top: 45px;
  display: flex;
  padding: 0px;
  justify-content: center;
  width: 100vw;
}

.logo1 img {
  width: 55px;
margin-left: 280px;
margin-top: 50px;
} */
/* topnav */
.display {
  display: none;
}
.topnav {
  position: fixed;
  display: flex;
  padding: 0px;
  margin-top: 2px;
  height: 50px;
  z-index: 20000000;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: red;
}
.topnav ul {
  display: flex;
  flex-direction: row;
  padding: 0px;
  height: 20px;
}

.topnav li {
  flex: none;
  order: 0;
  align-self: center;
  margin: 0px 29px;
  list-style: none;
  position: relative;
  font-family: Montserrat;
  font-style: normal;
}

.navlink::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  background-color: #270101;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 650ms;
}
.navlink:hover::before {
  transform: scaleX(1);
}

.topnav a {
  color: black;
  text-decoration: none;
  font-size: 15px;
}
/* side-nav */
.side-nav {
  width: 100vw;
  top: 30px;
  height: calc(100vh - 30px);
  position: fixed;
  z-index: 4000;
  background-color: #eeede7;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
}
.side-nav ul {
  margin: 0;
  padding: 0;
}
.side-nav li {
  list-style: none;
  text-decoration: none;
  padding: 20px 0px !important;
  transition: 0.3s ease-out;
  margin: auto;
}

.side-nav a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  z-index: 50;
  font-size: 21px;
}

.side-nav li:hover {
  transform: scale(1.2);
  transition: 0.3s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 992px) {
  .topnav {
    display: none;
  }
}

@media (min-width: 992px) {
  .sidebar,
  .harmburger {
    display: none;
  }
}
</style>