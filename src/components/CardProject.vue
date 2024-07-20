<script>
 export default {
  name: 'CardProject',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      base_url: 'http://127.0.0.1:8000'
    }
  },
  
 };
</script>


<template>
  <div class="card mx-auto my-3">
    
    <template v-if="project.cover_image">
      <img v-if="!project.cover_image.startsWith('http')" class="card-img-top" :src="base_url + '/storage/' + project.cover_image" alt="" loading="lazy">
      <img v-else class="card-img-top" :src="project.cover_image" alt="" loading="lazy">
    </template>

    
    <div class="card-header bg-light">
      <h2 class="card-title">{{ project.name }}</h2>
    </div>

    
    <div class="card-body">
      <p class="card-text">{{ project.description }}</p>
      <p class="card-tech-header">Tecnologie:</p>
      <ul class="list-unstyled">
        <li v-for="technology in project.technologies" :key="technology.id">
          {{ technology.name }}
        </li>
      </ul>
      <p class="card-type">Tipo: {{ project.type.nome }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 700px;
}

.card-img-top {
  height: 450px; 
  object-fit: cover; 
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
</style>

