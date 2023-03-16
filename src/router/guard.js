import router from "./index.js";

// 前置全局守卫
router.beforeEach((to, from, next) => {
    if (localStorage.getItem("token")) {
        next();
    } else {
        next("/login");
    }
});