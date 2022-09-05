<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Bentley Brasil </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div>Nova Ka</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-toolbar>
        <q-icon name="facebook" />
        <q-icon name="facebook" />
        <q-icon name="facebook" />
        <q-icon name="facebook" />
        <q-toolbar-title>Internet via satélite</q-toolbar-title>
      </q-toolbar> 
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
