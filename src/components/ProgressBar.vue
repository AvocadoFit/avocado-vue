<template>
   <div class="container" :key="item.id" v-for="item in items">
      <BaseState :active="item.active" :current="item.current" />
      <BaseIcon
         width="3"
         height="99"
         viewBox="0 0 3 99"
         :color="item.active == item.current ? '#d7d7d7' : '#FE6558'"
         v-if="item.id != items.length"
      >
         <ProgressLine />
      </BaseIcon>
   </div>
</template>

<script>
import BaseState from '@/components/base/BaseState.vue'
import ProgressLine from '@/assets/icons/ProgressLine.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
   name: 'ProgressBar',
   components: { BaseState, ProgressLine, BaseIcon },
   props: {
      items: Array
   }
}
</script>

<style lang="sass" scoped>
.container
   display: flex
   align-items: center
   flex-direction: column
</style>
