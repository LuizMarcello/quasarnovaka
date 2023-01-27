<template>
  <div
    class="q-pa-md q-gutter-sm"
    style="display: flex; justify-content: center; text-align: center"
  >
    <q-btn
      to="/listarclientes"
      label="Listar todos"
      exact
      style="background: #0d084f; color: white; width: 41%"
    >
      <q-icon name="mdi-human-male-female" />
    </q-btn>
  </div>
  <div style="margin-left: 30%; margin-right: 30%; text-align: center">
    <q-card class="my-card text-white" style="background: blue">
      <q-card-section>
        <div class="text-h6">Total de clientes novaka</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">67</div>
      </q-card-section>
    </q-card>
    <br />
    <q-card class="my-card text-white" style="background: green">
      <q-card-section class="">
        <div class="text-h6">Total ativos</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">52</div>
      </q-card-section>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Total desativados</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">15</div>
      </q-card-section>
    </q-card>
  </div>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
/* "defineComponent": Porque é vuejs 3 */
import { defineComponent, ref, onMounted, computed } from "vue";

/* import router from "src/router"; */
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "InicioClientes",

  methods: {},

  setup() {
    const router = useRouter();

    /* const table = "revendas"; */
    const $q = useQuasar();

    function linkClick(e, go) {
      e.preventDefault(); // we choose when we navigate
    }
    return { linkClick };
  },
});
</script>
