<template>
   <div class="container" :key="index" v-for="(item, index) in this.generateState">
      <!-- <BaseState :active="item.active" :current="item.current" />
      <div
         class="line"
         v-if="item.id != items.length"
         :class="item.active == item.current ? 'grey' : 'secondary'"
         :style="{ height: this.config.sizes[index] + 'vh' }"
      ></div> -->
      <BaseState />
      ciao
   </div>
</template>

<script>
import BaseState from '@/components/base/BaseState.vue'

export default {
   name: 'ProgressBar',
   components: { BaseState },
   props: {
      config: {
         numItems: {
            type: Number,
            required: true
         },
         sizes: {
            type: Array,
            required: true
         },
         current: {
            type: Number,
            required: true
         },
         validator(config) {
            return config.numItems === config.sizes.length + 1 && config.current <= config.numItems
         }
      },
      current: {
         type: Number,
         default: 1
      }
   },
   computed: {
      generateState() {
         var state = []
         return 0
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/variables.scss'

.container
   display: flex
   align-items: center
   flex-direction: column
   & .line
      width: 3px

.grey
   background-color: #D7D7D7
.secondary
   background-color: map-get($colors, 'secondary')
</style>
