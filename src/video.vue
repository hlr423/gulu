<template>
    <div :class="playerClass" :style="playerStyle" id="videoContainer" v-drag>
        <Icon name="close-circle" class="close-icon" id='icon' v-on:click="$emit('close')"></Icon>
        <video id="videoEle" ref="play"
               :src="src"
               :controls="controls"
               playsinline
               :loop="loop"
               :poster="poster"
               autoplay="autoplay"></video>
    </div>
</template>

<script>
    import Icon from "./icon"

    export default {
        name: 'video-player',
        props: {
            src: {
                type: String,
                default: ''
            },
            isPlayer: {
                type: Boolean,
                default: false
            },
            controls: {
                type: Boolean,
                default: true
            },
            loop: {
                type: Boolean,
                default: false
            },
            autoplay: {
                type: Boolean,
                default: true
            },
            poster: {
                type: String,
                default: ''
            },
            width: {
                type: String,
                default: '300px'
            },
            height: {
                type: String,
                default: '220px'
            },

        },
        components: {Icon},
        directives: {
            drag: {
                // 指令的定义
                inserted(el) {
                    el.onmousedown = function (ev) {
                        // 获取鼠标按下时的偏移量（鼠标位置 - 元素位置）
                        const disX = ev.clientX - el.offsetLeft
                        const disY = ev.clientY - el.offsetTop
                        document.onmousemove = function (ev) {
                            // 获取鼠标实时移动时，元素的位置（鼠标实时位置 - 偏移量）
                            const l = ev.clientX - disX
                            const t = ev.clientY - disY
                            const top = t < 0 ? 0 : t
                            const left = l < 0 ? 0 : l
                            // 实时设置元素位置
                            el.style.left = left + 'px'
                            el.style.top = top + 'px'
                        }
                        document.onmouseup = function () {
                            // 鼠标抬起时，销毁移动事件和鼠标抬起事件
                            document.onmousemove = null
                            document.onmouseup = null
                        }
                    }
                }
            }
        },
        mounted() {
            let {isPlayer}=this
            let el = document.getElementById("videoEle")
            let icon = document.getElementById("icon")
            let videoContainer = document.getElementById("videoContainer")
            let style=''
            el && el.addEventListener("click", this.mouseHandler, false);
            icon && icon.addEventListener("click", ()=>{
                isPlayer=!isPlayer
                setTimeout(function (e) {
                    if(isPlayer==false){
                        style="display:none"
                        videoContainer && videoContainer.setAttribute('style', style)
                    }
                },1000)
            });

        },
        methods: {
            mouseHandler(event) {
                let {isPlayer}=this
                if (isPlayer) {
                    // 阻止视频默认点击事件
                    event.preventDefault()
                }
            },
        },
        computed: {
            playerClass() {
                console.log('computed')
                let {isPlayer,width,height}=this
                let videoContainer = document.getElementById("videoContainer")
                let style=`width: ${width};height: ${height};display:block`
                let styles=`width: ${width};height: ${height};display:flex`
                let closeStyles=`display:none`
                isPlayer && videoContainer && videoContainer.setAttribute('style', style)
                isPlayer && videoContainer && videoContainer.setAttribute('style',styles)
                !isPlayer && videoContainer && videoContainer.setAttribute('style',closeStyles)
                return {'videoEle': true,open: isPlayer, close: !isPlayer}
            },
            playerStyle() {
                let {width, height} = this
                return `width: ${width};height: ${height}`
            }
        },
        watch: {
            isPlayer: (isOpen) => {
                let el = document.getElementById("videoEle")
                let videoContainer = document.getElementById("videoContainer")
                if (isOpen) {
                    el && el.load()
                    // 实时设置元素位置
                } else {
                    el && el.pause();
                }
            }
        },
    }
</script>
<style scoped lang="less">
    .videoEle {
        position: fixed;
        right: 0;
        bottom: 20px;
        border: 1px solid #cacdd2;
        fill: #000;
        filter: drop-shadow(4px 5px 8px rgba(0, 0, 0, 0.3));
        display: flex;
        justify-content: center;
        background-color: #1e1c23;
        cursor: move;
        z-index: 9999;
        opacity: 0; /* 初始状态为完全透明 */
        transform: translateY(9999px); /* 将元素向下平移 9999px */
        transition: opacity 0.4s ease, transform 0.4s ease; /* 过渡动画，持续时间为 0.5 秒 */
        z-index: 9999;

        .close-icon {
            position: absolute;
            top: 2px;
            right: 2px;
            font-size: 20px;
            color: #536274;
            z-index: 10000;
            cursor: pointer;
        }

        video {
            width: 100%;
            height: 100%;
            z-index: 9999;
        }
    }

    .open {
        opacity: 1 !important; /* 激活状态为完全不透明 */
        transform: translateY(0) !important; /* 平移归零，向上滑动元素 */
    }
    .close {
        opacity: 0 !important; /* 初始状态为完全透明 */
        transform: translateY(999px) !important; /* 将元素向下平移 100% */
    }
</style>