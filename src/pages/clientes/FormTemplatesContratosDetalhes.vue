<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Formulário de modelos de contratos</p>
      </div>
      <q-btn
        label="Voltar"
        color="primary"
        class="full-width"
        rounded
        flat
        :to="{ name: 'listartemplatecontratos' }"
      />

      <q-form class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md">
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input label="ID" v-model="form.id" readonly />

          <q-input label="Descrição" v-model="form.descricao" readonly />

          <div class="q-mt-sm q-gutter-sm">
            <q-editor v-model="form.editor" min-height="18rem" readonly />
          </div>
        </div>

        <!-- ok -->
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        ></div>

        <q-btn
          label="Voltar"
          color="primary"
          class="full-width"
          rounded
          flat
          :to="{ name: 'listarclientes' }"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import useSupabase from "src/boot/supabase";
import { defineComponent, ref, onMounted, computed } from "vue";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  nome: "PageTemplContrDetalhes",

  setup() {
    const { supabase } = useSupabase();
    const table = "templatecontrato";

    const { getById } = useApi();
    const { notifyError } = useNotify();

    let templatesContratos = {};
    const form = ref({
      descricao: "",
      editor: "",
    });

    onMounted(() => {
      handleGetTemplatesContratos();
    });

    const handleGetTemplatesContratos = async (id) => {
      try {
        templatesContratos = await getById(table, id);
        form.value = templatesContratos;
      } catch (error) {
        notifyError(error.message);
      }
    };

    return {
      form,

      model: ref(null),
    };
  },
});
</script>
