<!-- eslint-disable -->
<template>
  <!-- <div class="q-pa-md"> -->
  <q-page padding>
    <div class="q-pa-md" style="display: flex; justify-content: center">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      swipeable
      control-color="primary"
      class="bg-grey-1 shadow-2 rounded-borders"
      style="width: 100%; height: 100%"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="~assets/imgbentley01.jpg"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="~assets/imgbentley02.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="~assets/imgbentley03.jpg"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="~assets/imgbentley08.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="~assets/imgbentley01.jpg"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="~assets/imgbentley06.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="~assets/imgbentley07.jpg"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="~assets/imgbentley08.jpg"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

    <div class="col">
      <q-card-media style="display: flex; justify-content: center">
        <!-- <q-img src="~assets/bentleybrasil.jpeg" style="min-width: 400px; max-width: 50rem;"></q-img> -->
        <!-- <q-img src="~assets/bentleybrasil.jpeg" style="display: block; text-align: center; width: 50%; margin:auto;" /> -->
        <q-img
          src="~assets/bentleybrasil.jpeg"
          style="width: 50%; margin-top: 2%"
        />
      </q-card-media>

      <!-- <q-card-title>Título do artigo</q-card-title>
          <q-separator />
          <q-card-main>Aqui só um resumo breve do artigo em destaque.</q-card-main> -->
      <q-card-section>
        <div class="text-h6">Torne-se um parceiro da Bentley Brasil</div>
        <div class="text-subtitle2">
          Venha fazer parte de nossa equipe. Estamos em busca de parceiros
          locais talentosos em descobrir soluções inovadoras para integrar nosso
          time e levar internet via satélite de excelente qualidade as
          comunidades, residências e empresas do Brasil que mais necessitam.
          Inclua a internet da Bentley Brasil no seu catálogo de produtos,
          expandindo seu negócio, aumentando seus lucros. Integrar o time de
          parceiros da Bentley Brasil pode trazer inúmeros benefícios para sua
          empresa: <br />
          <br />
          • Comercialização do serviço de internet Bentley Brasil de alta
          velocidade
          <br />
          • Networking qualificado <br />
          • Comissões com retorno rápido
        </div>
      </q-card-section>
      <!-- <q-card-media> -->
      <!-- <q-img src="~assets/bentleybrasil.jpeg" style="min-width: 400px; max-width: 50rem;"></q-img> -->
      <!-- <q-img src="~assets/imgbentleynovidades.jpeg"></q-img>
      </q-card-media> -->
    </div>

    <q-card-actions class="q-gutter-xs">
      <div class="col">
        <q-btn
          label="Seja nossa revenda"
          color="primary"
          icon="mdi-plus"
          dense
          :to="{ name: 'form-revendas' }"
        />
        <!-- <q-btn
          class="desktop-only"
          label="Seja nossa revenda"
          color="primary"
          icon="mdi-plus"
          dense
          :to="{ name: 'form-revendas' }"
        /> -->
      </div>
    </q-card-actions>
  </q-page>

  <q-footer elevated>
    <q-toolbar class="q-gutter-md">
      <q-icon name="facebook" />
      <q-icon name="mdi-twitter" />
      <q-icon name="mdi-instagram" />
      <q-icon name="mdi-linkedin" />
      <q-toolbar-title>Internet via satélite</q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<!-- "axios": cliente http para conectar às APIs -->
<script>
/* eslint-disable */
import { ref } from "vue";
export default {
  name: "Home",

  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
