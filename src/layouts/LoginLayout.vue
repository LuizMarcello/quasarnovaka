<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Bentley Brasil </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->

        <div>Nova Ka</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <!-- Essential Links -->
          Menu
        </q-item-label>

        <q-list bordered separator>
          <q-item to="home" exact>
            <q-item-section avatar>
              <!-- <q-icon name="home" /> -->
              <q-icon name="mdi-home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
              <q-item-label caption>Voltar para a home</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/dashboard" exact>
            <q-item-section avatar>
              <!-- <q-icon name="list_alt" /> -->
              <q-icon name="mdi-handshake-outline" />
            </q-item-section>
            <q-item-section
              ><q-item-label>Parceria</q-item-label>
              <q-item-label caption>Seja uma revenda Bentley</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/quemsomosnos" exact>
            <q-item-section avatar>
              <!-- <q-icon name="list_alt" /> -->
              <q-icon name="mdi-signal" />
            </q-item-section>
            <q-item-section
              ><q-item-label>Quem somos nós</q-item-label>
              <q-item-label caption>Bentley Brasil</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/form" exact>
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section
              ><q-item-label>Cadastrar revenda</q-item-label>
              <q-item-label caption>Preencha o formulário</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/listarevendas" exact>
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section
              ><q-item-label>Adm</q-item-label>
              <q-item-label caption>Administração</q-item-label>
            </q-item-section>
          </q-item>

          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-toolbar class="q-gutter-md">
        <q-icon name="facebook" />
        <q-icon name="mdi-twitter" />
        <q-icon name="mdi-instagram" />
        <q-icon name="mdi-linkedin" />
        <q-toolbar-title>Internet via satélite</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
/* import useAuthUser from "src/composables/UseAuthUser"; */
/* import { useRouter } from "vue-router"; */
import { useQuasar } from "quasar";

export default defineComponent({
  name: "LoginLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const $q = useQuasar();

    return {
      
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
