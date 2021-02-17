<template>
    <div class="v-cart-item col-4">
        <img
            :src="require('../assets/products/' + product.img)"
            :alt="product.name"
        />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} $</p>
    </div>
</template>


<script>
export default {
    name: 'v-cart-item',
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>

<style lang="sass">
</style>
