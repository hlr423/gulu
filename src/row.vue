<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "h-row",
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type:String
            }
        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {
                    marginLeft: -gutter / 2 + 'px',
                    marginRight: -gutter / 2 + 'px'
                }
            },
            rowClass() {
                let {align} = this
                return align && `align-${align}`
            }
        },
        mounted() {
            this.$children.forEach(vm => {
                vm.gutter = this.gutter
            })
        }
    }
    //
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        /*background-color: #bbbbbb;*/
        overflow: hidden;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content: center;
        }
        &.align-right{
            justify-content: flex-end;
        }
    }
</style>