// const product = 'Socks'
const { createApp, ref } = Vue

createApp({
   setup(){
        const product = ref('Boots');
        const description = ref('These boots are made for walking and provide comfort and durability for all your adventures.');
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(false);
        const inventory = ref(100);
        const onSale = ref(false); 
        const toggleOnSale = () => {
            onSale.value = !onSale.value;
        };
        const toggleInStock = () => {
            inStock.value = !inStock.value;
        };
        const details = ref([
                        '50% cotton',
                        '30% wool',
                        '20% polyester'
                    ])
            
         const variants = ref([
           { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue' , image: './assets/images/socks_blue.jpg'},
        ]);

        const size = ref(['S','M','L']);
        const cart = ref(0);
        function addToCart() {cart.value +=1};
        function updateImage(variantImage){image.value = variantImage}
            
            


        return {
            product,
            description,
            image,
            link,
            inStock,
            inventory,
            onSale,
            toggleOnSale,
            details,
            variants,
            size,
            cart,
            addToCart,
            updateImage,
            toggleInStock,
            
        };
    }
  
}).mount('#app')
