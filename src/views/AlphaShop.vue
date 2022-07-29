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
             
            />
        </section>
        <section class="right-section">
          <Cart
          :shipping-method="shippingMethod"
          />
        </section> 
        <div class="btn-section ">
           <button class="btn btn-pre" :class="{active: step > 1}" @click="preStep" >上一步</button>
          <button class="btn btn-next "  @click="nextStep">{{buttonCheckout}}</button>
        </div>      
         
  </div>
</div>
</template>

<script>
import Stepper from './../components/Stepper.vue'
import CheckedoutForm from './../components/CheckedoutForm.vue'
import Cart from './../components/Cart.vue'


export default {
  data(){
    return {
      step:1,
      shippingMethod:""
    }
  },
    components: {
        Stepper,
        CheckedoutForm,
        Cart,
    },
    methods: {
      nextStep() {
        if(this.step > 0 && this.step < 3){
          this.step = this.step +1
        }
      },
      preStep() {
        if(this.step > 1 && this.step <= 3){
          this.step = this.step -1
        }
      },
      shipping(e) {
        this.shippingMethod = e
      }
    },
    computed: {
      buttonCheckout() {
        if(this.step === 3){
          return "確認下單"
        }
        else{
          return "下一步"
        }
      }
    }

}
</script>

