<script setup>
import { ref, onMounted } from "vue"
import LoadingElement from "../components/LoadingElement.vue";
import NavBar from "../components/NavBar.vue";
import DogsHomeSection from "../components/DogsHomeSection.vue";
import DogsAboutSection from "../components/DogsAboutSection.vue";
import DogsProfiles from "../components/DogsProfiles.vue";

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 350);
})
</script>

<template>
  <LoadingElement v-if="isLoading" />
  <NavBar />
  <DogsHomeSection />
  <DogsAboutSection />
  <DogsProfiles />
</template>
