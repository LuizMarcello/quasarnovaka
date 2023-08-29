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
      <q-icon name="mdi-human-male-female" />
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

          <q-btn no-caps exact to="/listarpendentes" label="Pendências" />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosPendencia }}</div>
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

          <q-btn no-caps exact to="/listaraguardando" label="Aguardando" />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <br />
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
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const ativosAprovado = ref(0);
    const ativosNaoAprovado = ref(0);
    const ativosAguardando = ref(0);
    const ativosPendencia = ref(0);

    const router = useRouter();

    const $q = useQuasar();

    const {
      revendasAprovadas,
      revendasReprovadas,
      revendasAguardando,
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

    const handleStatusAguardando = async () => {
      try {
        ativosAguardando.value = await revendasAguardando("revendas");
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

    onMounted(async () => {
      await handleStatusAguardando();
      await handleStatusAprovado();
      await handleStatusNaoAprovado();
      await handleStatusPendencia();
    });

    //console.log(ativosTotal);

    return {
      handleStatusAprovado,
      handleStatusAguardando,
      handleStatusNaoAprovado,
      handleStatusPendencia,
      ativosAprovado,
      ativosNaoAprovado,
      ativosAguardando,
      ativosPendencia,
      fitModes: ["cover", "fill", "contain", "none", "scale-down"],
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  /* border: 4px solid #ccc; */
  align-items: center;
  align-content: center;
}
.flex {
  display: flex;
}
.item {
  margin: 6px;
  /* background: tomato; */
  text-align: center;
  font-size: 1em;
  min-width: 200px;
}
.flex-wrap {
  flex-wrap: wrap;
}
body {
  font-family: monospace;
}
@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
</style>
