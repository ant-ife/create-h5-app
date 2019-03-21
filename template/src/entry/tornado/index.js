import Vue from 'vue'
import App from 'views'
import router from 'router/tornado'
import store from 'store/tornado'
import Icon from 'components/Icon'
import 'styles'
import { setupLang, i18n } from 'utils/i18n'

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('assets/tornado/icon', false, /\.svg$/)
requireAll(req)

Vue.component('Icon', Icon)

setupLang('tornado').then(() => {
  new Vue({
    el: '#app',
    i18n,
    store,
    router,
    render: h => h(App),
  })
})
