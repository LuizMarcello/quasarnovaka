<template>
  <div
    class="q-pa-md q-gutter-sm"
    style="display: flex; justify-content: center; text-align: center"
  >
    <q-btn
      to="/listarclientes"
      label="Listar todos os clientes"
      exact
      no-caps=""
      style="background: #0d084f; color: white; width: 41%"
    >
      <q-icon name="mdi-human-male-female" style="margin-left: 2%" />
    </q-btn>

    <q-btn
      to="/listarcontratos"
      label="Contratos"
      exact
      no-caps
      style="background: #0d084f; color: white; width: 41%"
    >
      <q-icon name="newspaper" style="margin-left: 2%" />
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

          <q-btn no-caps exact to="/listarclientes" label="Total de clientes" />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosTotal }}</div>
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

          <q-btn
            no-caps
            exact
            to="/listaclientesativos"
            label="Clientes ativos"
          />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosAtivos }}</div>
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

          <q-btn
            no-caps
            exact
            to="/listaclientesinativos"
            label="Clientes inativos"
          />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosInativos }}</div>
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

          <q-btn
            no-caps
            exact
            to="/listaclientesaguardando"
            label="Clientes aguardando"
          />

          <q-card-section class="q-pt-none" style="margin-top: 3%">
            <div class="text-h5">{{ ativosAguardando }}</div>
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

import useApi from "src/composables/UseApi";

/* import router from "src/router"; */
/* import { useRouter } from "vue-router"; */
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const ativosTotal = ref(0);
    const ativosAguardando = ref(0);
    const ativosAtivos = ref(0);
    const ativosInativos = ref(0);

    /*  const router = useRouter(); */

    const $q = useQuasar();

    const { statusTotal, statusAguardando, statusAtivo, statusInativo } =
      useApi();

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

    //console.log(ativosTotal);

    onMounted(() => {
      handleStatusTotal();
      handleStatusAguardando();
      handleStatusAtivos();
      handleStatusInativos();
    });

    //console.log(ativosTotal);

    return {
      handleStatusTotal,
      handleStatusAguardando,
      handleStatusAtivos,
      handleStatusInativos,
      ativosTotal,
      ativosAguardando,
      ativosAtivos,
      ativosInativos,
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
