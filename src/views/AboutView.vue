<template>
  <div class="about">
    <div class="h-box">
      <div class="about-headline">
        <h1>Om mig</h1>
      </div>
    </div>
    <div class="about-content">
      <div class="video-cv-box">
        <div class="video-box">
          <iframe width="565" height="325" src="https://www.youtube.com/embed/RPa4h2ccP0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="video-cv"></iframe>
        </div>
      </div>
      <div class="about-text-box">
        <div class="box">
          <div class="flex w-100 justify-center align-items-center">
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
            
            <a href="https://indd.adobe.com/view/publication/750000b5-b029-4e7a-919b-e5e3f74aa297/1/publication-web-resources/pdf/CV.pdf" download="CV.pdf" target="_blank">
              <button class="cv-btn">Download CV</button>
            </a>
            <a href="/contact" target="_blank">
              <button class="cv-btn">Kontakt mig</button>
            </a>
            <a href="https://www.linkedin.com/in/trshansen/" target="_blank">
              <button class="cv-btn">LinkedIn</button>
            </a>

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
  border-bottom: 1px solid #cdbcaf;
  max-width: 100%;
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 3rem;
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
  height: fit-content;
  margin: 0 1rem;
}

.about-text-box {
  max-width: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 1rem;

}

.about-text-box .box {
  max-width: 95%;
}

.text-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  background-color: var(--vt-c-beige-light);
  padding: 20px 30px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 2px 2px 5px var(--vt-c-shadow-beige);
}

.about-text-box h2 {
  color: var(--vt-c-darkgrey);
  font-size: 40px;
  text-align: center;
  padding-bottom: 1rem;
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
  width: 100%;
  height: fit-content;
  flex-wrap: wrap;
}

.btn-box a {
  margin: 0.5rem 0.5rem;
}

.cv-btn {
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 600;
  width: 160px;
}

.video-cv-box {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3.75rem;
}

.video-box {
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-cv {
  box-shadow: 1px 1px 5px var(--vt-c-shadow-beige);
  border: 10px solid var(--vt-c-beige-dark);
}

/* Media Queries */

@media (min-width: 1281px) {

  .about h1 {
    font-size: 80px;
  }

  .text {
    padding: 25px 35px;
  }

  .about-text-box h2 {
    font-size: 45px;
  }

  .picture-box {
    margin-bottom: 2rem;
    padding: 10px;
  }

  .picture-box img {
    height: 175px;
  }

  .video-cv-box {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 7rem;
  }
}

@media (max-width: 1280px) {

  .about-text-box h2 {
    font-size: 25px;
  }
  
}

@media (max-width: 1250px) {

  .video-cv-box {
    margin-top: 0;
  }

}

@media (max-width: 1080px) {

.about-text-box h2 {
  font-size: 20px;
}

}

@media (max-width: 965px) {

  .about-content {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .about-text-box {
    max-width: 100%;
    padding-left: 0;
    justify-content: center;
  }

  .video-cv-box {
    margin-top: 2rem;
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 830px) {
  .about-headline {
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 2rem;
}

.about h1 {
  font-size: 60px;
}
}

@media (max-width: 590px) {
  .about-headline {
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 2rem;
  }

 .about h1 {
  font-size: 50px;
 }
}

@media (max-width: 500px) {
  .about-headline {
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 2rem;
  }
  
  .about-text-box h2 {
    font-size: 16px;
  }
}

</style>
