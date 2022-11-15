<template>
<div>
  <WebHeader></WebHeader>

  <div class="container">
    <h1>Action Movies</h1>
    <ActionMovies></ActionMovies>
  </div>
  <WebFooter></WebFooter>
  </div>
</template>

<script>
import WebHeader from '../WebHeader.vue';
import ActionMovies from './ActionMovies.vue';
import WebFooter from '../WebFooter.vue';

export default {
    name: "ActionDisplay",
    components: { WebHeader, ActionMovies, WebFooter }
}
</script>

<style scoped>
.container{
    margin-top: 40px;
}
</style>
