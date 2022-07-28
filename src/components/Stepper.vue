<template>
     <div class="stepper">
      <div class="step active">
        <div class="circle"></div>
        <p class="step-title">寄送地址</p>
      </div>
        <span class="line"></span>
      <div class="step">
        <div class="circle"></div>
        <p class="step-title">運送方式</p>
      </div>
        <span class="line"></span>
      <div class="step">
        <div class="circle"></div>
        <p class="step-title">付款資訊</p>
      </div>
    </div>
</template>


<style scoped>

.stepper {
    display:flex;
    justify-content: space-between;
    margin-top: 48px;
}
.stepper .step {
    font-size: 16px;
    opacity: 0.4;
    display: flex;
    gap: 8px;
    font-size:1rem;
}
.stepper .circle {
    position: relative;
    border: 1px solid var(--body-color);
    border-radius: 50%;
    width: 24px;
    height:24px;
}

.step-title {
        display: initial;
        font-size: 16px;
        }

.circle::after {
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
      }
.step:nth-child(1) .circle:after{
    content:"1"
}
.step:nth-child(3) .circle:after{
    content:"2"
}
.step:nth-child(5) .circle:after{
    content:"3"
}
.step.active{
    opacity: 1;   
}
.step.active .circle{
        border: 1px solid var(--stepper-circle-bg);
        background: var(--stepper-circle-bg);
        color: var(--white);
        opacity: 1;
}
.step.checked {
       opacity: 1;
}

.step.checked .circle{
        border: 1px solid var(--stepper-circle-bg);
        opacity: 1;
        background: var(--stepper-circle-bg);
}

.step.checked .circle::after {
    content:"\2713";
    color: var(--white);
    
}
.line {
    display: block;
    background: var(--pale-gray);
    width: calc(50% - (32px*3) - 16px*4 - 8px*2);
    max-width: 60px;
    height: 2px;
    align-self:center;
}

</style>
