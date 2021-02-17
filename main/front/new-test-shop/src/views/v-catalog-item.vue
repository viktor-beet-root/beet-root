<template>
    <div class="v-catalog-item col-4">
        <img
            :src="require('../assets/products/' + product.img)"
            :alt="product.name"
        />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} $</p>
        <p>{{ product.instock ? 'In Stock' : 'Out Stock' }}</p>
        <p>
            <button @click="addToCart" class="btn btn-primary" type="button">
                Add to Cart
            </button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'v-catalog-item',
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product);
        },
    },
};
</script>

<style>
.v-catalog-item {
}
</style>
