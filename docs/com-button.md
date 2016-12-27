# UI组件
### 按钮
按钮组件可直接通过添加关键字来配置颜色、大小、是否透明。

<iframe src="https://vuwe.github.io/vuwe/#/button" frameborder="0" style="width:100%;height:450px;"></iframe>

- #### 示例代码
```html
<vwButton primary>Primary</vwButton>
<vwButton primary disabled>Primary</vwButton>
<vwButton warn>Warn</vwButton>
<vwButton origin>Default</vwButton>
<vwButton plain>Plain-Default</vwButton>
<vwButton mini primary>Mini</vwButton>
<vwButton mini origin>Mini</vwButton>
<vwButton mini plain-primary>Mini</vwButton>
<vwButton mini plain>Mini</vwButton>
<vwButton mini warn>Mini</vwButton>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| 颜色 | primary, warn, origin, plain | 绿色，红色，白色，透明 |
| 大小 | mini | 小号按钮 |
| 不可用 | disabled | 禁止使用 |