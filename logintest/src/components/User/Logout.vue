<template>
    <h1>Logout Page</h1>

</template>

<script>
import router from "@/router";
import { useLogout } from '@/composables/useLogout'

export default {
    name: "Logout",
    
    setup(){

        const {error, logout} = useLogout();
        async function onLogout(){
            await logout();
            if(!error.value){
                router.push("/login");
            }
        }

        onLogout();
        
        return{};
    }
}
</script>