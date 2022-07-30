<template>
  <div>
    <div class="main-title title-header font-heavy">結帳</div>
    <div class="section-wrapper">
        <section class="left-section">
            <Stepper
            :step="step"
            />
            <CheckedoutForm
            :step="step"
             @handleShipping="shipping"
             @handleCheckedoutData="handleSubmit"
            />
        </section>
        <section class="right-section">
          <Cart
          :shipping-method="checkoutData.shippingMethod"
          @afterTotalPrice="handleTotalPrice"
          />
        </section> 
        <div class="btn-section ">
           <router-link :to="{name:'checkout', params:{id:step}}">
            <button class="btn btn-pre" :class="{active: step > 1}" @click="preStep" >上一步</button>
           </router-link>
           <router-link :to="{name:'checkout', params:{id:step}}">
              <button class="btn btn-next"
              @click="nextStep"
              >{{buttonCheckout}}</button>
           </router-link>
         
        </div>      

  </div>
  <CheckourModel
  :checkoutData = checkoutData
  v-if="step === 4"
  @afterBack="handleBack"
  />
</div>
</template>

<script>
import Stepper from './../components/Stepper.vue'
import CheckedoutForm from './../components/CheckedoutForm.vue'
import Cart from './../components/Cart.vue'
import CheckourModel from '../components/CheckoutModel.vue'


export default {
  data(){
    return {
      step:1,
      checkoutData:{
      shippingMethod:"",
      totalPrice: 0,
      salutation:"",
      username:"",
      phone:"",
      email:"",
      city:"",
      addr:"",
      ccname:"",
      cardNumber:"",
      expdate:"",
      ccv:"",
       }
      
    
    }
  },
    components: {
        Stepper,
        CheckedoutForm,
        Cart,
        CheckourModel
    },
    methods: {
      nextStep() {
        if(this.step > 0 && this.step < 4){
          this.step = this.step +1
        }
      },
      preStep() {
        if(this.step > 1 && this.step <= 4){
          this.step = this.step -1
        }
      },
      shipping(e) {
        this.checkoutData.shippingMethod = e
      },
      handleTotalPrice(e) {
        this.checkoutData.totalPrice = e
      },
      handleSubmit(e){
        const {salutation,username,phone,email,city,addr,ccname,cardNumber,expdate,ccv,} = e
        this.checkoutData.salutation = salutation
        this.checkoutData.username = username
        this.checkoutData.phone = phone
        this.checkoutData.email = email
        this.checkoutData.city = city
        this.checkoutData.addr = addr
        this.checkoutData.ccname = ccname
        this.checkoutData.cardNumber = cardNumber
       this.checkoutData.expdate = expdate
        this.checkoutData.ccv = ccv
      },
      handleBack() {
        this.step = this.step -1
      }
    },
    computed: {
      buttonCheckout() {
        if(this.step >= 3){
          return "確認下單"
        }
        else{
          return "下一步"
        }
      }
    }

}
</script>

