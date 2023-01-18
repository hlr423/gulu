<!--
 * @Description:button
 * @Author: hlr
 * @Date:2023-01-17 16:05
 * @LastEditors: hlr
 * @LastEditTime: 2023-01-17 16:05
-->

<template>
    <button class="h-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg class="icon" v-if="icon">
            <use :xlink:href="`#h-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
    export default {
        name:'h-button',
        props:['icon','iconPosition']
    }
</script>

<style  lang="less">
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
    }

</style>