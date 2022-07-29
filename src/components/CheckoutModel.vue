<template>
    <div class="checkout-model">
        <div class="result-card">
            <div class="text-panel">
                <p><span>salutation: </span>{{checkoutData.salutation}}</p>
                <p><span>username: </span>{{checkoutData.username}}</p>
                <p><span>phone: </span>{{checkoutData.phone}}</p>
                <p><span>email: </span>{{checkoutData.email}}</p>
                <p><span>city: </span>{{checkoutData.city}}</p>
                <p><span>addr: </span>{{checkoutData.addr}}</p>
                <p><span>shipping: </span>{{checkoutData.shippingMethod}}</p>
                <p><span>ccname: </span>{{checkoutData.ccname}}</p>
                <p><span>cardNumber: </span>{{checkoutData.cardNumber}}</p>
                <p><span>expdate: </span>{{checkoutData.expdate}}</p>
                <p><span>ccv: </span>{{checkoutData.ccv}}</p>
                <p><span>total: </span>{{checkoutData.totalPrice}}</p>
                <button class="btn btn-back" @click="backToForm">回表單</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        checkoutData:{
            type: Object,
            require: true
        }
    },
    methods: {
        backToForm() {
            this.$emit("afterBack")
        }
    }
}
</script>





<style scoped lang="scss">
    .checkout-model{
        width:100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top:0;
        left:0;
        z-index: 999;

    }
    .result-card{
        display: flex;
        justify-content: center;
        width:30%;
        height: 50%;
        background: white;
        color:var(--body-color);
        
        & .text-panel {
            margin-top: 50px;
            width:50%;
            height: 50%;
            font-size: 1.2rem;
        }
    }
    .btn-back{
        margin-top: 10px;
        margin-left:50%;
        background:var(--btn-pink);
        color:white;

    }

  
</style>