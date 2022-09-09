<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Bentley Brasil </q-toolbar-title>
        <!--   </q-toolbar>
    </q-header> -->

        <q-btn-dropdown flat color="white" icon="person">
          <q-list>

            <q-item to="login" exact>
              <q-item-section>
                <q-item-label>Entrar</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-btn-dropdown>

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

          <!--  <q-item to="/dashboard" exact>
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section
              ><q-item-label>Dashboard</q-item-label>
              <q-item-label caption>Página dashboard</q-item-label>
            </q-item-section>
          </q-item> -->

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
              ><q-item-label>Formulário</q-item-label>
              <q-item-label caption>Preencha os dados</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/listarevendas" exact>
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section
              ><q-item-label>Revendas cadastradas</q-item-label>
              <q-item-label caption>Todas as revendas</q-item-label>
            </q-item-section>
          </q-item>

          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
/* import useAuthUser from "src/composables/UseAuthUser"; */
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const linksList = [
  /*  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  }, */
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const $q = useQuasar();

    const router = useRouter();

    /* const { logout } = useAuthUser(); */

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      /* handleLogout, */
    };
  },
});
</script>
