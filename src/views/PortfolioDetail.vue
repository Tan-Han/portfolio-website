<template>

<button @click="goBack()" class="back">Tilbage</button>
  <div v-if="portfolioDetails">
    <div class="content-box">
      <div class="project-headline">
        <h1>{{ portfolioDetails.title }}</h1>
      </div>
      <div class="info-box">
        <div class="date">
          Dato: {{ portfolioDetails.date }}
        </div>
        <div class="category">
          {{ portfolioDetails.category }}
        </div>
      </div>

      <div  class="project-box">
        <div class="project-img-box">
        <template v-if="portfolioDetails.video">
          <iframe :src="portfolioDetails.video" width="640" height="360" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </template>  

        <template v-else-if="portfolioDetails.large">
          <img :src="portfolioDetails.large" alt="image" class="portfolio-card-img">
        </template>        
        
        <template v-else="portfolioDetails.image">
          <img :src="portfolioDetails.image" alt="image" class="portfolio-card-img">
        </template>
        </div>

        <div class="description-box">
          <div class="project-description-box">
            <div class="description">
              <p class="description-text hyphen">
                {{ portfolioDetails.description }}
              </p>
            </div>
            <div class="extra">
              <div class="tech-detail">
                <h2 class="mini-headline">Programmer</h2>
                <p class="description-text">
                  {{ portfolioDetails.tech }}
                </p>
              </div>
              <div class="links-detail">
                <h2 class="mini-headline">Links</h2>
                <div class="icons">
                  <template v-if="portfolioDetails.imagelink">
                    <a :href="portfolioDetails.imagelink" target="_blank">
                      <i class="material-icons">image</i>
                    </a>
                  </template>
                  <template v-if="portfolioDetails.github">
                    <a :href="portfolioDetails.github" target="_blank">
                      <i class="material-icons">open_in_new</i>
                    </a>
                  </template>
                  <template v-if="portfolioDetails.youtube">
                    <a :href="portfolioDetails.youtube" target="_blank">
                      <i class="material-icons">smart_display</i>
                    </a>
                  </template>
                  <template v-if="portfolioDetails.link">
                    <a :href="portfolioDetails.link" target="_blank" class="icon-link">
                      <i class="material-icons">open_in_new</i>
                    </a>
                  </template>
                </div>
              </div> 
            </div>
          </div>
<!--           
          <div class="otherstuff">
          </div> -->
        </div>
      </div>
      
    </div>
  </div>

  <div class="loading" v-else>Loading...</div>
  
</template>


<script setup>
import { toRefs, computed } from 'vue'
import portfoliodb from '../modules/portfoliodb';

//part 4 - router to go back
import { useRouter } from 'vue-router'
const router = useRouter()

  // part 1 - get state from portfoliodb
  const { state  } = portfoliodb()

  // part 2 - get id from route
  const props = defineProps({
    id: String
  })
  const { id } = toRefs(props)

  // part 3 - filter state on id -> must be computed to work with v-for
  const portfolioDetails = computed(() => { 
    return state.value.find(item => item.id == id.value)
  })

  const goBack = () => {
    router.go(-1)
  } 
</script>

<style scoped>
.content-box {
  max-width: 100vw;
  height: fit-content;
  padding: 0 2rem;
}

.project-headline {
  margin: 0 20%;
  border-bottom: 1px solid var(--vt-c-beige-dark);
}

.project-headline h1 {
  color: var(--vt-c-blue);
  text-shadow: 1px 1px 3px var(--vt-c-darkgrey);
  font-size: 70px;
  text-align: center;
  /* padding-top: 1rem; */
}

.info-box {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.date {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  font-size: 11px;
  text-transform: uppercase;
}

.project-box {
  width: 100%;
  display: flex;
  padding-top: 2rem;
}

.project-img-box {
 width: 50%;
 max-height: 80vh;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 2rem 0;
 overflow: hidden;
}

.project-img-box img {
  height: 100%;
}

.description-box {
  display: flex;
  width: 50%;
  align-items: center;
  padding: 0 2rem;
}

.project-description-box {
  width: 100%;
  /* display: flex; */
}

.description {
  width: 100%;
  height: 50%;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: var(--vt-c-blue);
}

.extra {
  width: 100%;
  display: flex;
  align-items: center;
  height: fit-content;
}

.tech-detail {
 background-color: var(--vt-c-beige-dark);
 width: 50%;
 padding: 1rem 2rem;
 border-radius: 12px;
 margin-right: 0.5rem;
 min-height: 100px;
}

.links-detail {
  background-color: var(--vt-c-beige-light);
  width: 50%;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin-left: 0.5rem;
  min-height: 100px;
}

.links-detail a {
  text-decoration: none;
  color: var(--vt-c-darkgrey);
  font-weight: 600;
  font-size: 20px;
  transition: 0.4s;
  padding-right: 10px;
  text-shadow: 1px 1px 2px var(--vt-c-shadow-blue);
}

.links-detail a:hover {
  color: var(--vt-c-blue);
  text-shadow: 1px 1px 2px var(--vt-c-shadow-blue);
}

.back {
  width: fit-content;
  margin: 2rem 2rem 0 2rem;
}

.description-text {
  font-size: 18px;
  font-family: proxima-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.mini-headline {
  font-size: 22px;
}

/* Media Queries */

@media (max-width: 1000px) {
  .project-headline {
    margin: 0 15%;
  }

  .project-img-box {
    width: 50%;
    max-height: fit-content;
  }

  .project-img-box img {
    width: 100%;
    height: 100%;
  }
  .description-text {
    font-size: 14px;
    font-family: proxima-nova, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .mini-headline {
    font-size: 18px;
  }

}

@media (max-width: 860px) {
  
  .tech-detail, .links-detail {
    min-height: 105px;
  }
}

@media (max-width: 795px) {
  .project-box {
    flex-direction: column;
  }

  .project-headline {
    margin: 0 10%;
  }

  .project-headline h1 {
    font-size: 65px;
  }
  
  .project-img-box {
    width: 100%;
    padding: 0 4rem 1rem 4rem;
    height: fit-content;
  }

  .project-img-box img {
    width: auto;
    height: auto;
  }
  
  .description-box {
    width: 100%;
    padding: 0 2rem;
  }
 
  .tech-detail, .links-detail {
    min-height: 100px;
  }
}

@media (max-width: 660px) {
  .project-headline {
    margin: 0 5%;
  }

  .project-headline h1 {
    font-size: 60px;
  }
}

@media (max-width: 600px) {
  .project-headline {
    margin: 0 10%;
  }

  .project-headline h1 {
    font-size: 65px;
  }

  .back {
    padding: 10px 20px;
    margin: 3rem 3rem 0 2rem;
  }
}

@media (max-width: 550px) {
  .extra {
    flex-direction: column;
  }

  .tech-detail {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .links-detail {
    width: 100%;
    margin-left: 0;
  }
  
  .tech-detail, .links-detail {
    min-height: fit-content;
  }
}

@media (max-width: 515px) {
  .project-headline {
    margin: 2rem 10%;
  }

  .project-headline h1 {
    font-size: 60px;
  }
}

</style>