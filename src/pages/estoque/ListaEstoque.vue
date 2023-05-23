<!-- eslint-disable -->
<template>
  <q-page padding>
    <div>
      <!--  <q-table :rows="rows" :columns="columns" row-key="id" class="col-12"> -->
      <q-table
        :rows="estoque"
        :columns="columns"
        v-model:pagination="initialPagination"
        row-key="id"
        class="col-md-06 col-sm-08 col-xs-12"
        :loading="loading"
        :filter="filter"
        hide-pagination
      >
        <template v-slot:top>
          <!-- <span class="text-h6">Estoque</span>
          <q-space /> -->
          <!-- <q-btn
              v-if="$q.platform.is.desktop"
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'form-revendas' }"
            /> -->

          <div
            class="item container flex flex-wrap"
            style="justify-content: center; text-align: center"
          >
            <q-card class="item my-card text-white" style="margin-bottom: 8%">
              <!-- <q-card-section class="q-gutter-x-md q-gutter-y-sm"> -->
              <!-- <q-btn
                  to="/listarestoqueok"
                  size="13px"
                  label="Equipamentoo OK"
                  color="primary"
                  icon="mdi-satellite-variant"
                  dense
                  no-caps
                >
                  <div
                    class="text-h6"
                    style="margin-left: 10px; margin-right: 10px; color: red"
                  >
                    {{ ativosEstoqueOK }}
                  </div>
                </q-btn> -->

              <!-- <q-btn
                  to="/listarestoquedefeito"
                  size="12.2px"
                  label="Equip com defeito"
                  color="primary"
                  icon="mdi-satellite-variant"
                  dense
                  no-caps
                >
                  <div
                    class="text-h6"
                    style="margin-left: 10px; margin-right: 10px; color: red"
                  >
                    {{ ativosEstoqueDefeito }}
                  </div>
                </q-btn> -->

              <!-- <q-btn
                  to="/listarestoquegarantia"
                  size="12.7px"
                  label="Equip na garantia"
                  color="primary"
                  icon="mdi-satellite-variant"
                  dense
                  no-caps
                >
                  <div
                    class="text-h6"
                    style="margin-left: 10px; margin-right: 10px; color: red"
                  >
                    {{ ativosEstoqueGarantia }}
                  </div>
                </q-btn> -->

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

              <!-- <q-btn
                  to="/listarestoquecliente"
                  size="13.7px"
                  label="Equip no cliente"
                  color="primary"
                  icon="mdi-satellite-variant"
                  dense
                  no-caps
                  ><div
                    class="text-h6"
                    style="margin-left: 10px; margin-right: 10px; color: red"
                  >
                    {{ ativosEstoqueCliente }}
                  </div>
                </q-btn> -->
              <!--  </q-card-section> -->
            </q-card>
          </div>

          <div
            class="container flex flex-wrap"
            style="
              justify-content: center;
              text-align: center;
              margin-right: 30%;
            "
          >
            <q-card
              class="item my-card text-white container flex flex-wrap col"
              style="margin-top: 0"
            >
              <q-card-section class="q-gutter-x-md q-gutter-y-sm">
                <q-btn
                  v-if="$q.platform.is.mobile"
                  label="Consultar código de barras"
                  color="primary"
                  icon="mdi-barcode"
                  dense
                  no-caps
                  :to="{ name: 'barcodesearch' }"
                />

                <!-- <q-space /> -->

                <q-btn
                  label="Gerar pdf"
                  color="primary"
                  icon="mdi-file-pdf-box"
                  dense
                  no-caps
                  @click="makePDF"
                />

                <q-btn
                  v-if="$q.platform.is.desktop"
                  label="Adicionar"
                  color="primary"
                  icon="mdi-plus"
                  dense
                  no-caps
                  :to="{ name: 'barcode' }"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="col">
            <q-input
              outlined
              dense
              debounce="300"
              v-model="filter"
              placeholder="Pesquisar produtosss"
              color="primary"
              class="q-mb-sm"
            >
              <template v-slot:append>
                <q-icon name="mdi-magnify" />
              </template>
            </q-input>
          </div>
        </template>

        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn
              icon="mdi-feature-search-outline"
              color="primary"
              dense
              size="sm"
              @click="handleDetails(props.row)"
            >
              <q-tooltip> Detalhes </q-tooltip></q-btn
            >
            <q-btn
              icon="mdi-pillar"
              color="primary"
              dense
              size="sm"
              @click="handleHistorico(props.row)"
            >
              <q-tooltip> Histórico </q-tooltip></q-btn
            >
            <q-btn
              icon="mdi-pencil"
              color="info"
              dense
              size="sm"
              @click="handleEdit(props.row)"
            >
              <q-tooltip> Editar </q-tooltip></q-btn
            >
            <q-btn
              icon="mdi-trash-can-outline"
              color="negative"
              dense
              size="sm"
              @click="handleRemoveEstoque(props.row)"
              ><q-tooltip> Excluir </q-tooltip></q-btn
            >
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="initialPagination.page"
        :max="pagesNumber"
        direction-links
      />
    </div>
    <br />
    <q-btn
      label="Voltar"
      color="primary"
      class="full-width"
      rounded
      size="md"
      flat
      :to="{ name: 'inicioestoque' }"
    />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        class="mobile-only"
        fab
        icon="mdi-file-pdf-box"
        color="primary"
        @click="makePDF"
      />
      <!-- <q-btn
          v-if="$q.platform.is.mobile"
          fab
          icon="mdi-plus"
          color="primary"
          :to="{ name: 'form-revendas' }"
        /> -->

      <!-- <q-btn
        class="mobile-only"
        fab
        icon="mdi-plus"
        color="primary"
        :to="{ name: 'barcode' }"
      /> -->
    </q-page-sticky>
  </q-page>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const columns = [
  {
    name: "id",
    align: "left",
    label: "ID",
    field: "id",
    sortable: true,
  },

  {
    name: "marca",
    align: "left",
    label: "Marca/Fabricante",
    field: "marca",
    sortable: true,
  },

  {
    name: "tipo_equipamento",
    align: "left",
    label: "Tipo de equipamento",
    field: "tipo_equipamento",
    sortable: true,
  },

  {
    name: "status",
    align: "left",
    label: "Status",
    field: "status",
    sortable: true,
  },

  {
    name: "modelo",
    align: "left",
    label: "Modelo",
    field: "modelo",
    sortable: true,
  },
  /* {
    name: "observacao",
    align: "left",
    label: "Observação",
    field: "observacao",
    sortable: true,
  }, */

  {
    name: "numerodeserie",
    align: "left",
    label: "Número de série",
    field: "numerodeserie",
    sortable: true,
  },
  /*  {
    name: "bar_code",
    align: "left",
    label: "Código de barras",
    field: "bar_code",
    sortable: true,
  }, */

  {
    name: "actions",
    align: "right",
    label: "Ações",
    field: "actions",
    sortable: true,
  },
];

