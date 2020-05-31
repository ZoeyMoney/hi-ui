<template>
    <div class="hi-checkbox-group">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'HiCheckboxGroup',
    props:{
      value:{
        type:Array
      }
    },
    provide(){
      return{
        CheckboxGroup:this
      }
    }
  }
</script>

<style scoped>

</style>
