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
import { defineComponent, defineAsyncComponent, ref } from 'vue'

export default defineComponent({
  name: 'BtnScannerWrapper',
  components: {
    BtnScannerIos: defineAsyncComponent(() => import('pages/scanner/BtnScannerIos.vue')),
    BtnScannerAndroid: defineAsyncComponent(() => import('pages/scanner/BtnScannerAndroid.vue'))
  },
  setup (props, { emit }) {
    const barcodeNumber = ref('')
    const handleSetBarcode = (barcode) => {
      emit('barcode', barcode)
    }
    return {
      handleSetBarcode,
      barcodeNumber
    }
  }
})
</script>
