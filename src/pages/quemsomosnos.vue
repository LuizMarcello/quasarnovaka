<!-- eslint-disable -->
<template>
  <!-- <q-page class="container q-pa-xs"> -->
  <q-page padding>
    <!-- <div class="row q-gutter-lg"> -->
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
        padding
        class="bg-grey-1 shadow-2 rounded-borders"
        style="width: 100%; height: 100%"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="~assets/imgbentley03.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="~assets/imgbentley11.jpg"
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

    <div class="row q-gutter q-pa-md">
      <div class="text-h6">Bentley Brasil</div>
      <div class="text-subtitle2">
        A Bentley Brasil é uma empresa de telecomunicações por satélite, que
        desde 2013 constituiu a sua sede em Rolândia. A Bentley Brasil teve
        inicio em 2001 com o nome Idealsat do Brasil, tendo como co-fundadores
        Ezequiel Marcondes Gonçalves e Patrícia Mônica da Silva Gonçalves que já
        tinham como objetivo a prestação de serviços em telecomunicações por
        satélite. Em 2010, a Idealsat do Brasil firmou uma grande parceria com o
        senhor Anthony Walker (in memoriam), CEO da Bentley Walker UK, empresa
        com sede na Inglaterra. Com remodelação surgiu o nome Bentley Brasil,
        passando a representar exclusivamente a Bentley Walker UK em solo
        brasileiro. Com a mudança para Rolândia, a Bentley Brasil se desmembrou
        da Bentley Walker, se tornando uma empresa totalmente brasileira com o
        objetivo de fornecer com qualidade serviços de internet via satélite nas
        áreas remotas, redes corporativas, engenharia de telecomunicações,
        constantemente buscando expandir seus serviços e produtos, trabalhando
        sempre com profissionais capacitados. Em 2019, fomos reconhecidos como
        uma das principais empresas na área de serviços de telecomunicações de
        internet via satélite no Brasil, sendo agora a maior revendedora de
        equipamento de internet via satélite na região norte do país, realizando
        um trabalho de fornecer e instalar equipamentos, mas também com nosso
        próprio serviço de internet via satélite.
      </div>
    </div>
    <!--  </div> -->

    <q-card-actions class="q-gutter-xs">
      <div class="col">
        <q-btn
          label="Seja nossa revenda"
          color="primary"
          icon="mdi-plus"
          dense
          :to="{ name: 'form-revendas' }"
        />
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

<script>
/* eslint-disable */
import { ref } from "vue";
export default {
  name: "Quemsomosnos",

  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
