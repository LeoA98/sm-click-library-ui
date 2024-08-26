import primarySelect from '~/components/selects/primary_select/primary_select.vue'
import simpleModal from "~/components/modals/simple_modal/simple_modal.vue"
import simpleCard from "~/components/cards/simple_card/simple_card.vue";
import instanceSelect from "~/components/selects/instance_select/index.vue"
import calendar from './components/calendar/calendar.vue';
import MFA from "./components/mfa/mfa.vue"

function install(Vue) {
    Vue.component('primarySelect', primarySelect)
    Vue.component('simpleModal', simpleModal)
    Vue.component('simpleCard', simpleCard)
    Vue.component('instanceSelect', instanceSelect)
    Vue.component('calendar', calendar)
    Vue.component('MFA', MFA)
}

export default {
    install,
    primarySelect,
    simpleModal,
    simpleCard,
    instanceSelect,
    calendar,
    MFA
}