import App from './App.vue'
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';

Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');