<template>
    <div class="hi-switch" :class="{'is-checked':value}" @click="handleClick">
      <input type="checkbox" class="hi-switch-input" :name="name" ref="input">
      <span class="hi-switch-core" ref="core">
        <span class="hi-switch-button"></span>
      </span>
    </div>
  <!--
    参数名称          参数描述          参数类型          默认值
    v-model          双向绑定         Boolean          false
    name              name属性        string          text
    activeColor      自定义的激活的颜色  string
    inactiveColor     自定义的不激活的颜色  string

    事件名称          事件描述
    change          change时触发的事件
  -->
</template>

<script>
  export default {
    name: 'hiSwitch',
    props:{
      value:{
        type:Boolean,
        default:false,
      },
      activeColor:{
        type:String,
        default: ''
      },
      inactiveColor:{
        type:String,
        default:''
      },
      name:{
        type:String,
        default:''
      }
    },
    methods:{
      async handleClick(){
        this.$emit('input',!this.value)
        //点击的时候修改背景色
        //等待value发生了变化，在setColor
        //数据修改后，等待dom更新，在修改按钮的颜色
        await this.$nextTick()
        this.setColor()
        this.$refs.input.checked = this.value
      },
      setColor(){
        if (this.activeColor || this.inactiveColor){
          // let color = this.value ? this.activeColor : this.inactiveColor
          let color;
          if (this.value){
            color = this.activeColor
          }else{
            color = this.inactiveColor
          }
          this.$refs.core.style.borderColor = color;
          this.$refs.core.style.backgroundColor = color;
        }
      }
    },
    mounted () {
      //修改开关的颜色
      this.setColor()
      //控制checked的值
      this.$refs.input.checked = this.value
    }
  }
</script>

<style lang="scss" scoped>
  .hi-switch{
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .hi-switch-input{
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin:0;
    }
    .hi-switch-core{
      margin: 0;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color .3s,background-color .3s;
      vertical-align: middle;
      .hi-switch-button{
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: white;
      }
    }
  }
  .hi-switch.is-checked{
    .hi-switch-core{
      border-color: #409eff;
      background-color: #409eff;
      .hi-switch-button{
        transform: translateX(20px);
      }
    }
  }
</style>
