<!--
 * @Description:button
 * @Author: hlr
 * @Date:2023-01-17 16:05
 * @LastEditors: hlr
 * @LastEditTime: 2023-01-17 16:05
-->

<template>
    <button id="h-button" class="h-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <h-icon v-if="icon && !loading" class="icon"  :name="icon"></h-icon>
        <h-icon  v-if="loading" class="icon loading"  name="loading"></h-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>

    export default {
        name:'h-button',
        // props:['icon','iconPosition'],
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default: false
            },
            disable:{
                type:Boolean,
                default: false
            },
            iconPosition:{
                type: String,
                default:'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                }

            }
        },
        watch:{
            loading(va){
                console.log(va,this.loading)
                document.getElementById('h-button').disabled=this.loading

            }
        }
    }
</script>

<style  lang="less">
    @keyframes loadSpin {
        0% {transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .h-button{
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 0.5em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        color: var(--color);
        vertical-align: middle;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        &:hover{
            border-color: var(--border-color-hover);
            color: var(--color-hover);
        }
        &:active{background-color: var(--button-active-bg);color: var(--button-bg);}
        &:focus{outline: none;}
        >.content{order: 2;}
        >.icon{order: 1;margin-right: 5px;margin-left: 0}
        &.icon-right{
            >.icon{order: 2;margin-left: 5px;margin-right: 0}
            >.content{order: 1;}
        }
        .loading{
            fill: #87c9cb;
            animation: loadSpin 1s infinite linear;
        }
    }


</style>