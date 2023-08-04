<script setup>
import 'aos/dist/aos.css'
import AOS from 'aos'



AOS.init({
  duration: 1000,
  offset: 100,
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
