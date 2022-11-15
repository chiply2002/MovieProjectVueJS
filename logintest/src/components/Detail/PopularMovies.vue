<template>
  <div>
    <div class="container">
      <div class="row" id="popular">
        <div class="col-lg-3 col-sm-6 pb-3" v-for="action in filteredType" v-bind:key="action.id">
          <router-link :to="'/details/' + action.id">
            <div class="movie-link">
              <div class="poster">
                <img :src="action.poster_path" />
                <!-- <p class="rank">
                  <strong>POPULARITY: {{ action.id }}</strong>
                </p> -->
              </div>
              <div class="detail">
                <p>
                  <strong>Vote: {{ action.vote_average }}/10</strong>
                </p>
                <p><strong>Release Date: </strong>{{ action.release_date}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "PopularMovies",
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
        filteredType: function () {
            return this.actions.filter(action => action.type.toLowerCase().match('popular'));
        }
    },
    components: {}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#popular{
  margin-top:20px;
}

.movie-item {
  margin: 4px;
}
.poster img {
  width: 250px;
  height: 380px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid darkgrey;
}
.detail {
  background-color: rgba(0,0,0,0.6);
  color: #fff;
  width: 83%;
  height: 100px;
  display: none;
  position: absolute;
  left: 25px;
  right: 0;
  bottom: 0;
  transition: 1s;
  padding: 5px;
}
.movie-link {
  position: relative;
  margin-top: 30px;
}
.movie-link:hover{
  transform: scale(1.1,1.1);
  -moz-transform: scale(1.1,1.1);
  -webkit-transform: scale(1.1,1.1);
  -o-transform: scale(1.1,1.1);
  -ms-transform: scale(1.1,1.1);
}
.movie-link:hover .detail {
  display: block;
}
.rank {
  position: absolute;
  top: 0;
  left: 28px;
}
.poster > p {
  background: linear-gradient(
    to bottom right,
    rgb(8, 218, 183),
    rgb(53, 197, 24)
  );
  color: rgb(170, 32, 32);
  width: 105px;
  height: 55px;
  text-align: center;
  text-transform: uppercase;
}

</style>