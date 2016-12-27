# 介绍
`VUWE`是一款基于微信`WeUI`所开发的，专用于`Vue2`的组件库。

它与`WeUI`完全解耦。用户通过自定义`WeUI`的样式文件，可以方便地对`VUWE`实现定制化。

# 安装
进入一个`Vue`工程项目，然后执行以下命令：
```
npm install vuwe --save
```
## 加载WeUI
在开始之前，需要在`index.html`内加载`WeUI`样式库：
```html
<link rel="stylesheet" href="/weui.min.css">
```

## 全局引入
进入工程入口js，写入下列语句：
```js
import Vue from 'vue'
import Vuwe from 'vuwe'

Vue.use(Vuwe)
```
此时`VUWE`已经被全局注册，可以在需要的地方直接使用`VUWE`组件标签。
> 组件列表看这里

## 局部引入
在需要引入`VUWE`组件的地方直接引入：
```js
import { VwButton } from 'vuwe'

export default {
  components: {
    VwButton
  }
}
```

# 参与开发
`VUWE`是一个基于MIT协议的开源项目，欢迎感兴趣的朋友一起参与。在参与开发之前，请遵循下列几条原则：
## 提出issue
在提出issue之前，务必先搜索是否存在类似问题，可以在该问题下继续讨论。

issue标题请带上标签，如bug则添加`[bug]`，需求则添加`[feature request]`等，以便开发者及时处理。

## 代码运行
项目目录结构如下：
```
  |__ src
    |__ App.vue
    |__ components
    |__ main.js
    |__ mixins
    |__ router.js
    |__ style
    |__ views
  |__ static
  ...

```
其中`VUWE`的所有组件均放置在`./src/components`目录下。`./src/views`目录为展示页面，运行`npm run dev`所展示的页面均来自该目录。

运行代码：
```js
npm install

npm run dev
```

## 开发规范
### 语法
- `VUWE`遵循`eslint-standar`规范，不符合规范的代码不允许运行/提交。
- 请使用`ES6`进行开发。
- 模块的引入与导出均使用`ES6`的方式。

### 组件
- 组件的开发应当尽量降低对第三方包的依赖，若有，统一使用npm/yarn添加第三方库。
- 组件的命名应当简洁，使用驼峰命名法，子组件名应在父组件名的基础上添加`-item`后缀。
- 组件class应以`vw-`开头，遵循`BEM`命名法。
- 通过`props`传递的属性，图片统一为`img`，链接统一为`link`，内容统一为`content`（特殊情况除外）。
- 组建内部应以`$emit()`返回事件。
- 统一使用`less`作为样式预处理器。
- 组件统一放置在`./src/components`目录下，每个类型的组件应当新建一个文件夹，文件夹命名以下划线`_`连接，组件命名以中划线`-`连接，如`search_bar/search-bar.vue`。最后通过`components/index.js`入口文件把组件暴露出去。
- 待续……

### issues
- 提出issue之前，请务必搜索是否已有同类型问题，若有，可在该问题下进行讨论。
- 在issue的标题中请带上标签，如bug为`[bug]`，优化为`[optimize]`，需求为`[feature request]`等，以方便开发者进行处理。

### Pull request
- 提出每一个PR之前请进行测试。
- PR的文档应当详细。

# UI组件
## 按钮
```
<vwButton>Primary</vwButton>
```
<iframe src="http://localhost:8080/#/button" frameborder="0" style="width:100%;height:400px;"></iframe>

