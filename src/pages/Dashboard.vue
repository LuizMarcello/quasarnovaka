<!-- eslint-disable -->
<template>
  <q-page class="container q-pa-xs">
    <div class="row gutter-md">
      <!-- <div class="col-xs-12 col-lg-4" v-for="artigo in 10" :key="artigo"> -->
      <div class="col-xs-12 col-lg-4">
        <q-card>
          <q-card-media>
            <!-- <q-img src="~assets/bentleybrasil.jpeg" style="min-width: 400px; max-width: 50rem;"></q-img> -->
            <q-img src="~assets/conectandovcaomundo.jpg" style="max-width: 650px"></q-img>
          </q-card-media>

          <!-- <q-card-title>Título do artigo</q-card-title>
          <q-separator />
          <q-card-main>Aqui só um resumo breve do artigo em destaque.</q-card-main> -->
          <q-card-section>
            <div class="text-h6">Torne-se um parceiro da Bentley Brasil</div>
            <!-- <div class="text-subtitle2">
              Venha fazer parte de nossa equipe. Estamos em busca de parceiros
              locais talentosos em descobrir soluções inovadoras para integrar
              nosso time e levar internet via satélite de excelente qualidade as
              comunidades, residências e empresas do Brasil que mais necessitam.
              Inclua a internet da Bentley Brasil no seu catálogo de produtos,
              expandindo seu negócio, aumentando seus lucros. Integrar o time de
              parceiros da Bentley Brasil pode trazer inúmeros benefícios para
              sua empresa:
              • Comercialização do serviço de internet Bentley
                Brasil de alta velocidade
              • Networking qualificado
              • Comissões com
                retorno rápido
            </div> -->
          </q-card-section>
          <q-card-actions>
            <!-- <q-btn flat round dense icon="event"></q-btn> -->
            <div class="col">
              <!-- <q-btn flat label="Detalhes"></q-btn> -->
              <q-btn
                push
                color="dark"
                label="Detalhes"
                class="full-width"
              ></q-btn>
            </div>
            <div class="col">
              <!-- <q-btn flat color="dark" label="Visualizar"></q-btn> -->
              <!-- <q-btn
                push
                color="dark"
                label="Visualizar"
                class="full-width"
              ></q-btn> -->
            </div>
            <!-- <q-btn flat color="primary" label="Reserve"></q-btn> -->
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable */
export default {
  name: "Dashboard",
};
</script>
