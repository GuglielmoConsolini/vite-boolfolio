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
      projects: ''
    }
  },



  mounted(){

    axios
     .get('http://localhost:8000/api/projects')
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
