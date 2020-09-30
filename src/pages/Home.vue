<template>
   <ProgressBar :items="items" />
   <BaseInput width="25" height="7" placeholder="password" :active="false" />
   <BaseButton width="25" height="7" radius="12">
      create account
   </BaseButton>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default {
   name: 'Home',
   components: { BaseInput, BaseButton, ProgressBar },
   data() {
      return {
         items: [
            {
               id: 1,
               active: 0
            },
            {
               id: 2,
               active: 0
            },
            {
               id: 3,
               active: 0
            }
         ]
      }
   }
}
</script>

<style></style>
