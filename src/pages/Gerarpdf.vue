<!-- eslint-disable -->
<template>
  <q-page padding>

    <div id="home" class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card card-body">
            <div class="form-group">
              <input
                type="text"
                id="name"
                v-model="conteudopdf"
                class="form-control"
                placeholder="Nome do arquivo pdf"
              />
            </div>
            <button class="btn btn-primary pl-5 pr-5" @click="download">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import jsPDF from "jsPDF";

export default {
  name: "gerar_pdf",
  data() {
    return {
      conteudopdf: "",
    };
  },
  methods: {
    download() {
      let pdfName = "revendas";
      var doc = new jsPDF();
      doc.text(this.conteudopdf, 10, 10);
      doc.save(pdfName + ".pdf");
    },
  },
};
</script>
