<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <WebHeader></WebHeader> -->
    <!-- <div v-if="user">Name: {{ user.displayName }}
    </div>
    <div @click="handleSignOut()">Đăng Xuất</div> -->
    <Home></Home>
  </div>
</template>

<script>
// @ is an alias to /src
// import WebHeader from '@/components/WebHeader.vue'
// import { useUser } from "@/composables/useUser";
// import router from "@/router";
import Home from '@/components/Home.vue'
export default {
  name: 'HomeView',
  components: {
    Home
  }
  // setup() {
  //   const { getUser } = useUser();
  //   const { user } = getUser();

  //   const handleSignOut = () => {
  //       router.push("/login");
  //   };
  //   return { user, handleSignOut }
  // },
};
</script>

