<template>
<div>
  <WebHeader></WebHeader>
  <div class="container">
    <h1>Popular Movies</h1>
    <PopularMovies></PopularMovies>
  </div>
  <WebFooter></WebFooter>
  </div>
</template>

<script>
import PopularMovies from './PopularMovies.vue';
import WebHeader from '../WebHeader.vue';
import WebFooter from '../WebFooter.vue';

export default {
    name: "PopularDisplay",
    components: { PopularMovies, WebHeader, WebFooter }
}
</script>

<style scoped>

.container{
    margin-top: 40px;
}
</style>
