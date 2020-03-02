import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash';
import messagesData from './data'
import moment from "moment";

Vue.use(Vuex);

const state = {
    contacts: [],
    managers: [{id:1,name:'Manager'}],
    conversations: [
        {id:1}
    ],
    messages: [],
    currentChatId: 1,
};

const getters = {
    getCurrentChatMessages: state => {
        return _.orderBy(_.filter(state.messages, {conversation_id: state.currentChatId}), ['date'])
    },
};

const actions = {

    loadHistory(context, data){
        let message = _.clone(messagesData[0]);
        for (let i = 0; i < 10; i += 1){
            message.id = 1010 + i;
            message.date = 100000 + i;
            message.text = 'HISTORY MESSAGE';

        }
        console.log('data.offset', data.offset);
        console.log('data.limit', data.limit);
    },

    loadMessage(context, id) {
        let message = _.clone(messagesData[0]);
        message.id=id;
        message.date = moment().format('X');
        message.text = 'NEW MESSAGE';
        context.commit('addMessage', message);
    },

    loadMessages(context) {
        context.commit('setMessages', []);
    },

    setMessages(context) {
        context.commit('setMessages', messagesData);
    },
};

const mutations = {

    addHistoryMessages(state, data) {
        console.log(state, data);
    },

    setMessages(state, data) {
        state.messages = data;
        let conversations = state.conversations;
        _.forEach(conversations, item => {
            let message = _.last(_.orderBy(_.filter(state.messages, {conversation_id: item.id}), ['date']));
            if (undefined !== message) {
                item.message = message.text
            }
        });
        state.conversations = conversations;
    },

};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
