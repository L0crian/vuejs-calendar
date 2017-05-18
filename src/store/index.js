import Vuex from 'vuex';
import Vue from 'vue';

import moment from 'moment-timezone'
moment.tz.setDefault('UTC');

Vue.use(Vuex);

export default new Vuex.Store({
        state: {
            currentYear: 2017,
            currentMonth: 5,
            eventFormPosX: 0,
            eventFormPosY: 0,
            eventFormActive: false,
            eventFormDate: moment(),
            events: [
                {description: 'Music', date: moment('2017-05-05', 'YYYY-MM-DD')},
                {description: 'Music', date: moment()}
            ],
        },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push({description: payload.description, date: state.eventFormDate});

        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
})