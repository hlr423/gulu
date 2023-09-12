<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "h-row",
        props:{
            gutter:{
                type:[Number,String]
            }
        },
        computed:{
            rowStyle(){
                return{
                    marginLeft:this.gutter && -this.gutter/2+'px',
                    marginRight:this.gutter && -this.gutter/2+'px'
                }
            }
        },
        mounted() {
            this.$children.forEach(vm=>{
                vm.gutter=this.gutter
            })
        }
    }
//
</script>

<style scoped lang="scss">
.row{
    display: flex;
    /*background-color: #bbbbbb;*/
    overflow: hidden;
}
</style>