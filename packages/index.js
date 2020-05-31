//整个包的入口
//定义install方法，接受Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
import Button from "./button"
import Checkbox from "./checkbox"
import Checkbox_group from './checkbox-group'
import Dialog from "./dialog"
import Form from "./form"
import Form_item from './form-item'
import Input from "./input"
import Radio from "./radio"
import RadioGroup from './radio-group'
import Switch from './switch'
import './font/iconfont.css'

//储存组件列表
const components = [
  Button,
  Checkbox,
  Checkbox_group,
  Dialog,
  Form,
  Form_item,
  Input,
  Radio,
  RadioGroup,
  Switch
]

const install = function (Vue) {
  //全局注册所有的组件
  components.forEach((item)=>{
    Vue.component(item.name,item)
  })
}

//判断是否是直接引入文件，如果是，就不用调用Vue.user()
if (typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install
}
