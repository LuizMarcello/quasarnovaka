<template>
  <div class="row">
    <div class="col-12">
      <video v-show="showCam" :width="widthVideo" height="300" id="streamAdnroid"></video>
      <q-btn
        v-show="showCam"
        icon="cancel"
        color="negative"
        label="Fechar"
        class="full-width"
        @click="onStop"
      />
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
    <!-- </q-page-sticky> -->
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'BtnScannerAndroid',
  setup (props, { emit }) {
    const barcode = ref('')
    const showCam = ref(false)
    const widthVideo = window.screen.width - 45
    let stream = null
    const initBarcode = async () => {
      showCam.value = true
      // verify web API userMedia
      navigator.getUserMedia = (
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia ||
        navigator.mediaDevices.getUserMedia
      )
      const videoEl = document.querySelector('#streamAdnroid')
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            ideal: 'environment',
            width: 360,
            height: 360
          }
        },
        audio: false
      })
      videoEl.srcObject = stream
      await videoEl.play()
      // eslint-disable-next-line
      const barcodeDetector = new BarcodeDetector({ formats: ['ean_13', 'codabar', 'ean_8'] })
      window.setInterval(async () => {
        const barcodes = await barcodeDetector.detect(videoEl)
        if (barcodes.length <= 0) return
        // emit('barcode', barcodes.map(barcode => barcode.rawValue))
        emit('barcodeAndroid', barcodes[0].rawValue)
        showCam.value = false
        onStop()
      }, 1500)
    }
    const onStop = () => {
      emit('clearBarcode')
      const track = stream.getTracks()[0]
      track.stop()
      showCam.value = false
    }
    return {
      initBarcode,
      barcode,
      showCam,
      onStop,
      widthVideo
    }
  }
})
</script>

<style>
.drawingBuffer {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
