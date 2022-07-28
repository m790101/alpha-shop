<template>
<div>
    <div class="main-title title-header">結帳</div>
    <div class="section-wrapper">
        <section class="left-section">
            <Stepper/>
            <CheckedoutForm />
        </section>
        <section class="right-section">

        </section>
            <div class="btn-section d-flex justify-content-between">
                
            </div>
    </div>
</div>
</template>

<script>
import Stepper from './../components/Stepper.vue'
import CheckedoutForm from './../components/CheckedoutForm.vue'
export default {
    components: {
        Stepper,
        CheckedoutForm
    }
}
</script>


<style scoped>

.main-title {
    font-size: 2.7rem;
  }
.section-wrapper {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    }
.section-wrapper .left-section {
      grid-column: 1/7;
    }
.section-wrapper .right-section {
      grid-column: 8/13;
    }
.section-wrapper .btn-section {
      grid-column: 1/7;
    }
.btn-next {
        width: 174px;
      }
.btn-pre {
        display:initial;
        opacity: 0;
        pointer-events: none;
      }
.btn-pre.active {
          opacity: 1;
          pointer-events: initial;
        }

</style>