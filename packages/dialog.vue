<template>
  <transition name="dialog-fade">
<!--  遮罩层-->
    <div class="hi-dialog-wrapper" v-show="visible" @click.self="handleClose">
<!--      显示内容-->
      <div class="hi-dialog" :style="{width:width,marginTop:top}">
<!--        显示内容头部-->
        <div class="hi-dialog-header">
<!--          显示内容标题-->
          <slot name="title">
            <div class="hi-dialog-title">{{title}}</div>
          </slot>
<!--          关闭按钮-->
          <button class="hi-dialog-headerbtn" @click="handleClose">
            <i class="icon-close">&times;</i>
          </button>
        </div>
<!--        内容-->
        <div class="hi-dialog-body">
<!--          默认插槽-->
          <slot></slot>
        </div>
<!--        按钮-->
        <div class="hi-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
  <!--
  参数名       参数描述              参数类型      默认值
  title       对话框标题             string      提示
  width       宽度                  string      50%
  top         与顶部的距离            string      15vh
  visible      是否显示dialog（支持sync修饰符）    Boolean    false

  事件支持
  事件名         事件描述
  opened         模态框显示的事件
  closed          模态框关闭的事件

  插槽说明
  插槽名称        插槽描述
  default         dialog的内容
  title          dialog的标题
  footer          dialog的底部操作区



  -->
</template>

<script>
  export default {
    name: 'HiDialog',
    props:{
      title:{
        type:String,
        default:'提示'
      },
      width:{
        type: String,
        default: '30%'
      },
      top:{
        type:String,
        default:'15vh'
      },
      visible:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      handleClose(){
        this.$emit('update:visible',false)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .hi-dialog-wrapper{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      overflow: auto;
      margin: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 999999;
      .hi-dialog{
        position: relative;
        margin: 0 auto 50px;
        background: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        box-sizing: border-box;
        width: 30%;
      }
      .hi-dialog-header{
        padding: 20px 20px 10px;
      }
      .hi-dialog-title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hi-dialog-headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
      .hi-dialog-body{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      .hi-dialog-footer{
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        .hi-button{
          margin-right: 10px;
        }
      }
      .icon-close{
        color: #0b0b0b9e;
        font-size: 20px;
      }
    }
  .dialog-fade-enter-active{
    animation: fade .3s;
  }
  .dialog-fade-leave-active{
    animation: fade .3s reverse;
  }
  @keyframes fade {
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
