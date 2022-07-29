<template>
  <div>
    <div class="cart-wrapper">
      <div class="cart-title d-none font-heavy">購物籃</div>
      <div class="item-panel">
        <div class="item mb-6" v-for="cartItem in cartItems" :key="cartItem.id">
          <div class="item-image"></div>
          <div class="item-detail">
            <div item-detail-wrapper>
              <div class="item-title mb-6">{{cartItem.name}}</div>
              <div class="item-number mb-6">
                <i class="fas fa-minus" @click="minusNumber(cartItem.id)"></i>
                <span>{{cartItem.number}}</span>
                <i class="fas fa-plus" @click="addNumber(cartItem.id)"></i>
              </div>
            </div>
            <div class="item-price font-heavy">$<span>{{cartItem.price}}</span></div>
          </div>
        </div>
      </div>

    <div class="shipping d-flex justify-content-between">
      <p>運費</p>
      <p class="font-heavy">{{ShippingCost}}</p>
    </div>
    <div class="total d-flex justify-content-between">
      <p>小記</p>
      <p class="font-heavy">$<span>{{ priceResult}}</span></p>
    </div>
  </div>
  </div>
</template>

<script>
const dummyData = {
    cartItems: [
        {
            id: 1,
            name: "破壞補丁修身褲",
            image:"",
            price: 3999,
            number: 1 
        },
        {
            id: 2,
            name: "刷色直筒牛仔褲",
            image:"",
            price: 1299,
            number: 1 
        },
    ]
}
export default {
  props:{
    shippingMethod: {
      type: String,
      required: true
    }
  },
    data(){
        return {
            cartItems:[],
        }
    },
    methods:{
        fetchCartItem() {
            this.cartItems = dummyData.cartItems
        },
        addNumber(itemId){
            this.cartItems = this.cartItems.map((item) => {
                if(item.id === itemId){
                    return {
                        ...item,
                        number: item.number + 1
                    }    
                }
                return item
            })
        },
        minusNumber(itemId){
            this.cartItems = this.cartItems.map((item) => {
                if(item.id === itemId && item.number > 0){
                    return {
                        ...item,
                        number: item.number - 1
                    }    
                }
                return item
            })
        }
    },
    computed: {
        priceResult(){
            let total = 0
             this.cartItems.forEach((x) => {
              return total += x.price * x.number
            })
            if(this.shippingMethod === "DHL貨運"){
              return total+500
            }
            return total
        },
        ShippingCost() {
          
          if(this.shippingMethod === "標準運送"){
            return "免費"
          }
          else if(this.shippingMethod === "DHL貨運"){
            return '$500' 
          }
          else{
            return 0
          }
        }
    },
    created() {
         this.fetchCartItem() 
    }

}
</script>
