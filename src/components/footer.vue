<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col class="links text-center p-1 my-4">
          <img src="../assets/samkay.png" alt="" class="footer-logo" />
        </b-col>

        <b-col class="links py-2">
          <p class="text-center p-0">Contact Me</p>
          <ul class="text-center">
            <li>+234-816-375-2417</li>
            <li>samkaystudios@gmail.com</li>
            <li>Iyana Sele, Akala Way, Ibadan</li>
            <li></li>
          </ul>
        </b-col>
        <b-col class="links">
          <ul class="text-center my-5">
            <li class="my-2">
              <img src="../assets/icons/facebook.svg" class="mx-2" alt="" />
              <img src="../assets/icons/instagram.svg" class="mx-2" alt="" />
              <img src="../assets/icons/twitter.svg" class="mx-2" alt="" />
              <img src="../assets/icons/pinterest.svg" class="mx-2" alt="" />
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>

    <div class="text-center copyright bg-light p-2">
      © 2020 Sam-kay Photography. All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
};
</script>

<style scoped>
.footer {
  background-color: #0e0d0d;
  color: rgb(202, 198, 193);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.links {
  min-width: 250px;
}

.links li {
  list-style: none;
}

.links p {
  font-size: 25px;
  font-family: roboto, sans-serif;
}
ul {
  padding: 0;
  margin: 0;
}

li img {
  display: inline-block;
  width: 30px;
  cursor: pointer;
}

li img:hover {
  transform: scale(1.1);
}
.footer-logo {
  width: 135px;
  margin: auto;
}

.copyright {
  color: black;
}

.links p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>