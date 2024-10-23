const productDisplay = {
   
       template:
           /*html*/
           `
       <div class="product-display">
    <div class="product-container flex-row">
      <div class="product-image">
        <img :src="image" alt="" :class="{ 'out-of-stock-image': !inStock }">
      </div>
      <div class="product-info">
        <a :href="link"><h1>{{ title }}</h1></a>
        <p>{{ description }}</p>

        <p v-if="inventory > 10 && inStock">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0 && inStock">Almost out of Stock</p>
        <p v-else-if="!inStock">Out of Stock</p>
          <p v-else>Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
        <button @click="toggleInStock">Toggle In Stock</button>

        <p v-if="saleMessage">{{ saleMessage }}</p> 
        <p v-else>Not on Sale</p>
        <button @click="toggleOnSale">Toggle On Sale</button>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <p>Size: {{ size.join(', ') }}</p>

        <div class="cart">Cart({{ cart }})</div>
        <button class="button" :disabled="!inStock" @click="addToCart">Add To Cart</button>

        <p v-if="premium">Premium Shipping Available</p>
        <p v-else>Standard Shipping Only</p>
      </div>
    </div>
  </div>
          
       `,
props: {
    premium: {
        type: Boolean,
        required: true
      },
      cart: {
        type: Number,
        required: true
      }
    },
    setup(props) {
        const shipping = computed(()=>{
                      if (props.premium){
                          return 'Free'
                      } else {
                          return 30
                      }
                     
                  })
            

       const product = ref('Boots')
           const brand = ref('SE 331')
           const onSale = ref(false); // 添加 onSale 布尔值
           const inventory = ref(100)
           const details = ref([
               '50% cotton',
               '30% wool',
               '20% polyester'
           ])
           const variants = ref([
               { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
               { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
           ])
           const selectedVariant = ref(0)
           const size = ref(['S', 'M', 'L']);
           const cart = ref(0)
           function updateVariant(index) {
               selectedVariant.value = index;
           }
           const image = computed(() => {
               return variants.value[selectedVariant.value].image
           })
           const inStock = computed(() => {
               return variants.value[selectedVariant.value].quantity>0;
           })

           const saleMessage = computed(() => {
            if (onSale.value) {
              return `${brand.value} ${product.value} is on sale`;
            }
            return '';
          });
           function addToCart() {
               cart.value += 1
           }
           const title = computed(() => {
               return brand.value + ' ' + product.value
           })
           function updateImage(variantImage) {
               image.value = variantImage
           }
           function toggleInStock() {
            inStock.value = !inStock.value;
          }
      
          function toggleOnSale() {
            onSale.value = !onSale.value;
          }
      
          function updateVariant(index) {
            selectedVariant.value = index;
          }
      

           
           return {
               title,
               image,
               inStock,
               inventory,
               details,
               variants,
               addToCart,
               updateImage,
               updateVariant,
               shipping,
               toggleOnSale,
               toggleInStock,
               saleMessage,
               size,

           }
       }
   }

   