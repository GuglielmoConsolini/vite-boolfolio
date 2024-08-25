<script>
 import axios from 'axios';
 
 export default {
   name: 'CardProject',
   props: {
     project: {
       type: Object,
       required: false  
     }
   },
   data() {
     return {
       base_url: 'http://127.0.0.1:8000',
       loadedProject: null  
     };
   },
   created() {
     if (!this.project) {
       this.fetchProject();
     } else {
       this.loadedProject = this.project;
     }
   },
   methods: {
     fetchProject() {
       const projectId = this.$route.params.id;
       axios.get(`${this.base_url}/api/projects/${projectId}`)
         .then(response => {
           this.loadedProject = response.data.project;
         })
         .catch(error => console.error('Error fetching project:', error));
     }
   }
 };
 </script>
 
 <template>
   <div class="card mx-auto my-3" v-if="loadedProject">
     
     <template v-if="loadedProject.cover_image">
       <img v-if="!loadedProject.cover_image.startsWith('http')" class="card-img-top" :src="base_url + '/storage/' + loadedProject.cover_image" alt="" loading="lazy">
       <img v-else class="card-img-top" :src="loadedProject.cover_image" alt="" loading="lazy">
     </template>
 
     <div class="card-header bg-light">
       <h2 class="card-title">{{ loadedProject.name }}</h2>
     </div>
 
     <div class="card-body">
       <p class="card-text">{{ loadedProject.description }}</p>
       <p class="card-tech-header">Tecnologie:</p>
       <ul class="list-unstyled">
         <li v-for="technology in loadedProject.technologies" :key="technology.id">
           {{ technology.name }}
         </li>
       </ul>
       <p class="card-type">Tipo: {{ loadedProject.type.nome }}</p>
       <router-link 
        :to="{ name: 'Project', params: { id: loadedProject.id } }" 
        class="btn btn-primary"
      >
        Vai al Dettaglio
      </router-link>
       

     </div>
   </div>
   <div v-else>
     <p>Loading project...</p>
   </div>
 </template>
 
 <style scoped>
 .card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.project-card {
  max-width: 350px; 
  margin: 0 auto; 
}

.card-img-top {
  height: 500px; 
  object-fit:contain;
}

.card-header {
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
  color: #343a40;
}

.card-body {
  padding: 1rem;
}

.card-text {
  margin-bottom: 1rem;
  color: #495057;
}

.card-tech-header {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-type {
  font-style: italic;
  color: #6c757d;
}

ul {
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}

.card-link {
  text-decoration: none;
  color: inherit;
}
 </style>
 
