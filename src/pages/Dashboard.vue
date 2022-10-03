<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="q-pa-md">
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
      >
        <q-carousel-slide
          :name="1"
          img-src="~assets/bentley29092205.jpeg"
        />
        <q-carousel-slide
          :name="2"
          img-src="~assets/bentley29092206.jpeg"
        />
        <q-carousel-slide
          :name="3"
          img-src="~assets/bentley29092207.jpeg"
        />
        <q-carousel-slide
          :name="4"
          img-src="~assets/bentley29092208.jpeg"
        />
      </q-carousel>
    </div>

    <div class="col">
      <q-card-media>
        <!-- <q-img src="~assets/bentleybrasil.jpeg" style="min-width: 400px; max-width: 50rem;"></q-img> -->
        <q-img src="~assets/bentleyGoogle.jpg"></q-img>
      </q-card-media>
    </div>

    <q-card>
      <q-card-actions class="q-gutter-md">
        <!-- <q-btn flat round dense icon="event"></q-btn> -->
        <div class="col">
          <!-- <q-btn flat label="Detalhes"></q-btn> -->
          <q-btn
            class="desktop-only"
            label="Seja nossa revenda"
            color="primary"
            icon="mdi-plus"
            dense
            :to="{ name: 'form-revendas' }"
          />
        </div>
      </q-card-actions>
    </q-card>
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

  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
