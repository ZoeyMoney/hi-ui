<template>
    <div>
      <div class="hi-input">
        <input
          class="hi-input-inner"
          :class="{'is-disabled':disabled}"
        :placeholder="placeholder"
        :type="ShowPassword ? (passwordView ? 'text' : 'password') : type"
        :name="name"
        :disabled="disabled"
        :value="value"
        @input="handleInput">
        <span class="hi-input-suffix" v-if="suffix">
          <i class="hi hi-close" v-if="clearable && value" @click="clear"></i>
          <i class="hi hi-eye" v-if="ShowPassword" @click="handleShowPassword"></i>
        </span>
      </div>
    </div>
  <!--
    参数支持            参数描述          参数类型          默认值
    placeholder       占位符             string          无
    type              文本框类型(text/password) string    text
    disabled          禁用                Boolean         false
    clearable         是否显示清空按钮      Boolean         false
    show-password      是否显示密码切换按钮 Boolean          false
    name              name属性            string          无

   事件支持       事件描述
   blur         失去焦点事件
   change       内容改变事件
   focus        获取的焦点事件
  -->
</template>

<script>
  export default {
    name: 'HiInput',
    data(){
      return{
        passwordView : false
      }
    },
    props:{
      placeholder:{
        type:String,
        default:''
      },
      type:{
        type:String,
        default: 'text'
      },
      name:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:false
      },
      value:{
        type:String,
        default:''
      },
      clearable:{
        type:Boolean,
        default:false
      },
      ShowPassword:{
        type:Boolean,
        default:false
      }
    },
    computed:{
      suffix(){
        return this.clearable || this.ShowPassword
      }
    },
    methods:{
      handleInput(e){
        this.$emit('input',e.target.value)
      },
      clear(){
        this.$emit('input','')
      },
      handleShowPassword(){
        console.log('123')
        this.passwordView = !this.passwordView
      }
    }
  }
</script>

<style lang="scss" scoped>
  input{
    cursor: pointer;
  }
  .hi-input{
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    .hi-input-inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      &:hover{

      }
    }
    .hi-input-inner.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
    .hi-input-suffix{
      position: absolute;
      height: 100%;
      right: 10px;
      top: 25%;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      cursor: pointer;
    }
  }
</style>
