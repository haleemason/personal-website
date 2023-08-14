<script setup>
import { ref, onMounted } from 'vue'
import DogProfile from '../components/DogProfile.vue'
import { VueInstagramEmbed } from 'vue-instagram-embed'
const isLoading = ref(true)
onMounted(() => {
 setTimeout(() => {
  isLoading.value = false
 }, 350)
})
</script>




<template>
     <span>
    <!-- Use the Vue Instagram Embed component -->
    <vue-instagram-embed
     class="instagram-media"
     link="https://www.instagram.com/p/CtnE-RAOAVe/?img_index=5"
    />
   </span>
 <DogProfile v-if="$route.params.dogName === 'samira'">
  <template v-slot:modelTitle>Samira <br />Timeless Desert Rose TKA </template>
  <template v-slot:modelDate>
   <p><b>Date of Birth:</b> September 18th, 2023<br /></p>
  </template>
  <template v-slot:modelContent>
   <p>Samira, or "Sami" for short, is just getting started!</p>
   <li><b>April 2nd, 2023:</b> S.T.A.R. Puppy Award</li>
   <li><b>June 11th, 2023:</b> AKC Novice Trick Dog Title</li>
   <li><b>June 11th, 2023:</b> AKC Intermediate Trick Dog Title</li>
   <li><b>June 11th, 2023:</b> AKC Advanced Trick Dog Title</li>
   <li>Currently training for CGC and Agility!</li>
   <br />
   <li><b>Sire:</b> Brody</li>
   <li><b>Dam:</b> Trouble</li>
   <br />
   <br />
   <h4><a href="https://www.timelessaussies.com/">Timeless Desert Rose TKA</a></h4>
   <!-- <img src="../assets/img/portfolio/01a.jpg" class="img-responsive"> -->
   <br />
  </template>
 </DogProfile>

 <DogProfile v-if="$route.params.dogName === 'cammi'">
  <template v-slot:modelTitle>Cammi<br />MACH Snowbelts Charming Invitation MXB MJS OF</template>
  <template v-slot:modelDate><b>Date of Birth:</b> September 2005 - October 2021<br /> </template>
  <template v-slot:modelContent>
   <b>November 2nd, 2008:</b> MACH
   <br />
   <p>
    Cammi, also known as Snowbelts Charming Invitation, graced our lives for an impressive 16 years, leaving behind a legacy that continues to shine. Her journey was marked by remarkable achievements, positioning her as a true champion within our family. An avid competitor, Cammi & Halee dedicated their weekends to the pursuit of excellence in the world of Agility, competing in the highest categories. As a testament to her prowess, Cammi & Halee were invited to participation in the prestigious 2008 AKC Agility Nationals in Concord, North Carolina.
    <br /><br />
    On November 2nd, 2008, at the Clarion Canine Obedience Club Agiliy trial, Cammi attained the
    coveted MACH title, marking a milestone of exceptional accomplishment. Her journey to this
    achievement was paved with dedication, evident in her collection of 20 double Q's and an
    impressive tally of over 900 points. These accomplishments allowed Cammi to earn the MACH title,
    which requires both 20 double Q's and 750 points.
    <br /><br />
    Cammi's role as the leader of the pack was undeniable, a role acknowledged and respected by her
    fellow companions, Savannah & Vee. Cammi possessed an unbridled enthusiasm for the world of
    agility, consistently exuberant to be competeing each week.
    <br /><br />
    Bearing the distinguished Snowbelt Aussie lineage of Briarbrook's Justin Case, affectionately
    known as "Justin" and Snowbelt's Engraved Invitation, fondly referred to as "DeeDee" Cammi
    inherits their admirable traits. Her strong work ethic, a characteristic synonymous with her
    breed, the Australian Shepherd, is evident in her enthusiasm to engage and her persistent desire
    to please.
    <br /><br />
    Cammi's legacy serves as a testament to her exceptional journey, embodying the spirit of
    dedication, intelligence, and companionship that she shared with all fortunate enough to know
    her.
   </p>
   <li><b>Sire:</b> Briarbrook's Justin Case</li>
   <li><b>Dam:</b> Snowbelt's Engraved Invitation</li>

   <br />
   <h4>
    <a href="http://www.snowbeltaussies.com/">MACH Snowbelts Charming Invitation MXB MJS OF</a>
   </h4>
   <br />
   <img src="../assets/img/dogs/cammi/cammi_collage.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_tunnel.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_best_junior.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_ix.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_startline.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_ringside.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_face.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_stack.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_pout.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_gotcha.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_puppy.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_teen.jpg" class="img-responsive" />
   <br />
   <img src="../assets/img/dogs/cammi/cammi_pals.jpg" class="img-responsive" />
   <br />
  </template>
 </DogProfile>

 <DogProfile v-if="$route.params.dogName === 'savannah'">
  <template v-slot:modelTitle>Savannah <br />Snowbelts Engraved Invitation AX AXJ NF</template>
  <template v-slot:modelDate><b>Date of Birth:</b> December 2006 - July 2023 </template>
  <template v-slot:modelContent>
   <ul>
    <p>
     Savannah was eager to please and showed a lot of promise! Unfortunately her competing career
     was cut short when I went off to college.
    </p>
    <br />
    <li><b>Sire:</b> ROMXI CH Briarbrook Sharp Dressed Man</li>
    <li><b>Dam:</b> CH Snowbelts Engraved Invitation</li>
   </ul>
   <h4>
    <a href="http://www.snowbeltaussies.com/SB-Agility_Dogs.htm"
     >Snowbelts Engraved Invitation AX AXJ NF</a
    >
   </h4>
   <img src="../assets/img/dogs/savannah_tunnel.jpg" class="img-responsive" />

  </template>
 </DogProfile>

 <DogProfile v-if="$route.params.dogName === 'vee'">
  <template v-slot:modelTitle
   >Vee<br />
   Snowbelts Charmed Life AX AXJ
  </template>
  <template v-slot:modelDate><b>Date of Birth:</b> December 2008 - May 2020 </template>
  <template v-slot:modelContent>
   <ul>
    <li>
     Vee was content running alongside her handler and wasn't the fastest, but tried her hardest.
    </li>
    <br />
    <li><b>Sire:</b> ROMXI CH Briarbrook Sharp Dressed Man</li>
    <li><b>>Dam:</b> CH Sunnyrains The Charmed One</li>
   </ul>
   <img src="../assets/img/dogs/vee/vee_jump.jpg" class="img-responsive" />
   <h4><a href="http://www.snowbeltaussies.com/">Snowbelts Charmed Life AX AXJ</a></h4>
   <div><br /><br /></div>
  </template>
 </DogProfile>

 <DogProfile v-if="$route.params.dogName === 'meggie'">
  <template v-slot:modelTitle>Meggie </template>
  <template v-slot:modelDate>September 1998 - Feburary 17th, 2006 </template>
  <template v-slot:modelContent>
   <p>
    Meggie text goes here
   </p>
   <br />
   <br />
   <img src="../assets/img/dogs/meggie/meggie_face.jpg" class="img-responsive" />
   <br />
   <br />
  </template>
 </DogProfile>
</template>
