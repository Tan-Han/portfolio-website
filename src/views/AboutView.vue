<template>
  <div class="about">
    <div class="about-headline">
      <h1>Om mig</h1>
    </div>
    <div class="about-content">
      <div class="video-cv-box">
        <iframe width="480" height="270" src="https://www.youtube.com/embed/RPa4h2ccP0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="video-cv"></iframe>
    </div>
      <div class="about-text-box">
        <div>
          <div class="flex w-100 justify-center">
            <div class="picture-box">
              <img src="@/assets/img/CV-Billede-5.png" alt="">
            </div>
          </div>
          <div class="text-box">
            <div class="text">
              <h2 class="navn">Tanya Reedtz Shkodra Hansen</h2>
              <p>Med en kombination af akademisk viden og praktisk erfaring er jeg, på trods af min status som nyuddannet, udstyret med gode kompetencer inden for digital markedsføring og grafisk design.</p>
              <p>Med en indsigtsfuld og kreativ fremgangsmåde, brænder jeg for at levere engagerende budskaber til kunder og interessenter, gennem visuel kommunikation.</p>
              <p>Med et åbent sind og stor entusiasme tager jeg gerne imod nye udfordringer, og fører projekter til ende med stor eftertænksomhed og kreativitet.</p>
            </div>
          </div>
          <div class="btn-box">
            
            <a href="@/assets/CV.pdf" download="CV.pdf">
              <button class="cv-btn">Download CV</button>
            </a>
            <a href="https://www.linkedin.com/in/trshansen/"><button style='font-size:23px' class="linked-btn"><i class='fab fa-linkedin-in'></i></button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// part 0 - showcase class binding with isActive
import { ref } from 'vue'

const isActive = ref(true)

</script>

<style>
.about {
  width: 100vw;
  height: fit-content;
  /* padding-top: 100px; */
}

.about-headline {
  margin: 0 30%;
  border-bottom: 1px solid var(--vt-c-beige-dark);
}

.about h1 {
  color: var(--vt-c-blue);
  text-shadow: 1px 1px 3px var(--vt-c-darkgrey);
  font-size: 70px;
  text-align: center;
  padding-top: 10px;
}

.about-content {
  display: flex;
  align-items: center;
  height: 53vh;
  padding-top: 50px;
}

.about-text-box {
  max-width: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
}

.about-text-box div {
  max-width: 100%;
}

.text-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  background-color: var(--vt-c-beige-light);
  padding: 30px;
  width: 80%;
  border-radius: 12px;
  box-shadow: 2px 2px 5px var(--vt-c-shadow-beige);
}

.about-text-box h2 {
  color: var(--vt-c-darkgrey);
  font-size: 40px;
  text-align: center;
}

.about-text-box p {
  padding-bottom: 10px;
}

.picture-box {
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  background: linear-gradient(333deg, #c9ebf2 0%, #cdbcaf 100%);
  border-radius: 100%;
  padding: 8px;
  box-shadow: 1px 1px 5px var(--vt-c-shadow-beige);
}

.picture-box img {
  height: 125px;
  width: auto;
  border-radius: 100%;
}

.btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.cv-btn {
  height: fit-content;
  padding: 10px 20px;
  margin-right: 1rem;
  font-size: 18px;
  font-weight: 600;
}

.linked-btn {
  height: fit-content;
  padding: 5px 15px;
}

.video-cv-box {
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-cv {
  box-shadow: 1px 1px 5px var(--vt-c-shadow-beige);
  border: 10px solid var(--vt-c-beige-dark);
}

@media (max-width: 1280px) {
  
}

</style>
