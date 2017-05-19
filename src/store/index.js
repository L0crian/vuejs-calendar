import Vuex from 'vuex';
import Vue from 'vue';

import moment from 'moment-timezone'
moment.tz.setDefault('UTC');

import axios from 'axios';

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
              state.events.push(payload);
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    },
    actions: {
          addEvent(context, payload) {
              return new Promise((resolve, reject) => {
                  let event = {
                      description: payload.description,
                      date: context.state.eventFormDate
                  };
                  axios.post('/add_event', event).then(responce => {
                      if(responce.status === 200){
                          context.commit('addEvent', event);
                          resolve();
                      } else {
                          reject();
                      }
                  });
              });
          }
    }
})