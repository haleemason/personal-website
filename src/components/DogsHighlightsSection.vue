<script setup>
import HighlightCard from './HighlightCard.vue';
import samiraPic from '../assets/img/dogs/sami_jump_8months_old.jpg';
import cammiPic from '../assets/img/dogs/cammi_face.jpg'
import savannahPic from '../assets/img/dogs/savannah_face.jpg'
import veePic from '../assets/img/dogs/vee_face.jpg'
import meggiePic from '../assets/img/dogs/meggie_face.jpg'
import { ref } from 'vue'
const filters = [
  {
    name: "All",
    type: '*'
  },
  {
    name: "Australian Shepherd",
    type: 'aussie'
  },
  {
    name: "Miniature American Shepherd",
    type: 'mas'
  },
  {
    name: "Golden Retriever",
    type: 'golden'
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
                    <a @click="setFilter(filter)" :class="{ active: selectedFilter.type === filter.type }">{{ filter.name
                    }}</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="no-padding portfolio_container clearfix">
              <HighlightCard class="right-half-card" :src="samiraPic" type="mas" :typeFilter="selectedFilter">
              <!-- Card -->
              <template v-slot:title>
                Samira <br>Timeless Desert Rose TKA
              </template>
              <template v-slot:lead>Miniature American Shepherd
              </template>
              <!-- Model -->
              <template v-slot:modelTitle>
                Samira <br>Timeless Desert Rose TKA
              </template>
              <template v-slot:modelDate>
                <p><b>Born:</b> September 18th, 2023<br> </p>
              </template>
              <template v-slot:modelContent>
                <p>Sami Intro text here
                </p>
                <li>S.T.A.R. Puppy Award
                </li>
                <li>AKC Novice Trick Dog Title
                </li>
                <li>AKC Intermediate Trick Dog Title
                </li>
                <li>AKC Advanced Trick Dog Title
                </li>
                <li>Currently training for CGC and Agility!
                </li>
                <li>Sire: Brody </li>
                <li>Dam: Trouble </li>
                <br />
                <br />
                <h4><a href="https://www.timelessaussies.com/">Timeless Desert Rose TKA</a></h4>
                <!-- <img src="../assets/img/portfolio/01a.jpg" class="img-responsive"> -->
                <br />
              </template>
              </HighlightCard>

              <HighlightCard :src="cammiPic" type="aussie" :typeFilter="selectedFilter">
                <!-- Card -->
                <template v-slot:title>
                  Cammi<br>MACH Snowbelts Charming Invitation MXB MJS
                </template>
                <template v-slot:lead>
                  Australian Shepherd
                </template>
                <!-- Model -->
                <template v-slot:modelTitle>
                  Cammi<br>MACH Snowbelts Charming Invitation MXB MJS
                </template>
                <template v-slot:modelDate>
                   September 2005 - October 2021<br>
                </template>
                <template v-slot:modelContent>
                  High level intro info for Cammi
                  <br />
                  <li>Cammi, Snowbelts Charming Invitation, is almost three years old now and is quickly becoming the champion in the family. She competes in EXC B Standard in Agility almost every weekend and we will be going to AKC Agility Nationals this year in North Carolina. She achieved her MACH on November 2nd, 2008 at the Clarion Canine Obedience Club. She currently stands with 20 double Q's and over 900 points. (The requirements for MACH are 20 double Q's and 750 points). 
                  </li>
                  <li>Cammi is definitely the leader of the pack. The other girls know that she is boss. She also absolutely loves agility and always gets excited when she sees the jumps being set up. Her favorite treats are bits of cheesesticks. She even learned to peel them after she mastered opening her Christmas presents.
                  </li>
                  <li>Cammi's parents are Briarbrook's Justin Case, "Justin" and Snowbelt's Engraved Invitation, "DeeDee". Cammi has strong working drive for an Aussie and she is always eager to please.
                  </li>
                  <br />
                  <img src="../assets/img/dogs/cammi_tunnel.jpg" class="img-responsive">
                  <br />
                  <br />
                  <h4><a href="http://www.snowbeltaussies.com/">MACH Snowbelts Charming Invitation MXB MJS</a></h4>
                </template>
              </HighlightCard>

              <HighlightCard :src="savannahPic" type="aussie" :typeFilter="selectedFilter">
                <!-- Card -->
                <template v-slot:title>
                  Savannah <br>Snowbelts Engraved Invitation AX AXJ
                </template>
                <template v-slot:lead>
                  Australian Shepherd
                </template>
                <!-- Model -->
                <template v-slot:modelTitle>
                  Savannah <br>Snowbelts Engraved Invitation AX AXJ
                </template>
                <template v-slot:modelDate>  December 2006 - July 2023
                </template>
                <template v-slot:modelContent>
                  <ul>
                  <li>Savannah was eager to please and showed a lot of promise! Unfortunately her competing career was cut short when I went off to college.
                  </li>
                  <li>Sire: ROMXI CH Briarbrook Sharp Dressed Man </li>
                  <li>Dam: CH Snowbelts Engraved Invitation </li>
              </ul>
                  <h4><a href="http://www.snowbeltaussies.com/">Snowbelts Engraved Invitation AX AXJ</a></h4>
                </template>
              </HighlightCard>

              <HighlightCard :src="veePic" type="aussie" :typeFilter="selectedFilter">
                <!-- Card -->
                <template v-slot:title>   Vee<br> Snowbelts Charmed Life AX AXJ
                </template>
                <template v-slot:lead>Australian Shepherd
                </template>
                <!-- Model -->
                <template v-slot:modelTitle> Vee<br> Snowbelts Charmed Life AX AXJ
                </template>
                <template v-slot:modelDate>December 2008 - May 2020
                </template>
                <template v-slot:modelContent>
                  <ul>
                <li>Vee was content running alongside her handler and wasn't the fastest, but tried her hardest.
                </li>
                <li>Sire: ROMXI CH Briarbrook Sharp Dressed Man </li>
                <li>Dam: CH Sunnyrains The Charmed One
                </li>
              </ul>
                  <h4><a href="http://www.snowbeltaussies.com/">Snowbelts Charmed Life AX AXJ</a></h4>
                  <div>
                
                    <br><br>
                  </div>
                </template>
              </HighlightCard>

              <HighlightCard :src="meggiePic" type="golden" :typeFilter="selectedFilter">
                <!-- Card -->
                <template v-slot:title>Meggie 
                </template>
                <template v-slot:lead>Golden Retriever
                </template>
                <!-- Model -->
                <template v-slot:modelTitle>Meggie 
                </template>
                <template v-slot:modelDate>September 1998 - Feburary 17th, 2006
                </template>
                <template v-slot:modelContent>
                  <p>Built a <a href="https://github.com/haleemason/stroke-readmission-model"><b>predictive
                        model using Python and TensorFlow</b></a> that was optimized to forecast the risk of
                    rehospitalization in the year following stroke. Collaborated with client and focused on model
                    explainability by using techniques such as LIME.</p>
                  <br />
                  <br />
                  <img src="../assets/img/portfolio/03.jpg" class="img-responsive">
                  <br />
                  <br />

                  <p>Implemented the model to drive patient outcomes to help the client segment high risk patients and
                    engage with them more closely to prevent readmission. Deployed model through a Heroku web service
                    which
                    allowed for the client to input patient specific parameters and for the model to output a personalized
                    risk score of rehospitalization.</p>
                </template>
              </HighlightCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>