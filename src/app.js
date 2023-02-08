/**
 * @Description:app
 * @Author: hlr
 * @Date:2023-01-17 16:04
 * @LastEditors: hlr
 * @LastEditTime: 2023-01-17 16:04
 */

import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon.vue"
Vue.component('h-button',Button)
Vue.component('h-icon',Icon)

new Vue({
    el: "#app",
    data:{
        loading1:false
    }
})
