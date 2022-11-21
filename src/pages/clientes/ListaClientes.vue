<template>
  <q-page padding>
    <div class="row">
      <!--  <q-table :rows="rows" :columns="columns" row-key="id" class="col-12"> -->
      <q-table
        :rows="clientes"
        :columns="columns"
        v-model:pagination="initialPagination"
        row-key="id"
        class="col-md-06 col-sm-08 col-xs-12"
        :loading="loading"
        :filter="filter"
        hide-pagination
      >
        <template v-slot:top>
          <span class="text-h6">Clientes</span>
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
              placeholder="Pesquisar clientes"
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
              :to="{ name: 'form-clientes' }"
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
              @click="handleRemoveCliente(props.row)"
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
        :to="{ name: 'form-clientes' }"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const columns = [
  {
    name: "razaosocial",
    align: "left",
    label: "Razão social*",
    field: "razaosocial",
    sortable: true,
  },
  /* {
    name: "ie_rg",
    align: "left",
    label: "Ie Rg",
    field: "ie_rg",
    sortable: true,
  }, */
  {
    name: "cnpj",
    align: "left",
    label: "CNPJ",
    field: "cnpj",
    sortable: true,
  },
  /* {
    name: "dataadesao",
    align: "left",
    label: "Data de adesão",
    field: "dataadesao",
    sortable: true,
  }, */
  {
    name: "nome_contato",
    align: "left",
    label: "Nome do contato",
    field: "nome_contato",
    sortable: true,
  },
  /* {
    name: "celular",
    align: "left",
    label: "Celular",
    field: "celular",
    sortable: true,
  }, */
  /* {
    name: "whatsapp",
    align: "left",
    label: "WhatsApp",
    field: "whatsapp",
    sortable: true,
  }, */
  /* {
    name: "fixo",
    align: "left",
    label: "Telefone fixo",
    field: "fixo",
    sortable: true,
  }, */
  {
    name: "email",
    align: "left",
    label: "Email",
    field: "email",
    sortable: true,
  },
  /* {
    name: "chave",
    align: "left",
    label: "Chave",
    field: "chave",
    sortable: true,
  }, */
  /* {
    name: "status",
    align: "left",
    label: "Status",
    field: "status",
    sortable: true,
  }, */
  /* {
    name: "formapagamento",
    align: "left",
    label: "Forma de pagamento",
    field: "formapagamento",
    sortable: true,
  }, */
  /* {
    name: "instalador",
    align: "left",
    label: "Instalador",
    field: "instalador",
    sortable: true,
  }, */

  /* {
    name: "revenda_id",
    align: "left",
    label: "Revenddda",
    field: "revenda_id",
    sortable: true,
  }, */

  /* {
    name: "observacao",
    align: "left",
    label: "Observacao",
    field: "observacao",
    sortable: true,
  }, */
  /* {
    name: "cep",
    align: "left",
    label: "CEP",
    field: "cep",
    sortable: true,
  }, */
  /*  {
    name: "rua",
    align: "left",
    label: "Rua",
    field: "rua",
    sortable: true,
  }, */
  /* {
    name: "numero",
    align: "left",
    label: "Número",
    field: "numero",
    sortable: true,
  }, */
  /* {
    name: "bairro",
    align: "left",
    label: "Bairro",
    field: "bairro",
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
    label: "Actions",
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
  name: "PageClientesList",

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

  setup() {
    const clientes = ref([]);
    const loading = ref(true);
    const router = useRouter();
    const filter = ref("");
    /* const table = "revendas"; */
    const $q = useQuasar();
    const { list, remove } = useApi();
    const { notifyError, notifySuccess } = useNotify;

    const handleListClientes = async () => {
      try {
        loading.value = true;
        clientes.value = await list("clientes");
        loading.value = false;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEdit = (cliente) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({ name: "form-clientes", params: { id: cliente.id } });
    };

    const handleDetails = (cliente) => {
      /*   router.push({ name: "form-revendas", params: { id: revenda.id } }); */
      router.push({
        name: "form-clientes-detalhes",
        params: { id: cliente.id },
      });
    };

    const handleRemoveCliente = async (cliente) => {
      try {
        $q.dialog({
          title: "Confirm",
          message: `Tem certeza que quer deletar ${cliente.nome} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove("clientes", cliente.id);
          notifySuccess("Removido com sucesso!");
          handleListRevendas();
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    onMounted(() => {
      handleListClientes();
    });

    return {
      columns,
      clientes,
      loading,
      filter,
      handleDetails,
      handleEdit,
      handleRemoveCliente,
      initialPagination,
      pagesNumber: computed(() =>
        Math.ceil(clientes.value.length / initialPagination.value.rowPerPage)
      ),
    };
  },
});
</script>
