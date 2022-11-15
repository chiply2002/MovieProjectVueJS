<template>
  <div> 
    <WebHeader></WebHeader>
    <div class="container">
    
      <div class="movietype">
        <h2>Popular Movies</h2>
        <router-link :to="'/populardisplay'" class="movielist"><p>See all ></p></router-link>
        <PopularMovies></PopularMovies>
      </div>
      
      <div class="movietype">
        <h2>Action Movies</h2>
        <router-link :to="'/actiondisplay'" class="movielist"><p>See all ></p></router-link>
        <ActionMovies></ActionMovies>
      </div>

      <div class="movietype">
        <h2>Fiction Movies</h2>
        <router-link :to="'/fictiondisplay'" class="movielist"><p>See all ></p></router-link>
        <FictionMovies></FictionMovies>
      </div>

      <WebFooter></WebFooter>
    </div>
  </div>
</template>

<script>
import WebFooter from './WebFooter.vue';
import PopularMovies from './Detail/PopularMovies.vue';
import ActionMovies from './Detail/ActionMovies.vue';
import FictionMovies from './Detail/FictionMovies.vue';
import WebHeader from './WebHeader.vue';

export default {
    name: "Home",
    
    components: { WebFooter, PopularMovies, ActionMovies, FictionMovies, WebHeader }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.movietype{
  margin-top: 40px;
}
.movielist{
  text-align: right;
  text-decoration: none;
  color: #F6F8FA;
}
.movielist:hover{
  color: blueviolet;
}
</style>