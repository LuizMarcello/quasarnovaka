const routes = [{
    /* Neste layout, todas as rotas estão abertas, são publicas */
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{
        path: '',
        name: 'loginDefault',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/Register.vue')
      },
      {
        path: 'email-confirmation',
        name: 'email-confirmation',
        component: () => import('pages/EmailConfirmation.vue')
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('pages/ForgotPassword.vue')
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: () => import('pages/ResetPassword.vue')
      }

    ],
  },

  {
    /* Neste layout, todas as rotas precisam estar logadas */
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{
        path: '/',
        /* component: () => import('pages/IndexPage.vue') */
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: 'me',
        name: 'me',
        component: () => import("pages/Me.vue"),
      },
      {
        path: 'home',
        name: 'home',
        component: () => import("pages/Home.vue"),
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import("pages/Dashboard.vue"),
      },
      {
        path: 'quemsomosnos',
        name: 'quemsomosnos',
        component: () => import("src/pages/quemsomosnos.vue"),
      },
      {
        path: 'form',
        name: 'form',
        component: () => import("pages/Form.vue"),
      },
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
