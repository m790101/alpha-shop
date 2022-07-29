<template>
     <div class="stepper">
      <div class="step active" :class="{checked: step > 1}">
        <div class="circle"></div>
        <p class="step-title">寄送地址</p>
      </div>
        <span class="line"></span>
      <div class="step" :class="{checked: step > 2,active: step ===2}">
        <div class="circle"></div>
        <p class="step-title">運送方式</p>
      </div>
        <span class="line"></span>
      <div class="step" :class="{active: step >= 3}">
        <div class="circle"></div>
        <p class="step-title">付款資訊</p>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    step:{
      type: Number,
      required: true
    }
  }
}
</script>