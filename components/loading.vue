<template>
    <div class="w-100 text-center">
        <div class="spinner"></div>
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'loading',
    props: ['message'],
};
</script>
<style scoped>

.spinner {
   position: fixed;
   left: 50%;
   top: 40%;
   height:60px;
   width:60px;
   margin:0px auto;
   -webkit-animation: rotation .6s infinite linear;
   -moz-animation: rotation .6s infinite linear;
   -o-animation: rotation .6s infinite linear;
   animation: rotation .6s infinite linear;
   border-left:6px solid rgba(239,129,87);
   border-right:6px solid  rgba(239,129,87);
   border-bottom:6px solid rgba(239,129,87);
   border-top:6px solid rgb(243, 193, 174);
   border-radius:100%;
}

@-webkit-keyframes rotation {
   from {-webkit-transform: rotate(0deg);}
   to {-webkit-transform: rotate(359deg);}
}
@-moz-keyframes rotation {
   from {-moz-transform: rotate(0deg);}
   to {-moz-transform: rotate(359deg);}
}
@-o-keyframes rotation {
   from {-o-transform: rotate(0deg);}
   to {-o-transform: rotate(359deg);}
}
@keyframes rotation {
   from {transform: rotate(0deg);}
   to {transform: rotate(359deg);}
}

</style>

