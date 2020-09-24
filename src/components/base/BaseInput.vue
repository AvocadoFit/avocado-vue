<template>
   <div class="container" :style="dimension" :class="{ active: active }">
      <input :placeholder="placeholder" :class="{ active: active }" />
   </div>
</template>

<script>
export default {
   name: 'BaseInput',
   props: {
      width: {
         type: String,
         default: '100'
      },
      height: String,
      placeholder: String,
      active: {
         type: Boolean,
         default: false
      }
   },
   data() {
      return {
         dimension: {
            width: this.width + '%',
            height: this.height + '%'
         }
      }
   }
}
</script>

<style lang="sass" scoped>
.container
   border: none
   border-radius: 16px;
input
   width: 100%
   height: 100%
   border-radius: 16px;
   border: 2px solid #D7D7D7
   padding: 0 25% 0 6%
   box-sizing: border-box
   font-size: 16px
   color: #45454580
   &::placeholder
      color: #45454580
   &:focus-within
      outline: none
div[class="container active"]
   box-shadow: 0 0 20px #FE655850
input[class="active"]
   box-shadow: inset 0 0 10px #FE655850
   border: 2px solid #FE6558
   color: #FE6558
   &::placeholder
      color: #FE655890
</style>
