<template>
<div>
  <nav>
      <router-link :to="'/admincreate'">Movie Create</router-link> |
      <router-link :to="'/adminupdate'">Movie Update</router-link> |
      <router-link :to="'/admindelete'">Movie Delete</router-link> |
      <router-link :to="'/actorcreate'">Actor Create</router-link> |
    <router-link :to="'/actorupdate'">Actor Update</router-link> |
    <router-link :to="'/actordelete'">Actor Delete</router-link> 
  </nav>
  </div>
</template>

<script>
export default{
    name: "Admin",
    components: { }
}
</script>

<style scoped>
nav{
  margin-top: 20px;
}

nav a{
  text-decoration: none;
  font-size: 22px;
}
</style>