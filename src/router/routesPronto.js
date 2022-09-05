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

    ],
  },

  {
    /* Neste layout, todas as rotas precisam estar logadas */
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
        path: '/',
        /* component: () => import('pages/IndexPage.vue') */
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: 'me',
        name: 'me',
        component: () => import("pages/Me.vue"),
      }
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
