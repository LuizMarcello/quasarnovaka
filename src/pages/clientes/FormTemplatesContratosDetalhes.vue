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

      <q-form
        class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md"
        @submit.prevent="handleSubmit"
      >
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input label="ID" v-model="form.id" readonly />

          <q-input label="Razão social" v-model="form.descricao" readonly />

          <q-input label="Instalador" v-model="form.instalador" readonly />

          <q-input
            label="Revenda"
            v-model="form.revenda_id"
            option-value="id"
            option-label="nome"
            map-options
            emit-value
            readonly
          />


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
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  nome: "PageTemplContrDetalhes",

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
