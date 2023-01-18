/**
 * @Description:app
 * @Author: hlr
 * @Date:2023-01-17 16:04
 * @LastEditors: hlr
 * @LastEditTime: 2023-01-17 16:04
 */

import Vue from "vue"
import Button from "./button.vue"
Vue.component('h-button',Button)
new Vue({
    el: "#app",
})