import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    //состояние, данные
    state: {
        products: [],
        cart: [],
    },
    //то, что меняет состояние, обязаны быть синхронными
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        }
    },
    //действия инициируют мутации; могут использоваться для асинхронных операций
    actions: {
        GET_PRODUCTS({ commit }) {
            return axios('http://localhost:3000/products', {
                method: 'GET'
            }).then(response => {
                console.log(response.data);
                commit('SET_PRODUCTS', response.data);
            }).catch(response => {
                console.log(response);
            });
        },
        ADD_TO_CART({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
    },
    //вычисляемое свойство хранилища, результаты геттера кэшируются, на основе его зависимостей и пересчитываются только при изменении одной из зависимостей.
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
});


