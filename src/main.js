/* eslint-disable quotes */
import Vue from 'vue';
// import data from './data';
import sms from "./exampleone";
import printMessage from "./exampleFunc";
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(sms.sms);
printMessage();
