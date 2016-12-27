### 表单预览

<iframe src="https://vuwe.github.io/vuwe/#/preview" frameborder="0" style="width:100%;height:250px;"></iframe>

```html
  <Preview :preview-obj='previewObj'></Preview>
```

```js
data () {
  previewObj: {
    label: 'Cost',
    value: '$280.00',
    items: [
      {
        label: 'Apple',
        value: '$140.00'
      },
      {
        label: 'Pen',
        value: '$140.00'
      }
    ],
    assistCbText: 'Ugh',
    cbText: 'PPAP',
    assistCb () {
      console.log('Ugh!')
    },
    cb () {
      console.log('PPAP!')
    }
  }
}
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| preview-obj | `Object` | preview内容对象，具体可参考上述代码例子 |