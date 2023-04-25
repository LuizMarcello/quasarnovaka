<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Cadastrar modelo de contrato</p>
      </div>
      <q-btn
        label="Voltar"
        color="primary"
        class="full-width q-gutter-y-sm"
        rounded
        flat
        :to="{ name: 'listartemplatecontratos' }"
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
            label="Descrição"
            v-model="form.descricao"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o nome do cliente',
            ]"
          />

          <q-select
            v-model="form.variaveis"
            :options="variaveis"
            label="Variáveis"
          />
        </div>

        <div>
          <p>Contrato</p>
        </div>

        <div class="q-mt-sm q-gutter-sm">
          <q-editor v-model="form.editor" min-height="18rem" />

          <!-- <q-card flat bordered>
            <q-card-section>
              <pre style="white-space: pre-line">{{ editor }}</pre>
            </q-card-section>
          </q-card> -->

          <!-- <q-card flat bordered>
            <q-card-section v-html="editor" />
          </q-card> -->
        </div>

        <div class="q-gutter-y-md">
          <q-btn
            :label="isUpdate ? 'Atualizar' : 'Cadastrar'"
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
            :to="{ name: 'listartemplatecontratos' }"
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
  nome: "PageFormTemplateContrato",

  setup() {
    const { supabase } = useSupabase();
    const $q = useQuasar();
    const table = "templatecontrato";
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
      descricao: "",
      variaveis: "",
      editor: "",
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
        descricao: "",
        variaveis: "",
        editor: "",
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

      variaveis: [
        "Nome Cliente",
        "Email Cliente",
        "CPF/CNPJ Cliente",
        "RG/Inscrição Estadual Cliente",
        "Telefone Cliente",
        "NúmeroEndereço Cliente",
        "CEP Endereço Cliente",
        "Rua Endereço Cliente",
        "Bairro Endereço Cliente",
        "Cidade Endereço Cliente",
        "Esta Endereço Cliente",
        "Complemento Endereço Cliente",
        "Nome Cliente",
        "ID Contrato",
        "Dia de vencimento Contrato",
        "Valor Contrato",
        "Desconto Contrato",
        "Acréscimo Contrato",
        "Forma de pagamento Contrato",
        "Data de cadastro Contrato",
        "Login Cliente",
        "Senha login cliente",
        "Assinatura Usuário",
        "Assinatura Cliente",
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
      editor: ref(""),
    };
  },
});
</script>
