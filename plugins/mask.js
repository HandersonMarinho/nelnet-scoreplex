//
// Mascaras em geral.
//
import Vue from 'vue';
import VueMask from 'v-mask';
import { VueMaskDirective } from 'v-mask'
Vue.use(VueMask);
Vue.directive('mask', VueMaskDirective);

//
// Mascara de currency.
//
import money from 'v-money'
Vue.use(money, {precision: 4})