const routes = [
  {
    /* Neste layout, todas as rotas estão abertas, são publicas */
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("pages/Login.vue"),
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
    ],
  },

  {
    /* Neste layout, todas as rotas estão abertas, são publicas */
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "loginDefault",
        /* component: () => import('pages/Login.vue') */
        component: () => import("pages/Home.vue"),
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
    /* meta: {
      requiresAuth: true
    } */
  },

  {
    /* Neste layout, todas as rotas precisam estar logadas */
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "me",
        name: "me",
        component: () => import("pages/Me.vue"),
      },
      {
        path: "listarevendas",
        name: "listarevendas",
        component: () => import("pages/revendas/ListaRevendas.vue"),
      },
      {
        path: "gerarpdf",
        name: "gerarpdf",
        component: () => import("pages/Gerarpdf.vue"),
      },
      {
        path: "outrogerarpdf",
        name: "outrogerarpdf",
        component: () => import("pages/Outrogerarpdf.vue"),
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
