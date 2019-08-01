import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLightbulb, faDraftingCompass, faPencilRuler, faHandsHelping, faTools, faSearchPlus, faQuoteLeft, faMapMarkedAlt, faMapMarker, faPhone, faEnvelope, faLongArrowAltLeft, faLongArrowAltRight, faArrowUp, faFileCode, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

Vue.use(BootstrapVue)
library.add(faFacebookF)
library.add(faLightbulb, faDraftingCompass, faPencilRuler, faHandsHelping, faTools, faSearchPlus, faQuoteLeft, faMapMarkedAlt,
  faMapMarker, faPhone, faEnvelope, faLongArrowAltLeft, faLongArrowAltRight, faArrowUp, faFileCode, faPhoneAlt, faMapMarkerAlt, faFacebookF, faLinkedinIn, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
