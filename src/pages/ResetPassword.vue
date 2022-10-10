<template>
  <!-- Para as coisas ficarem centralizadas -->
  <!-- <q-page class="flex flex-center"> -->
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h5 text-center">Resetar a senha</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- <q-input label="Email" v-model="email" /> -->
        <!-- <q-input label="Email" v-model="email" outlined /> -->
        <q-input
          label="Nova senha"
          v-model="password"
          lazy-rules
          :rules="[(val) => (val && val.length >= 6) || 'Informe a nova senha']"
          outlined
          rounded
        />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Enviar nova senha"
            color="primary"
            class="full-width"
            outline
            rounded
            size="md"
            type="submit"
          ></q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import useNotify from "src/composables/UseNotify";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "PageResetPassword",
  setup() {
    const { resetPassword } = useAuthUser();
    const { notifyError, notifySuccess } = useNotify();
    const router = useRouter();
    const route = useRoute();
    const token = route.query.token;

    const password = ref("");

    const handlePasswordReset = async () => {
      try {
        await resetPassword(token, password.value);
        notifySuccess("A nova senha já foi enviada");
        router.push({ name: "login" });
      } catch (error) {
        notifyError(error.message);
      }
    };

    return { password, handlePasswordReset };
  },
});
</script>
