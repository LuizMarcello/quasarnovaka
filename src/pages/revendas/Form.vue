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
        <q-input
          label="Nome"
          v-model="form.nome"
          :rules="[(val) => (val && val.length > 0) || 'Informe seu nome']"
        />
        <q-input
          label="Sobrenome"
          v-model="form.sobrenome"
          :rules="[(val) => (val && val.length > 0) || 'Informe seu sobrenome']"
        />
        <q-input
          label="Nome da empresa"
          v-model="form.nomedaempresa"
          :rules="[(val) => (val && val.length > 0) || 'Informe o nome da empresa']"
        />
        <q-input
          label="Telefone"
          v-model="form.telefone"
          mask="(##) # #### - ####"
          :rules="[(val) => (val && val.length > 0) || 'Informe seu telefone']"
        />
        <q-input
          label="WhatsApp"
          v-model="form.whatsapp"
          mask="(##) # #### - ####"
          :rules="[(val) => (val && val.length > 0) || 'Informe seu WhatsApp']"
        />
        <q-input
          label="Email"
          v-model="form.email"
          :rules="[(val) => (val && val.length > 0) || 'Informe seu email']"
        />
        <q-input
          label="Cidade"
          v-model="form.cidade"
          :rules="[(val) => (val && val.length > 0) || 'Informe a cidade']"
        />

        <q-select v-model="form.estado" :options="options" label="Estado" />

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
          :to="{ name: 'listarevendas' }"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  nome: "PageFormRevenda",
  setup() {
    const table = "revendas";
    const router = useRouter();
    const route = useRoute();
    const { post, getById, update } = useApi();
    const { notifyError, notifySuccess } = useNotify();

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
    };
  },
});
</script>
