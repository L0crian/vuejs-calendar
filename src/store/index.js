/**
 * Created by Полина on 18.05.2017.
 */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
        state: {
            currentYear: 2017,
            currentMonth: 5
        },
    mutations: {
            setCurrentMonth(state, payload) {
                state.currentMonth = payload;
            },
            setCurrentYear(state, payload) {
                state.currentYear = payload;
        }
    }
})