<template>
   <div class="circle" :class="{ active: active, current: current }">
      <InputCorrectIcon v-if="active" />
   </div>
</template>

<script>
import InputCorrectIcon from '@/assets/icons/InputCorrectIcon.vue'
export default {
   name: 'BaseState',
   components: { InputCorrectIcon },
   props: {
      current: {
         type: Boolean,
         required: true
      },
      active: {
         type: Boolean,
         required: true
      }
   }
}
</script>

<style lang="sass" scoped>
.circle
   background-color: #D7D7D7
   border-radius: 14px
   width: 28px
   height: 28px
   display: flex
   justify-content: center
   align-items: center
.active
   background-color: #FE6558
.current
   background-color: #FE6558
   width: 46px
   height: 46px
   border-radius: 23px
   box-shadow: 1px 1px 10px 1px #FE6558
</style>
