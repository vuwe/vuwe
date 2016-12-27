### 表单元素
表单元素主要由输入框、单选项、复选项、选择器等组件构成，通过添加不同的属性以满足多种样式及功能需求。

<iframe id="radio-frame" src="https://vuwe.github.io/vuwe/#/form" frameborder="0" style="width:100%;height:600px;"></iframe>

- #### 单选项
```html
  <CellTips>单选项</CellTips>
  <Cell radio>
    <radio forItem='1r' name="radio">单选1</radio>
    <radio forItem='2r' name="radio">单选2</radio>
    <radio forItem='3r' name="radio">单选3</radio>
    <radio forItem='4r' name="radio" disabled>单选4</radio>
  </Cell>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| forItem | 自定义 | 等价于`<input type="radio">`的`for`属性 |
| name | 自定义 | 等价于`<input type="radio">`的`name`属性 |
| 不可用 | disabled | 禁止使用 |

> 注意：该组件需要放置在`<Cell radio>`组件内部。

- #### 复选项
```html
  <CellTips>复选项</CellTips>
  <Cell checkbox>
    <checkbox forItem='1c' name="checkbox">复选1</checkbox>
    <checkbox forItem='2c' name="checkbox">复选2</checkbox>
    <checkbox forItem='3c' name="checkbox">复选3</checkbox>
    <checkbox forItem='4c' name="checkbox" disabled>复选4</checkbox>
  </Cell>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| forItem | 自定义 | 等价于`<input type="checkbox">`的`for`属性 |
| name | 自定义 | 等价于`<input type="checkbox">`的`name`属性 |
| 不可用 | disabled | 禁止使用 |

> 注意：该组件需要放置在`<Cell checkbox>`组件内部。

- #### 输入框
```html
  <CellTips>输入框</CellTips>
  <Cell form>
    <VwInput label="QQ" input-config='{
      "type": "tel",
      "placeholder": "输入QQ号码"
    }'></VwInput>
    <VwInput label="手机号" input-config='{
      "type": "tel",
      "placeholder": "输入手机号码"
    }' addon>
      <addonBtn slot="addon">获取验证码</addonBtn>
    </VwInput>
    <VwInput label="验证码" input-config='{
      "type": "tel",
      "placeholder": "输入右侧验证码"
    }' addon>
      <addonImg slot="addon" img="https://imgly.net/img/2gj.jpg"></addonImg>
    </VwInput>
    <VwInput label="日期" input-config='{
      "type": "date"
    }'></VwInput>
    <VwInput label="时间" input-config='{
      "type": "datetime-local"
    }'></VwInput>
    <VwInput warn label="微信号" input-config='{
      "type": "text",
      "placeholder": "输入微信号"
    }'></VwInput>
    <VwInput sucess label="身份证号" input-config='{
      "type": "text",
      "placeholder": "输入身份证号"
    }'></VwInput>
  </Cell>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| label | 自定义 `String` | 输入框说明文字 |
| input-config | 自定义 `Object` | 输入框配置项 |
| warn | - | 出现`警告`标识 |
| success | - | 出现`成功`标识 |
| addon | - | 若需插入追加`<slot>`则添加该属性 |
| is-switch | - | 若为开关则添加该属性 |
| selector-before | - | 前置选择。若为选择框则添加该属性 |
| selector | - | 选择。若为选择框则添加该属性 |
| selector-after | - | 后置选择。若为选择框则添加该属性 |

```js
input-config='{
  "type": "tel", // 等价于`<input>`标签的`type`属性
  "placeholder": "手机号码" // 等价于`<input>`标签的`placeholder`属性
}'
```

> 注意：该组件需要放置在`<Cell form>`组件内部。

- #### 输入框追加
```html
  <VwInput addon>
    <addonBtn slot="addon">获取验证码</addonBtn>
  </VwInput>
  <VwInput addon>
    <addonImg slot="addon" img="xxx.jpg"></addonImg>
  </VwInput>
```

> | 标签名 | 参数 | 备注 |
| --- | --- | --- |
| `<addonBtn>` | - | 追加按钮 |
| `<addonImg>` | img `String` | 追加图片 |

> 注意：该组件需要放置在`<VwInput>`组件内部，且添加`slot="addon"`属性。

- #### 开关
```html
  <CellTips>开关</CellTips>
  <Cell form>
    <VwInput label="默认" is-switch>
      <vwSwitch slot="switch" on-change="doSomething"></vwSwitch>
    </VwInput>
    <VwInput label="警告" is-switch>
      <vwSwitch slot="switch" warn></vwSwitch>
    </VwInput>
  </Cell>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| warn | - | 若添加该属性则显示为红色 |

> 事件：切换选项时会触发`on-change`事件。

> 注意：该组件可独立使用，若放置在`<VwInput>`内部，需要添加`slot="switch"`属性。

- #### 文本域
```html
  <CellTips>文本域</CellTips>
  <Cell form>
    <VwTextarea addon="0/200"></VwTextarea>
  </Cell>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| addon | 自定义 `String` | 备注信息 |

> 注意：该组件需要放置在`<Cell form>`组件内部。

- #### 选择器
```html
  <CellTips>选择-前置</CellTips>
  <Cell form>
    <VwInput select-before>
      <VwSelect slot="selector-before" name='select1' value='+87'>
        <option value="+86">+86</option>
        <option value="+80">+80</option>
        <option value="+84">+84</option>
        <option value="+87">+87</option>
      </VwSelect>
    </VwInput>
  </Cell>

  <CellTips>选择-默认</CellTips>
  <Cell form>
    <VwInput select>
      <VwSelect slot='selector' name="select2" value='QQ号'>
        <option value="微信号">微信号</option>
        <option value="QQ号">QQ号</option>
        <option value="Email">Email</option>
      </VwSelect>
    </VwInput>
  </Cell>

  <CellTips>选择-后置</CellTips>
  <Cell form>
    <VwInput label='国家地区' select-after>
      <VwSelect slot="selector-after" name="select3" value='中国'>
        <option value="中国">中国</option>
        <option value="美国">美国</option>
        <option value="英国">英国</option>
      </VwSelect>
    </VwInput>
  </Cell>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| name | 自定义 `String` | 等价于`<select>`标签的`name`属性 |
| value | 自定义 `String` | 等价于`<select>`标签的`value`属性 |

> 事件：切换选项时会更改`value`的值，同时触发`on-change`事件。

> 注意：该组件需要放置在`<Cell form>`组件内部。

- #### 滑块
```html
  <Range on-change="doSomething"></Range>
  <Range step="10" value="50"></Range>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| step | 自定义 `String` | 等价于`<input type="range">`标签的`step`属性 |
| value | 自定义 `String` | 等价于`<input type="range">`标签的`value`属性 |

> 事件：切换选项时会触发`on-change`事件。

- #### 数字
```html
  <Num value="20" step="5"></Num>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| step | 自定义 `String` | 等价于`<input type="number">`标签的`step`属性 |
| value | 自定义 `String` | 等价于`<input type="number">`标签的`value`属性 |

> 事件：切换选项时会触发`on-change`事件。

- #### 协议条款
```html
  <Agree text="Read and agree" link="form" title="《Agreement》" ></Agree>
```

> | 参数名 | 参数值 | 备注 |
| --- | --- | --- |
| text | 自定义 `String` | 描述性文字 |
| link | 自定义 `String` | 协议链接 |
| title | 自定义 `String` | 协议标题 |




