import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: {

        }
    },
    mutations: {

    },
    actions: {
        getList: function(state, val) {
            axios({
                method: 'post',
                url: 'https://api.mlwei.com/music/api/?key=523077333&id=' + encodeURIComponent(val) + '&type=so&cache=0',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function(res) {
                console.log(res)
            })
        }
    }
})

export default store