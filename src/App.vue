<!-- eslint-disable -->
<template>
  <div id="app">
    <!-- <BarChart /> -->
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BarChart from "pages/Charts.vue";

export default defineComponent({
  name: "App",
  /* components: { BarChart }, */
});
</script>
