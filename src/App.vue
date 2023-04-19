<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="TH logo" class="logo" src="@/assets/img/Logo-ny.svg" width="75" height="75" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/projects">Projekter</RouterLink>
        <RouterLink to="/about">Om mig</RouterLink>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </nav>
    </div>
  </header>

  <!-- must do this for fade out to work -->
  <RouterView v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </RouterView>

<!-- <Transition mode="out-in" name="slide-fade"> -->  <!-- no name, slide-fade, bounce -->
<!--     <RouterView />
  </Transition>   -->


<footer class="rounded-lg shadow m-4">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm sm:text-center ">© 2023 <a href="/home" class="hover:underline">TRSHansen</a>.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
        <li>
            <a href="/about" class="mr-4 hover:underline md:mr-6 ">Om mig</a>
        </li>
        <li>
            <a href="/contact" class="hover:underline">Kontakt</a>
        </li>
    </ul>
    </div>
</footer>


</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}


/* v-transition end */

header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  background-color: #dcd8d0;
  padding: 0 2rem;
  /* position: fixed;
  top: 0;
  z-index: 5; */
  box-shadow: 0 0 15px var(--vt-c-shadow-beige);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--vt-c-blue);
  text-shadow: 1px 1px 1px #13424c;
}

nav a.router-link-exact-active:hover {
  color: #93b8c0;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:hover {
  color: var(--vt-c-blue);
  text-shadow: 1px 1px 1px #13424c;
}

nav a:first-of-type {
  border: 0;
}

footer {
  margin: 100px 20px 30px 20px;
  background-color: var(--vt-c-beige-light);
  box-shadow: 2px 2px 5px var(--vt-c-shadow-beige);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    min-height:100px ; /* Added */
    place-items: center; 
    /* padding-right: calc(var(--section-gap) / 2); */ /* changed */
    width: 100%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;  /* changed */
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
  }
}

</style>
