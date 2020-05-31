<template>
    <div>
      <label class="hi-radio" :class="{'is-checked':label === model}">
        <span class="hi-radio-input">
        <span class="hi-radio-inner"></span>
          <input
            type="radio"
            class="hi-radio-original"
            :value="label"
            :name="name"
            v-model="model">
        </span>
        <span class="hi-radio-label">
          <slot></slot>
          <template v-if="!$slots.default">{{label}}</template>
        </span>
      </label>
    </div>
</template>

<script>
  export default {
    name: 'HiRadio',
    inject:{
      RadioGroup:{
        default:''
      }
    },
    computed:{
      model:{
        get(){
          return this.isGroup ? this.RadioGroup.value : this.value
        },
        set(value){
          this.$emit('input',value)
          this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
        }
      },
      isGroup(){
        return !!this.RadioGroup
      }
    },
    props:{
      label: {
        type: [String, Number, Boolean],
        default:''
      },
      value:null,
      name:{
        type:String,
        default:''
      }
    }
  }
</script>

<style lang="scss" scoped>
  $fontSize:14px;
  .hi-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .hi-radio-input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
    }
    .hi-radio-inner{
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .hi-radio-original{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
    .hi-radio-label{
      font-size: $fontSize;
      color: #409eff;
      padding-left: 10px;
    }
  }
  .hi-radio.is-checked{
    .hi-radio-input{
      .hi-radio-inner{
        border-color: #409eff;
        background: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
  }
</style>
