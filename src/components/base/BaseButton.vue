<template>
   <button :disabled="isDisabled" :style="style">
      <slot></slot>
   </button>
</template>

<script>
export default {
   name: 'BaseButton',
   props: {
      width: {
         type: String,
         default: '100'
      },
      height: {
         type: String,
         default: '100'
      },
      color: {
         type: String,
         default: '#D7D7D7'
      },
      active: {
         type: Boolean,
         default: false
      },
      radius: {
         type: String,
         default: '15'
      },
      shadow: {
         type: Boolean,
         default: false
      }
   },
   computed: {
      isDisabled() {
         return !this.active
      },
      style() {
         let shadowColor = `0 0 20px ${this.color}70`
         return {
            height: this.height + '%',
            width: this.width + '%',
            'border-radius': this.radius + 'px',
            'background-color': this.active ? this.color : '#D7D7D7',
            'box-shadow': this.active && this.shadow ? shadowColor : ''
         }
      }
   }
}
</script>

<style lang="sass" scoped>
button
   border: none
   display: flex
   justify-content: center
   align-items: center
   font-weight: bold
   color: white
   font-size: 15px
   &:focus-within
      outline: none
</style>
