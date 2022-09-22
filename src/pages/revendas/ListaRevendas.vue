<template>
  <q-page padding>
    <div class="row">
      <!--  <q-table :rows="rows" :columns="columns" row-key="id" class="col-12"> -->
      <q-table
        :rows="revendas"
        :columns="columns"
        row-key="id"
        class="col-md-06 col-sm-08 col-xs-12"
        :loading="loading"
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
            <q-btn
              class="desktop-only"
              label="Gerar pdf"
              color="primary"
              icon="mdi-file-pdf-box"
              dense
              :to="{ name: 'listarevendas-pdf' }"
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
          <q-td :props="props" class="q-gutter-x-sm">
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
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        class="mobile-only"
        fab
        icon="mdi-file-pdf-box"
        color="primary"
        :to="{ name: 'listarevendas-pdf' }"
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
  </q-page>
</template>

<script>
const columns = [
  {
    name: "nome",
    align: "left",
    label: "Nome",
    field: "nome",
    sortable: true,
  },
  {
    name: "sobrenome",
    align: "left",
    label: "Sobrenome",
    field: "sobrenome",
    sortable: true,
  },
  {
    name: "nomedaempresa",
    align: "left",
    label: "Nome da empresa",
    field: "nomedaempresa",
    sortable: true,
  },
  {
    name: "telefone",
    align: "left",
    label: "Telefone",
    field: "telefone",
    sortable: true,
  },
  {
    name: "whatsapp",
    align: "left",
    label: "WhatsApp",
    field: "whatsapp",
    sortable: true,
  },
  {
    name: "email",
    align: "left",
    label: "Email",
    field: "email",
    sortable: true,
  },
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

/* "defineComponent": Porque é vuejs 3 */
import { defineComponent, ref, onMounted, computed } from "vue";

import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
/* import router from "src/router"; */
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "PageRevendasList",
  setup() {
    const revendas = ref([]);
    const loading = ref(true);
    const router = useRouter();
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
      handleEdit,
      handleRemoveRevenda,
    };
  },
});
</script>
