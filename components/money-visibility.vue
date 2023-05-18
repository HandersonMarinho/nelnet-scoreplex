<template>
    <div @click="changeValueView()" class="pointer text-secondary">
       <i v-if="showValue == true" class="fas fa-2x fa-eye"></i>
       <i v-if="showValue == false" class="fas fa-2x fa-eye-slash"></i>
    </div>
</template>

<script>
export default {    
    props: [],
    data(){
       return {
          showValue: false
       }
    },
    methods: {
       changeValueView(){
          if (this.showValue) {
             this.showValue = false;
             $('.money-value').addClass('blurry-text');
          }else{
             this.showValue = true;
             $('.money-value').removeClass('blurry-text');
          }
       }
    }
};
</script>
<style scoped>

</style>

