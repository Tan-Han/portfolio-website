<template>
  <div class="content-box">
    <div class="contact-headline">
      <h1>Kontakt mig</h1>
    </div>
    <div class="card-box">
      <div class="background">
        <div class="card shimmer">
          <div class="card-titel">
            <h2>Tanya Reedtz Shkodra Hansen</h2>
            <h1>Multimediedesigner</h1>
          </div>
          <div class="card-description">
            <div class="contact-info">
              <div class="phone">
                <div class="icon">
                  <a href="tel: +4531210715"><i class="material-icons">phone_android</i></a> 
                </div>
                <div class="info">
                  <a href="tel: +4531210715"><h4>+45 31 21 07 15</h4></a> 
                </div>
              </div>
              <div class="email">
                <div class="icon">
                  <a href="mailto: tanyalouisehansen@outlook.com"><i class="material-icons">email</i></a>
                </div>
                <div class="info">
                  <a href="mailto: tanyalouisehansen@outlook.com"><h4>tanyalouisehansen@outlook.com</h4></a>
                </div>
              </div>
              <div class="linkedin">
                <div class="icon">
                  <a href="https://www.linkedin.com/in/trshansen/" target="_blank"><i class="fa">&#xf08c;</i></a>
                </div>
                <div class="info">
                  <a href="https://www.linkedin.com/in/trshansen/" target="_blank"><h4>@trshansen</h4></a>
                </div>
              </div>
            </div>
            <div class="logo-box">
              <img src="@/assets/img/Logo-ny.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let show = ref(true);

</script>

<style>

.content-box {
  width: 100vw;
  height: fit-content;
}

.contact-headline {
  margin: 0 30% 6rem 30%;
  border-bottom: 1px solid var(--vt-c-beige-dark);
}

.contact-headline h1 {
  color: var(--vt-c-blue);
  text-shadow: 1px 1px 3px var(--vt-c-darkgrey);
  font-size: 60px;
  text-align: center;
  padding-top: 1rem;
}

.card-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.background {
  width: 700px;
  height: 400px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px var(--vt-c-shadow-beige);
}

.card {
  width: 700px;
  height: 400px;
  background-color: var(--vt-c-beige-light);
  padding: 1.5rem;
  border-radius: 12px;
  border: 10px solid var(--vt-c-beige-dark);
}

.shimmer {
  display:inline-block;
  -webkit-mask:linear-gradient(-60deg,#000 30%,#0005,#000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer 3.5s infinite;
  max-width: 700px;
}

.card-titel {
  height: 30%;
}

.card-titel h2 {
  font-size: 40px;
  color: var(--vt-c-white);
  text-shadow: 1.5px 1.5px 2px var(--vt-c-darkgrey);

}

.card-titel h1 {
  font-size: 30px;
  color: var(--vt-c-darkgrey);
}

.card-description {
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.contact-info {
  width: 50%;
}

.phone, .email, .linkedin {
  display: flex;
  padding: 10px 0;
}

.icon {
  display: flex;
  width: 30px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: var(--vt-c-white);
  text-shadow: 1px 1px 3px var(--vt-c-darkgrey);
}

.icon i {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

.icon a {
  font-size: 30px;
  color: var(--vt-c-white);
  text-shadow: 1px 1px 3px var(--vt-c-darkgrey);
}

.info {
  padding: 0 10px;
  height: 50px;
  display: flex;
  align-items: center;
}

.info h4 {
  font-size: 25px;
  color: var(--vt-c-darkgrey);
}

.logo-box {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
}

.logo-box img {
  box-shadow: 1px 1px 3px var(--vt-c-darkgrey);
  border-radius: 100%;
  width: 60%;
}


@keyframes shimmer {
  100% {-webkit-mask-position:left}
}

/* Media Queries */

@media (max-width: 1285px) {

  .contact-headline {
    margin: 0 25% 2rem 25%;
  }

  .contact-headline h1 {
    padding-top: 0.5rem;
  }

  .background {
    width: 600px;
    height: 350px;
    border-radius: 12px;
    box-shadow: 5px 5px 10px var(--vt-c-shadow-beige);
  }

  .card {
    width: 600px;
    height: 350px;
    background-color: var(--vt-c-beige-light);
    padding: 1.5rem;
    border-radius: 12px;
    border: 10px solid var(--vt-c-beige-dark);
  }

  .card-titel h2 {
    font-size: 30px;
    color: var(--vt-c-white);
    text-shadow: 1.5px 1.5px 2px var(--vt-c-darkgrey);

  }

  .card-titel h1 {
    font-size: 20px;
    color: var(--vt-c-darkgrey);
  }

  .info h4 {
    font-size: 20px;
  }
}

@media (max-width: 970px) {
  .contact-headline {
    margin: 0 20% 1rem 20%;
  }

  .contact-headline h1 {
    font-size: 50px;
  }

}

@media (max-width: 700px) {
  .contact-headline h1 {
    font-size: 40px;
  }

}

@media (max-width: 635px) {
  .card {
    width: 400px;
    height: 550px;
  }

  .background {
    width: 400px;
    height: 550px;
  }

  .shimmer {
    max-width: 400px;
  }

  .card-description {
    display: block;
  }

  .contact-info {
    width: fit-content;
  }

  .logo-box {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .card-titel {
    height: fit-content;
    padding-bottom: 1rem;
  }

  .card-titel h2 {
    font-size: 22px;
  }
}

@media (max-width: 580px) {
  .contact-headline {
    margin: 0 10% 1rem 10%;
  }

}

@media (max-width: 485px) {
  .card {
    width: 350px;
    height: 500px;
  }

  .background {
    width: 350px;
    height: 500px;
  }

  .shimmer {
    max-width: 350px;
  }

  .card-description {
    display: block;
  }

  .contact-info {
    width: fit-content;
  }

  .logo-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .logo-box img {
    width: 50%;
  }

  .card-titel {
    height: fit-content;
    padding-bottom: 1rem;
  }

  .card-titel h2 {
    font-size: 20px;
  }

  .card-titel h1 {
    font-size: 18px;
  }

  .info h4 {
    font-size: 15px;
    color: var(--vt-c-darkgrey);
  }
}

@media (max-width: 445px) {
  .contact-headline {
    margin: 0 0 1rem 0;
  }

}

@media (max-width: 370px) {
  .contact-headline h1 {
    font-size: 30px;
  }

}

</style>