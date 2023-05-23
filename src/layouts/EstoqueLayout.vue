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

        <q-btn-dropdown flat color="white" icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section>
                <q-item-label> Sair</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>

      <!-- <q-toolbar> -->
      <div
        class="container flex flex-wrap"
        style="justify-content: center; text-align: center"
      >
        <q-card class="item my-card text-white" style="margin-bottom: 1%">
          <q-card-section class="q-gutter-x-md q-gutter-y-sm">
            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoqueok"
              glossy
              unelevated
              no-caps
              label="Equipamento OK"
            >
              <div
                class="text-h6"
                style="margin-left: 10px; margin-right: 10px; color: red"
              >
                {{ ativosEstoqueOK }}
              </div>
            </q-btn>

            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoqueestoque"
              glossy
              unelevated
              no-caps
              label="Equip no Estoque"
            >
              <div
                class="text-h6"
                style="margin-left: 10px; margin-right: 10px; color: red"
              >
                {{ ativosEstoqueEstoque }}
              </div>
            </q-btn>

            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoquecliente"
              glossy
              no-caps
              unelevated
              label="Equip no Cliente"
            >
              <div
                class="text-h6"
                style="margin-left: 10px; margin-right: 10px; color: red"
              >
                {{ ativosEstoqueCliente }}
              </div>
            </q-btn>

            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoquedefeito"
              glossy
              no-caps
              unelevated
              label="Equip com defeito"
            >
              <div
                class="text-h6"
                style="margin-left: 10px; margin-right: 10px; color: red"
              >
                {{ ativosEstoqueDefeito }}
              </div>
            </q-btn>

            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoquegarantia"
              glossy
              no-caps
              unelevated
              label="Equip na garantia"
            >
              <div
                class="text-h6"
                style="margin-left: 10px; margin-right: 10px; color: red"
              >
                {{ ativosEstoqueGarantia }}
              </div>
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
      <!--  </q-toolbar> -->
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-scroll-area class="fit">
        <q-list bordered separator>
          <q-item-label header>
            <strong>Administração</strong>
            <p>{{ user.user_metadata.name }}</p>
          </q-item-label>

          <q-list>
            <q-item to="/home" exact>
              <q-item-section avatar>
                <q-icon name="mdi-home" />
              </q-item-section>
              <q-item-section
                ><q-item-label>Home</q-item-label>
                <q-item-label caption>Voltar a home</q-item-label>
              </q-item-section>
            </q-item>

            <q-item to="charts" exact>
              <q-item-section avatar>
                <q-icon name="mdi-chart-sankey" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Charts</q-item-label>
                <q-item-label caption>Nossos graficos</q-item-label>
              </q-item-section>
            </q-item>

            <div
              v-if="
                userlogado == 'Luiz Marcello' ||
                userlogado == 'Ederson Bentley' ||
                userlogado == 'adm' ||
                userlogado == 'Luiz Bentley'
              "
            >
              <q-item to="/inicioRevendas" exact>
                <q-item-section avatar>
                  <q-icon name="mdi-handshake-outline" />
                </q-item-section>
                <q-item-section
                  ><q-item-label>Revendas</q-item-label>
                  <q-item-label caption>Revendas cadastradas</q-item-label>
                </q-item-section>
              </q-item>
            </div>

            <div
              v-if="
                userlogado == 'Luiz Marcello' ||
                userlogado == 'Ederson Bentley' ||
                userlogado == 'adm' ||
                userlogado == 'Luiz Bentley'
              "
            >
              <q-item to="/inicioclientes" exact>
                <q-item-section avatar>
                  <q-icon name="mdi-face-agent" />
                </q-item-section>
                <q-item-section
                  ><q-item-label>Clientes</q-item-label>
                  <q-item-label caption>Clientes cadastrados</q-item-label>
                </q-item-section>
              </q-item>
            </div>

            <div
              v-if="
                userlogado == 'Luiz Marcello' ||
                userlogado == 'André Romera' ||
                userlogado == 'adm' ||
                userlogado == 'Luiz Bentley'
              "
            >
              <q-item to="/inicioestoque" exact>
                <q-item-section avatar>
                  <q-icon name="mdi-router-wireless-settings" />
                </q-item-section>
                <q-item-section
                  ><q-item-label>Estoque</q-item-label>
                  <q-item-label caption>Controle de estoque</q-item-label>
                </q-item-section>
              </q-item>
            </div>

            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-list>
      </q-scroll-area>
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

const linksList = [];
export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  setup() {
    const { user } = useAuthUser();
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const router = useRouter();
    const { logout } = useAuthUser();

    /* Obtendo qual usuário está logado */
    const userlogado = user.value.user_metadata.name;

    const handleLogout = async () => {
      $q.dialog({
        title: "Logout",
        message: "Deseja realmente fazer logout ?",

        cancel: true,

        persistent: true,
      }).onOk(async () => {
        await logout();

        router.push({ name: "home" });
      });
    };
    return {
      userlogado,
      user,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      handleLogout,
      onItemClick() {},
    };
  },
});
</script>
