import Vue from "vue";
import Router from "vue-router";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import TranslateForm from "./components/TranslateForm.vue"
import Translate from "./components/Translate.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "skills",
      component: Skills,
    },
    {
      path: "/about/:name", // Add /:name here
      name: "about",
      component: About,
    },
    {
      path: "/translate", // Add /:name here
      name: "translate",
      component: Translate,
    },
    {
      path: "/translate-form", // Add /:name here
      name: "translate-form",
      component: TranslateForm,
    },
  ],
});
