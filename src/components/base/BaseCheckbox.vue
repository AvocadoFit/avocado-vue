<template>
   <div>
      <div class="checkbox" :style="style" @click="emitEvent" :class="{ checked: checked }"></div>
   </div>
</template>

<script>
export default {
   name: 'BaseCheckbox',
   props: {
      side: {
         type: [String, Number],
         required: true
      },
      disabled: {
         type: Boolean,
         default: false
      },
      checked: {
         type: Boolean,
         default: false
      }
   },
   data() {
      return {
         // style data
         style: {
            width: `${this.side}px`,
            height: `${this.side}px`
         }
      }
   },
   methods: {
      emitEvent() {
         this.$emit('clicked')
      }
   }
}
</script>

<style lang="sass" scoped>
.checkbox
   border: solid 2px #D7D7D7
   border-radius: 5px
   transition: all 200ms ease-in
.checked[class="checkbox checked"]
   background-color: #FE6558
   border: solid 2px #FE6558
</style>
