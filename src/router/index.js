import Vue from 'vue'
import VueRouter from 'vue-router'
import Totem from '../components/Totem.vue';
import Device from '../components/Device.vue';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: "Totem",
            component: Totem,
        },
        {
            path: '/device',
            name: "device",
            component: Device,
        }
    ]
})
