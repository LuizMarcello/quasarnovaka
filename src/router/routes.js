/* eslint-disable */
const routes = [
  {
    /* Neste layout, todas as rotas estão abertas, são publicas */
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "/",
        component: () => import("pages/Home.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("pages/Register.vue"),
      },
      {
        path: "email-confirmation",
        name: "email-confirmation",
        component: () => import("pages/EmailConfirmation.vue"),
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: () => import("pages/ForgotPassword.vue"),
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: () => import("pages/ResetPassword.vue"),
      },
      {
        path: "form",
        name: "form",
        component: () => import("src/pages/revendas/Form.vue"),
      },
      {
        path: "form-revendas/:id?",
        name: "form-revendas",
        component: () => import("src/pages/revendas/Form.vue"),
      },
    ],
  },

  {
    /* Neste layout, todas as rotas estão abertas, são publicas */
    path: "/",
    component: () => import("layouts/AdmLayout.vue"),
    children: [
      {
        path: "listarclientes",
        name: "listarclientes",
        component: () => import("pages/clientes/ListaClientes.vue"),
      },
      {
        path: "inicioclientes",
        name: "inicioclientes",
        component: () => import("pages/clientes/InicioClientes.vue"),
      },
      {
        path: "listarcontratos",
        name: "listarcontratos",
        component: () => import("pages/clientes/ListaContratos.vue"),
      },
      {
        path: "listartemplatecontratos",
        name: "listartemplatecontratos",
        component: () => import("pages/clientes/ListaTemplateContratos.vue"),
      },
      /* {
        path: "form-clientes",
        name: "form-clientes",
        component: () => import("src/pages/clientes/Form.vue"),
      }, */
      {
        path: "form-clientes/:id?",
        name: "form-clientes",
        component: () => import("src/pages/clientes/Form.vue"),
      },
      {
        path: "form-contratos/:id?",
        name: "form-contratos",
        component: () => import("src/pages/clientes/FormContratos.vue"),
      },

      {
        path: "form-templates-contrato-detalhes/:id?",
        name: "form-template-contratos-detalhes",
        component: () =>
          import("src/pages/clientes/FormTemplatesContratosDetalhes.vue"),
      },

      {
        path: "form-templatecontrato/:id?",
        name: "form-templatecontrato",
        component: () => import("src/pages/clientes/FormTemplateContratos.vue"),
      },
      {
        path: "listarevendas",
        name: "listarevendas",
        component: () => import("pages/revendas/ListaRevendas.vue"),
      },
      {
        path: "iniciorevendas",
        name: "iniciorevendas",
        component: () => import("pages/revendas/InicioRevendas.vue"),
      },
      {
        path: "aprovarrevendas/:id?",
        name: "aprovarrevendas",
        component: () => import("pages/revendas/FormAprovar.vue"),
      },

      {
        path: "form-clientes-detalhes/:id?",
        name: "form-clientes-detalhes",
        component: () => import("pages/clientes/FormClientesDetalhes.vue"),
      },

      {
        path: "form-contratos-detalhes/:id?",
        name: "form-contratos-detalhes",
        component: () => import("pages/clientes/FormContratosDetalhes.vue"),
      },

      {
        path: "form-revenda-detalhes/:id?",
        name: "form-revenda-detalhes",
        component: () => import("pages/revendas/FormRevendaDetalhes.vue"),
      },

      {
        path: "charts",
        name: "charts",
        component: () => import("pages/Charts.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    /* Neste layout, todas as rotas estão abertas, são publicas */
    path: "/",
    component: () => import("layouts/EstoqueLayout.vue"),
    children: [
      {
        path: "form-estoque-detalhes/:id?",
        name: "form-estoque-detalhes",
        component: () => import("pages/estoque/FormEstDetalhes.vue"),
      },

      {
        path: "form-estoque-historico/:id?",
        name: "form-estoque-historico",
        component: () => import("pages/estoque/Formesthistorico.vue"),
      },

      {
        path: "form-estoque/:id?/:barcode?",
        name: "form-estoque",
        component: () => import("pages/estoque/Form.vue"),
        props: true,
      },

      /* Patrick acrescentou "/:barcode?" em 10.01.23 */
      {
        path: "listarestoque/:barcode?",
        name: "listarestoque",
        component: () => import("pages/estoque/ListaEstoque.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoqueantena",
        name: "listarestoqueantena",
        component: () => import("pages/estoque/ListaEstoqueAntena.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoquebuc",
        name: "listarestoquebuc",
        component: () => import("pages/estoque/ListaEstoqueBuc.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoquemodem",
        name: "listarestoquemodem",
        component: () => import("pages/estoque/ListaEstoqueModem.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoqueetria",
        name: "listarestoqueetria",
        component: () => import("pages/estoque/ListaEstoqueEtria.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoquefonte",
        name: "listarestoquefonte",
        component: () => import("pages/estoque/ListaEstoqueFonte.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoquegroove",
        name: "listarestoquegroove",
        component: () => import("pages/estoque/ListaEstoqueGroove.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoqueilb",
        name: "listarestoqueilb",
        component: () => import("pages/estoque/ListaEstoqueIlb.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoquelnb",
        name: "listarestoquelnb",
        component: () => import("pages/estoque/ListaEstoqueLnb.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoqueradio",
        name: "listarestoqueradio",
        component: () => import("pages/estoque/ListaEstoqueRadio.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoqueroteador",
        name: "listarestoqueroteador",
        component: () => import("pages/estoque/ListaEstoqueRoteador.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoqueok",
        name: "listarestoqueok",
        component: () => import("pages/estoque/ListaEstoqueOk.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoquedefeito",
        name: "listarestoquedefeito",
        component: () => import("pages/estoque/ListaEstoqueDefeito.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoquegarantia",
        name: "listarestoquegarantia",
        component: () => import("pages/estoque/ListaEstoqueGarantia.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoqueestoque",
        name: "listarestoqueestoque",
        component: () => import("pages/estoque/ListaEstoqueEstoque.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "listarestoquecliente",
        name: "listarestoquecliente",
        component: () => import("pages/estoque/ListaEstoqueCliente.vue"),
        /* Patrick acrescentou este "props: true" em 10.01.23 */
        props: true,
      },

      {
        path: "inicioestoque",
        name: "inicioestoque",
        component: () => import("pages/estoque/InicioEstoque.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    /* Neste layout, todas as rotas estão abertas, são publicas */
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "loginDefault",
        component: () => import("pages/Login.vue"),
        /* component: () => import("pages/Home.vue"), */
      },

      {
        path: "home",
        name: "home",
        component: () => import("pages/Home.vue"),
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("pages/Dashboard.vue"),
      },
      {
        path: "quemsomosnos",
        name: "quemsomosnos",
        component: () => import("pages/quemsomosnos.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("pages/Login.vue"),
      },
    ],
    /* meta: {
      requiresAuth: true
    } */
  },

  {
    /* Neste layout, todas as rotas precisam estar logadas */
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        path: "barcode",
        name: "barcode",
        component: () =>
          import("src/components/barcodeScanner/BtnScannerWrapper.vue"),
        /* component: () => import("src/components/barcodeScanner/BtnScannerDesktop.vue"), */
      },
      {
        path: "barcodesearch",
        name: "barcodesearch",
        component: () =>
          import("src/components/barcodeScanner/BtnScannerWrapperSearch.vue"),
        /* component: () => import("src/components/barcodeScanner/BtnScannerDesktop.vue"), */
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },

  {
    /* Neste layout, todas as rotas precisam estar logadas */
    path: "/",
    component: () => import("src/layouts/MainLayoutSair.vue"),
    children: [
      {
        path: "me",
        name: "me",
        component: () => import("pages/Me.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
