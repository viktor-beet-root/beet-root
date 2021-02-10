import Vue from 'vue/dist/vue.esm.browser';
import methods from './methods';

const vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        number: 235,
        url: 'http://google.com',
        isDisabled: false,
        user: {
            name: 'Viktol',
            email: 'test@gmail.com',
            tel: '+380670000000'
        }
    },
    computed: {
        textButton() {
            return this.isDisabled ? 'is disabled' : 'is enabel';
        },
        getUserInfo() {
            return `<strong>name:</strong> ${this.user.name}, email: ${this.user.email}, tel: ${this.user.tel}`;
        }
    },
    methods: methods
});
setTimeout(() => {
    vm.message = 'dsfdffffffffffffffff';
    vm.setNumber();
}, 5000);

//console.log(vm);
window.vm = vm;
