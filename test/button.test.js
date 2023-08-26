const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    //BDD 行为驱动测试
    it('存在 button', () => {
        expect(Button).to.exist  // expect语法期待组件的存在
    })
    it('可以设置icon', ()=> {
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:"settings"
            }
        }).$mount()
        const useElements=vm.$el.querySelector('use')
        expect(useElements.getAttribute('xlink:href')).to.equal('#h-settings')
        vm.$destroy()
    });
    it('可以设置loading', ()=> {
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:"settings",
                loading:true
            }
        }).$mount()
        const useElements=vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#h-loading')
        vm.$destroy()
    });
    it('icon默认的order是1', ()=> {
        const div=document.createElement('div')
        document.body.appendChild(div)

        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:"settings",
            }
        }).$mount(div)
        const icon=vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.equal('1')
        vm.$el.remove()
        vm.$destroy()
    });
    it('设置iconPosition可以改变order', ()=> {
        const div=document.createElement('div')
        document.body.appendChild(div)

        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:"settings",
                iconPosition:"right",
            }
        }).$mount(div)
        const icon=vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.equal('2')
        vm.$el.remove()
        vm.$destroy()
    });
    it('点击 button触发click事件', () => {
        const Constructor = Vue.extend(Button) // 使用button
        const vm = new Constructor({
            propsData: {
                color: 'blue',
                icon:"settings",
            }
        }).$mount()
        const callback = sinon.fake(); // sinon记录一个调用
        vm.$on('click', callback) // 监听回调
        vm.$el.click() // click执行
        expect(callback).to.have.been.called // 期待这个事件被调用
    })
})