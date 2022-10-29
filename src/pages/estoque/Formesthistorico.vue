<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Formulário de estoque</p>

        <div v-if="isUpdate">
          <p class="text-h6">Histórico do produto</p>
        </div>
      </div>

      <q-form
        class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md"
        @submit.prevent="handleSubmit"
      >
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input v-model="form.historico1" type="date" />

          <!-- <p>user.value.id</p> -->

          <q-input label="Histórico 01" v-model="form.obs1" />
        </div>
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input v-model="form.historico2" type="date" />

          <q-input label="Histórico 02" v-model="form.obs2" />
        </div>
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input v-model="form.historico3" type="date" />

          <q-input label="Histórico 03" v-model="form.obs3" />
        </div>

        <div>
          <q-btn
            :label="isUpdate ? 'Atualizar' : 'Enviar'"
            color="primary"
            class="full-width"
            rounded
            type="submit"
          />
          <!-- <q-btn
            label="Cancelar"
            color="primary"
            class="full-width q-gutter-y-sm"
            rounded
            flat
            :to="{ name: 'listarestoque' }"
          /> -->

          <q-btn
            label="Voltar"
            color="primary"
            class="full-width q-gutter-y-sm"
            rounded
            flat
            :to="{ name: 'listarestoque' }"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import useSupabase from "src/boot/supabase";
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

import useAuthUser from "src/composables/UseAuthUser";

export default defineComponent({
  nome: "PageFormEstoque",

  setup() {
    const { supabase } = useSupabase();
    const $q = useQuasar();
    const table = "estoque";
    const router = useRouter();
    const route = useRoute();
    const { post, getById, update, list } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const accept = ref(false);

    const { user } = useAuthUser();

    const optionsEstoque = ref([]);

    /* Verificando se na rota existe o "id" como parâmetro
         ou seja, se é para atualizar um "id", ou criar um registro novo.
         Se existir, "isUpdate" é true, senão é false.
         Para atualizar, vai ser usado o mesmo "form" do "cadastrar novo" */
    const isUpdate = computed(() => route.params.id);
    let estoqueee = {};
    const form = ref({
      historico1: "",
      historico2: "",
      historico3: "",
      obs1: "",
      obs2: "",
      obs3: "",
    });

    onMounted(() => {
      handleListEstoque();
      if (isUpdate.value) {
        handleGetEstoque(isUpdate.value);
      }
    });

    const handleListEstoque = async () => {
      optionsEstoque.value = await list("estoque");
    };

    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          await update(table, form.value);
          notifySuccess("Atualizado com sucesso");
        } else {
          await post(table, form.value);
          notifySuccess("Enviado com sucesso");
        }
        router.push({ nome: "form-clientes" });
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleGetEstoque = async (id) => {
      try {
        estoqueee = await getById(table, id);
        form.value = estoqueee;
      } catch (error) {
        notifyError(error.message);
      }
    };

    return {
      handleSubmit,
      form,
      isUpdate,
      accept,
      model: ref(null),
      options: [],

      onReset() {
        /* name.value = null; */
        age.value = null;
        accept.value = false;
      },

      optionsEstoque,
    };
  },
});
</script>
