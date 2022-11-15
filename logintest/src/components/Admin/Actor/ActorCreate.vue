<template>
<div>
  <WebHeader></WebHeader>
  <Admin></Admin>
  <div class="container create">
    <h2>Actor Create</h2>
    <form @submit.prevent>
      <fieldset>
        <div class="row">
          <div class="col-lg-6 col-sm-12 pb-3">
            <label for="id">ID: </label><input type="number" name="id" id="id" v-model="aid"><p/>
            <label for="movie_id">Movie ID: </label><input type="number" name="movie_id" id="movie_id" v-model="mid"><p/>
            <label for="name">Name: </label><input type="text" name="name" id="name" v-model="nm"><p/>
            <label for="known_for_department">Known as: </label><input type="text" name="known_for_department" id="known_for_department" v-model="kfd"><p/>
          </div>

          <div class="col-lg-6 col-sm-12 pb-3">
            <label for="profile_path">Profile Image: </label><input type="text" name="profile_path" id="profile_path" v-model="pp"><p/>
            <label for="character">Character: </label><input type="text" name="character" id="character" v-model="ct"><p/>
            <label for="biography">Biography: </label><input type="text" name="biography" id="biography" v-model="bg"><p/>
            <label for="birthday">Birthday: </label><input type="text" name="birthday" id="birthday" v-model="bd"><p/>
          </div>

          <div class="col-12" style="text-align:center;">
            <button @click="create(aid, mid, nm, kfd, pp, ct, bg, bd)">Create</button><p/>
          </div>
        </div>
      </fieldset>
    </form>
    <!-- <p>Message : {{ msg }}</p>
    <p>Error: {{ err }}</p>     -->
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
            dbapi: "http://localhost/customproject/api/actorapis.php/",
            aid: "",
            mid: "",
            nm: "",
            kfd: "",
            pp: "",
            ct: "",
            bg: "",
            bd: ""
        };
    },
    methods: {
        // POST
        create: function (aid, mid, nm, kfd, pp, ct, bg, bd) {
            // POST request using fetch with error handling
            var url = this.dbapi;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: aid,
                    movie_id: mid,
                    name: nm,
                    known_for_department: kfd,
                    profile_path: pp,
                    character: ct,
                    biography: bg,
                    birthday: bd
                })
            };
            fetch(url, requestOptions)
                .then(response => {
                // TODO: add handling for response.ok
                //turning the response into the usable data
                return response.json();
            })
                .then(data => {
                //This is the data you wanted to get from url
                this.msg = "successful";
            })
                .catch(error => {
                this.err = error;
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
.components {
  display: flex;
  flex-direction: column;
  border-top: 2px;
  padding-left: 20px;
}
.create {
  box-sizing: content-box;
  max-width: 1000px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 40px;
  background: linear-gradient(to bottom right, rgb(223, 119, 209), #1cd1d1);
}
.create input {
  padding-left: 15px;
  margin-top: 0px;
  margin-bottom: 20px;
  width: 460px;
  height: 50px;
  border-radius: 5px;
  border: none;
}
#btn {
  padding-bottom: 40px;
  margin-top: 30px;
  margin-left: 20px;
}
.create button:hover {
  background-color: rgb(94, 94, 226);
}

.create button {
  text-align: center;
  font-size: 20px;
  width: 460px;
  height: 50px;
  color: #fff;
  background-color: rgb(26, 103, 85);
  border: none;
  border-radius: 5px;
}
.create h2 {
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
.change-route {
  margin-bottom: 30px;
  text-align: center;
}
.component-item span {
  color: rgb(180, 32, 32);
}
p {
  color: rgb(180, 32, 32);
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}
</style>  