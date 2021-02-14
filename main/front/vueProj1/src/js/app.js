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
        },
        isShow: true,
        type: 'A',
        userAdd: {
            user: '',
            email: ''
        },
        list: ['Rivne', 'dks', 'sdgf', 'sdf', 'erer', 'Rivne', 'dks', 'sdgf', 'sdf', 'erer'],
        userList: [{
            user: 'Viktor',
            email: 'test@gmail.com'
        },
        {
            user: 'Serg',
            email: 'test2@gmail.com'
        },
        {
            user: 'Nikoly',
            email: 'test1@gmail.com'
        }],
        isValidate: false
    },
    computed: {
        textButton() {
            return this.isDisabled ? 'is disabled' : 'is enabel';
        },
        getUserInfo() {
            return `<strong>name:</strong> ${this.user.name}, email: ${this.user.email}, tel: ${this.user.tel}`;
        }
    },
    methods: {
        getUserInfoHtml() {
            console.log('aaaa');
            return `<strong>name:</strong> ${this.user.name}, email: ${this.user.email}, tel: ${this.user.tel}`;
        },
        setNumber(number, e) {
            this.number += number;
            console.log(arguments)
        },
        getTitle() {
            console.log(this.$refs.title.style.color = 'red');
        },
        submit() {
            console.log('enter')
        },
        setMessage(e) {
            this.message = e.target.value;
        },
        removeUser(index) {
            console.log(index)
            this.userList.splice(index, 1);
        },
        addUser() {
            const { user, email } = this.userAdd;
            if (user === '' || email === '') {
                this.isValidate = true;
                return;
            };

            this.userList.push({
                user: user,
                email: email
            })
            this.clearForm();
        },
        clearForm() {
            this.userAdd.user = '';
            this.userAdd.email = '';
            this.isValidate = false;
        }
    },
    watch: {
        message(val) {
            console.log(val);
        },
        number(val) {
            console.log(val);

        }
    },
    beforeCreate() {
        console.log('beforeCreated', this.message);
    },
    created() {
        console.log('created', this.message);
    },
    beforeMount() {
        console.log('beforeMount', this.message);
    },
    mounted() {
        console.log('mounted', this.message);
    },
    beforeUpdate() {
        alert('beforeUpdate', this.message);
    },
    updated() {
        console.log('updated', this.message);
    },
});
// setTimeout(() => {
//     vm.message = 'dsfdffffffffffffffff';
//     vm.setNumber();
// }, 5000);

//console.log(vm);
window.vm = vm;
