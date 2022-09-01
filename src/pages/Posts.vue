<!-- eslint-disable -->
<template>
  <q-page class="container q-pa-xs">
    <div class="row q-gutter-lg">
      <!-- <div class="col-xs-12 col-lg-4" v-for="artigo in 10" :key="artigo"> -->
    <!--   <div
        class="col-xs-12 col-lg-4 q-gutter-lg"
        v-for="(post, index) in posts"
        :key="index"
      > -->
        <div class="col-xs-12 col-lg-4 q-gutter-lg">
        <q-card>
          <q-card-media>
            <!-- <q-img src="~assets/bentleybrasil.jpeg" style="min-width: 400px; max-width: 50rem;"></q-img> -->
            <q-img src="~assets/bentleybrasil.jpeg"></q-img>
          </q-card-media>
          <!-- <q-card-title>Título do artigo</q-card-title>
          <q-separator />
          <q-card-main>Aqui só um resumo breve do artigo em destaque.</q-card-main> -->
          <q-card-section>
            <div class="text-h6">Torne-se um parceiro da Bentley Brasil</div>
            <div class="text-subtitle2">
              Venha fazer parte de nossa equipe. Estamos em busca de parceiros locais
              talentosos em descobrir soluções inovadoras para integrar nosso time e levar
              internet via satélite de excelente qualidade as comunidades, residências e
              empresas do Brasil que mais necessitam. Inclua a internet da Bentley Brasil
              no seu catálogo de produtos, expandindo seu negócio, aumentando seus lucros.
              Integrar o time de parceiros da Bentley Brasil pode trazer inúmeros
              benefícios para sua empresa: <br />
              <br />
              • Comercialização do serviço de internet Bentley Brasil de alta velocidade
              <br />
              • Networking qualificado <br />
              • Comissões com retorno rápido
            </div>
          </q-card-section>
          <q-card-actions class="q-gutter-md">
            <!-- <q-btn flat round dense icon="event"></q-btn> -->
            <div class="col">
              <!-- <q-btn flat label="Detalhes"></q-btn> -->
              <q-btn push color="dark" label="Mais detalhes" class="full-width"></q-btn>
            </div>
            <div class="col">
              <!-- <q-btn flat color="dark" label="Visualizar"></q-btn> -->
              <q-btn push color="dark" label="Visualizar" class="full-width"></q-btn>
            </div>
            <!-- <q-btn flat color="primary" label="Reserve"></q-btn> -->
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<!-- "axios": cliente http para conectar às APIs -->
<script>
/* eslint-disable */
export default {
  name: "Posts",
  /* data() {
    return {
      posts: [],
    };
  }, */
 /*  mounted() {
    this.getPosts();
  }, */
  /* methods: {
    getPosts() {
      this.$axios
        .get("http://viladosilicio.com.br/wp-json/wp/v2/posts")
        .then((res) => {
          console.log("POSTS", res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  }, */
};
</script>
