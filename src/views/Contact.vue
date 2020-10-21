<template>
  <div class="py-5 contact" id="top">
    <div class="pt-4   text-center " >
 <transition name="fade">
      <div class="logo2" v-if="isSwipe">
        <img src="../assets/samkay.png" alt="" /></div
    ></transition>
        </div>
<h1 class="text-center">Get In Touch</h1>
 <div class="text px-2 px-md-5 pt-5"><p class="text-center px-1 px-md-5">
    Lorem ipsum dolor st amet consectetur adipisicing elit. Perferendis fugiat nihil et neque soluta velit magni nemo, ea consectetur quas placeat illum cum libero eum corrupti voluptatibus quia nostrum quaerat!
  </p></div> 
    <b-container class="px-3 px-md-5 py-5">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
.logo2 img {
  width: 100px;
}
.contact{
   background-size: cover;
   background: linear-gradient(rgba(24, 21, 21, 0.7), rgba(22, 20, 20, 0.7)) ,  url("https://res.cloudinary.com/samkay-studios/image/upload/q_auto:low/v1603296618/samkaystudios/camera_aabqmb.jpg") center center;
  background-size: cover;
  color:white;
  min-height:90vh;
    font-size: 19px;
    background-attachment: fixed;
}
h1{
    font-family: "Philosopher", sans-serif;
 font-size: 60px;
}
</style>