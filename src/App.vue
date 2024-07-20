<script>

import axios from 'axios';
import CardProject from './components/CardProject.vue';


export default{
  name: 'App',
  components: {
   CardProject
  },

  data(){
    return {
      base_url: 'http://127.0.0.1:8000',
      projects: ''
    }
  },



  mounted(){

    axios
     .get(`${this.base_url}/api/projects`)
     .then(response => {
       console.log(response);
       this.projects = response.data.projects
     })
     

     console.log(this.projects)
  }
}


</script>

<template>

<div>
    <h1>Progetti</h1>

    <CardProject v-for="project in projects.data" :project="project"/>

  </div>
    
</template>

<style scoped>

</style>
