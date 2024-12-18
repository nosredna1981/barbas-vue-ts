<template>
  <section>
    <form
      action="#"
      id="formPersonAdd"
      class="bg-yellow container p-5"
      enctype="multipart/form-data"
    >
      <h1 class="text-center text-custom">Cadastre-se:</h1>

      <div class="mb-2">
        <label for="nameInput" class="form-label text-custom">Nome:</label>
        <div class="input-group">
          <span class="input-group-text bg-black text-white"
            ><i class="fas fa-user"></i
          ></span>
          <input
            type="text"
            class="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            name="nome"
            required
            placeholder="Digite seu Nome"
            v-model="person.name"
          />
        </div>
        <div id="nameHelp" class="form-text"></div>
      </div>

      <div class="mb-2">
        <label for="telInput" class="form-label text-custom">Telefone:</label>
        <div class="input-group">
          <span class="input-group-text bg-black text-white"
            ><i class="fas fa-phone"></i
          ></span>
          <input
            type="tel"
            class="form-control"
            id="telInput"
            aria-describedby="telHelp"
            name="telefone"
            required
            placeholder=" Digite o seu Telefone"
            v-model="person.telephone"
          />
        </div>
        <div id="telHelp" class="form-text"></div>
      </div>

      <div class="mb-2">
        <label for="emailInput" class="form-label text-custom">E-mail:</label>
        <div class="input-group">
          <span class="input-group-text bg-black text-white"
            ><i class="fas fa-envelope"></i
          ></span>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            name="email"
            required
            placeholder="Digite o Seu E-mail"
            v-model="person.email"
          />
        </div>
        <div id="emailHelp" class="form-text"></div>
      </div>

      <div class="mb-2">
        <label for="passwordInput" class="form-label text-custom">Senha:</label>
        <div class="input-group">
          <span class="input-group-text bg-black text-white"
            ><i class="fas fa-lock"></i
          ></span>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            aria-describedby="passwordHelp"
            name="password"
            placeholder=" Digite sua Senha"
            v-model="person.password"
          />
        </div>
        <div id="passwordHelp" class="form-text"></div>
      </div>

      <div class="mb-2">
        <label for="confPasswordInput" class="form-label text-custom"
          >Confirme sua Senha:</label
        >
        <div class="input-group">
          <span class="input-group-text bg-black text-white"
            ><i class="fas fa-lock"></i
          ></span>
          <input
            type="password"
            class="form-control"
            id="confPasswordInput"
            aria-describedby="confPasswordHelp"
            name="confPassword"
            placeholder="Confirme sua Senha"
            v-model="confPass"
          />
        </div>
        <div id="confPasswordHelp" class="form-text">
          <span v-if="person.password !== confPass" class="text-danger">
            Senha Inválida
          </span>
        </div>
      </div>

      <div class="mb-2">
        <label for="photoInput" class="form-label text-custom">Foto:</label>
        <div class="input-group">
          <span class="input-group-text bg-black text-white"
            ><i class="fas fa-camera"></i
          ></span>
          <input
            type="file"
            class="form-control"
            id="photoInput"
            aria-describedby="photoHelp"
            name="photo"
          />
        </div>
        <div id="photoHelp" class="form-text"></div>
      </div>

      <div class="my-2 form-group flex-row gap-2">
        <button type="reset">Cancelar</button>
        <button type="button" id="submitForm">Enviar</button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Person } from "@/core/domain/person"
const confPass = ref<string>("")
const person = ref<Person>(new Person())
</script>

<style scoped>
@import "@/assets/css/form.css";
</style>
