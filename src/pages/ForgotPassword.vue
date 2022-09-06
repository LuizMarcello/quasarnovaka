<template>
  <!-- Para as coisas ficarem centralizadas -->
  <!-- <q-page class="flex flex-center"> -->
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h5 text-center">Resetar a senha</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- <q-input label="Email" v-model="email" /> -->
        <!-- <q-input label="Email" v-model="email" outlined /> -->
        <q-input label="Email" v-model="email" outlined rounded />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Enviar email"
            color="primary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
          ></q-btn>

          <q-btn
            label="Voltar"
            color="primary"
            class="full-width"
            flat
            :to="{ name: 'login' }"
            size="sm"
          ></q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";

export default defineComponent({
  setup() {
    const { sendPasswordRestEmail } = useAuthUser();

    const email = ref("");

    const handlePasswordReset = async () => {
      await sendPasswordRestEmail(email.value);
      /* Sinaizinhos ao contrário para poder concatenar */
      alert(`Reset da senha do email enviado para: ${email.value }`)
    };

    return {
      email,
      handlePasswordReset
    };
  },
});
</script>
