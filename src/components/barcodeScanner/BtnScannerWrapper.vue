<template>
  <btn-scanner-ios
    v-if="$q.platform.is.ios"
    @barcode-ios="handleSetBarcode"
    @clearBarcode="barcodeNumber = ''"
  />
  <btn-scanner-android
    v-else
    @barcode-android="handleSetBarcode"
    @clearBarcode="barcodeNumber = ''"
  />
</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "BtnScannerWrapper",
  components: {
    BtnScannerIos: defineAsyncComponent(() =>
      import("src/components/barcodeScanner/BtnScannerIos.vue")
    ),
    BtnScannerAndroid: defineAsyncComponent(() =>
      import("src/components/barcodeScanner/BtnScannerAndroid.vue"),
      //import("src/components/barcodeScanner/BtnScannerAndroidSearch.vue")

    ),
  },

  /* Antes do Patrick Alterar */
  /* setup(props, { emit }) {
    const barcodeNumber = ref("");
    const handleSetBarcode = (barcode) => {
      emit("barcode", barcode);
    };
    return {
      handleSetBarcode,
      barcodeNumber,
    };
  }, */

  setup(props, { emit }) {
    const barcodeNumber = ref("");
    const router = useRouter();
    const handleSetBarcode = (barcode) => {
      router.push({ name: "form-estoque", params: { barcode: barcode } });
      //router.push({ name: "listarestoque", params: { barcode: barcode } });
      /* Patrick acrescentou este "console.log" abaixo em 10.01.23 */
      //console.log('barcodeWraper', barcode);
      //router.push({ name: "listarestoque", params: { barcode: barcode } });
    };
    return {
      handleSetBarcode,
      barcodeNumber,
    };
  },
});
</script>
