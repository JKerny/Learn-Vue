var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        desc: 'great socks',
        image: './assets/images/vmSocks-green-onWhite.jpg',
        inventory: 8,
        onSale: false,
        details: ["80% Cotton", "20% polyester"],
        variants: [
            {
                color: "green"
            },
            {
                color: "blue"
            }
        ],
        cart: 0
    },
        methods: {
            addToCart: function () {
                this.cart++;
            }

        }

    
})
