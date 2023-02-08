<!--
 * @Description:icon
 * @Author: hlr
 * @Date:2023-02-03 15:54
 * @LastEditors: hlr
 * @LastEditTime: 2023-02-03 15:54
-->

<template>
    <svg class="h-icon" v-if="name">
        <use :xlink:href="`#h-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "icon",
        props:['name']
    }
</script>

<style scoped lang="less">
    .h-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>