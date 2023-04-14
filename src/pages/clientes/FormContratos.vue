<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Formulário de contratos</p>
      </div>
      <q-btn
        label="Voltar"
        color="primary"
        class="full-width q-gutter-y-sm"
        rounded
        flat
        :to="{ name: 'listarcontratos' }"
      />

      <q-form
        class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md"
        @submit.prevent="handleSubmit"
        @reset="onReset"
      >
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <!-- ok -->
          <q-input
            label="Nome"
            v-model="form.nome"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o nome do cliente',
            ]"
          />

          <q-select
            v-model="form.formapgto"
            :options="opcoespgto"
            label="Forma de pagamento"
          />

          <q-input
            label="Vencimento"
            type="date"
            stack-label
            v-model="form.vencimento"
            mask="##/##/####"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o vencimento',
            ]"
          />
          <!-- ok -->
          <q-input
            label="Valor"
            v-model="form.valor"
            :rules="[(val) => (val && val.length > 0) || 'Informe o valor']"
          />
          <!-- ok -->
          <q-input
            label="Criado em"
            type="date"
            stack-label
            v-model="form.datacriacao"
            mask="##/##/####"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe a data de criação',
            ]"
          />
          <!-- ok -->
          <q-input
            label="Data Bloq/Pend"
            type="date"
            stack-label
            v-model="form.databloqpend"
            mask="##/##/####"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Informe a data de bloqueio/pendente',
            ]"
          />

          <!-- <q-select v-model="form.revenda" label="Revenda" /> -->

          <!-- option-value: Qual o "id" da categoria que vai vir -->
          <!-- option-label: O que vai ser exibido da categoria no select,
                           no caso, o "name" -->
          <!-- map-options: Para poder mapear as opções acima -->
          <!-- emit-value: Para que no retôrno, seja emitido somente o valor
                         desejado(id), e não o objeto completo. -->
        </div>
        
        <div class="q-gutter-y-md">
          <q-btn
            :label="isUpdate ? 'Atualizar' : 'Enviar'"
            color="primary"
            class="full-width"
            rounded
            type="submit"
          />

          <q-btn
            label="Limpar dados"
            color="primary"
            class="full-width"
            rounded
            type="reset"
          />

          <q-btn
            label="Voltar"
            color="primary"
            class="full-width"
            rounded
            flat
            :to="{ name: 'listarcontratos' }"
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

export default defineComponent({
  nome: "PageFormCliente",

  setup() {
    const { supabase } = useSupabase();
    const $q = useQuasar();
    const table = "clientes";
    const router = useRouter();
    const route = useRoute();
    const { post, getById, update, list } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const accept = ref(false);

    const optionsContrato = ref([]);

    /* Verificando se na rota existe o "id" como parâmetro
         ou seja, se é para atualizar um "id", ou criar um registro novo.
         Se existir, "isUpdate" é true, senão é false.
         Para atualizar, vai ser usado o mesmo "form" do "cadastrar novo" */
    const isUpdate = computed(() => route.params.id);
    let contratooo = {};
    const form = ref({
      nome: "",
      formapgto: "",
      vencimento: "",
      valor: "",
      datacriacao: "",
      databloqpend: "",
    });

    onMounted(() => {
      handleListContratos();
      if (isUpdate.value) {
        handleGetContrato(isUpdate.value);
      }
    });

    const handleListContratos = async () => {
      optionsContrato.value = await list("contratos");
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

    // Para limpar os campos
    const onReset = async () => {
      form.value = {
        nome: "",
        formapgto: "",
        vencimento: "",
        valor: "",
        datacriacao: "",
        databloqpend: "",
      };
    };

    const handleGetContrato = async (id) => {
      try {
        contratooo = await getById(table, id);
        form.value = contratooo;
      } catch (error) {
        notifyError(error.message);
      }
    };

    return {
      handleSubmit,
      form,
      isUpdate,
      onReset,
      accept,
      model: ref(null),

      opcoespgto: [
        "Gerencia Net",
        "Radio_Juno",
        "Nova Ka",
        "Nova Ka_v2",
        "Nova Ka_v3",
        "Sencinet",
        "Filial_MT",
      ],

      /* onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      }, */

      optionsContrato,
    };
  },
});
</script>
