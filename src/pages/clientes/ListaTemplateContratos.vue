<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row">
      <!--  <q-table :rows="rows" :columns="columns" row-key="id" class="col-12"> -->
      <q-table
        :rows="templatecontrato"
        :columns="columns"
        v-model:pagination="initialPagination"
        row-key="id"
        class="col-md-06 col-sm-08 col-xs-12"
        :loading="loading"
        :filter="filter"
        hide-pagination
      >
        <template v-slot:top>
          <span class="text-h6">Modelos de contratos</span>
          <q-space />
          <!-- <q-btn
              v-if="$q.platform.is.desktop"
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'form-revendas' }"
            /> -->
          <q-td class="q-gutter-x-sm">
            <q-input
              outlined
              dense
              debounce="300"
              v-model="filter"
              placeholder="Pesquisar modelos de contratos"
              color="primary"
              class="q-mb-sm"
            >
              <template v-slot:append>
                <q-icon name="mdi-magnify" />
              </template>
            </q-input>
            <!-- <q-btn
              class="desktop-only"
              label="Gerar Pdf"
              color="primary"
              icon="mdi-file-pdf-box"
              dense
              no-caps=""
              @click="makePDF"
            /> -->
            <q-btn
              class="desktop-only"
              label="Novo template de contrato"
              color="primary"
              icon="mdi-plus"
              dense
              no-caps=""
              :to="{ name: 'form-templatecontrato' }"
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
              @click="handleRemovetemplateContrato(props.row)"
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
      <q-btn
        class="mobile-only"
        fab
        icon="mdi-plus"
        color="primary"
        :to="{ name: 'form-templatecontrato' }"
      />
    </q-page-sticky>
    <br />
    <q-btn
      label="Voltar"
      color="primary"
      class="full-width"
      rounded
      size="sm"
      flat
      :to="{ name: 'listarcontratos' }"
    />
  </q-page>
</template>

<script>
/* eslint-disable */
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
    name: "descricao",
    align: "left",
    label: "Descrição",
    field: "descricao",
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
import { defineComponent, ref, onMounted, computed } from "vue";

import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
/* import router from "src/router"; */
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "ListaTemplateContratos",

  methods: {
    makePDF() {
      /* window.html2canvas = html2canvas; */
      globalThis.html2canvas = html2canvas;
      var doc = new jsPDF("p", "pt", "a1");
      doc.html(document.querySelector("#app"), {
        callback: function (pdf) {
          pdf.save("ModeloContratos_cadastrados.pdf");
        },
      });
    },
  },

  setup() {
    const templatecontrato = ref([]);
    const loading = ref(true);
    const router = useRouter();
    const filter = ref("");
    /* const table = "revendas"; */
    const $q = useQuasar();
    const { list, remove } = useApi();
    const { notifyError, notifySuccess } = useNotify;

    const handleListTemplateContratos = async () => {
      try {
        loading.value = true;
        templatecontrato.value = await list("templatecontrato");
        loading.value = false;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEdit = (templatecontrato) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-clientes",
        params: { id: templatecontrato.id },
      });
    };

    const handleDetails = (templatecontrato) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-template-contratos-detalhes",
        params: { id: templatecontrato.id },
      });
    };

    const handleRemovetemplateContrato = async (templatecontrato) => {
      try {
        $q.dialog({
          title: "Confirm",
          message: `Tem certeza que quer deletar ${templatecontrato.nome} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove("contratos", templatecontrato);
          notifySuccess("Removido com sucesso!");
          handleListRevendas();
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    onMounted(() => {
      handleListTemplateContratos();
    });

    return {
      columns,
      templatecontrato,
      loading,
      filter,
      handleDetails,
      handleEdit,
      handleRemovetemplateContrato,
      initialPagination,
      pagesNumber: computed(() =>
        Math.ceil(
          templatecontrato.value.length / initialPagination.value.rowPerPage
        )
      ),
    };
  },
});
</script>
