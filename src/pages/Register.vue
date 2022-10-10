<template>
  <!-- Para as coisas ficarem centralizadas -->
  <!-- <q-page class="flex flex-center"> -->
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Registrar</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- <q-input label="Name" v-model="form.email" /> -->
        <!-- <q-input label="Name" v-model="form.email" outlined /> -->
        <q-input label="Name" v-model="form.name" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Por favor, digite seu nome']" outlined rounded />
        <!-- <q-input label="Email" v-model="form.email" /> -->
        <!-- <q-input label="Email" v-model="form.email" outlined /> -->
        <q-input label="Email" v-model="form.email" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Por favor, digite seu email']" type="email" outlined rounded />
        <!-- <q-input label="Password" v-model="form.password" /> -->
        <!-- <q-input label="Password" v-model="form.password" outlined /> -->
        <q-input label="Password" v-model="form.password" lazy-rules
          :rules="[(val) => (val && val.length >= 6) || 'A nova senha deve ter no mínimo 6 caracteres ']" outlined
          rounded />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn label="Registrar" color="primary" class="full-width" outline rounded size="lg" type="submit"></q-btn>

          <q-btn label="Voltar" color="primary" class="full-width" flat :to="{ name: 'login' }" size="sm"></q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
/* o "ref" é para reatividade na responsividade */
import { defineComponent, ref } from "vue";
/* Importando o "composable" já pronto */
import useAuthUser from "src/composables/UseAuthUser";
/* Importando o "composable" já pronto */
import useNotify from "src/composables/UseNotify";
/* Para redicionar para algumas rotas */
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageRegister",

  setup() {
    const router = useRouter();
    /* Buscando o método de registro do composable "UseAuthUser.js" */
    const { register } = useAuthUser();

    const { notifyError, notifySuccess } = useNotify();

    const form = ref({
      name: "",
      email: "",
      password: "",
    });

    const handleRegister = async () => {
      try {
        await register(form.value);
        notifySuccess('Dados inseridos com sucesso!')
        router.push({
          name: "email-confirmation",
          query: { email: form.value.email },
        });
      } catch (error) {
        notifyError(error.message)
        /* alert(error.message); */
      }
    };

    return { form, handleRegister };
  },
});
</script>

<style>

</style>
