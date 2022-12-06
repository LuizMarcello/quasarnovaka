<template>
  <div class="row items-center" style="height: 100vh">
    <div class="col text-center q-pa-lg q-gutter-y-md">
      <p class="text-center">
        Foque a câmera no código de barras do produto
      </p>
      <q-btn
        color="primary"
        icon="mdi-barcode-scan"
        label="Ler Código de Barras"
        class="full-width"
        size="lg"
        @click="iniciarLeitor()"
        v-show="cameraStatus === 0"
      />

      <q-btn
        color="primary"
        icon="mdi-barcode-off"
        label="Continuar sem código de Barras"
        class="full-width"
        size="lg"
        @click="continuarsemcodigo()"
         v-show="cameraStatus === 0"
      />

      <q-btn
        color="primary"
        icon="mdi-close-box-multiple-outline"
        label="Cancelar"
        class="full-width"
        size="lg"
        @click="cancelar()"
        v-show="cameraStatus === 0"
      />

      <!-- <div class="text-h6" v-if="code">Código: {{ code }}</div> -->

      <div id="scan" v-show="cameraStatus === 1"></div>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <div class="q-gutter-x-md">
          <!-- <q-btn
            icon="cancel"
            color="negative"
            label="Fechar"
            v-show="cameraStatus === 0"
            @click="onStop"
          /> -->

          <!-- <q-btn
            icon="mdi-page-next"
            color="positive"
            label="Continuar"
            v-show="cameraStatus === 0"
            @click="handleContinuar(), $emit('lerCodigo', code)"
          /> -->

          <!-- Depois do Patrick Retirar este $emit() no @click ? -->
          <!-- <q-btn
            icon="mdi-page-next"
            color="positive"
            label="Continuar"
            v-show="cameraStatus === 0"
            @click="handleContinuar()"
          /> -->
        </div>
      </q-page-sticky>
    </div>
  </div>
</template>

<script>
import Quagga from "quagga";
import { useRouter } from "vue-router";

export default {
  name: "BtnScannerAndroid",
  data() {
    return {
      code: "",
      dialog: false,
      cameraStatus: 0,
    };
  },
  methods: {
    iniciarLeitor() {
      this.cameraStatus = 1;
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            // constraints: {
            //   width: 300,
            //   height: 300
            // },
            target: document.querySelector("#scan"),
          },
          /*
             code_128_reader (default)
             ean_reader
             ean_8_reader
             code_39_reader
             code_39_vin_reader
             codabar_reader
             upc_reader
             upc_e_reader
             i2of5_reader
             2of5_reader
             code_93_reader
          */
          frequency: 10,
          decoder: {
            readers: ["ean_reader"],
            multiple: false,
            /* multiple: true, */
          },
          // numOfWorkers: navigator.hardwareConcurrency,
          // locate: false
        },
        (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
          Quagga.onDetected(this.onDetected);
        }
      );
      /* this.$router.push({ name: "form-estoque" }); */
    }, //Fim iniciarLeitor() {}

    continuarsemcodigo() {
      this.$router.push({ name: "form-estoque" });
    },

    cancelar() {
      this.$router.push({ name: "listarestoque" });
    },

    /* Antes do Patrick alterar */
    /* onDetected(data) {
      this.code = data.codeResult.code;
      this.cameraStatus = 0;
      this.onStop();
    }, */

    onDetected(data) {
      this.code = data.codeResult.code;
      this.$emit("barcodeAndroid", data.codeResult.code);
      this.cameraStatus = 0;
      this.onStop();
    },

    onStop() {
      Quagga.stop();
      this.cameraStatus = 0;
    },
  }, //Fim methods{}

  setup() {
    const router = useRouter();

    const handleContinuar = () => {
      router.push({ name: "form-estoque" });
    };
    return {
      handleContinuar,
    };
  },
}; //Fim export default{}
</script>

<style>
video {
  width: 100%;
  height: auto;
}
canvas {
  display: none;
}
</style>
