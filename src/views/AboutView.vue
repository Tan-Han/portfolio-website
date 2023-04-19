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
          <div class="picture-box">
            <img src="@/assets/img/CV Billede 5.png" alt="">
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores, non iure cum exercitationem dolor ipsum corrupti obcaecati a. Repellendus exercitationem autem pariatur commodi dolor repellat placeat veritatis animi sunt!</p>
          <div class="btn-box">
            <button class="cv-btn">Download CV</button>
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
  height: auto;
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

.picture-box {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.picture-box img {
  height: auto;
  width: auto;
  border-radius: 100%;
}

.btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.cv-btn {
  height: fit-content;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 600;
}

.linked-btn {
  height: fit-content;
  padding: 5px 15px;
  margin-right: 10px;
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

</style>
