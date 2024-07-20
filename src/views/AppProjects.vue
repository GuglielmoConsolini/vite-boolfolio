<script>
  import axios from 'axios';  
  import CardProject from '../components/CardProject.vue'
  
  export default {
    name: 'AppProjects',
    components: {
      CardProject
    },
    data() {
      return {
        base_url: 'http://127.0.0.1:8000',
        projects: []
      };
    },
    mounted() {
      this.fetchProjects();
    },
    methods: {
      fetchProjects() {
       axios.get(`${this.base_url}/api/projects`)
       .then(response => {
        this.projects = response.data.projects.data; 
        console.log('Fetched projects:', this.projects); 
       })
        .catch(error => console.error('Error fetching projects:', error));
      }

    }
  };

</script>

<template>
    <div>
      <h1>Progetti</h1>
      <div v-if="projects.length">
        <CardProject v-for="project in projects" :key="project.id" :project="project" />
      </div>
      <div v-else>
        <p>No projects available</p>
      </div>
    </div>
</template>
  
  
  
  <style scoped>
  
  </style>
  