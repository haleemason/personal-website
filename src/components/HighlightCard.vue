
<script setup>
import { defineProps, ref, computed } from "vue";

const props = defineProps({
  src: String,
  type: String,
  typeFilter: Object
});

const isOpen = ref(false)
function openModel() {
  isOpen.value = true
}

function closeModel() {
  isOpen.value = false
}
// used for filtering
const showCard = computed(() => {
  return props.typeFilter.type === props.type || props.typeFilter.type === "*"

})

</script>

<template>
  <div v-if="showCard" class="col-md-4 col-sm-6 project" @click="openModel()">
    <a class="portfolio_item"> <img :src="props.src" alt="image" class="img-responsive" />
      <div class="portfolio_item_hover">
        <div class="portfolio-border clearfix">
          <div class="item_info">
            <span>
              <slot name="title"></slot>
            </span>
            <em>
              <slot name="lead"></slot>
            </em>
            <br />
          </div>
        </div>
      </div>
    </a>
  </div>
  <div v-if="isOpen" class="project-model">
    <div @click="closeModel">
      <img class="close close-icon" src="../assets/img/close.svg" />
    </div>
    <div class="clearfix"></div>
    <div class="container">
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
.close-icon {
  width: 20px;
  height: 20px;
  margin-right: 30px;
  margin-top: 20px;
  color: #333;
}

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
}
</style>