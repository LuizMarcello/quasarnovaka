<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row">
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
          <span class="text-h6">Estoque</span>
          <q-space />

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

            <q-btn
              label="Gerar pdf"
              color="primary"
              icon="mdi-file-pdf-box"
              dense
              @click="makePDF"
            />

            <q-btn
              v-if="$q.platform.is.desktop"
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'barcode' }"
            />
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
      :to="{ name: 'listarestoque' }"
    />

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        class="mobile-only"
        fab
        icon="mdi-file-pdf-box"
        color="primary"
        @click="makePDF"
      />
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

  {
    name: "numerodeserie",
    align: "left",
    label: "Número de série",
    field: "numerodeserie",
    sortable: true,
  },

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
  /*  watch,
  watchEffect, */
} from "vue";

import estoqueApi from "src/composables/EstoqueApi";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
/* import router from "src/router"; */
/* Patrick incluiu aqui "useRoute" também, em 10.01.23 */
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "PageEstoqueOk",

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
    const estoque = ref([]);
    const loading = ref(true);
    const router = useRouter();
    /* Patrick acrescentou esta linha em 10.01.23 */
    const route = useRoute();
    /* const table = "revendas"; */
    const filter = ref("");
    const $q = useQuasar();
    const { remove } = useApi();
    const { listaEstoqueOk } = estoqueApi();
    const { notifyError, notifySuccess } = useNotify;

    const handleListEstoqueOk = async () => {
      try {
        loading.value = true;
        estoque.value = await listaEstoqueOk("estoque");
        loading.value = false;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEdit = (estoquee) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({ name: "form-estoque", params: { id: estoquee.id } });
    };

    const handleDetails = (estoquee) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-estoque-detalhes",
        params: { id: estoquee.id },
      });
    };

    const handleHistorico = (estoquee) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-estoque-historico",
        params: { id: estoquee.id },
      });
    };

    const handleRemoveEstoque = async (estoquee) => {
      try {
        $q.dialog({
          title: "Confirm",
          message: `Tem certeza que quer deletar ${estoquee.marca} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove("estoque", estoquee.id);
          notifySuccess("Removido com sucesso!");
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    onMounted(async () => {
      await handleListEstoqueOk();
    });

    /* "export": Para ser usado em "outro" componente */
    /* "return": Para ser usado no "mesmo" componente */

    /* export{}: Só pode ser importado exatamente com o mesmo nome */
    /* export default: Pode ser importando com qualquer nome */
    return {
      columns,
      loading,
      filter,
      estoque,
      handleEdit,
      handleDetails,
      handleListEstoqueOk,
      handleHistorico,
      handleRemoveEstoque,
      initialPagination,
      pagesNumber: computed(() =>
        Math.ceil(estoque.value.length / initialPagination.value.rowPerPage)
      ),
    };
  },
});
</script>
