<template>
  <div>
    <cellsTip>单选项</cellsTip>
    <cell radio>
      <radio forItem='1r' name="radio">单选1</radio>
      <radio forItem='2r' name="radio">单选2</radio>
      <radio forItem='3r' name="radio">单选3</radio>
      <radio forItem='4r' name="radio" disabled>单选4</radio>
    </cell>

    <cellsTip>复选项</cellsTip>
    <cell checkbox>
      <checkbox forItem='1c' name="checkbox">复选1</checkbox>
      <checkbox forItem='2c' name="checkbox">复选2</checkbox>
      <checkbox forItem='3c' name="checkbox">复选3</checkbox>
      <checkbox forItem='4c' name="checkbox" disabled>复选4</checkbox>
    </cell>

    <cellsTip>表单</cellsTip>
    <cell form>
      <vwInput label="QQ" input-config='{
        "type": "tel",
        "placeholder": "输入QQ号码"
      }'></vwInput>
      <vwInput label="手机号" input-config='{
        "type": "tel",
        "placeholder": "输入手机号码"
      }' addon>
        <addonBtn slot="addon">获取验证码</addonBtn>
      </vwInput>
      <vwInput label="验证码" input-config='{
        "type": "tel",
        "placeholder": "输入右侧验证码"
      }' addon>
        <addonImg slot="addon" img="https://imgly.net/img/2gj.jpg"></addonImg>
      </vwInput>
      <vwInput label="日期" input-config='{
        "type": "date"
      }'></vwInput>
      <vwInput label="时间" input-config='{
        "type": "datetime-local"
      }'></vwInput>
      <vwInput warn label="微信号" input-config='{
        "type": "text",
        "placeholder": "输入微信号"
      }'></vwInput>
      <vwInput sucess label="身份证号" input-config='{
        "type": "text",
        "placeholder": "输入身份证号"
      }'></vwInput>
    </cell>

    <cellsTip>开关</cellsTip>
    <cell form>
      <vwInput label="默认" is-switch>
        <vwSwitch slot="switch"></vwSwitch>
      </vwInput>
      <vwInput label="警告" is-switch>
        <vwSwitch slot="switch" warn></vwSwitch>
      </vwInput>
    </cell>

    <cellsTip>文本域</cellsTip>
    <cell form>
      <vwTextarea addon="0/200"></vwTextarea>
    </cell>

    <cellsTip>选择-前置</cellsTip>
    <cell form>
      <vwInput select-before input-config='{
        "type": "number",
        "placeholder": "输入手机号码"
      }'>
        <vwSelect slot="selector-before" name='select1' value='+87'>
          <option value="+86">+86</option>
          <option value="+80">+80</option>
          <option value="+84">+84</option>
          <option value="+87">+87</option>
        </vwSelect>
      </vwInput>
    </cell>

    <cellsTip>选择-默认</cellsTip>
    <cell form>
      <vwInput select input-config='{
        "type": "number",
        "placeholder": "输入手机号码"
      }'>
        <vwSelect slot='selector' name="select2" value='QQ号'>
          <option value="微信号">微信号</option>
          <option value="QQ号">QQ号</option>
          <option value="Email">Email</option>
        </vwSelect>
      </vwInput>
    </cell>

    <cellsTip>选择-后置</cellsTip>
    <cell form>
      <vwInput label='国家地区' select-after>
        <vwSelect slot="selector-after" name="select3" value='中国'>
          <option value="中国">中国</option>
          <option value="美国">美国</option>
          <option value="英国">英国</option>
        </vwSelect>
      </vwInput>
    </cell>

    <cellsTip>滑块</cellsTip>
    <div style="padding:10px;">
      <span>{{rangeValA}}</span>
      <range @change="rangeValForA"></range>
    </div>
    <div style="padding:10px;">
      <span>{{rangeValB}}</span>
      <range step="10" :value="rangeValB" @change="rangeValForB"></range>
    </div>

    <cellsTip>数字</cellsTip>
    <div style="padding:10px;">
      <number></number>
    </div>
    <div style="padding:10px;">
      <number value="10"></number>
    </div>
    <div style="padding:10px;">
      <number value="20" step="5"></number>
    </div>

    <agree text="Read and agree" link="form" title="《Agreement》" ></agree>
  </div>
</template>

<script>
import page from 'components/article/page.vue'
import pageBody from 'components/article/page-body.vue'
import cellsTip from 'components/cells/cells-tips.vue'
import cell from 'components/cells/cell.vue'
import radio from 'components/forms/radio.vue'
import checkbox from 'components/forms/checkbox.vue'
import vwInput from 'components/forms/input.vue'
import vwTextarea from 'components/forms/textarea.vue'
import addonBtn from 'components/forms/addon-btn.vue'
import addonImg from 'components/forms/addon-img.vue'
import vwSwitch from 'components/forms/switch.vue'
import vwSelect from 'components/picker/select.vue'
import agree from 'components/cells/agree.vue'
import range from 'components/forms/range.vue'
import number from 'components/forms/number.vue'

export default {
  data () {
    return {
      rangeValA: '0',
      rangeValB: '20'
    }
  },
  components: {
    page,
    pageBody,
    cellsTip,
    cell,
    radio,
    checkbox,
    vwInput,
    vwTextarea,
    addonBtn,
    addonImg,
    vwSwitch,
    vwSelect,
    agree,
    range,
    number
  },
  methods: {
    rangeValForA (v) {
      this.rangeValA = v
    },
    rangeValForB (v) {
      this.rangeValB = v
    }
  }
}
</script>