<template>
    <div class="v-cart">
        <div class="container">
            <h1>Cart</h1>
            <div class="row">
                <v-cart-item
                    v-for="product in CART"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import vCartItem from './v-cart-item.vue';

export default {
    components: { vCartItem },
    name: 'v-cart',
    computed: {
        ...mapGetters(['CART']),
    },
};
</script>


<style lang="scss">
</style>
