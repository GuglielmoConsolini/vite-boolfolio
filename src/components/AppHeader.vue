<script>
  export default {
    name: 'AppHeader'
  }
</script>


<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts">Contacts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>



<style scoped>
.navbar {
  padding: 1rem;
}

.navbar-brand {
  font-weight: bold;
}

.nav-link {
  font-size: 1.1rem;
}

.nav-link:hover {
  color: #007bff;
}

.navbar-nav .nav-item + .nav-item {
  margin-left: 1rem;
}
</style>

  