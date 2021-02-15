export default {
    getUserInfoHtml() {
        console.log('aaaa');
        return `<strong>name:</strong> ${this.user.name}, email: ${this.user.email}, tel: ${this.user.tel}`;
    },
    setNumber() {
        this.number++;
    }
};
