import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        ipResponse: ''
    },
    getters: {
        getIpData(){
            return store.state.ipResponse
        }
    },
    mutations: {
        getIpData(state, ipData){
            store.state.ipResponse = ipData
        }
    },
    actions: {
        getIpData(context, ip) {
            
            fetch('http://ip-api.com/batch', {
                method: "POST",
                body: JSON.stringify(ip)
            }).then(response => response.json()).then(data=>{
                store.commit("getIpData", data)
            });
        }
    }
})