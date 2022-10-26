<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">Formulário de estoque</p>

        <div v-if="isUpdate">
          <p class="text-h6">Editando produto</p>
        </div>

        <div v-if="!isUpdate">
          <p class="text-h6">Adicionando produto</p>
        </div>
      </div>

      <!-- :label="isUpdate ? 'Atualizar' : 'Enviar'" -->

      <q-form
        class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md"
        @submit.prevent="handleSubmit"
      >
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input
            label="Nota fiscal"
            v-model="form.notafiscal"
            readonly
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Informe o número da nota fiscal',
            ]"
          />
          <q-input
            label="Data da nota"
            v-model="form.datanota"
            type="date"
            stack-label
          />
          <q-select
            v-model="form.marca"
            :rules="[(val) => (val && val.length > 0) || 'Informe a marca']"
            :options="opcoesmarca"
            label="Marca"
          />

          <q-input
            label="Modelo"
            v-model="form.modelo"
            :rules="[(val) => (val && val.length > 0) || 'Informe o modelo']"
          />

          <q-input
            label="Descrição"
            v-model="form.descricao"
            :rules="[(val) => (val && val.length > 0) || 'Informe a descrição']"
          />

          <q-input
            label="Número de série"
            v-model="form.numerodeserie"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o número de série',
            ]"
          />

          <q-input
            label="Part Number"
            v-model="form.partnumber"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o número de série',
            ]"
          />

          <q-input
            label="Endereço Mac"
            v-model="form.mac"
            mask="NN:NN:NN:NN:NN:NN"
          />

          <q-select
            v-model="form.status"
            :options="opcoesstatus"
            label="Status"
          />
        </div>

        <div v-if="isUpdate">
          <q-btn
            label="Histórico"
            color="primary"
            size="sm"
            rounded
            class="q-gutter-x-y-sm"
            @click="basic = true"
          />

          <q-dialog v-model="basic">
            <q-card>
              <q-card-section>
                <div class="text-h6">Histórico do produto</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <!-- <p v-for="n in 15" :key="n"> -->
                <q-input
                  label="Data"
                  v-model="form.historico"
                  stack-label
                  type="date"
                />
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input v-model="text" filled autogrow />
                </div>
                <!--  </p> -->
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Salvar" color="primary" v-close-popup />
                <q-btn flat label="Cancelar" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>

        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input label="Observação" v-model="form.obs" />
        </div>

        <div>
          <q-btn
            :label="isUpdate ? 'Atualizar' : 'Enviar'"
            color="primary"
            class="full-width"
            rounded
            type="submit"
          />
          <q-btn
            label="Cancelar"
            color="primary"
            class="full-width q-gutter-y-sm"
            rounded
            flat
            :to="{ name: 'listarestoque' }"
          />

          <q-btn
            label="Voltar"
            color="primary"
            class="full-width q-gutter-y-sm"
            rounded
            flat
            :to="{ name: 'listarestoque' }"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import useSupabase from "src/boot/supabase";
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  nome: "PageFormEstoque",

  setup() {
    const { supabase } = useSupabase();
    const $q = useQuasar();
    const table = "estoque";
    const router = useRouter();
    const route = useRoute();
    const { post, getById, update, list } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const accept = ref(false);

    const optionsEstoque = ref([]);

    /* Verificando se na rota existe o "id" como parâmetro
         ou seja, se é para atualizar um "id", ou criar um registro novo.
         Se existir, "isUpdate" é true, senão é false.
         Para atualizar, vai ser usado o mesmo "form" do "cadastrar novo" */
    const isUpdate = computed(() => route.params.id);
    let estoqueee = {};
    const form = ref({
      marca: "",
      modelo: "",
      descricao: "",
      numerodeserie: "",
      mac: "",
      notafiscal: "",
      obs: "",
      datanota: "",
      historico: "",
      status: "",
      partnumber: "",
    });

    onMounted(() => {
      handleListEstoque();
      if (isUpdate.value) {
        handleGetEstoque(isUpdate.value);
      }
    });

    const handleListEstoque = async () => {
      optionsEstoque.value = await list("estoque");
    };

    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          await update(table, form.value);
          notifySuccess("Atualizado com sucesso");
        } else {
          await post(table, form.value);
          notifySuccess("Enviado com sucesso");
        }
        router.push({ nome: "form-clientes" });
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleGetEstoque = async (id) => {
      try {
        estoqueee = await getById(table, id);
        form.value = estoqueee;
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
      options: [],

      opcoesstatus: [
        "Funcionamento OK",
        "Com defeito",
        "Enviado para garantia",
        "Na Bentley",
        "No cliente",
      ],

      opcoesmarca: [
        "Gilat",
        "Viasat",
        "iDirect",
        "Hughes",
        "Ubiquiti",
        "Mikrotik",
        "Dell",
        "Intelbrás",
        "Cisco",
        "Tp-Link",
      ],

      servicos: [],

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

      optionsEstoque,
      basic: ref(false),
    };
  },
});
</script>
