<template>
    <div class="hi-form">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'HiForm',
    props:{
      model:{
        type:Object,
        require:true
      },
      labelWidth:{
        type:String,
        default:'80px'
      }
    },
    provide(){
      return{
        Form:this
      }
    }
  }
</script>

<style scoped>

</style>
