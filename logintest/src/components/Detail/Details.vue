<template>
    <div>
        <WebHeader></WebHeader>
        <div class="container content" v-for="action in filteredMovies" v-bind:key="action.id">
            <h1>{{action.title}}</h1>
            <div class="row moviedetails">
                <div class="col-lg-6 col-md-12 col-sm-12 pb-3 video">
                    <iframe
                        title="movie.title"
                        :src="action.video"
                        allowfullscreen
                        allow="autoplay"
                        frameborder="0"
                    ></iframe>
                </div>
            
                <div class="col-lg-6 col-md-12 col-sm-12 pb-3" >
                    <p>
                        <strong><i>ID: </i></strong>{{ action.id }}
                    </p>
                    <p>
                        <strong><i>Released: </i></strong>{{ action.release_date }}
                    </p>
                    <p>
                        <strong><i>Overview: </i></strong>{{ action.overview }}
                    </p>
                </div>
            </div>
        
            
        </div>
        <DetailsChild></DetailsChild>
        <WebFooter></WebFooter>
    </div>
</template> 

<script>

import WebHeader from "../WebHeader.vue";
import DetailsChild from "./DetailsChild.vue";
import WebFooter from "../WebFooter.vue";

export default {
    name: "Details",
    data: function () {
        return {
            dbapi: "http://localhost/customproject/api/apis.php/",
            actions: [],
            err: "",
            msg: ""
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
                    this.actions = data;
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
    computed: {
        //filter function (returns the selected unit object ) 
        filteredMovies: function () {
            return this.actions.filter(action => action.id.toLowerCase().match((this.$route.params.id.toLowerCase())));
        },
        filteredActors: function () {
            return this.actors.filter(actor => actor.movie_id.toLowerCase().match((this.$route.params.id.toLowerCase())));
        }
    },
    components: { WebHeader, DetailsChild, WebFooter }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

iframe {
  width: 650px;
  height: 450px;
  margin-right: 50px;
}
.content p {
  font-weight: 500;
  text-align: left;
}
.content {
  margin-top: 40px;
  text-shadow: 2px 2px 10px gray;
}
.moviedetails{
    margin-top:20px;
}
</style>
