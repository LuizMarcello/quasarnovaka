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
        path: "form-clientes",
        name: "form-clientes",
        component: () => import("src/pages/clientes/Form.vue"),
      },
      {
        path: "form-clientes/:id?",
        name: "form-clientes",
        component: () => import("src/pages/clientes/Form.vue"),
      },
      {
        path: "listarrevendas",
        name: "listarrevendas",
        component: () => import("pages/revendas/ListaRevendas.vue"),
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
