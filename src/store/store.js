import {createStore} from "vuex";


export const store = createStore({
    state:{
        test: 'test',
    },
    getters: {
        plus(state){
            return state.test+10;
        }
    },
    mutations:{
        SET_TEST(state, value){
            state.test = value;
        }

    },
    actions:{
        TIME({commit}, value){
            return setTimeout(()=>{
                commit('SET_TEST', value);
            }, 1000);
        }
    },
})