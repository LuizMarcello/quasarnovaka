<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Formulário de revendas</p>
      </div>

      <q-form
        class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md"
        @submit.prevent="handleSubmit"
      >
        <div style="border: 2px solid #0B0B61;; border-radius: 15px; padding: 30px">
          <q-input
            label="Nome"
            v-model="form.nome"
            :rules="[(val) => (val && val.length > 0) || 'Informe seu nome']"
          />
          <q-input
            label="Sobrenome"
            v-model="form.sobrenome"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe seu sobrenome',
            ]"
          />
          <q-input
            label="Nome da empresa"
            v-model="form.nomedaempresa"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o nome da empresa',
            ]"
          />
          <q-input
            label="Telefone"
            v-model="form.telefone"
            mask="(##) # #### - ####"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe seu telefone',
            ]"
          />
          <q-input
            label="WhatsApp"
            v-model="form.whatsapp"
            mask="(##) # #### - ####"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe seu WhatsApp',
            ]"
          />
          <q-input
            label="Email"
            v-model="form.email"
            type="email"
            :rules="[(val) => (val && val.length > 0) || 'Informe seu email']"
          />
          <q-input
            label="Cidade"
            v-model="form.cidade"
            :rules="[(val) => (val && val.length > 0) || 'Informe a cidade']"
          />

          <q-select v-model="form.estado" :options="options" label="Estado" />

          <q-select
            v-model="form.servicos"
            :options="servicos"
            label="Produtos e serviços que você vende atualmente"
          />
        </div>
        <div style="border: 2px solid #0B0B61; border-radius: 15px; padding: 30px">
          <q-input v-model="text" filled autogrow readonly />
        </div>
        <q-toggle
          v-model="accept"
          label="Estou de acôrdo em receber comunicações da Bentley."
        />

        <q-btn
          :label="isUpdate ? 'Atualizar' : 'Enviar'"
          color="primary"
          class="full-width"
          rounded
          type="submit"
        />
        <q-btn
          label="Cancelar"
          color="primary"
          class="full-width"
          rounded
          flat
          :to="{ name: 'home' }"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  nome: "PageFormRevenda",
  setup() {
    const $q = useQuasar();
    const table = "revendas";
    const router = useRouter();
    const route = useRoute();
    const { post, getById, update } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const accept = ref(false);

    /* Verificando se na rota existe o "id" como parâmetro
       ou seja, se é para atualizar um "id", ou criar um registro novo.
       Se existir, "isUpdate" é true, senão é false.
       Para atualizar, vai ser usado o mesmo "form" do "cadastrar novo" */
    const isUpdate = computed(() => route.params.id);

    let revendaaa = {};

    const form = ref({
      nome: "",
      sobrenome: "",
      nomedaempresa: "",
      telefone: "",
      whatsapp: "",
      email: "",
      cidade: "",
      estado: "",
      servicos: "",
    });

    onMounted(() => {
      if (isUpdate.value) {
        handleGetRevenda(isUpdate.value);
      }
    });

    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          await update(table, form.value);
          notifySuccess("Atualizado com sucesso");
        } else {
          await post(table, form.value);
          notifySuccess("Enviado com sucesso");
        }
        router.push({ nome: "form-revendas" });
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleGetRevenda = async (id) => {
      try {
        revendaaa = await getById(table, id);
        form.value = revendaaa;
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
    };
  },
});
</script>
