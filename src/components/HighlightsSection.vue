<script setup>
import HighlightCard from './HighlightCard.vue';
import imgOne from '../assets/img/portfolio/01.jpg';
import imgTwo from '../assets/img/portfolio/02a.jpg'
import imgThree from '../assets/img/portfolio/03.jpg'
import imgFour from '../assets/img/portfolio/msft/cloud9-halee-mason-office-1422x800.jpg'
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
  <div class="section" id="highlights">
    <div class="container">
      <div class="col-md-12">
        <h4>04</h4>
        <h1 class="size-50">Highlights</h1>
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

              <HighlightCard :src="imgOne" type="competitions" :typeFilter="selectedFilter">
                <!-- Card -->
                <template v-slot:title>
                  Charlottesville Open <br> Data Challenge
                </template>
                <template v-slot:lead>
                  Competition
                </template>
                <!-- Model -->
                <template v-slot:modelTitle>
                  Charlottesville Open Data<br /> Challenge
                </template>
                <template v-slot:modelDate>
                  <p><b>Completed:</b> April 2018<br> </p>
                </template>
                <template v-slot:modelContent>
                  <p>Developed multiple timeseries models (ARIMA, Regression) in Python with a team of four Data
                    Scientists. Deployed the models using Docker to forecast Wi-Fi usage in daily and hourly increments.
                  </p>

                  <p>Created a website using HTML/CSS, Vue, and JavaScript. <b>Won 1st place Best Data Storytelling
                      submission</b> and 4th place Best Predictive Model submission.</p>

                  <p>Click <a href="https://haleemason.github.io/hackd-web/#"><b>here</b></a> to view our Data
                    Storytelling submission.</p>
                  <br />
                  <br />
                  <img src="../assets/img/portfolio/01a.jpg" class="img-responsive">
                  <br />
                  <br />
                  <ul>
                    The Best Data Storytelling submission was evaluated for the following criteria:
                    <li><b>Soundness</b> - How robust and rigorous is the analysis behind the storytelling?</li>
                    <li><b>Explainable</b> - How well does the story explain what is going on in the data?</li>
                    <li><b>Appeal</b> - How stunning are the visuals?</li>
                    <li><b>Accessibility</b> - How accessible are the findings to a diverse audience?</li>
                    <li><b>Engagement</b> - How engaging is the combined narrative and visuals?</li>
                  </ul>

                  <p>The goal of the challenge was to use open data and crowdsourcing to engage the growing data science
                    community within Charlottesville and the surrounding area to help the city better understand
                    pedestrian use of the Downtown Mall. The Mall is one of the most successful pedestrian malls in the
                    nation and is a vibrant collection of more than 120 shops and 30 restaurants and the city wants to
                    ensure that capital infrastructure plans are prioritized effectively.</p>
                  <p>The challenge required registered teams of data scientists to analyze a year of anonymized time
                    series data on free WiFi usage, create a predictive model forecasting pedestrian usage, and to
                    identify influential factors on pedestrian usage through visualization.</p>
                </template>
              </HighlightCard>

              <HighlightCard :src="imgTwo" type="project" :typeFilter="selectedFilter">
                <!-- Card -->
                <template v-slot:title>
                  League of Legends<br> Predictive Model
                </template>
                <template v-slot:lead>
                  Project
                </template>
                <!-- Model -->
                <template v-slot:modelTitle>
                  League of Legends<br /> Statistical Analysis
                </template>
                <template v-slot:modelDate>
                  <b>In Progress:</b> July 2018 - Present<br>
                </template>
                <template v-slot:modelContent>
                  Personal project to query the Riot Games Developer API to collect, clean, and prepare League of Legends
                  data for statistical analysis.
                  <br />
                  <br />
                  <img src="../assets/img/portfolio/02.jpg" class="img-responsive">
                  <br />
                  <br />
                  Developed a <a href="https://github.com/haleemason/santa-monica"><b>Random Forest</b></a>
                  model in Python that ingests recent player match data and predicts lane assignment based on champion
                  information.
                </template>
              </HighlightCard>

              <HighlightCard :src="imgThree" type="capstone" :typeFilter="selectedFilter">
                <!-- Card -->
                <template v-slot:title>
                  Predicting Risk of Readmission <br> for Stroke Patients
                </template>
                <template v-slot:lead>
                  Capstone
                </template>
                <!-- Model -->
                <template v-slot:modelTitle>
                  Predicting Stroke Readmission<br /> Capstone Project
                </template>
                <template v-slot:modelDate>
                  <b>Completed:</b> August 2017<br>
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

              <HighlightCard :src="imgFour" type="spotlight" :typeFilter="selectedFilter">
                <!-- Card -->
                <template v-slot:title>
                  Microsoft Technical Spotlight <br> InCulture Inspire Article
                </template>
                <template v-slot:lead>
                  Spotlight
                </template>
                <!-- Model -->
                <template v-slot:modelTitle>
                  Microsoft Technical Spotlight<br /> InCulture Inspire Article
                </template>
                <template v-slot:modelDate>
                  <b>Interviewed:</b> May 2020
                </template>
                <template v-slot:modelContent>
                  <p>For Halee Mason, success means pursuing what you love.</p>

                  <div>
                    Meet Halee Mason, Lead Data Scientist at esports organization Cloud9. Learn how she defined her own
                    path by committing to the things she loves with steadfast determination.
                    <br>
                    <br>
                    Driven by her
                    passions, Halee Mason is redefining the toolkit for success in competitive gaming. She's the lead data
                    scientist for mythic esports organization Cloud9, where she's working on a new data insights platform
                    for the game League of Legends to help players glean insights from their performance, enhance their
                    skills, and ultimately see real results in their gameplay. <br><br> For Halee, defining her own path
                    and discovering her life's work wasn't always straightforward. But by following her heart and tapping
                    into her unwavering competitive spirit, she unlocked a fulfilling and passion-led life.
                    <br><br>
                    <iframe src="https:/\/www.youtube.com/embed/2oHFPBKe0Go?autoplay=1&mute=1" width="100%" height="338"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen></iframe>
                    <br><br>

                    Growing up, Halee was a self-proclaimed tomboy with a video game
                    obsession. Her adventurous free-spirit and mischievous tendencies defined her. "I wasn"t afraid
                    to get my hands dirty or jump in the mud", she recalls. Notably, Halee's hobbies all had one
                    thing in common: her drive to be the best at whatever she does. Her passions were the way she
                    distinguished herself. The other way Halee defined her own unique path? Gaming.
                    <br><br>
                    Esports started out as a way for Halee to "be really good at something". But they quickly consumed
                    her. Mastering the game didn't happen overnight. Dedicated to improving, Halee played relentlessly,
                    often late into the night. Gaming was a means of self-expression, skill-building, and community. She
                    even met her boyfriend through gaming, the relationship built upon years of synergy and hours of
                    collaborative online gameplay.
                    <br><br>
                    Halee didn't just play-she was also an early fan of the
                    competitive esports industry. Cloud9 was always the organization she connected to most deeply. It was
                    purely by coincidence that one night she found herself facing off against her favorite team. "I
                    was part of a diamond ranked 5v5 team and we got randomly matched up against the official Cloud9
                    roster", she remembers. Exciting gaming moments like this defined her and helped her realize her
                    talent.
                    <br><br>
                    However, it wasn't until after college that she was able to unite her passions.
                    Working as a clinical lab scientist, Halee found herself drawn to data analysis. She remembers being
                    immersed in the challenge of "improving a process or figuring out ways to help others." So,
                    she pursued an online master's in data science and transitioned into the field where she developed the
                    skills needed to become a data scientist. In her first role, at Elder Research, she learned how to
                    build predictive models, communicate with technical stakeholders, and translate data into business
                    value.
                    <br><br>
                    It was one day, by chance, that she saw the opportunity of a lifetime on Linkedin: Data
                    Scientist at Cloud9. Halee had never considered the idea that the esports industry needed data
                    scientists. Within a few hours, the position had received hundreds of applicants, but Halee wasn't
                    deterred. Monitoring the job incessantly, she submitted her own application that very same day. And to
                    her delight, she was contacted for an interview. Radiating confidence and competence, she was selected
                    for the coveted position.
                    <br><br>
                    Still, taking the job was a big risk. How could she upend her entire
                    life and move to Los Angeles, a place she had never even visited? What would life be like so far from
                    her tight-knit and supportive family in Virginia? "I had never even been to California
                    before", Halee says. But she bravely took the job and made the trek across the United
                    States.
                    <br><br>
                    Out west, Halee dove headfirst into work. Her mission: proving data's MVP status on the
                    esports playing field. "It was nerve-wracking. I knew that I was going into an organization where
                    there wasn't a team of other data scientists or analysts", she discloses. Her role was totally
                    uncharted territory for the industry. "For Cloud9, data science was new. I had to carve my own
                    way and shape how the team used data."
                    <br><br>
                    Never one to back down from a challenge, Halee stayed focused. How'd she push past nerves and doubt?
                    <br><br>
                    Knowing small gains add up and lead to the big wins, Halee applied data to everything from the draft
                    and champion selection to scrim
                    feedback. Her analytical approach and fresh perspective has gained support from the players as well as
                    Cloud9 founder, Jack Etienne. "She's really good, and she understands our world and what we
                    do", he says. "Her immense technical knowledge makes her a standout."
                    <br><br>
                    Halee is helping shed light on the value of data science for the massive esports industry-and beyond.
                    It all
                    comes from a place of love. She's determined to help the team reach new heights. She's also on the
                    frontlines of shifting the world's perception about what hobbies and careers are acceptable for women.
                    She hopes the next generation of girls feels fearlessly empowered to pursue what fascinates them, just
                    like she did. Her advice to young women who dream of following in her footsteps? "Don't be
                    scared. If this is something you're interested in, the best advice I can give you is just be
                    unapologetically you."
                    <br><br>
                  </div>
                </template>
              </HighlightCard>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>