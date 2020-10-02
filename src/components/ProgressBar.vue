<template>
   <div class="container" :key="item.id" v-for="(item, index) in items">
      <BaseState :active="item.active" :current="item.current" />
      <div
         class="line"
         v-if="item.id != items.length"
         :class="item.active == item.current ? 'grey' : 'secondary'"
         :style="{ height: this.sizes[index] + 'vh' }"
      ></div>
   </div>
</template>

<script>
import BaseState from '@/components/base/BaseState.vue'

export default {
   name: 'ProgressBar',
   components: { BaseState },
   props: {
      items: Array,
      numItems: {
         type: Number,
         required: true
      },
      sizes: {
         type: Array,
         required: true,
         validator: function() {
            return this.numItems == this.sizes
         }
      },
      current: {
         type: Number,
         default: 1
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
