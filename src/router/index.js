import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/layouts/home.vue'
import Login from '../views/auth/login.vue'
import LangIndex from '../components/languages/index.vue'
import FCategory from '../components/forms/category.vue'
import FStore from '../components/forms/formstore.vue'
import LangAdd from '../components/languages/add.vue'
import Manage from '../components/languages/manage.vue'
import Users from '../components/users/index.vue'
import UserView from '../components/users/view.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: "/Languages",
        component: Home,
        meta: {
            requiresAuth: true
        },
        children: [{
                path: 'languages',
                name: 'Languages',
                component: LangIndex,
                meta: {
                    header: {
                        logo: 'global',
                        btnName: 'Add language',
                        btnIcon: 'plus',
                        search: 1,
                        btnRoute: 'none',
                        filter: 0,
                        modal: true,
                    },

                },
            },

            {
                path: 'users',
                name: 'users',
                component: Users,
                meta: {
                    header: {
                        logo: 'usergroup-add',
                        btnName: 'none',
                        btnIcon: 'plus',
                        search: 1,
                        btnRoute: 'none',
                        modal: false,
                        filter: 0,

                    },

                },

            },
            {
                path: 'manage/:key',
                name: 'Manage',
                component: Manage,
                meta: {
                    header: {
                        logo: 'global',
                        btnName: 'Edit key',
                        btnIcon: 'plus',
                        search: 0,
                        btnRoute: 'none',
                        modal: false,
                        filter: 1,

                    },

                },
            },
            {
                path: 'user/:id',
                name: 'User',
                component: UserView,
                meta: {
                    header: {
                        logo: 'usergroup-add',
                        btnName: 'Edit key',
                        btnIcon: 'plus',
                        search: 0,
                        btnRoute: 'none',
                        modal: false,
                        filter: 1,

                    },

                },
            },
            {
                path: 'languages/add',
                name: 'Add Language',
                component: LangAdd,
                meta: {
                    header: {
                        logo: 'upload',
                        btnName: 'Save',
                        btnIcon: 'download',
                        search: 0,
                    },

                },

            },
            {
                path: 'formCategory',
                name: 'Form Category',
                component: FCategory,
                meta: {
                    header: {
                        logo: 'form',
                        btnName: 'Add Category',
                        btnIcon: 'plus',
                        search: 1,
                        btnRoute: 'none',
                        filter: 0,
                        modal: true,
                    },

                },

            },
            {
                path: 'formStore',
                name: 'Form Store',
                component: FStore,
                meta: {
                    header: {
                        logo: 'form',
                        btnName: 'Add Form',
                        btnIcon: 'plus',
                        search: 1,
                        btnRoute: 'none',
                        filter: 0,
                        modal: true,
                    },

                },

            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            restrectedAuth: true

        },
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else if (to.matched.some(record => record.meta.restrectedAuth)) {
        if (store.getters.isLoggedIn) {
            next('/')
            return
        }
        next()
    } else {
        next()
    }
})
export default router