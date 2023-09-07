/**
 * @Description:app
 * @Author: hlr
 * @Date:2023-01-17 16:04
 * @LastEditors: hlr
 * @LastEditTime: 2023-01-17 16:04
 */

import Vue from "vue"
import Button from "./button.vue"
import ButtonGroup from "./button-group.vue"
import Icon from "./icon.vue"
import Input from "./Input.vue"
import Video from "./video.vue"
import chai from 'chai'
import spies from 'chai-spies'
Vue.component('h-button',Button)
Vue.component('h-button-group',ButtonGroup)
Vue.component('h-icon',Icon)
Vue.component('h-input',Input)
Vue.component('h-video',Video)
// import './svg'
chai.use(spies)
new Vue({
    el: "#app",
    data:{
        loading1:false,
        message:'',
        isPlayer:true
    },
    created(){
        setTimeout( ()=> {
            let event = new Event('change')
            let inputElement =this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
        },2000)
    },
    methods:{
        inputChange(e){
            console.log(e)
        },
        closeVideo(){
            console.log('----')
            this.isPlayer=false
        }
    }
})



const expect = chai.expect
try{
    //单元测试
    {
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'shezhi'
            }
        })
        vm.$mount()
        let useElement=vm.$el.querySelector('use')
        let href=useElement.getAttribute('xlink:href')
        expect(href).to.equal('#h-shezhi')
        vm.$el.remove()
        vm.$destroy()

    }
    {
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'shezhi',
                loading: true
            }
        })
        vm.$mount()
        let useElement=vm.$el.querySelector('use')
        let href=useElement.getAttribute('xlink:href')
        expect(href).to.equal('#h-loading')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div=document.createElement('div')
        document.body.appendChild(div)
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'shezhi',
            }
        })
        vm.$mount(div)
        let svg=vm.$el.querySelector('svg')
        let order=window.getComputedStyle(svg).order
        expect(order).to.equal('1')
        vm.$el.remove()
        vm.$destroy()
    }
//使用chai.spies监听函数---mock 做单元测试（为成功）
    {
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'shezhi',
                iconPosition:'right'
            }
        })
        vm.$mount()
        // let spy=chai.should(function () {
        //
        // })
        // vm.$on('click',spy)
        // let button=vm.$el
        // console.log(button)
        // button.click()
        // expect(spy).to.have.been.called()
    }
}catch (error) {
    window.error=[error]
}finally {
    window.errors && window.errors.forEach((error)=>{
        console.error(error.message)
    })
}

