<template>
  <div>
<section id="scrollDown" class="demo">
  <a href="#section08"><span></span><span></span><span></span><p>
  Scroll</p></a>
</section>
  </div>
</template>

<script>

  export default {
    name:'scrollDown',


  }
</script>

<style scoped>
#scrollDown a {
  padding-top: 80px;
  position: relative;
  width:30px;
z-index:400;
margin-left: calc(50% - 15px) ;  text-decoration: none;
text-align:center;

}
#scrollDown a:hover {
 transform: scale(1.5);
}
#scrollDown p{
  margin-top:-15px;
  color:rgb(229, 214, 194);
}
#scrollDown a span {
  position: absolute;
  top:0;
  left: 50%;
  width: 24px;
  height: 24px;
  border-left: 3px solid rgb(201, 157, 99);
  border-bottom: 3px solid rgb(201, 157, 99);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb07 2s infinite;
  animation: sdb07 2s infinite;
  opacity: 0;
  box-sizing: border-box;
}
#scrollDown a span:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
#scrollDown a span:nth-of-type(2) {
  top: 16px;
  -webkit-animation-delay: .15s;
  animation-delay: .15s;
}
#scrollDown a span:nth-of-type(3) {
  top: 32px;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}
@-webkit-keyframes sdb07 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb07 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


</style>