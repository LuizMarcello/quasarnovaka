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
        class="col-md-6 col-xs-12 col-sm-12 q-gutter-y-md"
        @submit.prevent="handleSubmit"
        @reset="onReset"
      >
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-select
            v-model="form.cliente_id"
            :options="optionsCliente"
            class="q-pt-md"
            option-value="id"
            option-label="razaosocial"
            map-options
            emit-value
            label="Cliente"
            hint="Selecione um cliente..."
            :rules="[(val) => !!val || 'Informe um cliente']"
          />

          <q-select
            class="q-pt-md"
            v-model="form.vencimento"
            stack-label
            :options="diadomes"
            label="Dia de pagamento"
          />

          <q-select
            class="q-pt-md"
            v-model="form.formapgto"
            :options="opcoespgto"
            label="Forma de pagamento"
            hint="Padrão* Cobrança Informal"
          />

          <q-select
            v-model="form.templatecontrato_id"
            :options="optionsTemplatecontrato"
            option-value="id"
            option-label="descricao"
            map-options
            emit-value
            label="Modelo de contrato"
            hint="Selecione um modelo de contrato..."
            :rules="[(val) => !!val || 'Informe o modelo do contrato']"
          />

          <q-select
            class="q-pt-md"
            label="Msg. pendência - automática?"
            v-model="form.msgpendenciaautomatica"
            :options="pendenciasimounao"
            hint="Padrão* usa as config. predefinidas"
          />

          <q-select
            class="q-pt-md"
            label="Msg. bloqueio - automática?"
            v-model="form.msgbloqueioautomatica"
            :options="bloqueiosimounao"
            hint="Padrão* usa as config. predefinidas"
          />

          <q-input
            class="q-pt-md"
            label="Dias para pendência"
            type="number"
            v-model="form.diaspendencia"
            hint="Deixe em branco para usar config. padrão"
          />
          <!-- Se optar por colocar regras, obrigando a preencher -->
          <!-- :rules="[
              (val) =>
                (val && val.length > 0) || 'Informe o número da nota fiscal',
            ]" -->

          <q-input
            class="q-pt-md"
            label="Dias para bloqueio"
            type="number"
            v-model="form.diasbloqueio"
            hint="Deixe em branco para usar config. padrão"
          />

          <!-- Se quiser preencher com zero -->
          <!-- fill-mask="0" -->
          <q-input
            class="q-pt-md"
            v-model="form.valor"
            label="R$"
            mask="#.###,##"
            reverse-fill-mask
            hint="Valor do contrato"
            input-class="text-left"
          />

          <q-select
            class="q-pt-md"
            label="Habilitar mensalidade automática?"
            v-model="form.mensalidautom"
            :options="mensalidautomatica"
            hint="Padrão* usa as config. predefinidas"
          />

          <q-select
            class="q-pt-md"
            label="Forma de pagamento - Pré ou Pós?"
            v-model="form.pgtoprepos"
            :options="preoupos"
            hint="Padrão* usa as config. predefinidas"
          />

          <!-- ok -->
          <!-- <q-input
            class="q-pt-sm"
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
          /> -->

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
  nome: "PageFormContratos",

  setup() {
    const { supabase } = useSupabase();
    const $q = useQuasar();
    const table = "contratos";
    const router = useRouter();
    const route = useRoute();
    const { post, getById, update, list } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const accept = ref(false);
    const optionsCliente = ref([]);
    const optionsContrato = ref([]);
    const optionsTemplatecontrato = ref([]);

    /* Verificando se na rota existe o "id" como parâmetro
         ou seja, se é para atualizar um "id", ou criar um registro novo.
         Se existir, "isUpdate" é true, senão é false.
         Para atualizar, vai ser usado o mesmo "form" do "cadastrar novo" */
    const isUpdate = computed(() => route.params.id);
    let contratooo = {};
    const form = ref({
      cliente_id: "",
      formapgto: "Cobrança informal",
      vencimento: "01",
      diaspendencia: "",
      user_id: "",
      diasbloqueio: "Padrão",
      msgpendenciaautomatica: "Padrão",
      msgbloqueioautomatica: "Padrão",
      mensalidautom: "Padrão",
      pgtoprepos: "Padrão",
      templatecontrato_id: "",
      valor: "",
    });

    onMounted(() => {
      handleListModeloContratos();
      handleListClientes();
      handleListContratos();
      if (isUpdate.value) {
        handleGetContrato(isUpdate.value);
      }
    });

    const handleListClientes = async () => {
      optionsCliente.value = await list("clientes");
    };

    const handleListContratos = async () => {
      optionsContrato.value = await list("contratos");
    };

    const handleListModeloContratos = async () => {
      optionsTemplatecontrato.value = await list("templatecontrato");
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
        cliente_id: "",
        formapgto: "",
        vencimento: "",
        diaspendencia: "",
        diasbloqueio: "",
        msgpendenciaautomatica: "",
        msgbloqueioautomatica: "",
        mensalidautom: "",
        pgtoprepos: "",
        templatecontrato_id: "",
        valor: "",
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
        "Cobrança informal",
        "Gerencia Net",
        "Radio_Juno",
        "Nova Ka",
        "Nova Ka_v2",
        "Nova Ka_v3",
        "Sencinet",
        "Filial_MT",
      ],

      diadomes: ["01", "05", "10", "15", "20", "25"],
      pendenciasimounao: ["sim", "não", "Padrão"],
      bloqueiosimounao: ["sim", "não", "Padrão"],
      mensalidautomatica: ["Não", "Sim"],
      preoupos: ["Pré Pago", "Pós Pago"],

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
      optionsCliente,
      optionsTemplatecontrato,
    };
  },
});
</script>
