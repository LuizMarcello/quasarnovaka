<template>
  <div
    class="q-pa-md q-gutter-sm"
    style="display: flex; justify-content: center; text-align: center"
  >
    <q-btn
      to="/listarestoque"
      label="Listar todo estoque"
      exact
      style="background: #0d084f; color: white; width: 41%"
    >
      <q-icon name="mdi-human-male-female" />
    </q-btn>
  </div>

  <div
    class="container flex flex-wrap"
    style="justify-content: center; text-align: center"
  >
    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Antena</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar antenas"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Buc</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Bucs"
          style="background-color: #070719"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Modem</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Modens"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Etria</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Etrias"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Fonte</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Fontes"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Groove</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Grooves"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Ilb</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Ilbs"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Lnb</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Lnbs"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Radio</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Rádios"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section>
        <div class="text-h6">Roteador</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5">{{ ativosTotal }}</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoque"
          label="Listar Roteadores"
          style="background-color: #0a0a2a"
          exact
        >
          <!-- <q-icon name="mdi-human-male-female" /> -->
        </q-btn>
      </q-card-section>

      <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section> -->
    </q-card>
  </div>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
/* "defineComponent": Porque é vuejs 3 */
import { defineComponent, ref, onMounted } from "vue";

import useApi from "src/composables/EstoqueApi";

/* import router from "src/router"; */
/* import { useRouter } from "vue-router"; */
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const ativosAntena = ref(0);
    const ativosBuc = ref(0);
    const ativosModem = ref(0);
    const ativosEtria = ref(0);
    const ativosFonte = ref(0);
    const ativosGroove = ref(0);
    const ativosIlb = ref(0);
    const ativosLnb = ref(0);
    const ativosRadio = ref(0);
    const ativosRoteador = ref(0);

    /* const router = useRouter(); */

    const $q = useQuasar();

    const {
      estoqueAntena,
      estoqueBuc,
      estoqueModem,
      estoqueEtria,
      estoqueFonte,
      estoqueGroove,
      estoqueIlb,
      estoqueLnb,
      estoqueRadio,
      estoqueRoteador,
    } = useApi();

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
      ativosAntena,
      ativosBuc,
      ativosModem,
      ativosEtria,
      ativosFonte,
      ativosGroove,
      ativosIlb,
      ativosLnb,
      ativosRadio,
      ativosRoteador
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
