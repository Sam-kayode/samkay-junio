<template>
  <div class="home">
        <HelloWorld/>
        <scrollDown/>
        <div class="content">
        <h4>Welcome to Sam-kay Photography website!</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo voluptas, molestiae officia laboriosam obcaecati rem modi at provident, dignissimos pariatur maiores officiis temporibus possimus, explicabo atque perferendis neque fugiat?</p>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import scrollDown from "@/components/scrolldown.vue"
export default {
   name: "Home",
  components: {
    HelloWorld,scrollDown
  },
  data(){
    return{
     parm: false, 
    }
  },
  methods: {
  
  },
};
</script>

<style>
.home{
  width:100vw ;
overflow-x: hidden;
}

.content{
  text-align:center;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: lighter;
}
</style>
