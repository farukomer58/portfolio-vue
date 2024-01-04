import NProgress from "nprogress";

// https://ricostacruz.com/nprogress/
export default (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach(NProgress.done);
};
