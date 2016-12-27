### 列表
列表由一系列被包裹在`<Cell>`标签内的`<ListItem>`组成。

<iframe src="https://vuwe.github.io/vuwe/#/list" frameborder="0" style="width:100%;height:450px;"></iframe>

```html
  <CellTips>说明的列表项</CellTips>
  <Cell>
    <ListItem title="无说明"></ListItem>
    <ListItem title="有说明" desc="说明文字"></ListItem>
    <ListItem title="可滑动" desc="往左滑试试">
      <button>Set to top</button>
      <button>Delete</button>
    </ListItem>
  </Cell>
  <CellTips>链接的列表项</CellTips>
  <Cell>
    <ListItem title="带图片" link="list" img="https://imgly.net/img/2gj.jpg"></ListItem>
    <ListItem title="带图标" link="list" icon="fa fa-comment"></ListItem>
    <ListItem title="不带图标" link="list" desc="说明文字"></ListItem>
    <ListItem title="可滑动" link="list" desc="往左滑试试">
      <button>Set to top</button>
      <button>Delete</button>
    </ListItem>
  </Cell>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| title | `String` | 列表标题 |
| link | `String` | 跳转链接 |
| img | `String` | 图片地址 |
| desc | `String` | 描述文字 |
| icon | `String` | icon font属性名（需提前加载icon font库） |

> 左滑展示按钮：如果在标签内添加`<button>`，则列表元素会自动具备左滑功能。