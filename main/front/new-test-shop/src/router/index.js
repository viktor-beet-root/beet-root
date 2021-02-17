import Vue from 'vue';
import VueRouter from 'vue-router';
import vCatalog from '../views/v-catalog.vue';
import VCart from '../views/v-cart.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Catalog',
        component: vCatalog,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: VCart,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
