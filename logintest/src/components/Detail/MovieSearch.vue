<template>
<div>
  <WebHeader></WebHeader>

  <div class="container">
    <div class="row">
        <div class="col-lg-6 col-sm-6 pb-3">
            <label for="title"><strong>Movie Title: </strong></label>
            <input type="text" id="title" v-model="title" />
        </div>
        <div class="col-lg-6 col-sm-6 pb-3" v-for="movie in filteredMovies" v-bind:key="movie.id">
            <h2>{{movie.title}}</h2>
            <router-link :to="{ path:'/details/' + movie.id }">
                <img :src="movie.poster_path" />
            </router-link>
        
        </div>
    </div>
    
    

  </div>
  <WebFooter></WebFooter>
  </div>
</template>

<script>
import WebHeader from "../WebHeader.vue";
import WebFooter from "../WebFooter.vue";

export default {
    name: "MovieSearch",
    components: { WebHeader, WebFooter},
    data: function () {
        return {
            dbapi: "http://localhost/customproject/api/apis.php/",
            Movies: [],
            err: "",
            msg: "",
            title:""
        };
    },
    methods: {
        // GET
        get: function (url) {
            // GET request using fetch with error handling
            fetch(url)
                .then(response => {
                //turning the response into the usable data
                // return response.json( );
                if (!response.ok) {
                    this.err = response.status;
                    return response.ok;
                }
                else {
                    return response.json();
                }
            })
                .then(data => {
                //This is the data you wanted to get from url
                console.log("data: " + data);
                if (!data) { // !response.ok
                    this.msg = "Unsuccessful!";
                }
                else {
                    this.Movies = data;
                    this.msg = "Successful!";
                }
            })
                .catch(error => {
                // console.log("error" + error);
                this.err = error;
            });
        }
    },
    created: function () {
        this.get(this.dbapi);
    },
    computed:{
        filteredMovies: function () {
            return this.Movies.filter(movie =>
             movie.title.toLowerCase()==this.title.toLowerCase());
        }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container{
    margin-top: 40px;
}
</style>
