<template>
    <div>
       <WebHeader></WebHeader>
    
        <div class="login">
            <h1>Log In</h1>
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <label for="email">
                        <span>Email</span>
                        <input id="email" type="email" placeholder="example@gmail.com" v-model="email" required/>
                    </label>
                </div>
                <div class="row">
                    <label for="password">
                        <span>Password</span>
                        <input id="password" type="password" placeholder="..." autocomplete="current-password" v-model="password" required/>
                    </label>
                </div>
                <div class="row" id="btn">
                    <button type="submit">Sign In</button>
                </div>
            </form>

            <div>
                <span>I'm a new user</span>
                <p>
                    <router-link :to="{ name: 'SignUp', params:{}}">Sign Up</router-link>
                </p>
            </div>
        </div>
        <WebFooter></WebFooter>
    </div>
</template>

<script>


import { ref } from "vue";
import router from "@/router";
import { useSignIn } from "@/composables/useSignIn";
import WebHeader from "../WebHeader.vue";
import WebFooter from "../WebFooter.vue";

export default {
    name: "SignIn",
    setup() {
        const { error, isPending, signin } = useSignIn();
        // const router = useRouter();
        const email = ref("");
        const password = ref("");
        async function onSubmit() {
            await signin(email.value, password.value);
            if (!error.value) {
                router.push("/");
            }
        }
        return { email, password, error, isPending, onSubmit };
    },
    components: { WebHeader, WebFooter }
}
</script>

<style scoped>
label {
  font-size: 20px;
}
.components {
  display: flex;
  flex-direction: column;
  border-top: 2px;
  padding-left: 20px;
}
.login {
  box-sizing: content-box;
  max-width: 500px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 100px;
  background: linear-gradient(to bottom right, rgb(223, 119, 209), #1cd1d1);
}
.login input {
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 40px;
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
.login button:hover {
  background-color: rgb(94, 94, 226);
}

.login button {
  text-align: center;
  font-size: 20px;
  width: 460px;
  height: 50px;
  color: #fff;
  background-color: rgb(26, 103, 85);
  border: none;
  border-radius: 5px;
}
.login h1 {
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
#fb {
  width: 300px;
  height: 30px;
  text-decoration: underline;
  color:rgb(64, 64, 188) ;
  cursor: pointer;
}
#btn1 {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
#route {
  color:green
}
</style>