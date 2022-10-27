<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Alterar status da revenda</p>
      </div>

      <q-form
        class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md"
        @submit.prevent="handleSubmit"
      >
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-select
            v-model="form.status"
            :options="opcoesstatus"
            label="Status"
          />

          <q-input label="Obs:" v-model="form.obs" autogrow />

        </div>
        <q-btn
          label="Salvar"
          color="primary"
          class="full-width"
          rounded
          type="submit"
        />
        <!-- <q-btn
          label="Cancelar"
          color="primary"
          class="full-width"
          rounded
          flat
          size="sm"
          :to="{ name: 'listarrevendas' }"
        /> -->
        <q-btn
          label="Voltar"
          color="primary"
          class="full-width"
          flat
          :to="{ name: 'listarrevendas' }"
          size="sm"
        ></q-btn>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
export default defineComponent({
  nome: "PageFormAprovarRevenda",

  setup() {
    const $q = useQuasar();
    const table = "revendas";
    const router = useRouter();
    const route = useRoute();
    const { post, getById, update } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const accept = ref(false);
    /* Verificando se na rota existe o "id" como parâmetro
       ou seja, se é para atualizar um "id", ou criar um registro novo.
       Se existir, "isUpdate" é true, senão é false.
       Para atualizar, vai ser usado o mesmo "form" do "cadastrar novo" */
    const isUpdate = computed(() => route.params.id);
    let revendaaa = {};
    const form = ref({
      status: "",
      obs: "",
    });

    onMounted(() => {
      if (isUpdate.value) {
        handleGetRevenda(isUpdate.value);
      }
    });
    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          await update(table, form.value);
          notifySuccess("Atualizado com sucesso");
        } else {
          await post(table, form.value);
          notifySuccess("Enviado com sucesso");
        }
        router.push({ nome: "form-revendas" });
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleGetRevenda = async (id) => {
      try {
        revendaaa = await getById(table, id);
        form.value = revendaaa;
      } catch (error) {
        notifyError(error.message);
      }
    };
    return {
      handleSubmit,
      form,
      isUpdate,
      accept,
      model: ref(null),

      opcoesstatus: [
        "Aprovado",
        "Não Aprovado",
        "Aguardando",
        "Com pendências",
        "Em análise"
      ],

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
      onReset() {
        /* name.value = null; */
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
