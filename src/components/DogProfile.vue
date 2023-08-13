
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
  width: 80px;
  height: 20px;
  margin-right: 30px;
  margin-top: 20px;
  color: #333;
}
/* 
.project-model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 10000;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 20px;
}

.project {
  cursor: pointer;
}

.project-model h2 {
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  line-height: 50px;
} */

</style>