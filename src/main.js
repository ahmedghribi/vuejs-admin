import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import Axios from 'axios'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import './assets/style/scss/app.scss';
import './assets/style/bootstrap.scss';



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Antd, BootstrapVue, Axios);

/*axios*/
Vue.prototype.$http = Axios;


const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')