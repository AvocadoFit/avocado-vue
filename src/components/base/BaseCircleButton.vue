<template>
   <button :style="buttonStyle">
      <slot></slot>
   </button>
</template>

<script>
export default {
   name: 'BaseCircleButton',
   props: {
      side: {
         type: Number,
         default: 100
      },
      color: {
         type: String,
         default: '#FE655850'
      }
   },
   data() {
      return {
         buttonStyle: {
            width: this.side + 'vw',
            height: this.side + 'vw',
            'border-radius': this.side / 2 + 'vw',
            'background-color': this.color
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
   transition: all 50ms linear
   &:hover
      filter: contrast(200%)
</style>
