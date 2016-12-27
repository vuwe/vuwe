### 面板
面板主要用于内容集合的展示。

<iframe src="https://vuwe.github.io/vuwe/#/panel" frameborder="0" style="width:100%;height:450px;"></iframe>

```html
<Panel :link-obj="linkObjs" title="Panel 1" more-info="show more" more-link="#"></Panel>
<Panel title-only :link-obj="linkObjs" title="Panel 1" more-info="show more" more-link="#"></Panel>
```

```js
data () {
  linkObjs: [
    {
      link: '#title-1',
      title: 'Title 1',
      desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      info: {
        source: 'baidu.com',
        time: '2016-11-11',
        extra: '抄的'
      }
    },
    {
      link: '#title-2',
      title: 'Title 2',
      desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      img: 'https://imgly.net/img/2gj.jpg'
    }
  ]
}
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| title | `String` | 面板标题 |
| more-link | `String` | “更多”跳转链接 |
| more-info | `String` | “更多”描述 |
| title-only | - | 若写入，面板则仅展示标题（无描述） |
| link-obj | `Object` | 文章内容对象，具体可参考上述代码例子 |
