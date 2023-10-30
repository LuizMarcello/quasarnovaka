<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="col">
      <q-card-media
        class="q-pa-md"
        style="display: flex; justify-content: center"
      >
        <q-img src="~assets/googleChart_2.png" width="55%"></q-img>
      </q-card-media>
    </div>

    <!-- style="text-align: center; align-items: center;" -->

    <div class="col" style="display: flex; justify-content: center">
      <div class="row q-col-gutter-md" style="text-align: center">
        <div class="col-md-4 col-xs-12 col-sm-6">
          <card-dashboard
            table="clientes"
            label="Total de clientes:"
            icon="mdi-account-multiple"
          />
        </div>

        <div class="col-md-4 col-xs-12 col-sm-6">
          <card-dashboard
            table="contratos"
            label="Total de contratos:"
            icon="mdi-account-multiple"
          />
        </div>

        <div class="col-md-4 col-xs-12 col-sm-6">
          <card-dashboard
            table="estoque"
            label="Estoque total:"
            icon="mdi-account-multiple"
          />
        </div>

        <div class="col-md-4 col-xs-12 col-sm-6">
          <card-dashboard
            table="revendas"
            label="Total de Revendas:"
            icon="mdi-account-multiple"
          />
        </div>
        <div class="col-md-4 col-xs-12 col-sm-6">
          <card-dashboard
            table=""
            label="Contratos cancelados:"
            icon="mdi-account-multiple"
          />
        </div>

        <div class="col-md-4 col-xs-12 col-sm-6">
          <card-dashboard
            table=""
            label="Contratos em análise:"
            icon="mdi-account-multiple"
          />
        </div>
      </div>

      <!-- <q-card>
        <q-card-actions class="q-gutter-md">
          <q-btn flat round dense icon="event"></q-btn>
          <div class="col">
            <q-btn flat label="Detalhes"></q-btn>
          </div>
        </q-card-actions>
      </q-card> -->
    </div>
  </q-page>

  <q-footer elevated>
    <q-toolbar class="q-gutter-md">
      <q-icon name="facebook" />
      <q-icon name="mdi-twitter" />
      <q-icon name="mdi-instagram" />
      <q-icon name="mdi-linkedin" />
      <q-toolbar-title>Internet via satélite</q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
/* eslint-disable */
import { defineComponent, defineAsyncComponent } from "vue";
import useAuthUser from "src/composables/UseAuthUser";

export default defineComponent({
  name: "Dashboard",
  components: {
    CardDashboard: defineAsyncComponent(() =>
      import("components/CardDashboard.vue")
    ),
  },
  setup() {
    const { user } = useAuthUser();

    return { user };
  },
});
</script>
