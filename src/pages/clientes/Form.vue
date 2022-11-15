<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Formulário de clientes</p>
      </div>

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
            label="Razão social"
            v-model="form.razaosocial"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe a razão social',
            ]"
          />
          <!-- ok -->
          <!-- <q-input
            label="Ie Rg"
            v-model="form.ie_rg"
            :rules="[(val) => (val && val.length > 0) || 'Informe seu Ie/Rg']"
          /> -->
          <!-- ok -->
          <q-input
            label="CNPJ"
            v-model="form.cnpj"
            mask="##.####.####/####-##"
            :rules="[(val) => (val && val.length > 0) || 'Informe seu CNPJ']"
          />
          <!-- ok -->
          <q-input
            label="Celular"
            v-model="form.celular"
            mask="(##) # #### - ####"
            :rules="[(val) => (val && val.length > 0) || 'Informe o celular']"
          />
          <!-- ok -->
          <q-input
            label="WhatsApp"
            v-model="form.whatsapp"
            mask="(##) # #### - ####"
            :rules="[(val) => (val && val.length > 0) || 'Informe o WhatsApp']"
          />
          <!-- ok -->
          <q-input
            label="Telefone fixo"
            v-model="form.fixo"
            mask="(##) #### - ####"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o telefone fixo',
            ]"
          />
          <!-- ok -->
          <q-input
            label="Email"
            v-model="form.email"
            type="email"
            :rules="[(val) => (val && val.length > 0) || 'Informe o email']"
          />
          <!-- ok -->
          <q-input
            label="Rua"
            v-model="form.rua"
            :rules="[(val) => (val && val.length > 0) || 'Informe a rua']"
          />
          <!-- ok -->
          <q-input
            label="Número"
            v-model="form.numero"
            :rules="[(val) => (val && val.length > 0) || 'Informe a número']"
          />
          <!-- ok -->
          <q-input
            label="Bairro"
            v-model="form.bairro"
            :rules="[(val) => (val && val.length > 0) || 'Informe o Bairro']"
          />
          <!-- ok -->
          <q-input
            label="Cidade"
            v-model="form.cidade"
            :rules="[(val) => (val && val.length > 0) || 'Informe a cidade']"
          />
          <!-- ok -->
          <q-select v-model="form.estado" :options="options" label="Estado" />
          <!-- ok -->
          <q-input
            label="CEP"
            v-model="form.cep"
            mask="#####-###"
            :rules="[(val) => (val && val.length > 0) || 'Informe o CEP']"
          />
          <!-- ok -->
          <q-input
            label="Data de adesão"
            v-model="form.dataadesao"
            type="date"
            stack-label
            mask="##/##/####"
            :rules="[(val) => (val && val.length > 0) || 'Data de adesão']"
          />

          <!-- ok -->
          <q-input
            label="Chave"
            v-model="form.chave"
            :rules="[(val) => (val && val.length > 0) || 'Informe a chave']"
          />
          <!-- ok -->
          <q-input
            label="Nome do contato"
            v-model="form.nome_contato"
            :rules="[(val) => (val && val.length > 0) || 'Informe seu contato']"
          />
          <!-- ok -->
          <q-select
            v-model="form.status"
            :options="opcoesstatus"
            label="Status"
          />
          <!-- ok -->
          <q-select
            v-model="form.formapagamento"
            :options="opcoespagamento"
            label="Forma de pagamento"
          />
          <!-- ok -->
          <q-select
            v-model="form.instalador"
            :options="opcoesinstalador"
            label="Instalador"
          />

          <!-- ok -->
          <!-- <q-select v-model="form.revenda" label="Revenda" /> -->

          <!-- option-value: Qual o "id" da categoria que vai vir -->
          <!-- option-label: O que vai ser exibido da categoria no select,
                           no caso, o "name" -->
          <!-- map-options: Para poder mapear as opções acima -->
          <!-- emit-value: Para que no retôrno, seja emitido somente o valor
                         desejado(id), e não o objeto completo. -->
          <q-select
            v-model="form.revenda_id"
            :options="optionsRevenda"
            label="Revenda"
            option-value="id"
            option-label="nome"
            map-options
            emit-value
            :rules="[(val) => !!val || 'Informe a revenda']"
          />

          <!-- ok -->
          <q-select
            v-model="form.servicos"
            :options="servicos"
            label="Produtos e serviços que você vende atualmente"
          />
        </div>
        <!-- ok -->
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input
            label="Observação"
            v-model="form.obs"
            :rules="[(val) => (val && val.length > 0) || 'Observação']"
          />
        </div>

        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input v-model="text" filled autogrow readonly />
        </div>
        <q-toggle
          v-model="accept"
          label="Estou de acôrdo em receber comunicações da Bentley."
        />

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
            label="Cancelar"
            color="primary"
            class="full-width"
            rounded
            flat
            :to="{ name: 'home' }"
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

    const optionsRevenda = ref([]);

    /* Verificando se na rota existe o "id" como parâmetro
         ou seja, se é para atualizar um "id", ou criar um registro novo.
         Se existir, "isUpdate" é true, senão é false.
         Para atualizar, vai ser usado o mesmo "form" do "cadastrar novo" */
    const isUpdate = computed(() => route.params.id);
    let clienteee = {};
    const form = ref({
      razaosocial: "",
      /* ie_rg: "", */
      cnpj: "",
      celular: "",
      whatsapp: "",
      fixo: "",
      email: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
      dataadesao: "",
      chave: "",
      nome_contato: "",
      formapagamento: "",
      instalador: "",
      revenda_id: "",
      servicos: "",
      obs: "",
      status: "",
    });

    onMounted(() => {
      handleListRevendas();
      if (isUpdate.value) {
        handleGetCliente(isUpdate.value);
      }
    });

    const handleListRevendas = async () => {
      optionsRevenda.value = await list("revendas");
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
        razaosocial: "",
        /* ie_rg: "", */
        cnpj: "",
        celular: "",
        whatsapp: "",
        fixo: "",
        email: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        dataadesao: "",
        chave: "",
        nome_contato: "",
        formapagamento: "",
        instalador: "",
        revenda_id: "",
        servicos: "",
        obs: "",
        status: "",
      };
    };

    const handleGetCliente = async (id) => {
      try {
        clienteee = await getById(table, id);
        form.value = clienteee;
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
      options: [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernanbuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
      ],
      opcoespagamento: ["Boleto", "Cartão de crédito/débito", "Pix"],
      opcoesinstalador: [],
      opcoesstatus: ["Ativo", "Aguardando", "Inativo"],

      servicos: [
        "Internet via satélite",
        "TV via satélite",
        "Segurança residencial",
        "Serviços de informática",
        "Outros",
      ],
      text: ref(
        "A Bentley usará suas informações pessoais somente para administrar a sua conta, fornecer os produtos e serviços que você solicitar e, ocasionalmente, entrar em contato para oferecer informações sobre nossos produtos, serviços e outros conteúdos que podem ser de seu interesse. Você pode se descadastrar deste serviço a qualquer momento. Para mais informações sobre como cancelar sua inscrição e sobre nossas práticas de privacidade, por favor, consulte nossa Política de Privacidade"
      ),
      onSubmit() {
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
      },

      optionsRevenda,
    };
  },
});
</script>
