<template>
  <div>
    <header>
      <div class="navbox">
        <div class="header-content container">
          <div class="header-title">
            <h1>Barba's</h1>
            <p>
              Uma barbearia é um negócio que oferece serviços de corte de
              cabelo, barba e bigode, entre outros, e que se destina a clientes
              do sexo masculino. A história da barbearia remonta à antiguidade,
              com registros de salões na Babilônia há mais de 5.000 anos
            </p>
          </div>

          <div class="logo">
            <img src="imagem/barbershop-logo.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </header>
    <section id="services">
      <div class="card-container container" id="card-component">
        <CardService />
      </div>
    </section>
    <section class="bg-black container" id="about">
      <section class="menu-container">
        <div class="menu-itens">
          <img src="imagem/barbershop-logo.jpg" alt="img" />
          <p>comentario.</p>
        </div>
        <div class="menu-itens">
          <img src="imagem/barbershop-logo.jpg" alt="img" />
          <p>comentario.</p>
        </div>
        <div class="menu-itens">
          <img src="imagem/barbershop-logo.jpg" alt="img" />
          <p>comentario</p>
        </div>
      </section>
    </section>
    <section class="bg container" id="contact">
      <!--yellow container expande-->
      <div class="contact">
        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356514534342!2d-43.56141262383389!3d-22.900217479259787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be15839e68c4f%3A0x588a284ae162bc38!2sSenac%20Campo%20Grande!5e0!3m2!1spt-BR!2sbr!4v1727395368333!5m2!1spt-BR!2sbr"
            width="98%"
            height="300"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <p class="bolder white">Rua barbas Cortadas, 789 Campo Grande</p>
            <P>
              <span class="bolder number phone white">(21)5555-5555</span>
            </P>
          </div>
        </div>

        <div class="contact-form">
          <form>
            <div class="form-group">
              <!-- <label for="nome">Nome</label> -->
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                required
              />
            </div>

            <div class="form-group">
              <!-- <label for="email">E-mail</label> -->
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
              />
            </div>

            <div class="form-group">
              <!-- <label for="tel">Telefone</label> -->
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Telefone"
                required
              />
            </div>

            <div class="form-group">
              <select name="assunto" aria-placeholder="assunto">
                <option disabled selected>Assunto</option>
                <option value="contato">Contato</option>
                <option value="reclame">Reclamação</option>
                <option value="sugent">Sugestão</option>
              </select>
            </div>

            <div class="form-group">
              <textarea
                name="mensagem"
                id="mensagem"
                rows="5"
                placeholder="Mensagem"
                required
              ></textarea>
            </div>

            <div class="form-group right">
              <!-- <input type="submit" value="Enviar"> -->
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import CardService from "@/components/CardService.vue"
</script>

<style scoped>
@import "@/assets/css/home.css";
</style>
