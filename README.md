# 一个入门的button轱辘 
## git clone 远程仓库地址 报错
```
unable to access 'https://github.com/hlr423/gulu.git/':
 LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443 
```
取消git全局代理，mac终端执行如下两条语句：
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

再执行 git clone 远程仓库地址  

克隆成功


## 创建仓库
```yarl
cd hlr/vue
mkdir gulu
cd gulu
touch README.md
vim README.md //轱辘 - 一个 Vue UI 组件
              //作者： wo
```
本地初始化git
```
    git init
    git add .
    git commit -m "init"
    git remote add origin https://github.com/hlr423/gulu.git
```
## 添加 LICENSE
- 仓库点击 Create new file
- 新建的文件名称处填写 LICENSE
- 右侧选择 license 模板
- 选择 最宽松的 MIT
- 点绿色按钮 创建 license
- 连续点绿色按钮 merge license 到仓库
#
回到本地`npm init`初始化项目，本地与远程代码同步
```yaml
git pull
ctrl + z //退出
git add commit push...

//添加 .gitignore
node-modules/
.idea/

//push的时候发现还有 .idea
git rm -r --cached .
git add .
git commit -m 'update .gitignore'

push 成功 
```
## 安装vue和打包工具parcel
Parcel 内置了一个当你改变文件时能够自动重新构建应用的开发服务器，
而且为了实现快速开发，该开发服务器支持热模块替换

官链：https://www.parceljs.cn/
```yaml
npm install vue
npm install parcel-bundler -D
```
组件如果一个包是给 -D 是给开发者用的，developer，不加就是给用户使用的
` npm install -D parcel-bundler `
包下载失败

## 查看下载包的来源库
```yaml
1、切换
npm config set registry http://registry.npm.taobao.org/ 
2、查看
npm config ls -1

; "user" config from /Users/hlr/.npmrc
registry = "http://registry.npm.taobao.org/" 
; "cli" config from command line options
1 = true 
; Run `npm config ls -l` to show all defaults.

```
## 子组件
单文件组件 就需要三个东西
template 、script 、style
vue 有语法糖
vue.component("",{xxx})
css
:root 表示根组件 其实就会html 如果发现兼容性问题 你改成 html就行了 ie8部分支持

```
export default{xxx}
style less 就

<style lang="less">
    ...
</style>
```
less 不需要重复 一个选择器
放到第一个{}里 {} 中用& 表示当前的选择器
```
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
```

## 入口文件
- 需要 import 引入进来 Vue 和Button
- 申明下 Vue.component('g-button',Button)
- 打包工具
- ./node_modules/.bin/parcel --no-cache
- ./node_modules/.bin/parcel`想短点?`npx parcel --no-cache
- 为了不加参数 删掉cache`rm -rf .cache`
- 版本控制`npm i git-open git open`

## 配置package.json
```yaml
Vue 文档有相关介绍 需要修改 package.json

"alias": {
    "vue": "./node_modules/vue/dist/vue.common.js"
  }
```
命名控制台执行 npx parcel报错
```
hlr@hlrdeMacBook-Pro gulu % parcel
Server running at http://localhost:1234 
🚨  No entries found.
    at Bundler.bundle (/usr/local/lib/node_modules/parcel-bundler/src/Bundler.js:275:17)
    at async Bundler.serve (/usr/local/lib/node_modules/parcel-bundler/src/Bundler.js:842:7)
    at async Command.bundle (/usr/local/lib/node_modules/parcel-bundler/src/cli.js:241:20)

执行  npx parcel --no-cache
Server running at http://localhost:1234 
🚨  No entries found.
    at Bundler.bundle (/Users/hlr/WebstormProjects/gulu-dome/gulu/node_modules/parcel-bundler/src/Bundler.js:275:17)
    at async Bundler.serve (/Users/hlr/WebstormProjects/gulu-dome/gulu/node_modules/parcel-bundler/src/Bundler.js:842:7)
    at async Command.bundle (/Users/hlr/WebstormProjects/gulu-dome/gulu/node_modules/parcel-bundler/src/cli.js:241:20)
```
这时再运行 npm parcel --no-cache 清除缓存
```yaml
npm WARN invalid config cache=false set in command line options
npm WARN invalid config Must be valid filesystem path
Unknown command: "parcel"
```



控制台重新运行parcel index.html 或 npm run dev（第二种需要在package.json中配置一下）
可查parcel官方文档
```yaml
  "scripts": {
    "dev": "parcel <your entry file>",
    "build": "parcel build <your entry file>"
  }

// 我的入口文件是index.html

  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  }
```
成功～～～～～～～～～！！！
#
### 添加iconfont到框架里
- 添加心仪到图标到购物车
- 将购物车到图标添加到项目
- Unicode 、Font class 、Symbol
- 生成图标文件链接
- 到本地项目中引入

### 框架中使用iconfont图标
```yaml
<h-button icon="jijinzhuanhuan" icon-position="right">基金转换</h-button>
<h-button icon="shezhi" icon-position="right">设置</h-button>
<h-button icon="">提交</h-button>
```
使用css 交换元素位置

```less
   .icon-right{
      >.icon{order: 2;margin-left: 5px;margin-right: 0}
      >.content{order: 1;}
      }
```
```yaml
<button class="h-button" :class="{[`icon-${iconPosition}`]:true}">
<svg class="icon" v-if="icon">
    <use :xlink:href="`#h-${icon}`"></use>
</svg>
<div class="content">
    <slot></slot>
</div>

</button>
```
`:class="{[`icon-${iconPosition}`]:true}"`动态绑定class
 
 ![button logo](src/assate/WechatIMG19193.png)
 
 ![button logo](src/assate/WechatIMG19194.png)
 
 ![button logo](src/assate/WechatIMG19195.png)

### 入门的button轱辘构建成功～～～～～～
#### 作者：wo