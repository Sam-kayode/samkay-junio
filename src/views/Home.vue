<template>
  <div class="home display" :class="[{ display: !parm }]">
    <img alt="Vue logo" src="../assets/logo.png" />
   fjfjjffffffffffffffffrjrjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  beforeCreate() {
    setTimeout(()=>{this.parm=!this.parm},5000);
  },
   
  name: "Home",
  components: {
  },
  data(){
    return{
     parm: false 
    }
  },
  methods: {
   
  },
};
</script>

<style scoped>
.display{
  display:none;
}
</style>
