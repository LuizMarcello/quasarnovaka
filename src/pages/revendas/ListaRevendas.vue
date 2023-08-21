<template>
  <q-page padding>
    <div class="row">
      <!--  <q-table :rows="rows" :columns="columns" row-key="id" class="col-12"> -->

      <q-table
        :rows="revendas"
        :columns="columns"
        v-model:pagination="initialPagination"
        row-key="id"
        class="col-md-06 col-sm-08 col-xs-12"
        :loading="loading"
        :filter="filter"
        hide-pagination
      >
        <template v-slot:top>
          <span class="text-h6">Revenda</span>
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
              placeholder="Pesquisar revendas"
              color="primary"
              class="q-mb-sm"
            >
              <template v-slot:append>
                <q-icon name="mdi-magnify" />
              </template>
            </q-input>
            <q-btn
              class="desktop-only"
              label="Gerar pdf"
              color="primary"
              icon="mdi-file-pdf-box"
              dense
              @click="makePDF"
            />
            <q-btn
              class="desktop-only"
              label="Adicionar"
              color="primary"
              icon="mdi-plus"
              dense
              :to="{ name: 'form-revendas' }"
            />
          </q-td>
        </template>

        <template v-slot:body-cell-actions="props">
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left">
                This is expand slot for row above: {{ props.row.name }}.
              </div>
            </q-td>
          </q-tr>

          <q-td :props="props" class="q-gutter-x-sm">
            <!--  <q-btn
              icon="mdi-feature-search-outline"
              color="primary"
              dense
              size="sm"
            >
              <q-tooltip> Aprovada </q-tooltip></q-btn
            > -->

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
              icon="mdi-list-status"
              color="info"
              dense
              size="sm"
              @click="handleAprovar(props.row)"
            >
              <q-tooltip> Alterar status </q-tooltip></q-btn
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
              @click="handleRemoveRevenda(props.row)"
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
        :to="{ name: 'form-revendas' }"
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
      :to="{ name: 'iniciorevendas' }"
    />
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
    name: "status",
    align: "left",
    label: "Status",
    field: "status",
    sortable: true,
  },
  {
    name: "nomedaempresa",
    align: "left",
    label: "Nome da empresa",
    field: "nomedaempresa",
    sortable: true,
  },

  /* {
    name: "email",
    align: "left",
    label: "Email",
    field: "email",
    sortable: true,
  }, */
  {
    name: "cidade",
    align: "left",
    label: "Cidade",
    field: "cidade",
    sortable: true,
  },
  {
    name: "estado",
    align: "left",
    label: "Estado",
    field: "estado",
    sortable: true,
  },
  {
    name: "servicos",
    align: "left",
    label: "Serviços já prestados",
    field: "servicos",
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
  name: "PageRevendasList",

  methods: {
    makePDF() {
      /* window.html2canvas = html2canvas; */
      globalThis.html2canvas = html2canvas;
      var doc = new jsPDF("p", "pt", "a1");
      doc.html(document.querySelector("#app"), {
        callback: function (pdf) {
          pdf.save("Revendas_cadastradas.pdf");
        },
      });
    },
  },

  setup() {
    const revendas = ref([]);
    const loading = ref(true);
    const router = useRouter();
    const filter = ref("");
    /* const table = "revendas"; */
    const $q = useQuasar();
    const { list, remove } = useApi();
    const { notifyError, notifySuccess } = useNotify;

    const handleListRevendas = async () => {
      try {
        loading.value = true;
        revendas.value = await list("revendas");
        loading.value = false;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEdit = (revenda) => {
      router.push({ name: "form-revendas", params: { id: revenda.id } });
    };

    const handleDetails = (revenda) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-revenda-detalhes",
        params: { id: revenda.id },
      });
    };

    const handleAprovar = (revenda) => {
      router.push({ name: "aprovarrevendas", params: { id: revenda.id } });
    };

    const handleRemoveRevenda = async (revenda) => {
      try {
        $q.dialog({
          title: "Confirm",
          message: `Tem certeza que quer deletar ${revenda.nome} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove("revendas", revenda.id);
          notifySuccess("Removido com sucesso!");
          handleListRevendas();
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    onMounted(() => {
      handleListRevendas();
    });

    return {
      columns,
      revendas,
      loading,
      filter,
      handleEdit,
      handleDetails,
      handleAprovar,
      handleRemoveRevenda,
      initialPagination,
      pagesNumber: computed(() =>
        Math.ceil(revendas.value.length / initialPagination.value.rowPerPage)
      ),
    };
  },
});
</script>
