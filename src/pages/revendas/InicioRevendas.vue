<template>
  <div
    class="q-pa-md q-gutter-sm"
    style="display: flex; justify-content: center; text-align: center"
  >
    <q-btn
      to="/listarevendas"
      label="Listar todas revendas"
      exact
      no-caps
      style="background: #0d084f; color: white; width: 41%"
    >
      <q-icon name="mdi-human-male-female" style="margin-left: 2%" />
    </q-btn>
  </div>

  <div style="margin-left: 40%; margin-right: 40%; text-align: center">
    <q-card
      class="my-card text-white"
      style="background: green; border: 3px solid #0d084f; text-align: center"
    >
      <div class="flex-container" style="align-items: center">
        <div class="col">
          <q-card-section>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user"></i>
          </q-card-section>

          <q-btn no-caps exact to="/listaraprovadas" label="Aprovadas" />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosAprovado }}</div>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <br />

    <q-card
      class="my-card text-white"
      style="background: green; border: 3px solid #0d084f; text-align: center"
    >
      <div class="flex-container" style="align-items: center">
        <div class="col">
          <q-card-section>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user"></i>
          </q-card-section>

          <q-btn no-caps exact to="/listarreprovadas" label="Reprovadas" />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosNaoAprovado }}</div>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <br />

    <q-card
      class="my-card text-white"
      style="background: green; border: 3px solid #0d084f; text-align: center"
    >
      <div class="flex-container" style="align-items: center">
        <div class="col">
          <q-card-section>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user"></i>
          </q-card-section>

          <q-btn no-caps exact to="/listaremanalise" label="Em análise" />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosEmanalise }}</div>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <br />

    <q-card
      class="my-card text-white"
      style="background: green; border: 3px solid #0d084f; text-align: center"
    >
      <div class="flex-container" style="align-items: center">
        <div class="col">
          <q-card-section>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user"></i>
          </q-card-section>

          <q-btn no-caps exact to="/listarcompendencia" label="Com pendências" />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosPendencia }}</div>
          </q-card-section>
        </div>
      </div>
    </q-card>
  </div>

  <q-page-container>
    <router-view />
  </q-page-container>

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
/* "defineComponent": Porque é vuejs 3 */
import { defineComponent, ref, onMounted } from "vue";

//import useSupabase from "src/boot/supabase";

import useApi from "src/composables/UseApi";

/* import router from "src/router"; */
//import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const ativosAprovado = ref(0);
    const ativosNaoAprovado = ref(0);
    const ativosEmanalise = ref(0);
    const ativosPendencia = ref(0);

    //const router = useRouter();

    const $q = useQuasar();

    const {
      revendasAprovadas,
      revendasReprovadas,
      revendasEmAnalise,
      revendasPendencia,
    } = useApi();

    function linkClick(e, go) {
      e.preventDefault(); // we choose when we navigate
    }

    const handleStatusAprovado = async () => {
      try {
        ativosAprovado.value = await revendasAprovadas("revendas");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleStatusNaoAprovado = async () => {
      try {
        ativosNaoAprovado.value = await revendasReprovadas("revendas");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleStatusEmAnalise = async () => {
      try {
        ativosEmanalise.value = await revendasEmAnalise("revendas");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleStatusPendencia = async () => {
      try {
        ativosPendencia.value = await revendasPendencia("revendas");
      } catch (error) {
        notifyError(error.message);
      }
    };

    //console.log(ativosTotal);

    onMounted(() => {
      handleStatusEmAnalise();
      handleStatusAprovado();
      handleStatusNaoAprovado();
      handleStatusPendencia();
    });

    //console.log(ativosTotal);

    return {
      handleStatusAprovado,
      handleStatusEmAnalise,
      handleStatusNaoAprovado,
      handleStatusPendencia,
      ativosAprovado,
      ativosNaoAprovado,
      ativosEmanalise,
      ativosPendencia,
      fitModes: ["cover", "fill", "contain", "none", "scale-down"],
    };
  },
});
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
