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
      sizes: Array
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
