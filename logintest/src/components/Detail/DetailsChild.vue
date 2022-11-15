<template>
    <div>
            <div class="container" >
                <div class="row actordetails">
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-3" v-for="actor in filteredActors" v-bind:key="actor.movie_id">
                        
                        <!-- <div class="movie-link"> -->
                        <div >
                            <router-link :to="'/actordetails/' + actor.id">
                                <img class="profilepic" :src="actor.profile_path" />
                            </router-link>
                            <p class="rank">
                                <strong>{{ actor.name }}</strong>
                            </p>
                        </div>
                        <!-- <div class="detail">
                            <p>
                                <strong>{{ action.title }}</strong>
                            </p>
                            <p><strong>Năm Phát Hành: </strong>{{ action.release_date}}</p>
                        </div> -->
                        <!-- </div> -->
                        
                    </div>
                </div>
            </div>
       
        
    </div>
</template> 

<script>


export default {
    name: "DetailsChild",
    data: function () {
        return {
            dbapi: "http://localhost/customproject/api/actorapis.php/",
            actors: [],
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
                    this.actors = data;
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
        filteredActors: function () {
            return this.actors.filter(actor => actor.movie_id.toLowerCase().match((this.$route.params.id.toLowerCase())));
        }
    },
    components: { }
};
</script>

<style scoped>
.actordetails{
    margin-top:50px;
}
.profilepic{
  width: 305px;
  height: 400px;
  border-radius: 5px;
}
</style>
