<template>
  <!-- Para as coisas ficarem centralizadas -->
  <!-- <q-page class="flex flex-center"> -->
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- <q-input label="Email" v-model="form.email" /> -->
        <!-- <q-input label="Email" v-model="form.email" outlined /> -->
        <q-input
          label="Email"
          v-model="form.email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Por favor, digite seu email']"
          type="email"
          outlined
          rounded
        />
        <!-- <q-input label="Password" v-model="form.password" /> -->
        <!-- <q-input label="Password" v-model="form.password" outlined /> -->
        <q-input
          label="Password"
          v-model="form.password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Por favor, digite sua senha']"
          outlined
          rounded
        />

        <div class="full-width q-pt-md">
          <q-btn
            label="Login"
            color="primary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
          ></q-btn>
        </div>

        <div class="full-width q-gutter-y-md">
         <!--  <q-btn
            label="Registrar"
            color="primary"
            class="full-width"
            flat
            to="/register"
            size="sm"
          ></q-btn> -->

          <q-btn
            label="Esqueceu a senha ?"
            color="primary"
            class="full-width"
            flat
            :to="{ name: 'forgot-password' }"
            size="sm"
          ></q-btn>

          <q-btn
            label="Cancelar"
            color="primary"
            class="full-width"
            flat
            to="/home"
            size="sm"
          ></q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
/* o "ref" é para reatividade na responsividade */
import { defineComponent, ref, onMounted } from "vue";
/* Importando o "composable" já pronto */
import useAuthUser from "src/composables/UseAuthUser";
/* Importando o "composable" já pronto */
import useNotify from "src/composables/UseNotify";
/* Para redicionar para algumas rotas */
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageLogin",

  setup() {
    const router = useRouter();

    const { login, isLoggedIn } = useAuthUser();

    const { notifyError, notifySuccess } = useNotify();

    /* O "ref" é para reatividade na responsividade */
    const form = ref({
      email: "",
      password: "",
    });

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: "me" });
      }
    });

    /* Usando Quasar "internal validation" (Em Input Textfield)
       para validações dos valores dentro do input. Se deixar os
       inputs vazios, já dará mensagens. Do próprio Quasar. */
    const handleLogin = async () => {
      try {
        await login(form.value);
        notifySuccess("Logado com sucesso!");

        router.push({ name: "charts" });
      } catch (error) {
        /* notifyError("Favor inserir seu e-mail e senha cadastrados!"); */
        notifyError(error.message);
        /* alert(error.message); */
      }
    };

    return { form, handleLogin };
  },
});
</script>

<style></style>
