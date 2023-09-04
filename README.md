# 轮子 - 一个Vue UI组件
[![Build Status](https://app.travis-ci.com/hlr423/gulu.svg?branch=hlr)](https://app.travis-ci.com/hlr423/gulu)

## 介绍
   这是一个在学习Vue的过程中做的一个UI框架，希望对你有用。
   
## 开始使用

1.添加css样式
    使用框架前，请在css中开启border-box

```css
*,*::before,*::after{ box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式

你还需要设置默认颜色等变量（后续会改为 scss变量）
```css
  html {
    --button-height:32px;
    --font-size:1em;
    --button-bg:white;
    --button-active-bg: #e30076;
    --border-radius:6px;
    --color:#e30076;
    --color-hover:#666;
    --border-color: #666;
    --border-color-hover:#e30076;
  }
```
  IE 15 及以上浏览器都支持此样式

`` 

2.安装 hg-view
```
npm i --save hg-view
```

3.引入 hg-view
```
import {hButton} from "hg-view"
import "hg-view/dist/index.css"
components:{
  "h-button":hButton
}
```

4.引入 svg symbols (可自定义)
```
  <script type="module" src="//at.alicdn.com/t/c/font_3866991_h3mwe0iest.js"></script>
```
## 文档
## 提问
## 变更记录
## 联系方式
## 共享代码



#### 作者：wo

