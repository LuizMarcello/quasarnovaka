<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row">
      <!--  <q-table :rows="rows" :columns="columns" row-key="id" class="col-12"> -->
      <q-table
        :rows="estoqueBuc"
        :columns="columns"
        v-model:pagination="initialPagination"
        row-key="id"
        class="col-md-06 col-sm-08 col-xs-12"
        :loading="loading"
        :filter="filter"
        hide-pagination
      >
        <template v-slot:top>
          <span class="text-h6">Estoque</span>
          <q-space />
          <!-- <q-btn
              v-if="$q.platform.is.desktop"
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'form-revendas' }"
            /> -->
          <q-td class="q-gutter-x-md q-gutter-y-sm">
            <div>
              <q-btn
                v-if="$q.platform.is.mobile"
                label="Consultar código de barras"
                color="primary"
                icon="mdi-barcode"
                dense
                :to="{ name: 'barcodesearch' }"
              />
            </div>

            <!-- <q-btn
              icon="mdi-feature-search-outline"
              color="primary"
              dense
              size="sm"
              @click="handleDetails(props.row)"
            ></q-btn> -->

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
            <q-space />

            <!-- <q-btn
              class="desktop-only"
              label="Gerar pdf"
              color="primary"
              icon="mdi-file-pdf-box"
              dense
              @click="makePDF"
            /> -->

            <q-btn
              label="Gerar pdf"
              color="primary"
              icon="mdi-file-pdf-box"
              dense
              @click="makePDF"
            />

            <!--  <q-btn
              class="desktop-only"
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'form-estoque' }"
            /> -->

            <!--  <q-btn
              class="desktop-only"
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'barcode' }"
            /> -->

            <q-btn
              v-if="$q.platform.is.desktop"
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'barcode' }"
            />

            <!-- <q-btn
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'form-estoque' }"
            /> -->
          </q-td>
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
import useNotify from "src/composables/UseNotify";
/* import router from "src/router"; */
/* Patrick incluiu aqui "useRoute" também, em 10.01.23 */
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";

/* Copiei do Form.vue */
/* import BtnScannerAndroid from "src/components/barcodeScanner/BtnScannerAndroid.vue"; */

export default defineComponent({
  name: "PageEstoqueBuc",

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
  setup(props) {
    const estoqueBuc = ref([]);
    const loading = ref(true);
    const router = useRouter();
    /* Patrick acrescentou esta linha em 10.01.23 */
    const route = useRoute();
    /* const table = "revendas"; */
    const filter = ref("");
    const $q = useQuasar();
    const { handleListBuc, remove } = useApi();
    const { notifyError, notifySuccess } = useNotify;

    const handleListEstoqueBuc = async () => {
      try {
        loading.value = true;
        estoqueBuc.value = await handleListBuc("estoque");
        loading.value = false;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEdit = (estoqueBuc) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({ name: "form-estoque", params: { id: estoqueBuc.id } });
    };

    const handleDetails = (estoqueBuc) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-estoque-detalhes",
        params: { id: estoqueBuc.id },
      });
    };

    const handleHistorico = (estoqueBuc) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-estoque-historico",
        params: { id: estoqueBuc.id },
      });
    };

    const handleRemoveEstoque = async (estoqueBuc) => {
      try {
        $q.dialog({
          title: "Confirm",
          message: `Tem certeza que quer deletar ${estoqueBuc.marca} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove("estoque", estoqueBuc.id);
          notifySuccess("Removido com sucesso!");
          handleListEstoque();
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    /* Patrick modificou em 10.01.23 */
    /* Antes: */
    onMounted(() => {
      handleListEstoqueBuc();
      //handleListEstoque();
      /* Copiei do Form.vue */
      /* Este if(){} foi acrescentado pelo Patrick */
      //if (props.barcode) {
      //filter.value = props.barcode;
      //}
    });

    /* Depois */
    //onMounted(async () => {
    //await handleListEstoqueAntena();
    /* Copiei do Form.vue */
    /* Este if(){} foi acrescentado pelo Patrick */
    /* Patrick alterou esta linha em 10.01.23 */
    //if (route.params.barcode) {
    //filter.value = route.params.barcode;
    //}
    //}
    //});

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
      loading,
      filter,
      estoqueBuc,
      handleEdit,
      handleDetails,
      handleListEstoqueBuc,
      handleHistorico,
      handleRemoveEstoque,
      initialPagination,
      pagesNumber: computed(() =>
        Math.ceil(
          estoqueBuc.value.length / initialPagination.value.rowPerPage
        )
      ),
    };
  },
});
</script>
