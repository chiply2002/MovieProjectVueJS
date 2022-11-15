<template>
  <div class="home">
    <div>
      <Slideshow></Slideshow>
      <img id="logopizza" src="../assets/logo.png"/>
      
      <nav>
        <router-link :to="'/'">Home</router-link>
        <router-link :to="'/populardisplay'">Popular</router-link>
       
          <router-link :to="'/actiondisplay'" class="dropdown"
          id="typeDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false">Type</router-link>

          <div class="dropdown-menu" aria-labelledby="typeDropdown" style="background-color: darkgray;">
            <div><router-link id="route" :to="'/actiondisplay'" class="menu">Action</router-link></div>
           <div><router-link id="route" :to="'/fictiondisplay'" class="menu">Fiction</router-link></div>
          </div>
        
        <router-link :to="'/search'">Search</router-link>
        
      </nav>
    </div>

    <div class="signup-login">
      <div v-if="!isLoggedIn">
        <router-link to="/login" class="horder">Sign In</router-link>
      </div>
      <div v-if="isLoggedIn" class="userprofile">
        <div class="nav-item dropdown">
          <div
            class="active info dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>Welcome,</strong>
            <span><i><strong><router-link id="route" :to="'/user/' + user.uid ">{{ user.displayName }}</router-link></strong></i></span>
            <img id="avatar" src="../assets/placeholder.png" alt="">
          </div>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div id="profile"><router-link id="route" :to="'/user/' + user.uid ">My Profile</router-link> </div>
            <div id="signout" @click="handleSignOut()">Logout</div>
            <!-- <div id="signout"><router-link id="route" :to="'/logout'">Logout</router-link></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { useUser } from "@/composables/useUser";
import { onMounted, ref } from "vue";
import router from "@/router";
import Slideshow from "./Slideshow.vue";

export default {
    name: "WebHeader",
    data: function () {
        return {};
    },
    setup() {
        const isLoggedIn = ref(false);
        const isAdmin = ref(false);
        const { getUser } = useUser();
        const { user } = getUser();
        onMounted(() => {
            if (user) {
              isLoggedIn.value = true;
              if (user.displayName === "admin") {
                  isAdmin.value = true;
              }
              else{return;}
            }
            else {
                isLoggedIn.value = false;
            }
        });
        onMounted(() => {
                
        });
        const handleSignOut = () => {
            router.push("/logout");
        };
        return { user, isLoggedIn, isAdmin, handleSignOut };
    },
    components: { Slideshow }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

@media all and (max-width:620px) {
  nav {
    left: 0; 
  }
}

#logopizza{
	position: absolute; 
	top: 0; 
	left: 10px; 
	width: 120px;
	height: auto;
}

nav {
	height:3.2em; 
	line-height:3em; 
	font-size: 18px; 
	list-style-type: inherit;
	background-color: transparent;
  position: absolute; 
	top: 0.5em; 
	right: 25em; 
	width: auto; 
	padding: 4px;
}

nav a.router-link-exact-active{
  color: red;
}

nav a {
	float:left; 
	width:8em; 
	text-decoration:none; 
	color:white; 
	text-align: center; 
	text-transform: uppercase;
	font-family: 'Roboto Slab', serif;
  position: relative;
}

nav a:hover {
	color:orangered; 
	opacity: 1;
	transform: scaleY(1);
	visibility: visible;
}

nav a:hover,
nav a:focus,
nav a:active {
  cursor: pointer;
}
nav a:hover:after,
nav a:focus:after,
nav a:active:after {
  width: 100%;
}
nav a:after {
  content: '';
  position: absolute;
  left: 0;
  top: 40px;
  bottom: -3px;
  height: 2px;
  background-color: #000;
  width: 0;
  transition: width 0.4s;
}

.horder{
  text-decoration: none;
	position: absolute; 
	top: 8px; 
	right: 10px; 
  color: #ffffff;
  padding: 16px 40px;
  background: #CD5C5C;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  display: inline-block;
	text-align: center; 
	text-transform: uppercase;
	font-family: 'Roboto Slab', serif;
}

.horder:hover{
	background: #800000;
}

.signup-login {
  display: flex;
  align-items: flex-start;
  justify-content: end;
  width: 400px;
  position: absolute; 
  top: 8px; 
	right: 10px; 
}
.signup-login div {
  margin-left: 20px;
}

.signup-login button a {
  text-decoration: none;
  color: #fff;
}

span {
  margin-left: 5px;
  color: yellow;
}
#signout:hover {
  color: rgb(61, 168, 132);
}
#signout {
  cursor: pointer;
  font-size: 15px;
  margin-top: 8px;
}
#profile {
  cursor: pointer;
  font-size: 15px;
}
#route {
  text-decoration: none;
  color: black;
}
#route:hover {
  color: orangered;
}
#avatar {
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>