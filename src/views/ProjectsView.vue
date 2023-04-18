<template>
  <div class="projects">
   <!--  {{ state }} -->
   <div>
    <!-- part 0 -->
    <div :class="{ active: isActive }">tt</div>

    <!-- part 1 -->
      <h1>Portfolio</h1>
      <p>Here is a list of my projects</p>
      
      <br>
    
      <div>
        <p>Future filter on category or a search bar</p>
        <p>Future sort by date or completed</p>
      </div>
   
   </div> 
   <br>

   <div class="portfolio-container">
   <div class="portfolio-item"  v-for="item in state" :key="item">
      <p class="category" :class="item.category">
        {{ item.category }}
      </p>
      <div class="card-description-box">
        <h4>{{ item.title }}</h4>
        <p>
          {{ item.description }}
        </p>
      </div>
      <div class="imgbox">
        <img :src="item.image" alt="image" class="portfolio-card-img">
      </div>

      <div class="link-box">
        <a :href="item.github">
          <i style='font-size:24px' class='fab'>&#xf092;</i>
        </a>
        <a :href="item.github">
          <i style='font-size:24px' class='fab'>&#xf431;</i>
        </a>
        
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


</style>
