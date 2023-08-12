<script setup>
import samiraPic from '../assets/img/dogs/sami_jump_8months_old.jpg'
import cammiPic from '../assets/img/dogs/cammi_face.jpg'
import savannahPic from '../assets/img/dogs/savannah_face.jpg'
import veePic from '../assets/img/dogs/vee_face.jpg'
import meggiePic from '../assets/img/dogs/meggie_face.jpg'
import { ref } from 'vue'
const filters = [
 {
  name: 'All',
  type: '*'
 },
 {
  name: 'Australian Shepherd',
  type: 'aussie'
 },
 {
  name: 'Miniature American Shepherd',
  type: 'mas'
 },
 {
  name: 'Golden Retriever',
  type: 'golden'
 }
]

const profiles = [
 {
  title: 'Samira<br/> Timeless Desert Rose TKA',
  lead: 'Miniature American Shepherd',
  src: samiraPic,
  to: { name: 'dogProfile', params: { dogName: 'samira' } }
 },
 {
  title: 'Cammi<br/> MACH Snowbelts Charming Invitation MXB MJS OF',
  lead: 'Austrlian Shepherd',
  src: cammiPic,
  to: { name: 'dogProfile', params: { dogName: 'cammi' } }
 },
 {
  title: 'Savannah<br/> Snowbelts Engraved Invitation AX AXJ NF',
  lead: 'Austrlian Shepherd',
  src: savannahPic,
  to: { name: 'dogProfile', params: { dogName: 'savannah' } }
 },
 {
  title: 'Vee<br/> Snowbelts Charmed Life AX AXJ',
  lead: 'Austrlian Shepherd',
  src: veePic,
  to: { name: 'dogProfile', params: { dogName: 'vee' } }
 },
 {
  title: 'Meggie <br/>',
  lead: 'Golden Retriever',
  src: meggiePic,
  to: { name: 'dogProfile', params: { dogName: 'meggie' } }
 }
]
const selectedFilter = ref(filters[0])

function setFilter(filter) {
 selectedFilter.value = filter
}
</script>
<template>
 <div class="section" id="highlights">
  <div class="container">
   <div class="col-md-12">
    <h4>02</h4>
    <h1 class="size-50">Meet The Girls</h1>
   </div>
   <!-- main container -->
   <div class="main-container portfolio-inner clearfix">
    <!-- portfolio div -->
    <div class="portfolio-div">
     <div class="portfolio">
      <!-- portfolio_filter -->
      <div class="categories-grid wow fadeInLeft">
       <nav class="categories">
        <ul class="portfolio_filter">
         <li class="clickable" v-for="(filter, index) in filters" :key="index">
          <a @click="setFilter(filter)" :class="{ active: selectedFilter.type === filter.type }">{{
           filter.name
          }}</a>
         </li>
        </ul>
       </nav>
      </div>

      <div class="no-padding portfolio_container clearfix">
       <div
        v-for="profile in profiles"
        :key="profile.lead"
        class="right-half-card"
        @click="() => $router.push(profile.to)"
       >
        <div class="col-md-4 col-sm-6 project">
         <a class="portfolio_item_dog"> 
          <!-- portfolio_item_dog_dog -->
          <img :src="profile.src" alt="image" class="img-responsive" />
          <div class="portfolio_item_dog_hover">
           <div class="portfolio-border clearfix">
            <div class="item_info">
             <span v-html="profile.title"> </span>
             <em v-html="profile.lead"> </em>
             <br />
            </div>
           </div>
          </div>
         </a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<style>
.portfolio_item_dog {
    position: relative;
    overflow: hidden;
    display: block;
    margin-bottom: 30px;
    aspect-ratio: 16 / 9;
}

.portfolio_item_dog .portfolio_item_dog_hover {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background-color: #425BB5;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    opacity: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    color: #333;
}

.portfolio_item_dog .portfolio_item_dog_hover .item_info {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 100%;
    font-weight: bold;
}

.portfolio_item_dog .portfolio_item_dog_hover .item_info span {
    display: block;
    color: #fff;
    font-size: 18px;
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    -webkit-transition: all .3s ease-in-out .3s;
    transition: all .3s ease-in-out .3s;
    opacity: 0;
}

.portfolio_item_dog .portfolio_item_dog_hover .item_info em {
    font-style: normal;
    display: inline-block;
    background-color: #425BB5;
    padding: 5px 20px;
    color: #fff;
    margin-top: 10px;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    -webkit-transition: all .3s ease-in-out .3s;
    transition: all .3s ease-in-out .3s;
    opacity: 0;
    font-size: 10px;
    letter-spacing: 2px;
}

.portfolio_item_dog:hover .portfolio_item_dog_hover {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}

.portfolio_item_dog:hover .item_info em,
.portfolio_item_dog:hover .item_info span {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}

.portfolio .categories-grid .categories ul li {
    float: left;
}

.portfolio .categories-grid .categories ul li a {
    padding: 0 10px;
    -webkit-transition: all .2s ease-in-out .2s;
    transition: all .2s ease-in-out .2s;
}

.portfolio_filter {
    padding-left: 0;
    display: inline-block;
    margin: 0 auto;
    text-align: center;
}

/* TODO: I have no idea how this is working  because it doesn't have _dog in it */
.portfolio_item img {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
}

.portfolio-padding {
    padding: 50px 0;
}

.portfolio-inner {
    padding-bottom: 0 !important;
    padding-top: 55px;
}

.modal-content {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
    border: none;
}

.popup-modal {
    background: #fff;
}

</style>
