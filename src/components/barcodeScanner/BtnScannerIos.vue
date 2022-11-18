<template>
  <div class="row">
    <div class="col-12">
      <p class="text-center">Ios Foque a câmera no código de barras do produto</p>
      <div v-show="showCam" id="scan" class="full-width col-12" />
    </div>
    <q-btn
      v-if="!showCam"
      color="primary"
      icon="mdi-barcode-scan"
      label="Leitor"
      class="full-width"
      size="md"
      @click="initBarcode()"
    />
    <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]"> -->
    <q-btn
      v-show="showCam"
      class="full-width"
      icon="cancel"
      color="negative"
      label="Fechar"
      @click="onStop"
    />
    <!-- </q-page-sticky> -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Quagga from "quagga";
export default defineComponent({
  name: "BtnScannerIos",
  setup(props, { emit }) {
    const barcode = ref("");
    const showCam = ref(false);

    const Quagga = require('quagga').default;



    const initBarcode = () => {
      barcode.value = "";
      showCam.value = true;
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector("#scan"), // Or '#yourElement' (optional)
            constraints: {
              width: window.screen.width - 60,
              height: 360,
              facingMode: "environment",
              aspectRatio: { min: 1, max: 1 },
            },
          },
          locator: {
            patchSize: "medium",
            halfSample: true,
          },
          frequency: 10,
          decoder: {
            readers: ["ean_reader"],
          },
          patchSizedefine: "small",
          numOfWorkers: navigator.hardwareConcurrency,
          locate: true,
        },
        function (err) {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
          return Quagga.onDetected(onDetected);
        }
      );
    };


    
    const onDetected = (data) => {
      onStop();
      barcode.value = data.codeResult.code;
      showCam.value = false;
      emit("barcodeIos", barcode.value);
      return data.codeResult.code;
    };
    const onStop = () => {
      emit("clearBarcode");
      showCam.value = false;
      Quagga.stop();
    };
    return {
      initBarcode,
      barcode,
      showCam,
      onStop,
    };
  },
});
</script>

<style>
.drawingBuffer {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
