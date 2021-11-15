const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            items: items,
            product: null
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },

        removeFromCart(){
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    }
})