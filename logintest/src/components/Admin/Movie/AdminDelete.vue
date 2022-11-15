<template>
<div>
  <WebHeader></WebHeader>
  <Admin></Admin>

  <div class="container delete">
    <h2>Movie Delete</h2>
    <form @submit.prevent>
        <div class="row">
            <div class="col-12" style="text-align:center;">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" v-model="tt">
                <button @click="deleteData(tt)"> Delete </button><p/>
            </div>
        </div>
    </form>
    <p>Message : {{ msg }}</p>
    <p>Error: {{err}}</p>
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
    name: "PersonsDelete",
    data: function () {
        return {
            dbapi: "http://localhost/customproject/api/apis.php/",
            err: "",
            msg: "",
            tt: ""
        };
    },
    methods: {
        // DELETE
        deleteData: function (tt) {
            // POST request using fetch with error handling
            var url = this.dbapi + "/title/" + tt;
            const requestOptions = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: tt
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

label {
  font-size: 20px;
}

.delete {
  box-sizing: content-box;
  max-width: 500px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 40px;
  background: linear-gradient(to bottom right, rgb(223, 119, 209), #1cd1d1);
}
.delete input {
  padding-left: 15px;
  margin-top: 0px;
  margin-bottom: 20px;
  width: 460px;
  height: 50px;
  border-radius: 5px;
  border: none;
}

.delete button:hover {
  background-color: rgb(94, 94, 226);
}

.delete button {
  text-align: center;
  font-size: 20px;
  width: 460px;
  height: 50px;
  color: #fff;
  background-color: rgb(26, 103, 85);
  border: none;
  border-radius: 5px;
}
.delete h2 {
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
  