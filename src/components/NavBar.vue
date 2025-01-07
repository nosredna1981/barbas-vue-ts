<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <img
        class="navbar-toggler"
        src="imagem/barbershop-logo.jpg"
        height="40"
        alt=""
      />

      <button
        class="navbar-toggler bg-yellow"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="index.html">INÍCIO</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="index.html#services"
              >SERVIÇOS</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="index.html#about"
              >SOBRE NÓS</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="index.html#contact"
              >CONTATO</RouterLink
            >
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="login.html">ENTRAR</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style>
.navbar {
  width: 100%;
  backdrop-filter: blur(10px);
  background-color: var(--shadow);
  /* display: flex;
    align-items: flex-start;
    padding: 20px;
    flex-direction: row;
    justify-content: space-around; */
  /* background-color: var(--black); */
  /* position: sticky;
    top: 0 */
}
/* 
.nav-link {
    list-style: none;
    display: flex;
    justify-content: flex-start;
} */

/*.nav-links li {
        margin-right: 20px; 
    }*/

.navbar .nav-link {
  text-decoration: none;
  color: var(--white);
  font-size: 1.5rem;
  padding: 5px 15px;
  transition: 0.3s ease;
  border-bottom: solid 4px transparent;
}
.navbar .nav-link:hover,
.navbar .nav-link:active {
  /* background-color: var(--yellow);
        border-radius: 5px;*/
  color: var(--yellow);
  border-bottom: solid 4px var(--yellow);
  transition: 0.3s ease;
}
</style>
