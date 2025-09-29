import { createWebHistory, createRouter } from "vue-router";
import { CocktailPage, NotFoundPage } from "@/pages";
import MainLayout from "@/layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/margarita",
  },
  {
    path: "/:code(margarita|mojito|a1|kir)",
    name: "CocktailLayout",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Cocktail",
        component: CocktailPage,
        props: true,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
