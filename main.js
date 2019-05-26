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
                id: "1",
                color: "blue",
                variantImage: "./assets/images/vmSocks-blue-onWhite.jpg",
            },
            {
                id: "2",
                color: "green",
                variantImage:"./assets/images/vmSocks-green-onWhite.jpg"
            }
        ],
        cart: 0
    },
        methods: {
            addToCart: function () {
                this.cart++;
            },
            updateProduct: function(variantImage){
                this.image = variantImage
            }

        }
    
})
