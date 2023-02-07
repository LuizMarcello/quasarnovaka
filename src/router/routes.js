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
      /* {
        path: "register",
        name: "register",
        component: () => import("pages/Register.vue"),
      }, */
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
        path: "form-estoque-detalhes/:id?",
        name: "form-estoque-detalhes",
        component: () => import("pages/estoque/FormEstDetalhes.vue"),
      },

      {
        path: "form-clientes-detalhes/:id?",
        name: "form-clientes-detalhes",
        component: () => import("pages/clientes/FormClientesDetalhes.vue"),
      },
      {
        path: "form-revenda-detalhes/:id?",
        name: "form-revenda-detalhes",
        component: () => import("pages/revendas/FormRevendaDetalhes.vue"),
      },

      {
        path: "form-estoque-historico/:id?",
        name: "form-estoque-historico",
        component: () => import("pages/estoque/Formesthistorico.vue"),
      },

      /* Antes do Patrick alterar? */
      /* {
        path: "form-estoque/:id?",
        name: "form-estoque",
        component: () => import("pages/estoque/Form.vue"),
      }, */

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
        path: "charts",
        name: "charts",
        component: () => import("pages/Charts.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("pages/Register.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },

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
        component: () => import("pages/Quemsomosnos.vue"),
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
