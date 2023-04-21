<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <a href="/">
      <img alt="TH logo" class="logo" src="@/assets/img/Logo-ny.svg" width="75" height="75" />
    </a>

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
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </RouterView>

<!-- <Transition mode="out-in" name="slide-fade"> -->  <!-- no name, slide-fade, bounce -->
<!--     <RouterView />
  </Transition>   -->


<footer class="rounded-lg shadow m-4">
  <div class="copyright-box p-4">
    <span> 
      <div class="cr-box">
        <p class="copyright">© 2023</p>
        <a href="/home" class="brand">TRSHansen</a>.
      </div>
    </span>
    <div class="footer-link-box">
      <ul>
          <li>
              <a href="/about">Om mig</a>
          </li>
          <li>
              <a href="/contact">Kontakt</a>
          </li>
      </ul>
    </div>
  </div>
</footer>


</template>

<style scoped>

/* Transitions start */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/* Transition end */

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

nav a:focus {
  color: var(--vt-c-white);
}

nav a:first-of-type {
  border: 0;
}

footer {
  margin: 100px 20px 30px 20px;
  background-color: var(--vt-c-beige-light);
  box-shadow: 2px 2px 5px var(--vt-c-shadow-beige);
}

.copyright-box {
  display: flex;
  align-items: center; 
  margin-left: 1rem;
  margin-right: 1rem;
}

.copyright-box span {
  width: 50%;
  display: flex;
  align-items: center;
}

.cr-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

span p {
  text-align: left;
  width: fit-content;
  font-size: 20px;
}

.brand {
  font-size: 20px;
  margin-left: 1rem;
}

.footer-link-box {
  width: 50%;
  display: flex;
}

.copyright-box ul {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.copyright-box ul li {
  margin-right: 1rem;
}

.copyright-box ul li a {
  font-size: 20px;
}

footer a:hover {
  color: var(--vt-c-blue);
  text-shadow: 1px 1px 1px #13424c;
}

/* Media Queries */

@media (min-width: 1285px) {

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

@media (max-width: 500px) {
  .copyright-box {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .copyright-box span {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span p {
    font-size: 20px;
    padding: 0 0.5rem;
  }

  .brand {
    font-size: 20px;
    margin-left: 0;
    padding: 0 0.5rem;
  }

  .footer-link-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .copyright-box ul {
    display: flex;
    justify-content: center;
    padding-bottom: 0.5rem;
    width: fit-content;
  }

  .copyright-box ul li {
    margin-right: 0;
    padding: 0 0.5rem;
  }

  .copyright-box ul li a {
    font-size: 25px;
  }




}

</style>
