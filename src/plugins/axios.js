import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://projetovue-cfa09.firebaseio.com/'

Vue.use({
    install(vue){
        Vue.prototype.$http = axios
    }
})