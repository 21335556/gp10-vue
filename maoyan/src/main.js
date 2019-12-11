import Vue from 'vue'
import App from './App.vue'

import Component from 'vue-class-component'

import router from './router/'
import store from './store/'

import './assets/styles/reset.styl'
import './assets/styles/movie-item.css'
import 'animate.css'

import './filters/img-replace'
import './mixins/scroll'
// import './mixins/reset-state'

Vue.config.productionTip = false

@Component({
  template: '<div @click="handleClick">{{title}}</div>'
})
class MyVue extends Vue {
  title = 'hello'

  handleClick() {
    this.title = 'world'
  }
}

new Vue({
  el: '#app',
  render() {
    return (
      <MyVue></MyVue>
    )
  }
})

// new Vue({
//   store,
//   router,
//   render: h => h(App)
// }).$mount('#app')

// new Vue({
//   store,
//   router,

//   mounted() {
//     console.log('mounted');
//   },

//   beforeMount() {
//     console.log('beforeMount');
//   },

//   data: {
//     title: 'hello'
//   },

//   methods: {
//     clickHandler() {
//       this.title = 'world'
//     }
//   },

//   render(h) {
//     console.log('render');
//     return (
//       <div>hello world</div>
//     )
//   },

//   updated() {
//     console.log('updated');
//   },
// }).$mount('#app')