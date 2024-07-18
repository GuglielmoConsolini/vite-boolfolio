<script>

import axios from 'axios';

export default{
  name: 'App',

  data(){
    return {
      projects: ''
    }
  },



  mounted(){

    axios
     .get('http://localhost:8000/api/projects')
     .then(response => {
       console.log(responde);
       this.projects = response.data.projects
     })
  }
}


</script>

<template>
  <h1>Ciao</h1>
    
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
