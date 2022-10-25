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
      >
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <!-- ok -->
          <q-input label="Razão social" v-model="form.razaosocial" readonly />
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
            readonly
            mask="##.####.####/####-##"
          />
          <!-- ok -->
          <q-input
            label="Celular"
            v-model="form.celular"
            readonly
            mask="(##) # #### - ####"
          />
          <!-- ok -->
          <q-input
            label="WhatsApp"
            v-model="form.whatsapp"
            readonly
            mask="(##) # #### - ####"
          />
          <!-- ok -->
          <q-input
            label="Telefone fixo"
            v-model="form.fixo"
            readonly
            mask="(##) #### - ####"
          />
          <!-- ok -->
          <q-input label="Email" v-model="form.email" readonly type="email" />
          <!-- ok -->
          <q-input label="Rua" v-model="form.rua" readonly />
          <!-- ok -->
          <q-input label="Número" v-model="form.numero" readonly />
          <!-- ok -->
          <q-input label="Bairro" v-model="form.bairro" readonly />
          <!-- ok -->
          <q-input label="Cidade" v-model="form.cidade" readonly />

          <q-input label="Estado" v-model="form.estado" readonly />

          <!-- ok -->
          <q-input label="CEP" v-model="form.cep" readonly mask="#####-###" />
          <!-- ok -->
          <q-input
            label="Data de adesão"
            v-model="form.dataadesao"
            readonly
            type="date"
            stack-label
            mask="##/##/####"
          />

          <!-- ok -->
          <q-input label="Chave" v-model="form.chave" readonly />

          <!-- ok -->
          <q-input
            label="Nome do contato"
            v-model="form.nome_contato"
            readonly
          />

          <!-- ok -->
          <q-input label="Status" v-model="form.status" readonly />

          <q-input
            label="Forma de pagamento"
            v-model="form.formapagamento"
            readonly
          />

          <q-input label="Instalador" v-model="form.instalador" readonly />

          <!-- ok -->
          <!-- <q-select v-model="form.revenda" label="Revenda" /> -->

          <!-- option-value: Qual o "id" da categoria que vai vir -->
          <!-- option-label: O que vai ser exibido da categoria no select,
                           no caso, o "name" -->
          <!-- map-options: Para poder mapear as opções acima -->
          <!-- emit-value: Para que no retôrno, seja emitido somente o valor
                         desejado(id), e não o objeto completo. -->
          <!-- <q-select
            v-model="form.revenda_id"
            :options="optionsRevenda"
            label="Revenda"
            option-value="id"
            option-label="nome"
            map-options
            emit-value
            :rules="[(val) => !!val || 'Informe a revenda']"
          /> -->

          <q-input
            label="Revenda"
            v-model="form.revenda_id"
            option-value="id"
            option-label="nome"
            map-options
            emit-value
            readonly
          />

          <q-input
            label="Produtos e serviços que você vende atualmente"
            v-model="form.servicos"
            readonly
          />
        </div>

        <!-- ok -->
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input
            label="Observação"
            v-model="form.obs"
            readonly
            :rules="[(val) => (val && val.length > 0) || 'Observação']"
          />
        </div>

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
      onReset() {
        /* name.value = null; */
        age.value = null;
        accept.value = false;
      },

      optionsRevenda,
    };
  },
});
</script>
