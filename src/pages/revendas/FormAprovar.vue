<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Alterar status da revenda:</p>

        <div class="row" style="display: inline-block">
          <div class="col-mb-06 col-sm-08 col-xs-12">
            <q-input label="" v-model="form.nomedaempresa" readonly />
          </div>
        </div>
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
          <q-input
            label="Ultimo status alterado por:"
            v-model="form.statusalteradopor"
            readonly
          />
          <q-input
            type="date"
            stack-label
            label="Em:"
            v-model="form.dataalteracaostatus"
            readonly
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
        <q-btn
          label="Voltar"
          color="primary"
          class="full-width"
          flat
          :to="{ name: 'listarevendas' }"
          size="sm"
        ></q-btn>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { date, useQuasar } from "quasar";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import useAuthUser from "src/composables/UseAuthUser";
export default defineComponent({
  nome: "PageFormAprovarRevenda",

  setup() {
    const $q = useQuasar();
    const table = "revendas";
    const { user } = useAuthUser();
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

    /* Obtendo qual usuário está logado */
    const alteroustatus = user.value.user_metadata.name;

    const statusalteradopor = alteroustatus;

    let hoje = new Date();

    const datastatus = hoje;

    /* console.log(datastatus); */

    const dataalteracaostatus = datastatus;

    let revendaaa = {};

    const form = ref({
      status: "",
      obs: "",
      statusalteradopor: "",
      dataalteracaostatus: "",
    });

    console.log(form.value);

    onMounted(() => {
      if (isUpdate.value) {
        handleGetRevenda(isUpdate.value);
      }
    });

    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          await update(table, {
            ...form.value,
            statusalteradopor,
            dataalteracaostatus,
          });
          notifySuccess("Atualizado com sucesso");
        } else {
          await post(table, {
            ...form.value,
            statusalteradopor,
            dataalteracaostatus,
          });
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
      user,
      isUpdate,
      accept,
      alteroustatus,
      datastatus,
      /* hoje */

      model: ref(null),

      opcoesstatus: [
        "Aprovado",
        "Não Aprovado",
        "Com pendências",
        "Em análise",
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
