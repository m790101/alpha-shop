<template>
     <div class="form-panel">
      <form id="checkout-form" >
        <div class="shipping-address part"
        v-show="step === 1"
        >
          <div class="form-title title-header mb-8">運送地址</div>
         <div class="input-name mb-8">
           <div class="name-title">
              <label for="name-title">稱謂</label>
             <div class="select-wrapper">
               <select id="name-title" required v-model="checkoutData.salutation">
               <option>先生</option>
               <option>小姐</option>
             </select>
             </div>
           </div>
           <div class="name">
             <label for="name">姓名</label>
             <input type="text" id="name" placeholder="請輸入姓名" v-model="checkoutData.username">
           </div>
         </div>
          <div class="input-phone mb-8">
            <div class="phone mb-5">
             <label for="phone">電話</label>
             <input type="phone" id="phone" placeholder="請輸入行動電話" v-model="checkoutData.phone">
           </div>
            <div class="email">
             <label for="name">Email</label>
             <input type="email" id="email" placeholder="請輸入電子郵件" v-model="checkoutData.email">
           </div>
          </div>
          <div class="input-address">
            <div class="state mb-5">
              <label for="state">縣市</label>
              <div class="select-wrapper">
                 <select id="state" required v-model="checkoutData.city">
               <option disabled selected value="" >請選擇縣市</option>
               <option>台北市</option>
               <option>新北市</option>
             </select>
              </div>
           </div>
           <div class="address">
             <label for="address">地址</label>
             <input type="address" id="address" placeholder="請輸入地址" v-model="checkoutData.addr">
           </div>
          </div>
        </div>
        <div class="shipping-method part "
        v-show="step === 2"
        >
          <div class="form-title title-header">運送方式</div>
         <div class="method" :class="{active:checkoutData.shippingMethod === '標準運送'}">
             <input type="radio"
             id="standard-shipping"
             name="shipping-method"
             value="標準運送"
             v-model="checkoutData.shippingMethod"
             @change="shipping"
             >
             <div class="method-input-wrapper">
              <div class="shipping-detail">
                <label for="standard-shipping" >標準運送</label>
                <div class="price">免費</div>
              </div>
               <span>約3~7個工作天</span>
             </div>
         </div>
       <div class="method" :class="{active:checkoutData.shippingMethod === 'DHL貨運'}">
             <input
             type="radio"
             id="standard-shipping"
             name="shipping-method"
             value="DHL貨運"
             v-model="checkoutData.shippingMethod"
             @change="shipping"
             >
             <div class="method-input-wrapper">
              <div class="shipping-detail">
                <label for="standard-shipping" class="font-heavy">DHL貨運</label>
                <div class="price">$500</div>
              </div>
               <span>48小時內送達</span>
             </div>
         </div>
        </div>
        <div class="payment-info part "
        v-show="step >= 3"
        >
          <div class="form-title title-header">付款資訊</div>
          <div class="card-info-wrapper">
            <div class="card-name">
             <label for="card-name">持卡人姓名</label>
             <input type="text" id="card-name" placeholder="John Doe" v-model="checkoutData.ccname">
            </div>
            <div class="card-number">
             <label for="card-number">卡號</label>
             <input type="text" id="card-number" placeholder="1111 2222 3333 4444 " v-model="checkoutData.cardNumber">
           </div>
          </div>
          <div class="card-validation">
            <div class="card-date">
             <label for="card-date">有效期限</label>
             <input type="text" id="card-date" placeholder="MM/YY" v-model="checkoutData.expdate">
           </div>
            <div class="ccv">
             <label for="ccv">cvc/ccv</label>
             <input type="text" id="ccv" placeholder="123" v-model="checkoutData.ccv">
           </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
const STORAGE_KEY = 'checkout-data'

export default {
  props:{
    step:{
      type: Number,
      required: true
    }
  },
  data() {
    return {
      checkoutData: {
        salutation:"",
        username:"",
        phone:"",
        email:"",
        city:"",
        addr:"",
        shippingMethod: "",
        ccname:"",
        cardNumber:"",
        expdate:"",
        ccv:"",
        totalPrice:""
      }
    }
  },
  methods: {
    shipping() {
      const shipping = this.checkoutData.shippingMethod
       this.$emit('handleShipping',shipping)
    },
    submitForm() {
      this.$emit('afterSubmit',this.checkoutData)
    },
    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.checkoutData))
    }
  },
  watch: {
    checkoutData:{
      handler: function(){
      this.$emit("handleCheckedoutData", this.checkoutData)
      this.saveStorage()
    },
    deep:true
    },
  },
  created(){
    this.checkoutData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || 
    { 
        salutation:"",
        username:"",
        phone:"",
        email:"",
        city:"",
        addr:"",
        shippingMethod: "",
        ccname:"",
        cardNumber:"",
        expdate:"",
        ccv:"",
        totalPrice:""}
  }
}
</script>
