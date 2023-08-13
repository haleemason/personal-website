
<script setup>
import { ref, onMounted } from "vue"
import LoadingElement from "../components/LoadingElement.vue";
import NavBar from "../components/NavBar.vue";
import HomeSection from "../components/HomeSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import EducationSection from "../components/EducationSection.vue";
import HighlightsSection from "../components/HighlightsSection.vue";
import ContactSection from "../components/ContactSection.vue";
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
  <HomeSection />
  <AboutSection />
  <ExperienceSection />
  <EducationSection />
  <HighlightsSection />
  <ContactSection />
</template>
