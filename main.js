// const product = 'Socks'
const { createApp, ref } = Vue

createApp({
   setup(){
        const product = ref('Boots');
        const description = ref('These boots are made for walking and provide comfort and durability for all your adventures.');
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(true);
        const inventory = ref(100);
        const onSale = ref(false); 
        const toggleOnSale = () => {
            onSale.value = !onSale.value;
        };


        return {
            product,
            description,
            image,
            link,
            inStock,
            inventory,
            onSale,
            toggleOnSale,
        };
    }
  
}).mount('#app')
