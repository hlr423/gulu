<template>
    <div class="wrapper" :class="{error}">
        <input :value="value"
               :disabled="disabled"
               :readonly="readonly"
               :placeholder="placeholder"
               type="text"
               @change="$emit('change',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
               @input="$emit('input',$event.target.value)"
        >
        <template v-if="error">
            <Icon name="zhushi" class="icon-error"></Icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from "./icon";
    export default {
        name: "input",
        components: {Icon},
        props:{
            value:{
                type:String
            },
            placeholder:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#F1453D;
    $padding:10px;
    .wrapper{
        width: 100%;
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        flex-wrap: wrap;
        padding:$padding 0 ;
        >*:not(:last-child and :first-child){
            margin-right: .5em;
        }
        >input{
            height: $height;
            width: 100%;
            border:1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color:$border-color-hover ;
            }
            &:focus{
                box-shadow:inset 0 .2px 2px $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly]{
                border-color: #ccc;
                color: #bbb;
                background-color: #eee;
                cursor: not-allowed;
            }
            &::placeholder{
                color: #c9c5c5;
            }
        }
        &.error{
            >input{
                border-color: $red;
                &:hover{
                    border-color:$red;
                }
                &:focus{
                    box-shadow:inset 0 .2px 2px $red;
                    outline: none;
                }
            }
            .icon-error{
                fill: $red;
            }
            .errorMessage{
                color: $red;
            }
        }
    }

</style>