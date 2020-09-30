<template>
   <div class="circle" :class="{ active: active == 1, current: active == 2 }">
      <InputCorrect v-if="isActive != 0" />
   </div>
</template>

<script>
import InputCorrect from '@/assets/icons/InputCorrect.vue'
export default {
   name: 'BaseState',
   components: { InputCorrect },
   props: {
      active: {
         type: Number,
         default: 0
      }
   },
   computed: {
      isActive() {
         console.log(this.active)
         return this.active
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
