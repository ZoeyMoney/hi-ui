<template>
    <div class="hi-form-item">
      <label class="hi-form-item_label" :style="{width:this.Form.labelWidth}">{{label}}</label>
      <div class="hi-form-item_content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'HiFormItem',
    props:{
      label:null
    },
    inject:['Form']
  }
</script>

<style lang="scss" scoped>
  .hi-form-item{
    width: 460px;
     margin-bottom: 25px;
    .hi-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .hi-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
