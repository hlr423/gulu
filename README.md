#h-button 按钮

 ![button logo](src/assate/WechatIMG19193.png)
 
 ![button logo](src/assate/WechatIMG19194.png)
 
 ![button logo](src/assate/WechatIMG19195.png)
 
## 使用说明
目前由于处于初级，能力原因，需要手动配置全局样式以及按钮图标

index.html文件
```html
<style>
  :root{
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
</style>
// 图标
<script type="module" src="//at.alicdn.com/t/c/font_3866991_h3mwe0iest.js"></script>
```
在需要使用的页面引入
 ```js
import {hButton} from "hg-view"
import "hg-view/dist/index.css"
components:{
  "h-button":hButton
}
```
#### 作者：wo

