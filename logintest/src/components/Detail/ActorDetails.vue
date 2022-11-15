<template>
    <div>
        <WebHeader></WebHeader>
        <div v-for="actor in filteredActors" v-bind:key="actor.id">
            <h1>{{ actor.name }}</h1>
            <div class="info__img actor">
                
                <img :src="actor.profile_path" />
                <div class="info">
                    <p><strong>Birthday: </strong>{{ actor.birthday }}</p>
                    <p><strong>Biography: </strong>{{ actor.biography }}</p>
                    <p><strong>Known as: </strong>{{ actor.known_for_department }}</p>
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
    name: "Details",
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
        //filter function (returns the selected unit object ) 
        filteredActors: function () {
            return this.actors.filter(actor => actor.id.toLowerCase().match((this.$route.params.id.toLowerCase())));
        }
    },
    components: { WebHeader, WebFooter }
};
</script>

<style scoped>
.actor {
  margin: 50px;
}
.info__img {
  display: flex;
  margin-bottom: 60px;
}
h5 {
    margin-top: 30px;
    margin-bottom: 30px;
}
.info {
  margin-left: 30px;
  text-align: left;
}
.movies {
    display: flex;
    flex-wrap: wrap; 
}
.list__films {
    margin-right: 10px;
}
.each__film img {
    width: 280px;
}
.each__film p {
    width: 200px;
}
a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
}
</style>
