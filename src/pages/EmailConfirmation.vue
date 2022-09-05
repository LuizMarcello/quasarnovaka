<template>
  <q-page padding>
    <p>Obrigado por se registrar !</p>
    <p>
      Por favor, confirme seu email para finalizar o registro: {{ $route.query.email }}
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageEmailConfirmation",
});
</script>
