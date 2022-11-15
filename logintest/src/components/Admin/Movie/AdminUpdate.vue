<template>
<div>
  <WebHeader></WebHeader>
  <Admin></Admin>
  
  <div class="container update">
    <h2>Movie Update</h2>
    <form @submit.prevent>
      <fieldset>
        <div class="row">
          <div class="col-6">
            <label for="id">ID: </label><input type="number" name="id" id="id" v-model="mid"><p/>
            <label for="title">Title: </label><input type="text" name="title" id="title" v-model="tt"><p/>
            <label for="type">Type: </label><input type="text" name="type" id="type" v-model="ty"><p/>
            <label for="video">Video: </label><input type="text" name="video" id="video" v-model="vd"><p/>
          </div>

          <div class="col-6">
            <label for="poster_path">Poster: </label><input type="text" name="poster" id="poster" v-model="pt"><p/>
            <label for="overview">Overview: </label><input type="text" name="overview" id="overview" v-model="ov"><p/>
            <label for="release_date">Release Date: </label><input type="text" name="release" id="release" v-model="rd"><p/>
            <label for="vote_average">Vote Average: </label><input type="text" name="vote_average" id="vote_average" v-model="va"><p/>
          </div>
        
          <div class="col-12" style="text-align:center;">
            <button @click="updateData(mid, tt, ty, vd, pt, ov, rd, va)">Update</button><p/>
          </div>
        </div>
      </fieldset>
    </form>
    <p>Message : {{ msg }}</p>
    <p>Error: {{ err }}</p>    
  </div>
  <WebFooter></WebFooter>
</div>
</template>

<script>
import WebHeader from '@/components/WebHeader.vue';
import WebFooter from '@/components/WebFooter.vue';
import Admin from '../Admin.vue';
// export component
export default{
    name: "AdminCreate",
    data: function () {
        return {
            dbapi: "http://localhost/customproject/api/apis.php/",
            err: "",
            msg: "",
            mid: "",
            tt: "",
            ty: "",
            vd: "",
            pt: "",
            ov: "",
            rd: "",
            va: ""
        };
    },
    methods: {
        // POST
        updateData: function (mid, tt, ty, vd, pt, ov, rd, va) {
            // POST request using fetch with error handling
            var url = this.dbapi + "/title/" + tt;
            var self = this;
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: mid,
                    title: tt,
                    type: ty,
                    video: vd,
                    poster_path: pt,
                    overview: ov,
                    release_date: rd,
                    vote_average: va
                })
            };
            fetch(url, requestOptions)
                .then((response) => {
                // TODO: add handling for response.ok
                //turning the response into the usable data
                return response.json();
            })
                .then((data) => {
                //This is the data you wanted to get from url
                self.msg = "successful";
            })
                .catch((error) => {
                self.err = error;
            });
        }
    },
    components: { WebHeader, WebFooter, Admin }
}
</script>

<style scoped>
.container{
  text-align: left;
}

input {
  margin: 5px
}

label {
  font-size: 20px;
}

.update {
  box-sizing: content-box;
  max-width: 1000px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 40px;
  background: linear-gradient(to bottom right, rgb(223, 119, 209), #1cd1d1);
}
.update input {
  padding-left: 15px;
  margin-top: 0px;
  margin-bottom: 20px;
  width: 460px;
  height: 50px;
  border-radius: 5px;
  border: none;
}

.update button:hover {
  background-color: rgb(94, 94, 226);
}

.update button {
  text-align: center;
  font-size: 20px;
  width: 460px;
  height: 50px;
  color: #fff;
  background-color: rgb(26, 103, 85);
  border: none;
  border-radius: 5px;
}
.update h2 {
  color: #000;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(212, 199, 199);
  width: 430px;
  margin: 20px auto;
}

p {
  color: rgb(180, 32, 32);
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}
</style>  