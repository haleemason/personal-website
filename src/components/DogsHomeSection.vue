<script setup>

</script>
<template>
  <div class="section" id="dogshome">
    <div class="container">
      <div class="disply-table">
        <div class="table-cell" data-aos="fade-up">
          <div class="blurred-background">
            <h4 class="text-white">Halee Mason</h4>
            <h1>Agility, Conformation, & Obedience</h1>
            <h2>Excellence is a mastery of the fundamentals.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

.blurred-background {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.blurred-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/dogs/sami_jump_8months_old.jpg'); /* Replace with your background image */
  filter: blur(5px); /* Adjust blur intensity as needed */
  z-index: -1;
}

.title {
  position: relative;
  z-index: 1;
  /* Additional styles for your title */
}

</style>
