<template>
    <div>
        <WebHeader></WebHeader>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-6 pb-3">
                    <img src="../../assets/placeholder.png" width="400px"/>
                </div>
            
                <div class="col-lg-6 col-sm-6 pb-3 content">
                    <p>
                        <strong><i>Username: </i></strong>{{ user.displayName }}
                    </p>
                    <p>
                        <strong><i>Email: </i></strong>{{ user.email }}
                    </p>
                    <p>
                        <strong><i>Created Date: </i></strong> {{ user.metadata.creationTime }}
                    </p>
                    <p>
                        <button class="btn1" @click="handleSignOut()">Log Out</button>
                    </p>
                    <p>
                        <button class="btn2" v-if="user.displayName === 'admin'" @click="adminrole()">Admin</button>
                    </p>
                </div>
            </div>
        </div>
        <WebFooter></WebFooter>
    </div>

</template>

<script>

import { useUser } from "@/composables/useUser";
import { onMounted, ref } from "vue";
import router from "@/router";
import WebHeader from "../WebHeader.vue";
import WebFooter from "../WebFooter.vue";

export default {
    name: "UserProfile",
    data: function () {
        return {};
    },
    setup() {
        const isLoggedIn = ref(false);
        const isAdmin = ref(false);
        const { getUser } = useUser();
        const { user } = getUser();
        
        const handleSignOut = () => {
            router.push("/login");
        };

        const adminrole = () => {
            router.push("/admincreate");
        };

        return { isAdmin,user,adminrole, handleSignOut}
    },
    components: { WebHeader, WebFooter }
};
</script>

<style scoped>
.container{
    margin-top:40px;
}

.content{
    text-align: left;
}
.btn1{
    font-size: 25px;
    background-color: chocolate;
}
.btn2{
    font-size: 25px;
    background-color: lightblue;
}
.btn2:hover{
    background-color: blue;
}
button:hover{
    background-color: red;
}
</style>