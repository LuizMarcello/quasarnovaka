<template>
  <q-card class="my-card" bordered v-ripple:primary>
    <!-- "skeleton" do quasar: Enquanto espera, para não aparecer zero no "count" -->
    <q-skeleton height="50px" v-if="load" />
    <q-card-section horizontal v-else>
      <div class="col flex flex-center text-h5">{{ label }} {{ count }}</div>

      <q-card-actions vertical class="justify-around q-px-md">
        <q-btn flat round color="primary" :icon="icon" />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
import useAuthUser from "src/composables/UseAuthUser";
import useApi from "src/composables/UseApi";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CardDashboard",

  props: {
    table: {
      type: String,
      requerid: true,
    },
    label: {
      type: String,
      requerid: true,
    },
    icon: {
      type: String,
      requerid: false,
      default: "mdi-database-outline",
    },
  },

  /* Para ter acesso as propriedades(props) criadas acima,
     tem que colocar este parâmetro "props" aqui. */
  setup(props) {
    const count = ref(0);
    /* Usado no "if()" do skeleton acima */
    const load = ref(true);
    const { user } = useAuthUser();
    const { fetchCount } = useApi();

    onMounted(async () => {
      const response = await fetchCount(props.table, user.value.id);
      count.value = response.count;
      load.value = false
    });

    return {
      count,
      load
    };
  },
});
</script>
