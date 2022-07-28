<template>
<div>
    <div class="main-title title-header font-heavy">結帳</div>
    <div class="section-wrapper">
        <section class="left-section">
            <Stepper/>
            <CheckedoutForm />
        </section>
        <section class="right-section">
          <Cart/>
        </section> 
        <div class="btn-section ">
           <ButtonSection/>
          </div>      
         
    </div>
</div>
</template>

<script>
import Stepper from './../components/Stepper.vue'
import CheckedoutForm from './../components/CheckedoutForm.vue'
import Cart from './../components/Cart.vue'
import ButtonSection from './../components/ButtonSection.vue'

export default {
    components: {
        Stepper,
        CheckedoutForm,
        Cart,
        ButtonSection
    }
}
</script>


<style scoped lang="scss">

.main-title {
    font-size: 2.7rem;
  }
.section-wrapper {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    & .left-section {
      grid-column: 1/7;
    }
    & .right-section {
      grid-column: 8/13;
    }
    & .btn-section {
      grid-column: 1/7;
    }
  }
</style>