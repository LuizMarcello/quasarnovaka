<template>
  <div
    class="q-pa-md q-gutter-sm"
    style="display: flex; justify-content: center; text-align: center"
  >
    <q-btn
      to="/listarevendas"
      label="Listar todas revendas"
      exact
      style="background: #0d084f; color: white; width: 41%"
    >
      <q-icon name="mdi-human-male-female" />
    </q-btn>
  </div>

  <div style="margin-left: 30%; margin-right: 30%; text-align: center">
    <q-card class="my-card text-white" style="background: blue">
      <div class="flex-container">
        <div class="col" style="margin-left: 4%">
          <q-card-section>
            <div class="text-h6">Aprovadas</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAprovado }}</div>
          </q-card-section>
        </div>

        <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img
                src="~assets/revendas_2_06.02.23.png"
                style="max-width: 60px; height: 60px"
                :fit="fill"
              >
              </q-img
            ></q-card-media>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div class="col" style="margin-left: 4%">
          <q-card-section>
            <div class="text-h6">
              Reprovadas
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosNaoAprovado }}</div>
          </q-card-section>
        </div>

        <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img
                src="~assets/revendas_2_06.02.23.png"
                style="max-width: 60px; height: 60px"
                :fit="fill"
              >
              </q-img
            ></q-card-media>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div class="col" style="margin-left: 3%">
          <q-card-section>
            <div class="text-h6">
              Pendências
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosPendencia }}</div>
          </q-card-section>
        </div>
        <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img
                src="~assets/revendas_2_06.02.23.png"
                style="max-width: 60px; height: 60px"
                :fit="fill"
              >
              </q-img
            ></q-card-media>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div class="col" style="margin-left: 3%">
          <q-card-section>
            <div class="text-h6">
              Aguardando
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
        <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img
                src="~assets/revendas_2_06.02.23.png"
                style="max-width: 60px; height: 60px"
                :fit="fill"
              >
              </q-img
            ></q-card-media>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <br />
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
    const ativosAprovado = ref(0);
    const ativosNaoAprovado = ref(0);
    const ativosAguardando = ref(0);
    const ativosPendencia = ref(0);

    const router = useRouter();

    //const { supabase } = useSupabase();

    //const table = "clientes";

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

    onMounted(() => {
      handleStatusAguardando();
      handleStatusAprovado();
      handleStatusNaoAprovado();
      handleStatusPendencia();
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
