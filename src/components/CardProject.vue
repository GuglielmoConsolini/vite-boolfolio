
<script>
  export default {
    name: 'CardProject',
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  };
</script>

<template>
    <div class="card">
      <div class="card-header">
        <h2>{{ project.name }}</h2>
      </div>
      <div class="card-body">
        <p>{{ project.description }}</p>
        
          <p>Linguaggio/Librerie</p>
          <li v-for="technology in project.technologies" :key="technology.id">
            {{ technology.name }}
          </li>

        <p class="card-type" >Tipo: {{ project.type.nome }}</p>
        
      </div>
    </div>
</template>
  
<style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .card-header {
    background-color: #f0f0f0;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .card-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }
  
  .card-body {
    padding: 15px;
  }
  
  .card-body p {
    margin-bottom: 10px;
  }
  
  .card-type {
    font-style: italic;
    color: #666;
  }
  li{
    list-style: none;
  }
</style>
  