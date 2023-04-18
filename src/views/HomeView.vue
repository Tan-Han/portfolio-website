<template>
  <!-- Welcome message -->
  <div class="content-box">
    <div class="welcometextbox">
      <div>
        <h1>Velkommen</h1>
        <h2 class="navn">Mit navn er...</h2>
        <h2>Tanya R. S. Hansen</h2>
        <h3 class="miniheadline">Jeg er...</h3>
        <h3>Multimediedesigner, og min passion er at føre mine kreative idéer ud i livet.</h3>
        <h3>Jeg har arbejdet med flere projekter, bl.a. logo design, grafisk materiale til sociale medier, og design af hjemmesider. </h3>
      </div>
    </div>
    <div class="arrow">
    <img src="@/assets/img/arrowdown.svg" alt="" class="arrow-img">
    </div>
    <div class="imagebox">
      <img src="@/assets/img/Billede---Homepage.png" alt="Billede" class="img-home">
    </div>
  </div>

  <!-- Latest projects -->
  <div class="latest-projects">
    <div class="latest-headline">
      <h2>Seneste projekter</h2>
    </div>

    <div class="projects">
      <!--  {{ state }} -->
      <div>
        <!-- part 0 -->
        <div :class="{ active: isActive }"></div>      
      </div> 
      <br>

      <div class="portfolio-container">
        <div class="portfolio-item"  v-for="item in state" :key="item">
          <div class="imgbox">
            <img :src="item.image" alt="image" class="portfolio-card-img">
          </div>

          <div class="card-description-box">
            <p class="category" :class="item.category">
              {{ item.category }}
            </p>
            <h4>{{ item.title }}</h4>
            <p>
              {{ item.description }}
            </p>
          </div>

          <div class="link-box">
            <template v-if="item.link">
              <a :href="item.link" :if="item.link" target="_blank">
                <i style='font-size:24px' class='fas'>&#xf360;</i>
              </a>
            </template>
            <template v-if="item.github">
              <a :href="item.github" :if="item.github" target="_blank">
                <i style='font-size:24px' class='fab'>&#xf092;</i>
              </a>
            </template>
            <template v-if="item.youtube">
              <a :href="item.youtube" :if="item.youtube" target="_blank">
                <i style='font-size:24px' class='fab'>&#xf431;</i>
              </a>
            </template>
            
            <p>
              TechStack: {{ item.tech }}
            </p>
            <p>
              Date: {{ item.date }}
            </p>
          </div>
          <!-- part 3 -->
          <div class="btn-box">
            <RouterLink :to="{ name: 'portfoliodetail', params: { id: item.id }}"><button class="see-more">Se mere</button></RouterLink>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // part 0 - showcase class binding with isActive
  import { ref } from 'vue'
  // part 1 - get state from portfoliodb
  import portfoliodb from '../modules/latestportfoliodb';

  const isActive = ref(true)

  // part 1 - get state from portfoliodb
  const { state  } = portfoliodb()
</script>

<style scoped>

/* Welcome message  */

.content-box {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

.welcometextbox {
  max-width: 45%;
  display: flex;
  align-items: center;
  height: 75vh;
}

.welcometextbox div {
  max-width: 100%;
}

.welcometextbox h1 {
  color: var(--vt-c-blue);
  text-shadow: 1px 1px 3px var(--vt-c-darkgrey);
  font-size: 70px;
}
.welcometextbox h2 {
  color: var(--vt-c-darkgrey);
  font-size: 20px;
  padding-top: 0.5rem;
}

.welcometextbox .navn {
  font-style: italic;
}

.welcometextbox h3 {
  padding-top: 0.5rem;
  font-size: 16px;
  color: var(--vt-c-darkgrey);
}

.welcometextbox .miniheadline {
  font-style: italic;
  padding-top: 1rem;
}

.imagebox {
  width: 45%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.img-home {
  width: 70%;
}

.arrow {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 75vh;
  width: 10%;
  padding-bottom: 0rem;
}

.arrow-img {
  width: 100%;
}

.arrow-img:hover {
  opacity: 50%;
}

/* Latest projects */

.latest-projects {
  background-color: var(--vt-c-beige-light);
  padding: 0 70px;
}

.latest-headline {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--vt-c-beige-dark);
}

.latest-headline h2 {
  font-size: 40px;
  font-weight: 600;
  padding-top: 30px;
  padding-bottom: 15px;
  color: var(--vt-c-beige-dark);
  text-shadow: 1px 1px 1.5px var(--vt-c-darkgrey);
}

.projects {
  padding: 0;
}




</style>