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
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <q-card-section class="">
        <div class="text-h6">Total ativos</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosAtivos }}</div>
      </q-card-section>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Total Inativos</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosInativos }}</div>
      </q-card-section>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Total Aguardando</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosAguardando }}</div>
      </q-card-section>
    </q-card>
  </div>

  <q-page-container>
    <router-view />
  </q-page-container>
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
    const router = useRouter();

    //const { supabase } = useSupabase();

    //const table = "clientes";

    const $q = useQuasar();

    const { statusTotal, statusAguardando, statusAtivo, statusInativo } =
      useApi();

    const ativosTotal = ref(0);
    const ativosAguardando = ref(0);
    const ativosAtivos = ref(0);
    const ativosInativos = ref(0);

    function linkClick(e, go) {
      e.preventDefault(); // we choose when we navigate
    }

    const handleStatusTotal = async () => {
      try {
        ativosTotal.value = await statusTotal("clientes");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleStatusAguardando = async () => {
      try {
        ativosAguardando.value = await statusAguardando("clientes");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleStatusAtivos = async () => {
      try {
        ativosAtivos.value = await statusAtivo("clientes");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleStatusInativos = async () => {
      try {
        ativosInativos.value = await statusInativo("clientes");
      } catch (error) {
        notifyError(error.message);
      }
    };

    /* Duvida aqui */
    //ativosTotal.value = "???";
    //ativosAguardando.value = "???";
    //ativosAtivos.value = "???";
    //ativosInativos.value = "???";

    /* onMounted(() => {
      handleStatus();
    }); */

    return {
      handleStatusTotal,
      handleStatusAguardando,
      handleStatusAtivos,
      handleStatusInativos,
    };
  },
});
</script>
