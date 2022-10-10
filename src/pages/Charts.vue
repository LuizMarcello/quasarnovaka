<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="q-pa-md" style="display: flex; justify-content: center"></div>

    <div class="col">
      <q-card-media>
        <!-- <q-img src="~assets/bentleybrasil.jpeg" style="min-width: 400px; max-width: 50rem;"></q-img> -->
        <q-img src="~assets/googleChart_2.png"></q-img>
      </q-card-media>
    </div>

    <!--  <q-card>
      <q-card-actions class="q-gutter-md"> -->
    <!-- <q-btn flat round dense icon="event"></q-btn> -->
    <!-- <div class="col"> -->
    <!-- <q-btn flat label="Detalhes"></q-btn> -->
    <!-- </div>
      </q-card-actions>
    </q-card>-->

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
  name: "Dashboard",
};
</script>
