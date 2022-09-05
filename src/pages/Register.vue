<template>
  <!-- Para as coisas ficarem centralizadas -->
  <!-- <q-page class="flex flex-center"> -->
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Registrar</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- <q-input label="Name" v-model="form.email" /> -->
        <!-- <q-input label="Name" v-model="form.email" outlined /> -->
        <q-input label="Name" v-model="form.name" outlined rounded />
        <!-- <q-input label="Email" v-model="form.email" /> -->
        <!-- <q-input label="Email" v-model="form.email" outlined /> -->
        <q-input label="Email" v-model="form.email" outlined rounded />
        <!-- <q-input label="Password" v-model="form.password" /> -->
        <!-- <q-input label="Password" v-model="form.password" outlined /> -->
        <q-input label="Password" v-model="form.password" outlined rounded />

        <div class="full-width q-pt-md">
          <q-btn
            label="Registrar"
            color="primary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
          ></q-btn>
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
/* Para redicionar para algumas rotas */
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageRegister",

  setup() {
    const router = useRouter();
    /* Buscando o método de registro do composable "UseAuthUser.js" */
    const { register } = useAuthUser();

    const form = ref({
      name: "",
      email: "",
      password: "",
    });

    const handleRegister = async () => {
      try {
        await register(form.value);
        router.push({
          name: "email-confirmation",
          query: { email: form.value.email },
        });
      } catch (error) {
        alert(error.message);
      }
    };

    return { form, handleRegister };
  },
});
</script>

<style></style>
