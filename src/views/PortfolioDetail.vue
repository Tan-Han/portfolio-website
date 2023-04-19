<template>
  <div v-if="portfolioDetails">
    <div class="content-box">
      <div class="project-headline">
        <h1>{{ portfolioDetails.title }}</h1>
      </div>
      <div class="info-box">
        {{ portfolioDetails.category }}
        Date: {{ portfolioDetails.date }}
      </div>
  
      <div class="project-content-one">
        <div class="project-img-box">
          <img :src="portfolioDetails.image" alt="image" width="200" height="200">
        </div>
        <div class="project-mini-description-box">
          {{ portfolioDetails.description }}
        </div>
      </div>
    
    </div>
    <div class="decription-box">
      <div class="description">
  
      </div>
      <div class="tech">
        {{ portfolioDetails.tech }}
      </div>
    </div>
  </div>

  <div class="loading" v-else>Loading...</div>
  
  <button @click="goBack()">Go Back</button>
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



</style>