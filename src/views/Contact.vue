<template>
  <div class="contact" id="top">
        <div class="logo2 text-center" >
          <img src="../assets/samkay.png" v-if="isSwipe" alt="" />
    </div>
    <h1 class="text-center">Get In Touch</h1>
    
    <div class="text px-2 px-md-5 pt-5">
      <div>
      <b-container>
        <p>- ALREADY LOVE MY WORKS? SO WHAT ARE YOU WAITING FOR?</p>
        <h4>Let’s Make Something Great!</h4>
        <div class="button text-center py-3">
         
        </div></b-container
      >
    </div>
    </div>
    <b-container class="px-3 px-md-5 py-5">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Message:" label-for="input-3">
        </b-form-group>
        <b-form-textarea
          id="textarea-large"
          size="lg"
          placeholder="Your Message"
        ></b-form-textarea>
      </b-form>
      <b-button type="submit" variant="primary" class="my-4">Submit</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["isSwipe"],
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },

      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
.logo2{
  height:50px;
}
.logo2 img {
  width: 100px !important;
    height:40px;

}
.contact {
  background-size: cover;
  background: linear-gradient(rgba(24, 21, 21, 0.7), rgba(22, 20, 20, 0.7)),
    url("https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603464926/samkaystudios/ll_zeqgtn.jpg")   center !important;
  background-size: cover !important;
  color: white;
  font-size: 19px;
  padding-top:50px !important;
overflow-x:hidden;
min-height:100vh;

}
h1 {
  font-family: "Philosopher", sans-serif;
  font-size: 60px;
}


</style>