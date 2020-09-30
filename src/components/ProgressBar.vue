<template>
   <div :key="item.id" v-for="item in items">
      <BaseState active="whoCurrent" />
   </div>
</template>

<script>
import BaseState from '@/components/base/BaseState.vue'
//import ProgressLine from '@/assets/icons/ProgressLine.vue'
export default {
   name: 'ProgressBar',
   components: { BaseState },
   props: {
      current: {
         type: Number,
         default: 0
      },
      items: {}
   },
   data() {
      return {}
   },
   computed: {
      whoCurrent() {
         if( this.current != 0 ){

         }else
      }
   }
}
</script>

<style lang="sass" scoped></style>
