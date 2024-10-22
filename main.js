// const product = 'Socks'
const { createApp, ref } = Vue

createApp({
   setup(){
        const product = ref('Boots');
        const description = ref('These boots are made for walking and provide comfort and durability for all your adventures.');
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')

        return {
            product,
            description,
            image,
            link,
        };
    }
  
}).mount('#app')
