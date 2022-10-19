<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Bentley Brasil </q-toolbar-title>
        <!-- <div>Quasar v{{ $q.version }}</div> -->

        <!-- <q-btn-dropdown flat color="white" icon="person">
          <q-list>
            <q-item to="login" exact>
              <q-item-section>
                <q-item-label> Entrar</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown> -->

        <!-- <q-btn-dropdown flat color="white" icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section>
                <q-item-label> Sair</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown> -->
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered> -->
    <!-- Sem a opção "show-if-above", ele inicia com o menu recolhido -->
    <q-drawer v-model="leftDrawerOpen" bordered>
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
              ><q-item-label>Bentley Brasil</q-item-label>
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

          <q-item to="/charts" exact>
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section
              ><q-item-label>Adm</q-item-label>
              <q-item-label caption>Administração</q-item-label>
            </q-item-section>
          </q-item>

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
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
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
const linksList = [
  /* {
     title: "Discord Chat Channel",
     caption: "chat.quasar.dev",
     icon: "chat",
     link: "https://chat.quasar.dev",
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
    const { logout } = useAuthUser();
    const { user } = useAuthUser();

    const handleLogout = async () => {
      $q.dialog({
        title: "Logout",
        message: "Deseja realmente fazer logout ?",
        /* Botão de cancelar como ativo */
        cancel: true,
        /* Se clicar fora dfo dialog, a mensagem não desaparece */
        persistent: true,
        /* "onOk" Se realmente apertar o "OK", fará o logout */
      }).onOk(async () => {
        await logout();
        /* O "push" possibilita apertar em "voltar", porque
           ele adiciona todas as rotas na pilha */
        /* router.push({ name: 'login' }) */
        /* O "replace" substitui realmente */
        /* router.replace({ name: "login" }); */
        router.push({ name: "home" });
      });
    };
    return {
      user,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      handleLogout,
    };
  },
});
</script>
