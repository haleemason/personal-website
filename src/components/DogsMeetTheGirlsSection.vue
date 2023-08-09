<script setup>
import HighlightCard from './HighlightCard.vue';
import samiraPic from '../assets/img/dogs/sami_jump_8months_old.jpg';
import { ref } from 'vue'
const filters = [
  {
    name: "All",
    type: '*'
  },
  {
    name: "Projects",
    type: 'project'
  },
  {
    name: "Competitions",
    type: 'competitions'
  },
  {
    name: "Capstone",
    type: 'capstone'
  },
  {
    name: "Spotlight",
    type: 'spotlight'
  }
]

const selectedFilter = ref(filters[0])
function setFilter(filter) {
  selectedFilter.value = filter
}
</script>
<template>
  <div class="section" id="experience">
    <div class="container">
      <div class="col-md-12">
        <h4>02</h4>
        <h1 class="size-50">Meet the Girls</h1>
        <div class="h-50"></div>
      </div>
      <div class="col-md-12">
        <ul class="timeline">
          <li class="timeline-event" data-aos="fade-up">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">September 18th, 2023 - Present</p>
              <h3>Samira</h3>
              <h4><a href="https://www.timelessaussies.com/">Timeless Desert Rose TKA</a></h4>
              <ul>
                
            <div class="no-padding portfolio_container clearfix">
                  <HighlightCard class="right-half-card" :src="samiraPic" type="competitions" :typeFilter="selectedFilter">
                  <!-- Card -->
                  <template v-slot:title>
                    Samira <br>"Timeless Desert Rose"
                  </template>
                  <template v-slot:lead>Miniature American Shepherd
                  </template>
                  <!-- Model -->
                  <template v-slot:modelTitle>
                    Samira <br>"Timeless Desert Rose"
                  </template>
                  <template v-slot:modelDate>
                    <p><b>Born:</b> September 18th, 2023<br> </p>
                  </template>
                  <template v-slot:modelContent>
                    <p>Developed multiple timeseries models (ARIMA, Regression) in Python with a team of four Data
                      Scientists. Deployed the models using Docker to forecast Wi-Fi usage in daily and hourly increments.
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
                    <p>Samira is from <a href="https://haleemason.github.io/hackd-web/#"><b>Timeless Mini Aussies</b></a>.</p>
                    <br />
                    <br />
                    <!-- <img src="../assets/img/portfolio/01a.jpg" class="img-responsive"> -->
                    <br />
                  </template>
                  </HighlightCard>
              </div>
              </ul>
            </div>
          </li>
          <li class="timeline-event" data-aos="fade-up">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">September 2005 - October 2021</p>
              <h3>Cammi</h3>
              <h4><a href="http://www.snowbeltaussies.com/">MACH Snowbelts Charming Invitation MXB MJS</a></h4>
              <h5>Australian Shepherd</h5>
              <ul>
                <li>Cammi, Snowbelts Charming Invitation, is almost three years old now and is quickly becoming the champion in the family. She competes in EXC B Standard in Agility almost every weekend and we will be going to AKC Agility Nationals this year in North Carolina. She achieved her MACH on November 2nd, 2008 at the Clarion Canine Obedience Club. She currently stands with 20 double Q's and over 900 points. (The requirements for MACH are 20 double Q's and 750 points). 
                </li>
                <li>Cammi is definitely the leader of the pack. The other girls know that she is boss. She also absolutely loves agility and always gets excited when she sees the jumps being set up. Her favorite treats are bits of cheesesticks. She even learned to peel them after she mastered opening her Christmas presents.
                </li>
                <li>Cammi's parents are Briarbrook's Justin Case, "Justin" and Snowbelt's Engraved Invitation, "DeeDee". Cammi has strong working drive for an Aussie and she is always eager to please.
                </li>
              </ul>
            </div>
          </li>
          <li class="timeline-event" data-aos="fade-up">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">December 2006 - July 2023</p>
              <h3>Savannah</h3>
              <h4><a href="http://www.snowbeltaussies.com/">Snowbelts Engraved Invitation AX AXJ</a></h4>
              <h5>Australian Shepherd</h5>
              <ul>
                <li>Savannah was eager to please and showed a lot of promise! Unfortunately her competing career was cut short when I went off to college.
                </li>
                <li>Sire: ROMXI CH Briarbrook Sharp Dressed Man </li>
                <li>Dam: CH Snowbelts Engraved Invitation </li>
              </ul>
            </div>
          </li>
          <li class="timeline-event" data-aos="fade-up">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">December 2008 - May 2020</p>
              <h3>Vee</h3>
              <h4><a href="http://www.snowbeltaussies.com/">Snowbelts Charmed Life AX AXJ</a></h4>
              <h5>Australian Shepherd</h5>
              <ul>
                <li>Vee was content running alongside her handler and wasn't the fastest, but tried her hardest.
                </li>
                <li>Sire: ROMXI CH Briarbrook Sharp Dressed Man </li>
                <li>Dam: CH Sunnyrains The Charmed One
                </li>
              </ul>
            </div>
          </li>
          <li class="timeline-event" data-aos="fade-up">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">September 1998 - Feburary 17th, 2006</p>
              <h3>Meggie</h3>
              <h5>Golden Retriever</h5>
              <!-- <h4><a href="http://www.snowbeltaussies.com/">Snowbelt's Engraved Invitation AX AXJ</a></h4> -->
              <ul>
                <li>The Golden Retriever that got it all started.
                </li>
                <li>Meggie was an eager to please dog, who showed Cammi the ropes and in turn, Cammi showed Savannah & Vee how things worked around the house.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.right-half-card {
  float: right;
  width: 50%; /* Half of the screen width */
  margin-left: 10px; /* Adjust this value for spacing */
}
</style>