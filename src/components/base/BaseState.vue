<template>
   <div class="circle" :class="{ active: active, current: current }">
      <BaseIcon width="14" height="14" viewBox="0 0 14 14" class="check-icon">
         <CheckWhiteIcon v-if="active" />
      </BaseIcon>
   </div>
</template>

<script>
import CheckWhiteIcon from '@/assets/icons/CheckWhiteIcon.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

export default {
   name: 'BaseState',
   components: { CheckWhiteIcon, BaseIcon },
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
   transition: all 200ms linear
.active
   background-color: #FE6558
.current
   background-color: #FE6558
   width: 46px
   height: 46px
   border-radius: 23px
   box-shadow: 0px 0px 15px #FE655890
   & .check-icon
      width: 20px
      height: 20px
      viewBox: 0 0 20px 20px
</style>
