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
          <button type="button" class="filter-btn" @click="changeCategory('All')">All categories</button>
          <button type="button" class="filter-btn" @click="changeCategory('Web')" value="Web">Web</button>
          <button type="button" class="filter-btn" @click="changeCategory('Fotografi')" value="Fotografi">Fotografi</button>
          <button type="button" class="filter-btn" @click="changeCategory('Grafisk design')" value="Grafisk design">Grafisk design</button>
          <button type="button" class="filter-btn" @click="changeCategory('Video')" value="Video">Video</button>
          <button type="button" class="filter-btn" @click="changeCategory('UX')" value="UX">UX</button>
        </div>
    </div> 
   <br>

    <div class="portfolio-container">
      <div class="portfolio-item"  v-for="item in state" :key="item">
        <div class="imgbox">
          <RouterLink :to="{ name: 'portfoliodetail', params: { id: item.id }}" class="img-link">
            <img :src="item.image" alt="image" class="portfolio-card-img">
          </RouterLink>
        </div>

        <div class="card-description-box">
          <h5 class="category" :class="item.category">
            {{ item.category }}
          </h5>
          <RouterLink :to="{ name: 'portfoliodetail', params: { id: item.id }}" class="card-headline">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <p class="hyphen">
            {{ item.description }}
          </p>
        </div>

        <div class="link-box">
          <template v-if="item.imagelink">
            <a :href="item.imagelink" target="_blank" class="icon-link">
              <i class="material-icons">image</i>
            </a>
          </template>
          <template v-if="item.github">
            <a :href="item.github" target="_blank" class="icon-link">
              <i class="fa">&#xf092;</i>
            </a>
          </template>
          <template v-if="item.youtube">
            <a :href="item.youtube" target="_blank" class="icon-link">
              <i class="material-icons">smart_display</i>
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
let { state  } = portfoliodb()
const originalState = state.value;

// Filter
  var selector 

  function changeCategory(category) {
    if(category != "All"){
      selector = category
      state.value = originalState.filter(filterFunc)
    } else{
      console.log("meep")
      state.value = originalState
    }
  }


  var filterFunc = (item) => { 
			var category = item.category;
			
			if(category === selector) {
				return true;
			} else {
				return false;
			};
		};

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
  margin: 10px;
  font-size: 18px;
  font-weight: 500;
}

.filter-btn:focus {
  background-color: var(--vt-c-white);
  border: 2px solid var(--vt-c-blue);

}

/* Media Queries */

@media (max-width: 810px) {
  .projects h1 {
    font-size: 55px;
  }
}

@media (max-width: 635px) {
  .projects h1 {
    font-size: 40px;
  }
}

@media (max-width: 460px) {
  .projects h1 {
    font-size: 35px;
  }
}

</style>
