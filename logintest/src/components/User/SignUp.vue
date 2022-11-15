<template>
    <div>
       <WebHeader></WebHeader>
    
        <div class="signup">
            <h1>Register</h1>
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <label for="fullName">
                        <span>Full Name</span>
                        <input id="fullName" type="text" placeholder="Full Name" v-model="fullName" required/>
                    </label>
                </div>
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
                    <button type="submit">Sign Up</button>
                </div>
            </form>

            <div>
                <span>I'm already a member.</span>
                <p>
                    <router-link :to="{ name: 'SignIn', params:{} }">Sign In</router-link>
                </p>
            </div>
        </div>
        <WebFooter></WebFooter>
    </div>
</template>

<script>


import { ref } from "vue";
import router from "@/router";
import { useSignUp } from "@/composables/useSignUp";
import WebHeader from "../WebHeader.vue";
import WebFooter from "../WebFooter.vue";

export default{
    name: "SignUp",
    setup() {
        const { error, isPending, signup } = useSignUp();
        // const router = useRouter();
        const fullName = ref("");
        const email = ref("");
        const password = ref("");
        async function onSubmit() {
            //console.log({ fullName, email, password });
            await signup(email.value, password.value, fullName);
            if (!error.value) {
                router.push("/");
            }
        }
        return { fullName, email, password, error, isPending, onSubmit };
    },
    components: { WebHeader, WebFooter }
};
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
.signup {
  box-sizing: content-box;
  max-width: 500px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 100px;
  background: linear-gradient(to bottom right, rgb(24, 173, 116), #3498db);
}
.signup input {
  padding-left: 15px;
  margin-top: 20px;
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
.signup button:hover {
  background-color: rgb(94, 94, 226);
}
.signup button {
  text-align: center;
  font-size: 20px;
  width: 460px;
  height: 50px;
  color: #fff;
  background-color: green;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
}
.signup h1 {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(212, 199, 199);
  width: 430px;
  margin: 20px auto;
}
.component-item span {
  color: rgb(180, 32, 32);
}
#checkbox span {
  color: #000;
}
.change-route {
  text-align: center;
  margin-bottom: 30px;
}

</style>
