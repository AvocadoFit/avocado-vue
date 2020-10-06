<template>
   <div class="container" :style="dimension" :class="{ active: active }">
      <input
         :placeholder="placeholder"
         :class="{ active: active }"
         :style="textColorStyle"
         :disabled="disabled"
         @focus="emitFocus"
      />
      <div class="icon">
         <BaseIcon width="24" height="24" viewBox="0 0 24 24" v-if="isEvaluated">
            <InputCorrectIcon v-if="state" />
            <InputErrorIcon v-else />
         </BaseIcon>
      </div>
   </div>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue'
import InputErrorIcon from '@/assets/icons/InputErrorIcon.vue'
import InputCorrectIcon from '@/assets/icons/InputCorrectIcon.vue'

export default {
   name: 'BaseInput',
   components: { BaseIcon, InputErrorIcon, InputCorrectIcon },
   props: {
      width: {
         type: String,
         default: '100'
      },
      height: String,
      placeholder: String,
      textColor: {
         type: String,
         defautl: null
      },
      active: {
         type: Boolean,
         default: false
      },
      disabled: {
         type: Boolean,
         required: true
      },
      state: {
         type: Boolean,
         default: null
      }
   },
   data() {
      return {
         // Style data
         dimension: {
            width: this.width + 'vw',
            height: this.height + 'vh'
         },
         textColorStyle: {
            color: this.textColor
         }
      }
   },
   computed: {
      isEvaluated() {
         return this.state != null
      }
   },
   methods: {
      emitFocus() {
         this.$emit('focus')
      }
   }
}
</script>

<style lang="sass" scoped>
.container
   border: none
   border-radius: 16px
   position: relative
input
   width: 100%
   height: 100%
   border-radius: 18px;
   border: 2px solid #D7D7D7
   padding: 0 25% 0 6%
   box-sizing: border-box
   font-size: 16px
   color: #45454580
   transition: all 200ms linear
   &::placeholder
      color: #45454580
   &:focus-within
      outline: none
div[class="container active input"]
   border-radius: 20px
   box-shadow: 0 0 10px #FE655820
input[class="active"]
   box-shadow: inset 0 0 10px #FE655830
   border: 2px solid #FE6558
   color: #FE6558
   &::placeholder
      color: #FE655890
input[class="just-actived"]
   color: #FE6558
input[disabled]
   background-color: white
.icon
   position: absolute
   top: 0
   right: 0
   height: 100%
   width: 25%
   display: flex
   justify-content: center
   align-items: center
</style>
