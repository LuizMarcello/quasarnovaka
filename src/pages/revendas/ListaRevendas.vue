<template>
  <q-page padding>
    <div class="row">
      <q-table :rows="rows" :columns="columns" row-key="id" class="col-12">
        <template v-slot:top>
          <span class="text-h6">Revenda</span>
          <q-space />
          <q-btn label="Adicionar" color="primary" />
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
    name: "name",
    align: "left",
    label: "Name",
    field: "name",
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
    name: "actions",
    align: "right",
    label: "Actions",
    field: "actions",
    sortable: true,
  },
];
const rows = [
  {
    id: "123",
    name: "Luiz",
    sobrenome: "Marcello",
  },
];
/* "defineComponent": Porque é vuejs 3 */
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageRevendasList",
  setup() {
    return {
      columns,
      rows,
    };
  },
});
</script>
