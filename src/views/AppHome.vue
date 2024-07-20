
<script>
  export default {
    name: 'AppHome'
  }
</script>

<template>
  <div class="container text-center mt-5">
    <div class="jumbotron p-4 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-4 fw-bold">Welcome to Our Website!</h1>
        <p class="fs-4">Discover amazing projects and learn more about us.</p>
        <div class="d-flex justify-content-center mt-4">
          <a href="/projects" role="button">
            <button class="prova">SUBSCRIBE</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>


.jumbotron {
  background: #f8f9fa;
}
.card {
  border: 1px solid #ddd;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.prova {
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(to right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a);
  background-size: 250%;
  background-position: left;
  color: #ffd277;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 1s;
  overflow: hidden;
}

.prova::before {
  position: absolute;
  content: "PROGETTI";
  color: #ffd277;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97%;
  height: 90%;
  border-radius: 8px;
  transition-duration: 1s;
  background-color: rgba(0, 0, 0, 0.842);
  background-size: 200%;
}

.prova:hover {
  background-position: right;
  transition-duration: 1s;
}

.prova:hover::before {
  background-position: right;
  transition-duration: 1s;
}

.prova:active {
  transform: scale(0.95);
}
</style>

  