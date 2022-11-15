<template>
<div>
  <WebHeader></WebHeader>
  
  <div class="container">
    <h1>Fiction Movies</h1>
    <FictionMovies></FictionMovies>
  </div>

  <WebFooter></WebFooter>
  </div>
</template>

<script>
import FictionMovies from './FictionMovies.vue';
import WebHeader from '../WebHeader.vue';
import WebFooter from '../WebFooter.vue';

export default {
    name: "FictionDisplay",
    components: { FictionMovies, WebHeader, WebFooter }
}
</script>

<style scoped>
.container{
    margin-top: 40px;
}
</style>
