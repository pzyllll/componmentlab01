// const product = 'Socks'
const { createApp, ref, computed } = Vue

createApp({
   setup(){
        const product = ref('Boots');
        const brand = ref('SE 331')
        const description = ref('These boots are made for walking and provide comfort and durability for all your adventures.');
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inventory = ref(100);
        const onSale = ref(false); 
        const toggleOnSale = () => {onSale.value = !onSale.value;};
        const toggleInStock = () => { inStock.value = !inStock.value;};
        
        const details = ref([
                        '50% cotton',
                        '30% wool',
                        '20% polyester'
                    ])
            
         const variants = ref([
           { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' ,quantity: 50 },
            { id: 2235, color: 'blue' , image: './assets/images/socks_blue.jpg', quantity: 0 },        
        ]);
        const selectedVariant = ref(0);

        const size = ref(['S','M','L']);
        const cart = ref(0);
        function addToCart() {cart.value +=1};

            
        const title = computed(() =>{ return brand.value + ' ' + product.value })

        

        const image = computed(() => {
                        return variants.value[selectedVariant.value].image;
                    })
        const inStock = computed(() => { 
                        return variants.value[selectedVariant.value].quantity;
                    })

        function updateVariant(index){selectedVariant.value = index;}
        function updateImage(variantImage){image.value = variantImage}

        const saleMessage = computed(() => {
            if (onSale.value) {
              return `${brand.value} ${product.value} is on sale`;
            }
            return '';
          });
    
        return {
            description,
            image,
            link,
            inStock,
            inventory,
            onSale,
            toggleOnSale,
            details,
            updateVariant,
            variants,
            size,
            cart,
            addToCart,
            updateImage,
            toggleInStock,
            title,     
            selectedVariant,   
            saleMessage,    
        };
    }
  

}).mount('#app')


