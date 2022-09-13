<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Cadastrar revendas</p>
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
          :rules="[(val) => (val && val.length > 0) || 'Informe seu telefone']"
        />
        <q-input
          label="WhatsApp"
          v-model="form.whatsapp"
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
        <q-input
          label="Estado"
          v-model="form.estado"
          :rules="[(val) => (val && val.length > 0) || 'Informe o estado']"
        />

        <q-btn label="Enviar" color="primary" class="full-width" rounded type="submit" />
        <q-btn
          label="Cancelar"
          color="primary"
          class="full-width"
          rounded
          flat
          :to="{ nome: 'revendas' }"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  nome: "PageFormRevenda",
  setup() {
    const table = "revendas";
    const router = useRouter();
    const { post } = useApi();
    const { notifyError, notifySuccess } = useNotify();

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

    const handleSubmit = async () => {
      try {
        await post(table, form.value);
        notifySuccess("Enviado com sucesso");
        router.push({ nome: "revendas" });
      } catch (error) {
        notifyError(error.message);
      }
    };

    return { handleSubmit, form };
  },
});
</script>
