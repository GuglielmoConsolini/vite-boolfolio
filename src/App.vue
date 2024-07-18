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

    <div v-for="project in projects.data" >
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <li v-for="technology in project.technologies" :key="technology.id">
            {{ technology.name }}
      </li>
      <li>
            {{ project.type.nome }}
      </li>
    </div>
  </div>
    
</template>

<style scoped>

</style>
