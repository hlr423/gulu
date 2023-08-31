<template>
   <div class="h-button-group">
      <slot></slot>
   </div>
</template>
<script>
   export default {
      mounted() {
         //检查h-button-group下的元素是不是button元素
         for (let node of this.$el.children){
            let name=node.nodeName.toLowerCase()
            if(name !=='button'){
               console.warn(`h-button-group的子元素应该全是button元素,你写的${name}`)
            }
         }

      }
   }
</script>
<style lang="less">
   .h-button-group{
      display: inline-flex;
      vertical-align: middle;
      >.h-button{
         border-radius: 0;
         &:not(:first-child){
            /*border-left: none;*/
            margin-left: -1px;
         }
         &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
         }
         &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
         }
         &:hover{
            position: relative;
            z-index: 1;
         }
      }
   }
</style>