<template>
   <button :disabled="isDisabled" :style="style" :class="{ active: active }">
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
         default: '10'
      },
      shadow: {
         type: Boolean,
         default: false
      }
   },
   data() {
      return {
         style: {
            height: this.height + '%',
            width: this.width + '%',
            'background-color': this.color,
            'border-radius': this.radius + 'px',
            'box-shadow': this.shadow ? '2px 2px 20px 1px ' + this.color : ''
         }
      }
   },
   computed: {
      isDisabled() {
         return !this.active
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
</style>
