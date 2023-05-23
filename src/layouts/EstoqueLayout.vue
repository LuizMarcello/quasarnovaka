<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-layout view="lHh Lpr lFf" :rows="estoque">
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
          <q-card-section class="q-gutter-x-sm q-gutter-y-sm">
            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoqueok"
              glossy
              unelevated
              no-caps
              label="Equip OK"
            >
              <q-btn round color="primary" style="margin-left: 10px"
                ><div
                  class="text-h6"
                  style="margin-left: 10px; margin-right: 10px; color: white"
                >
                  {{ ativosEstoqueOK }}
                </div></q-btn
              >
            </q-btn>

            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoqueestoque"
              glossy
              unelevated
              no-caps
              label="No Estoque"
            >
              <q-btn round color="primary" style="margin-left: 10px"
                ><div
                  class="text-h6"
                  style="margin-left: 10px; margin-right: 10px; color: white"
                >
                  {{ ativosEstoqueEstoque }}
                </div></q-btn
              >
            </q-btn>

            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoquecliente"
              glossy
              no-caps
              unelevated
              label="No Cliente"
            >
              <q-btn round color="primary" style="margin-left: 10px"
                ><div
                  class="text-h6"
                  style="margin-left: 10px; margin-right: 10px; color: white"
                >
                  {{ ativosEstoqueCliente }}
                </div></q-btn
              >
            </q-btn>

            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoquedefeito"
              glossy
              no-caps
              unelevated
              label="Com Defeito"
            >
              <q-btn round color="primary" style="margin-left: 10px"
                ><div
                  class="text-h6"
                  style="margin-left: 10px; margin-right: 10px; color: white"
                >
                  {{ ativosEstoqueDefeito }}
                </div></q-btn
              >
            </q-btn>

            <q-btn
              color="grey-4"
              icon="mdi-satellite-variant"
              text-color="primary"
              to="/listarestoquegarantia"
              glossy
              no-caps
              unelevated
              label="Na Garantia"
            >
              <q-btn round color="primary" style="margin-left: 10px"
                ><div
                  class="text-h6"
                  style="margin-left: 10px; margin-right: 10px; color: white"
                >
                  {{ ativosEstoqueGarantia }}
                </div></q-btn
              >
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
import { defineComponent, ref, onMounted, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import qtdeApi from "src/composables/EstoqueApi";
import useNotify from "src/composables/UseNotify";

const linksList = [];
export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  setup() {
    const ativosEstoqueOK = ref(0);
    const ativosEstoqueEstoque = ref(0);
    const ativosEstoqueDefeito = ref(0);
    const ativosEstoqueGarantia = ref(0);
    const ativosEstoqueCliente = ref(0);
    const { user } = useAuthUser();
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const router = useRouter();
    const { logout } = useAuthUser();

    const { notifyError, notifySuccess } = useNotify;

    const estoque = ref([]);

    const {
      listaEstoqueOkCount,
      listaEstoqueDefeitoCount,
      listaEstoqueGarantiaCount,
      listaEstoqueEstoqueCount,
      listaEstoqueClienteCount,
      //listaEstoqueDefeito,

      //listaEstoqueEstoque,
      //listaEstoqueCliente,
    } = qtdeApi();

    /* Obtendo qual usuário está logado */
    const userlogado = user.value.user_metadata.name;

    const handleEstoqueOK = async () => {
      try {
        ativosEstoqueOK.value = await listaEstoqueOkCount("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEstoqueEstoqueOK = async () => {
      try {
        ativosEstoqueEstoque.value = await listaEstoqueEstoqueCount("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleClienteOK = async () => {
      try {
        ativosEstoqueCliente.value = await listaEstoqueClienteCount("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleDefeitoOK = async () => {
      try {
        ativosEstoqueDefeito.value = await listaEstoqueDefeitoCount("estoque");
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleGarantiaOK = async () => {
      try {
        ativosEstoqueGarantia.value = await listaEstoqueGarantiaCount(
          "estoque"
        );
      } catch (error) {
        notifyError(error.message);
      }
    };

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

    /* debugger; */

    onMounted(async () => {
      //await handleListEstoque();
      await handleEstoqueOK();
      await handleDefeitoOK();
      await handleGarantiaOK();
      await handleEstoqueEstoqueOK();
      await handleClienteOK();
      /* Copiei do Form.vue */
      /* Este if(){} foi acrescentado pelo Patrick */
      /* Patrick alterou esta linha em 10.01.23 */

      //}
    });

    return {
      handleEstoqueOK,
      ativosEstoqueOK,
      handleGarantiaOK,
      handleEstoqueEstoqueOK,
      ativosEstoqueEstoque,
      ativosEstoqueCliente,
      ativosEstoqueDefeito,
      ativosEstoqueGarantia,
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
