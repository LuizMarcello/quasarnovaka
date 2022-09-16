<!-- eslint-disable -->
<template>
  <!-- <q-page class="container q-pa-xs"> -->
  <q-page class="container q-pa-xs">
    <div class="row q-gutter-lg">
      <div class="col-xs-5 col-lg-4 q-gutter-lg">
        <q-card>
          <q-card-media>
            <q-img
              src="~assets/imgbentley03.jpg"
              style="min-width: 350px; max-width: 40rem"
            ></q-img>
            <!-- <q-img src="~assets/imgbentley03.jpg"></q-img> -->
          </q-card-media>
        </q-card>
      </div>
      <div class="col-xs-5 col-lg-4 q-gutter-lg">
        <q-card>
          <q-card-media>
            <q-img
              src="~assets/imgbentley11.jpg"
              style="min-width: 350px; max-width: 40rem"
            ></q-img>
            <!-- <q-img src="~assets/imgbentley03.jpg"></q-img> -->
          </q-card-media>
        </q-card>
      </div>
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
    <q-btn
      class="desktop-only"
      label="Seja nossa revenda"
      color="primary"
      icon="mdi-plus"
      dense
      :to="{ name: 'form-revendas' }"
    />
  </q-page>
  <q-footer elevated>
    <q-toolbar>
      <q-icon name="facebook" />
      <q-icon name="facebook" />
      <q-icon name="facebook" />
      <q-icon name="facebook" />
      <q-toolbar-title>Internet via satélite</q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
/* eslint-disable */
export default {
  name: "Quemsomosnos",
};
</script>
