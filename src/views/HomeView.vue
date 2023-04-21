<template>
  <!-- Welcome message -->
  <div class="content-box">
    <div class="welcometextbox">
      <div class="box">
        <h1>Velkommen</h1>
        <div class="description-box-home">
          <h2>Mit navn er <span>Tanya R. S. Hansen</span></h2>
          <h3 class="hyphen">Jeg er er <span>multimediedesigner</span>, og min passion er at føre mine kreative idéer ud i livet.</h3>
          <h3 class="hyphen">Jeg har arbejdet med flere projekter, bl.a. logo design, grafisk materiale til sociale medier, og design af hjemmesider. </h3>
        </div>
      </div>
    </div>
    <div class="imagebox">
      <img src="@/assets/img/Billede-Homepage.png" alt="Billede" class="img-home">
    </div>
  </div>
  <a href="#projects">
    <div class="arrow">
      <img src="@/assets/img/arrowdown.svg" alt="" class="arrow-img">
    </div>
  </a>
  <!-- Latest projects -->
  <div class="latest-projects" id="projects">
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
              <a :href="item.imagelink" :if="item.imagelink" target="_blank" class="icon-link">
                <i class="material-icons">image</i>
              </a>
            </template>
            <template v-if="item.github">
              <a :href="item.github" :if="item.github" target="_blank" class="icon-link">
                <i class="fa material-icons">&#xf092;</i>
              </a>
            </template>
            <template v-if="item.youtube">
              <a :href="item.youtube" :if="item.youtube" target="_blank" class="icon-link">
                <i class="material-icons">smart_display</i>
              </a>
            </template>
            <template v-if="item.link">
              <a :href="item.link" :if="item.link" target="_blank" class="icon-link">
                <i class="material-icons">open_in_new</i>
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
  max-width: 50%;
  display: flex;
  align-items: center;
  height: fit-content;
  padding-top: 1rem;
  padding-left: 1rem;
}

.welcometextbox .box {
  max-width: 90%;
}

.welcometextbox h1 {
  background: linear-gradient(333deg, #c9ebf2 0%, #cdbcaf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 75px;
}
.description-box-home {
  background-color: #dcd8d0;
  border-radius: 12px;
  padding: 30px;
  max-width: 100%;
  box-shadow: 2px 2px 5px var(--vt-c-shadow-beige);
}
.description-box-home h2 {
  color: var(--vt-c-darkgrey);
  font-size: 25px;
  font-weight: 600;
}

h2 span {
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 25px;
  text-decoration: underline 2px;
  text-decoration-color: var(--vt-c-beige-dark);
}

.description-box-home h3 {
  padding-top: 0.5rem;
  font-size: 14px;
  color: var(--vt-c-darkgrey);
  font-style: italic;
}

h3 span {
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline 2px;
  text-decoration-color: var(--vt-c-beige-dark);
}

.imagebox {
  width: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1rem;
  padding-right: 1rem;
}
.img-home {
  padding-top: 1rem;
  width: 65%;
}

.arrow {
  display: flex;
  justify-content: center;
  align-items: end;
  height: fit-content;
  width: 100%;
  padding-bottom: 0.5rem;
}

.arrow-img {
  width: 10%;
}

.arrow:hover {
background: linear-gradient(180deg, #ffffff00 0%, #DCD8D0 80%);
}

/* Latest projects */

.latest-projects {
  background-color: var(--vt-c-beige-light);
  padding: 30px 0;
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
  padding-bottom: 15px;
  color: var(--vt-c-white);
  text-shadow: 1.5px 1.5px 3px var(--vt-c-shadow-beige);
}

.projects {
  padding: 0;
}


/* Media Queries */

@media (min-width: 1300px) {
  .welcometextbox h1 {
    font-size: 95px;
    padding-top: 2rem;
  }

  .description-box-home {
    padding: 30px;
    }

  .description-box-home h2 {
    font-size: 30px;
    font-weight: 600;
  }

  h2 span {
    font-size: 30px;
  }

  .description-box-home h3 {
    padding-top: 1rem;
    font-size: 18px;
  }

  h3 span {
    font-size: 18px;
  }

  .imagebox {
    width: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 2rem;
  }
  .img-home {
    width: 70%;
    padding-top: 2rem;
  }

  .arrow {
    padding-bottom: 1rem;
  }

  .arrow-img {
    width: 12%;
  }
}

@media (max-width: 1110px){
  .welcometextbox h1 {
   font-size: 60px;
  }
  .description-box-home h2 {
    font-size: 20px;
    font-weight: 600;
  }

  .description-box-home h2 span {
    font-size: 20px;
    font-weight: 600;
  }
}

@media (max-width: 1000px){
  .welcometextbox h1 {
   font-size: 50px;
  }
  .description-box-home h2 {
    font-size: 18px;
    font-weight: 600;
  }

  .description-box-home h2 span {
    font-size: 18px;
    font-weight: 600;
  }
}

@media (max-width: 870px){

  .content-box {
    flex-direction: column-reverse;
  }
  .welcometextbox {
    max-width: 100%;
    padding-top: 2rem;
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }

  .welcometextbox .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .welcometextbox h1 {
    text-align: center;
    font-size: 75px;
  }

  .imagebox {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-right: 0;
  }
  .img-home {
    padding-top: 1rem;
    width: 40%;
  }

  .arrow {
   display: none;
  }
}


@media (max-width: 700px){
.welcometextbox h1 {
  text-align: center;
  font-size: 65px;
}
}

@media (max-width: 600px){
.welcometextbox h1 {
  text-align: center;
  font-size: 55px;
}
}

@media (max-width: 500px){
.welcometextbox h1 {
  text-align: center;
  font-size: 50px;
}
}

@media (max-width: 470px){
  .content-box {
    padding:  1rem;
  }

  .welcometextbox h1 {
    text-align: center;
    font-size: 45px;
  }
}

@media (max-width: 470px){
  .content-box {
    padding:  0;
  }
}




</style>