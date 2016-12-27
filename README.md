# VUWE
![LOGO](https://vuwe.github.io/vuwe/img/logo.png)

[在线预览](https://vuwe.github.io/vuwe/#/)

# 介绍
`VUWE`是一款基于微信`WeUI`所开发的，专用于`Vue2`的组件库。

它与`WeUI`完全解耦。用户通过自定义`WeUI`的样式文件，可以方便地对`VUWE`实现定制化。

[中文文档](https://vuwe.github.io/vuwe/doc.html#/)

# 使用
进入一个`Vue`工程项目，然后执行以下命令：
```
npm install vuwe --save
```
### 加载WeUI
在开始之前，需要在`index.html`内加载`WeUI`样式库：
```html
<link rel="stylesheet" href="/weui.min.css">
```

### 全局引入
进入工程入口js，写入下列语句：
```js
import Vue from 'vue'
import Vuwe from 'vuwe'

Vue.use(Vuwe)
```
此时`VUWE`已经被全局注册，可以在需要的地方直接使用`VUWE`组件标签。
> 组件列表看这里

### 局部引入
在需要引入`VUWE`组件的地方直接引入：
```js
import { VwButton } from 'vuwe'

export default {
  components: {
    VwButton
  }
}
```

# 运行
克隆项目、安装依赖
```
git clone https://github.com/vuwe/vuwe.git

cd vuwe && npm install
```

开发模式
```
npm run dev
```

生产模式
```
npm run build
```

示例模式（产出一个`index.html`文件，一个`app.js`文件）
```
npm run build-demo
```

# MIT