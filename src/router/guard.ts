import router from "./index.js";

// 前置全局守卫
router.beforeEach((to, from, next) => {
        let token = window.localStorage.getItem('token');
        if (token === null || token === undefined || token === '') {
            console.log(to.name)
            if (to.name !== '/login') {
                next()
            }
        } else {
            console.log(to.name)
            next({name: 'Login'})
        }
    }
)