<template>
  <div class="content-box">
    <p>gfsjfdsdjlfdlj</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let show = ref(true);

let showHide = () => {
  show.value = !show.value;
}


let dataStuff = 'Hello World';
let myArray = [1, 2, 3, 4, 5];
let products = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 }
];

</script>

<style>
.product{
  background-color: rgb(70, 178, 171);
  margin: 16px;
  padding: 16px;
}
.box1 {
  background-color: red;
}
</style>