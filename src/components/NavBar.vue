<script setup>
import {  computed } from "vue"
import { useRoute } from 'vue-router';
const route = useRoute()
const isDogsPage = computed(()=> {
  return route.name === "dogs"
})
</script>
<template>
 <header class="navbar-fixed-top">
  <nav class="navbar navbar-default">
   <div class="container-fluid">
    <div class="navbar-header">
     <button
      type="button"
      class="navbar-toggle collapsed"
      data-toggle="collapse"
      data-target="#navbar"
      aria-expanded="false"
      aria-controls="navbar"
      style="margin-top: 15px"
     >
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
     </button>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
     <ul class="nav navbar-nav" :class="{'light-background': isDogsPage}">
      <li v-if="isDogsPage"><a href="/">Home</a></li>
      <li><a href="/#about">About</a></li>
      <li><a href="/#experience">Experience</a></li>
      <li><a href="/#education">Education</a></li>
      <li><a href="/#highlights">Highlights</a></li>
      <li><a href="/#contact">Contact</a></li>
      <li>
       <a href="/dogs">
        <font-awesome-icon class="navbar-icon" :icon="['fas', 'paw']" />
      </a>
      </li>
     </ul>
    </div>
    <!--/.nav-collapse -->
   </div>
   <!--/.container-fluid -->
  </nav>
 </header>
</template>
<style scoped>
.navbar-icon {
  color: #777;
}
.navbar-icon:focus,
.navbar-icon:hover{
  color: #333;
  background-color: transparent;
}

.light-background> li > a{
    color: black
}

.light-background .navbar-icon {
  color: black;
}
.light-background .navbar-icon:focus,
.light-background .navbar-icon:hover{
  color: #333;
  background-color: transparent;
}


</style>
