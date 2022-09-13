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
          <q-btn
            label="Adicionar"
            color="primary"
            icon="mdi-plus"
            dense
            :to="{ name: 'form-revendas' }"
          />
        </template>

        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn icon="mdi-pencil" color="info" dense size="sm">
              <q-tooltip> Editar </q-tooltip></q-btn
            >
            <q-btn icon="mdi-trash-can-outline" color="negative" dense size="sm"
              ><q-tooltip> Excluir </q-tooltip></q-btn
            >
          </q-td>
        </template>
      </q-table>
    </div>
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
    name: "actions",
    align: "right",
    label: "Actions",
    field: "actions",
    sortable: true,
  },
];

/* "defineComponent": Porque é vuejs 3 */
import { defineComponent, ref, onMounted } from "vue";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  name: "PageRevendasList",
  setup() {
    const revendas = ref([]);

    const loading = ref(true);

    const { list } = useApi();
    const { notifyError } = useNotify;

    const handleListRevendas = async () => {
      try {
        loading.value = true;
        revendas.value = await list("revendas");
        loading.value = false;
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
    };
  },
});
</script>
