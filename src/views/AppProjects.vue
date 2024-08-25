<script>
  import axios from 'axios';  
  import CardProject from './CardProject.vue'
  
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
  <div class="projects-container">
    <h1>Progetti</h1>
    <div v-if="projects.length" class="projects-flex">
      <CardProject 
        v-for="project in projects" 
        :key="project.id" 
        :project="project"
      />
    </div>
    <div v-else>
      <p>No projects available</p>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  margin: 0 auto; 
  padding: 20px;
  max-width: 1200px;
}

.projects-flex {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
}

.projects-flex > * {
  flex: 0 0 calc(50% - 10px); 
  margin-bottom: 20px; 
}

.projects-flex > *:nth-child(odd) {
  margin-right: 10px; 
}

</style>

  