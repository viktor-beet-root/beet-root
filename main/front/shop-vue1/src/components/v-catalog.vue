<template>
    <div class="v-catalog">
        <h2>{{ title }}</h2>
        <div class="row">
            <v-catalog-item
                v-for="product in paroductData"
                :key="product.id"
                :product="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';

export default {
    components: { vCatalogItem },
    name: 'v-catalog',
    props: {
        paroductData: {
            type: Array,
            default() {
                return [];
            },
        },
        title: String,
    },
    methods: {
        addToCart(product) {
            this.$emit('addToCart', product);
        },
    },
};
</script>

<style>
.v-catalog {
}
</style>