const initialPagination = ref({
  page: 1,
  rowPerPage: 5,
});

/* "defineComponent": Porque é vuejs 3 */
import {
  defineComponent,
  ref,
  onMounted,
  computed,
  watch,
  watchEffect,
} from "vue";

import useApi from "src/composables/UseApi";
import qtdeApi from "src/composables/EstoqueApi";
import useNotify from "src/composables/UseNotify";
/* import router from "src/router"; */
/* Patrick incluiu aqui "useRoute" também, em 10.01.23 */
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";

/* Copiei do Form.vue */
import BtnScannerAndroid from "src/components/barcodeScanner/BtnScannerAndroid.vue";

export default defineComponent({
  name: "PageEstoqueList",

  /* Copiei do Form.vue */
  /* Esta props:{} foi acrescentada pelo Patrick */
  props: {
    barcode: {
      type: String,
      required: false,
      default: "",
    },
  },

  /* Copiei do Form.vue */
  components: BtnScannerAndroid,

  methods: {
    makePDF() {
      /* window.html2canvas = html2canvas; */
      globalThis.html2canvas = html2canvas;
      var doc = new jsPDF("p", "pt", "a1");
      doc.html(document.querySelector("#app"), {
        callback: function (pdf) {
          pdf.save("Clientes_cadastrados.pdf");
        },
      });
    },
  },

  /* Este props foi acrescentado depois */
  setup() {
    const ativosEstoqueOK = ref(0);
    const ativosEstoqueDefeito = ref(0);
    const ativosEstoqueGarantia = ref(0);
    const ativosEstoqueEstoque = ref(0);
    const ativosEstoqueCliente = ref(0);
    //const ativosBuc = ref(0);
    //const ativosModem = ref(0);
    //const ativosEtria = ref(0);
    //const ativosFonte = ref(0);

    const estoque = ref([]);
    const loading = ref(true);
    const router = useRouter();
    /* Patrick acrescentou esta linha em 10.01.23 */
    const route = useRoute();
    /* const table = "revendas"; */
    const filter = ref("");
    const $q = useQuasar();
    const { list, remove } = useApi();
    const { notifyError, notifySuccess } = useNotify;

    const {
      listaEstoqueOkCount,
      listaEstoqueDefeitoCount,
      listaEstoqueGarantiaCount,
      listaEstoqueEstoqueCount,
      listaEstoqueClienteCount,
      //listaEstoqueDefeito,
      //listaEstoqueGarantia,
      //listaEstoqueEstoque,
      //listaEstoqueCliente,
    } = qtdeApi();

    const handleListEstoque = async () => {
      try {
        loading.value = true;
        estoque.value = await list("estoque");
        loading.value = false;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEdit = (estoque) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({ name: "form-estoque", params: { id: estoque.id } });
    };

    const handleDetails = (estoque) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-estoque-detalhes",
        params: { id: estoque.id },
      });
    };

    const handleHistorico = (estoque) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-estoque-historico",
        params: { id: estoque.id },
      });
    };

    const handleRemoveEstoque = async (estoque) => {
      try {
        $q.dialog({
          title: "Confirm",
          message: `Tem certeza que quer deletar ${estoque.marca} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove("estoque", estoque.id);
          notifySuccess("Removido com sucesso!");
          handleListEstoque();
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEstoqueOK = async () => {
      try {
        ativosEstoqueOK.value = await listaEstoqueOkCount("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleDefeitoOK = async () => {
      try {
        ativosEstoqueDefeito.value = await listaEstoqueDefeitoCount("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleGarantiaOK = async () => {
      try {
        ativosEstoqueGarantia.value = await listaEstoqueGarantiaCount(
          "estoque"
        );
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEstoqueEstoqueOK = async () => {
      try {
        ativosEstoqueEstoque.value = await listaEstoqueEstoqueCount("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleClienteOK = async () => {
      try {
        ativosEstoqueCliente.value = await listaEstoqueClienteCount("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };

    /* Patrick modificou em 10.01.23 */
    /* Antes: */
    //onMounted(() => {
    //handleListEstoque();
    /* Copiei do Form.vue */
    /* Este if(){} foi acrescentado pelo Patrick */
    //if (props.barcode) {
    //filter.value = props.barcode;
    //}
    //});

    /* Depois */
    onMounted(async () => {
      await handleListEstoque();
      await handleEstoqueOK();
      await handleDefeitoOK();
      await handleGarantiaOK();
      await handleEstoqueEstoqueOK();
      await handleClienteOK();
      /* Copiei do Form.vue */
      /* Este if(){} foi acrescentado pelo Patrick */
      /* Patrick alterou esta linha em 10.01.23 */
      if (route.params.barcode) {
        filter.value = route.params.barcode;
      }
      //}
    });

    //watch(props.barcode, (value, oldValue) => {
    //filter.value = value;
    //});

    /* Patrick retirou(comentou) este "watchEffect" em 10.01.23 */
    // watchEffect(() => {
    //   filter.value = props.barcode;
    // });

    /* "export": Para ser usado em "outro" componente */
    /* "return": Para ser usado no "mesmo" componente */

    /* export{}: Só pode ser importado exatamente com o mesmo nome */
    /* export default: Pode ser importando com qualquer nome */
    return {
      columns,
      estoque,
      loading,
      filter,
      handleEdit,
      handleDetails,
      handleListEstoque,
      handleHistorico,
      handleRemoveEstoque,
      initialPagination,
      handleEstoqueOK,
      handleDefeitoOK,
      ativosEstoqueDefeito,
      ativosEstoqueGarantia,
      ativosEstoqueOK,
      ativosEstoqueEstoque,
      ativosEstoqueCliente,
      pagesNumber: computed(() =>
        Math.ceil(estoque.value.length / initialPagination.value.rowPerPage)
      ),
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
