<!-- eslint-disable -->
<template>
  <q-page padding>
    <div
      id="home"
      class="container mt-5"
      style="display: block; text-align: center; padding: 15%"
    >
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card card-body">
            <div class="form-group" style="padding: 5%">
              <!-- <input
                type="text"
                id="name"
                v-model="conteudopdf"
                class="form-control"
                placeholder="Conteúdo PDF"
              /> -->
              <input
                type="text"
                id="namepdf"
                v-model="nomedopdf"
                class="form-control"
                placeholder="Nome do arquivo PDF"
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
      nomedopdf: ""
    };
  },
  methods: {
    download() {
      let pdfName = this.nomedopdf;
      var doc = new jsPDF();
      doc.text(this.conteudopdf, 10, 10);
      doc.save(pdfName + ".pdf");
    },
  },
};
</script>
