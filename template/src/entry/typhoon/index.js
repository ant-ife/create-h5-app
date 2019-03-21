import Vue from 'vue'
import App from 'views'
import router from 'router/typhoon'
import store from 'store/typhoon'
import Icon from 'components/Icon'
import 'styles'
import { setupLang, i18n } from 'utils/i18n'

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('assets/typhoon/icon', false, /\.svg$/)
requireAll(req)

Vue.component('Icon', Icon)

setupLang('typhoon').then(() => {
  new Vue({
    el: '#app',
    i18n,
    store,
    router,
    render: h => h(App),
  })
})
