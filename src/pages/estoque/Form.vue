<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="row justify-center q-gutter-y-md">
      <div class="col-6 text-center">
        <p class="text-h6">Formulário de estoque</p>

        <div v-if="isUpdate">
          <p class="text-h6">Editando produto</p>
        </div>

        <div v-if="!isUpdate">
          <p class="text-h6">Adicionando produto</p>

          <!--  <div class="q-gutter-x-md">
            <q-btn
              label="Código de barras"
              color="primary"
              class="full-width"
              rounded
              :to="{ name: 'barcode' }"
            />
          </div> -->

          <div class="q-gutter-x-md">
            <!-- <q-btn
              label="Atualizar código de barras"
              color="primary"
              class="full-width"
              rounded
              @ler-codigo="copcodbarras()"
            >
            </q-btn> -->
          </div>
        </div>
      </div>

      <!-- :label="isUpdate ? 'Atualizar' : 'Enviar'" -->

      <q-form
        class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md"
        @submit.prevent="handleSubmit"
        @reset="onReset"
      >
        <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input
            label="Nota fiscal"
            v-model="form.notafiscal"
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
            label="Marca/Fabricante"
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
            label="S/N Serial number"
            v-model="form.numerodeserie"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o número de série',
            ]"
          />

          <q-input
            label="P/N Part number"
            v-model="form.partnumber"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o número de série',
            ]"
          />

          <q-input
            label="M/A Mac address"
            v-model="form.mac"
            mask="NN:NN:NN:NN:NN:NN"
          />

          <!-- <q-input
            label="Código de barras"
            v-model="form.bar_code"
            :rules="[
              (val) => (val && val.length > 0) || 'Informe o código de barras',
            ]"
          /> -->

          <q-select
            v-model="form.status"
            :options="opcoesstatus"
            label="Status"
          />
        </div>

        <!-- <div
          style="border: 2px solid #0b0b61; border-radius: 15px; padding: 30px"
        >
          <q-input label="Observação" v-model="form.obs" />
        </div> -->

        <div class="q-gutter-y-md">
          <q-btn
            :label="isUpdate ? 'Atualizar' : 'Salvar'"
            color="primary"
            class="full-width"
            rounded
            type="submit"
          />

          <q-btn
            label="Limpar dados"
            color="primary"
            class="full-width"
            rounded
            type="reset"
          />
          <!-- <q-btn
            label="Cancelar"
            color="primary"
            class="full-width q-gutter-y-sm"
            rounded
            flat
            :to="{ name: 'listarestoque' }"
          /> -->

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

import BtnScannerAndroid from "src/components/barcodeScanner/BtnScannerAndroid.vue";

export default defineComponent({
  nome: "PageFormEstoque",

  /* Esta props:{} foi acrescentada pelo Patrick */
  props: {
    barcode: {
      type: String,
      required: false,
      default: ''
    }
  },
  components: BtnScannerAndroid,

  setup(props) {
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
      datanota: "",
      status: "",
      partnumber: "",
      /* bar_code: "", */
    });


    onMounted(() => {
      handleListEstoque();
      if (isUpdate.value) {
        handleGetEstoque(isUpdate.value);
      }
      /* Este if(){} foi acrescentado pelo Patrick */
      if (props.barcode) {
        form.value.bar_code = props.barcode
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
/* Obs: Depois do Patrick Retirar ??? */
    /* const copcodbarras = (n) => {
      form.value.bar_code = n;
    }; */

    // Para limpar os campos
    const onReset = async () => {
      form.value = {
        marca: "",
        modelo: "",
        descricao: "",
        numerodeserie: "",
        mac: "",
        notafiscal: "",
        datanota: "",
        status: "",
        partnumber: "",
        bar_code: "",
      };
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
      /* copcodbarras, */
      handleSubmit,
      form,
      isUpdate,
      accept,
      onReset,
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

      optionsEstoque,
      basic: ref(false),
      /* code */
    };
  },
});
</script>
