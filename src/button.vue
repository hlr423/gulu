<!--
 * @Description:button
 * @Author: hlr
 * @Date:2023-01-17 16:05
 * @LastEditors: hlr
 * @LastEditTime: 2023-01-17 16:05
-->

<template>
    <button class="h-button">hlr</button>
</template>

<script>
    export default {}
</script>

<style  lang="less">
    .h-button{
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        color: var(--color);
        &:hover{
            border-color: var(--border-color-hover);
            color: var(--color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
            color: var(--button-bg);
        }
        &:focus{
            outline: none;
        }
    }

</style>