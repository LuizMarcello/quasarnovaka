<template>
  <div
    class="q-pa-md q-gutter-sm"
    style="display: flex; justify-content: center; text-align: center"
  >
    <q-btn
      to="/listarestoque"
      label="Listagem completa"
      exact
      no-caps
      style="background: #0d084f; color: white; width: 41%"
    >
      <q-icon name="mdi-satellite-variant" style="margin-left: 3%" />
    </q-btn>
  </div>

  <!-- /////////////////////////////////////////////////////////////// -->
  <div class="row" style="justify-content: center" >
    <!-- <q-btn
      to="/listarestoqueestoque"
      size="12.7px"
      label="Equip no Estoque"
      color="primary"
      icon="mdi-satellite-variant"
      dense
      no-caps
      ><div
        class="text-h6"
        style="margin-left: 10px; margin-right: 10px; color: red"
      >
        {{ ativosEstoqueEstoque }}
      </div>
    </q-btn> -->

    <br />

    <q-card class="item my-card text-white" style="background: #0d084f">
      <q-card-section style="padding: 2%">
        <div class="text-h6">Buc</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosBuc }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoquebuc"
          label="Listar Bucss"
          style="background-color: #070719"
          exact
          no-caps
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
      <q-card-section style="padding: 2%">
        <div class="text-h6">Modem</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosModem }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoquemodem"
          label="Listar Modens"
          style="background-color: #0a0a2a"
          exact
          no-caps
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
      <q-card-section style="padding: 2%">
        <div class="text-h6">Etria</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosEtria }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoqueetria"
          label="Listar Etrias"
          style="background-color: #0a0a2a"
          exact
          no-caps
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
      <q-card-section style="padding: 2%">
        <div class="text-h6">Fonte</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosFonte }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoquefonte"
          label="Listar Fontes"
          style="background-color: #0a0a2a"
          exact
          no-caps
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
      <q-card-section style="padding: 2%">
        <div class="text-h6">Groove</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosGroove }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoquegroove"
          label="Listar Grooves"
          style="background-color: #0a0a2a"
          exact
          no-caps
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
      <q-card-section style="padding: 2%">
        <div class="text-h6">Ilb</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosIlb }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoqueilb"
          label="Listar Ilbs"
          style="background-color: #0a0a2a"
          exact
          no-caps
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
      <q-card-section style="padding: 2%">
        <div class="text-h6">Lnb</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosLnb }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoquelnb"
          label="Listar Lnbs"
          style="background-color: #0a0a2a"
          exact
          no-caps
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
      <q-card-section style="padding: 2%">
        <div class="text-h6">Radio</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosRadio }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoqueradio"
          label="Listar Rádios"
          style="background-color: #0a0a2a"
          exact
          no-caps
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
      <q-card-section style="padding: 2%">
        <div class="text-h6">Roteador</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="padding: 2%">
        <div class="text-h5">{{ ativosRoteador }}</div>
      </q-card-section>

      <q-card-section style="padding: 2%">
        <q-card-media
          ><q-img
            src="~assets/satelite.png"
            style="max-width: 30px; height: 30px"
          >
          </q-img
        ></q-card-media>
      </q-card-section>

      <q-card-section>
        <q-btn
          to="/listarestoqueroteador"
          label="Listar Roteadores"
          style="background-color: #0a0a2a"
          exact
          no-caps
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

  <!-- ////////////////////////////////////////////////////////////////////// -->

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
    /*  function linkClick(e, go) {
      e.preventDefault(); // we choose when we navigate
    } */
    /* const handleStatusAguardando = async () => {
      try {
        ativosAguardando.value = await statusAguardando("clientes");
      } catch (error) {
        notifyError(error.message);
      }
    }; */
    const handleEstoqueAntena = async () => {
      try {
        ativosAntena.value = await estoqueAntena("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueBuc = async () => {
      try {
        ativosBuc.value = await estoqueBuc("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueModem = async () => {
      try {
        ativosModem.value = await estoqueModem("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueEtria = async () => {
      try {
        ativosEtria.value = await estoqueEtria("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueFonte = async () => {
      try {
        ativosFonte.value = await estoqueFonte("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueGroove = async () => {
      try {
        ativosGroove.value = await estoqueGroove("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueIlb = async () => {
      try {
        ativosIlb.value = await estoqueIlb("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueLnb = async () => {
      try {
        ativosLnb.value = await estoqueLnb("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueRadio = async () => {
      try {
        ativosRadio.value = await estoqueRadio("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleEstoqueRoteador = async () => {
      try {
        ativosRoteador.value = await estoqueRoteador("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };
    onMounted(() => {
      handleEstoqueAntena();
      handleEstoqueBuc();
      handleEstoqueModem();
      handleEstoqueEtria();
      handleEstoqueFonte();
      handleEstoqueGroove();
      handleEstoqueIlb();
      handleEstoqueLnb();
      handleEstoqueRadio();
      handleEstoqueRoteador();
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
      ativosRoteador,
      handleEstoqueAntena,
      handleEstoqueBuc,
      handleEstoqueModem,
      handleEstoqueEtria,
      handleEstoqueFonte,
      handleEstoqueGroove,
      handleEstoqueIlb,
      handleEstoqueLnb,
      handleEstoqueRadio,
      handleEstoqueRoteador,
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
