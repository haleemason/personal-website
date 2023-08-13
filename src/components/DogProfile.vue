
<script setup>
import { defineProps, ref, computed } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
  src: String,
  type: String,
  typeFilter: Object
});

const isOpen = ref(false)
function openModel() {
  isOpen.value = true
}


function back() {
  router.back()
}
// used for filtering
const showCard = computed(() => {
  return props.typeFilter.type === props.type || props.typeFilter.type === "*"

})

</script>

<template>
  <div >
    <div class="clearfix"></div>
    <div class="container">
      <div class='backbtn' @click="back">
      <font-awesome-icon class="navbar-icon" :icon="['fas', 'chevron-left']" />
                Go Back
    </div>
      <div class="col-md-8 col-md-offset-2">
        <h2>
          <slot name="modelTitle"></slot>
        </h2>
        <div class="h-50">
          <slot name="modelDate"></slot>
        </div>
        <div>
          <slot name="modelContent"></slot>
        </div>
      </div>
    </div>

  </div>
</template>
<style>

.backbtn {
  position: fixed;
  top: 20px; /* Adjust the distance from the bottom as needed */
  left: 20px; /* Adjust the distance from the left as needed */
  color: #333;
}

</style>