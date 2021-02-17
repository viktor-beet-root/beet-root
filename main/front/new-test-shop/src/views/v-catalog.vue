<template>
    <div class="v-catalog">
        <div class="container">
            <h2>Catalog</h2>
            <div class="row">
                <v-catalog-item
                    v-for="product in PRODUCTS"
                    :key="product.id"
                    :product="product"
                    @addToCart="addToCart"
                />
            </div>
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: { vCatalogItem },
    name: 'v-catalog',
    methods: {
        ...mapActions(['GET_PRODUCTS', 'ADD_TO_CART']),
        addToCart(product) {
            this.ADD_TO_CART(product);
        },
    },
    computed: {
        ...mapGetters(['PRODUCTS']),
    },
    mounted() {
        this.GET_PRODUCTS();
    },
};
</script>

<style>
.v-catalog {
}
</style>
