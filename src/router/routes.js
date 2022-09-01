const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      /*  { path: '', component: () => import('pages/IndexPage.vue') } */
      {
        path: "/",
        component: () => import("src/pages/Home.vue"),
      },

      {
        path: "/dashboard",
        component: () => import("src/pages/Dashboard.vue"),
      },

      {
        path: "/quemsomosnos",
        component: () => import("src/pages/Quemsomosnos.vue"),
      },

      {
        path: "/form",
        component: () => import("src/pages/Form.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
