<template>
  <!-- Para as coisas ficarem centralizadas -->
  <!-- <q-page class="flex flex-center"> -->
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h5 text-center">Resetar a senha</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- <q-input label="Email" v-model="email" /> -->
        <!-- <q-input label="Email" v-model="email" outlined /> -->
        <q-input label="Nova senha" v-model="password" outlined rounded />

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

          <!--    <q-btn
            label="Voltar"
            color="primary"
            class="full-width"
            flat
            :to="{ name: 'login' }"
            size="sm"
          ></q-btn> -->
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "PageResetPassword",
  setup() {
    const { resetPassword } = useAuthUser();
    const router = useRouter();
    const route = useRoute();
    const token = route.query.token;

    const password = ref("");

    const handlePasswordReset = async () => {
      await resetPassword(token, password.value);
      router.push({ name: "login" });
    };

    return { password, handlePasswordReset };
  },
});
</script>
