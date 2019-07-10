import Vue from 'vue'
import Router from 'vue-router'
import Audio from '@/components/AudioPlayer'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'audio',
        component: Audio
    }]
})