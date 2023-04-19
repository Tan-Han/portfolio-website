<template>
  <div class="projects">
   <!--  {{ state }} -->
   <div>
    <!-- part 0 -->
    <div :class="{ active: isActive }"></div>

    <!-- part 1 -->
      <div class="project-headline">
        <h1>Mine projekter</h1>
      </div>
      <br>
    
      <div class="filter-box">
        <button type="button" class="filter-btn">All categories</button>
        <button type="button" class="filter-btn">Web</button>
        <button type="button" class="filter-btn">Fotografi</button>
        <button type="button" class="filter-btn">Grafisk design</button>
        <button type="button" class="filter-btn">Video</button>
      </div>
   
   </div> 
   <br>

   <div class="portfolio-container">
   <div class="portfolio-item"  v-for="item in state" :key="item">
      <div class="imgbox">
        <img :src="item.image" alt="image" class="portfolio-card-img">
      </div>

      <div class="card-description-box">
        <h5 class="category" :class="item.category">
          {{ item.category }}
        </h5>
        <h4>{{ item.title }}</h4>
        <p>
          {{ item.description }}
        </p>
      </div>

      <div class="link-box">
        <template v-if="item.link">
          <a :href="item.link" :if="item.link" target="_blank">
            <i style='font-size:24px' class='fas'>&#xf03e;</i>
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
          Programmer: {{ item.tech }}
        </p>
        <p>
          Dato: {{ item.date }}
        </p>
      </div>
      <!-- part 3 -->
      <div class="btn-box">
         <RouterLink :to="{ name: 'portfoliodetail', params: { id: item.id }}"><button class="see-more">Se mere</button></RouterLink>
      </div>     
    </div>
  </div>


  </div>
</template>

<script setup>
// part 0 - showcase class binding with isActive
import { ref } from 'vue'
// part 1 - get state from portfoliodb
import portfoliodb from '../modules/portfoliodb';

const isActive = ref(true)

// part 1 - get state from portfoliodb
const { state  } = portfoliodb()

</script>
 
<style>
/* .projects {
  padding-top: 100px;
} */

.project-headline {
  margin: 0 10%;
  border-bottom: 1px solid var(--vt-c-beige-dark);
}

.projects h1 {
  color: var(--vt-c-beige-light);
  text-shadow: 1px 1px 3px var(--vt-c-darkgrey);
  font-size: 70px;
  text-align: center;
  padding-top: 30px;
}

.filter-box {
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 3rem;
}


.filter-btn {
  background-color: var(--vt-c-blue);
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
}

.filter-btn:focus {
  background-color: var(--vt-c-white);
  border: 2px solid var(--vt-c-blue);

}

</style>
