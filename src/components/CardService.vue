<template>
  <div class="card-container">
    <div class="card" v-for="service in services" :key="service.nome">
      <a href="#">
        <div class="card-img">
          <img :src="service.fotos" alt="" />
        </div>
        <div class="card-content">
          <h2>{{ service.nome }}</h2>
          <p>{{ service.descricao }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import serviceData from "@/core/mock/service.json"
import { ref } from "vue"

const services = ref(serviceData)
</script>

<style scoped>
/* serviços */
.card-container {
  padding: 80px 0;
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: var(--yellow);
  padding: 80px 0;
}

.card {
  margin: 10px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  width: 330px;
  overflow: hidden;
  /* position: relative; */
}
.card-img {
  width: 100%;
  height: 200px;
}

.card-img img {
  height: 100%;
  width: 100%;
  display: block;
  margin: auto;
  object-fit: cover;
}

.card-content {
  /* top: 0;
    left: 0; */
  /* position: absolute; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* opacity: 0; */
  /* transition: 0.6s;   */
  color: var(--white);
  background-color: var(--black);
  text-align: center;
  padding: 10px;
}
/* .card-content:hover {
    opacity: 1;
} */
.card-content h2 {
  font-size: 20pt;
  margin-bottom: 15px;
}
.card-content p {
  font-size: 12pt;
  margin-bottom: 15px;
  /* padding-left: 17%; */
}
/* .card-content>* {
    transform: translateY(25px);
    transition: transform 0.6s;
}

.card-content:hover>* {
    transform: translateY(0px);
} */
</style>
