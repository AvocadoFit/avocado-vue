<template>
   <BaseInput width="25" height="7" placeholder="password" :active="true" :state="false" />
   <BaseCircleButton :side="3" @click="socialRegister('google')">
      <BaseIcon width="20" height="21" viewBox="0 0 20 21">
         <GoogleIcon />
      </BaseIcon>
   </BaseCircleButton>
   <BaseCircleButton :side="3" @click="socialRegister('twitter')">
      <BaseIcon width="24" height="21" viewBox="0 0 24 21">
         <TwitterIcon />
      </BaseIcon>
   </BaseCircleButton>
   <BaseCircleButton :side="3" @click="socialRegister('twitter')">
      <BaseIcon width="25" height="25" viewBox="0 0 25 25">
         <FacebookIcon />
      </BaseIcon>
   </BaseCircleButton>
   <FormProvvisorio />
   <ProgressBar :items="items" />
   <BaseInput width="25" height="7" placeholder="password" :active="false" />
   <BaseButton width="25" height="7" radius="12">
      create account
   </BaseButton>
   <router-link to="/registration">registrati</router-link>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCircleButton from '@/components/base/BaseCircleButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import GoogleIcon from '@/assets/icons/GoogleIcon.vue'
import TwitterIcon from '@/assets/icons/TwitterIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import FormProvvisorio from '@/components/FormProvvisorio.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default {
   name: 'Home',
   components: {
      BaseInput,
      BaseCircleButton,
      BaseIcon,
      GoogleIcon,
      TwitterIcon,
      FacebookIcon,
      FormProvvisorio,
      BaseButton,
      ProgressBar
   },
   data() {
      return {
         items: [
            {
               id: 1,
               current: true,
               active: true
            },
            {
               id: 2,
               current: false,
               active: false
            },
            {
               id: 3,
               current: false,
               active: false
            }
         ]
      }
   },
   methods: {
      socialRegister(type) {
         console.log(type)
      }
   }
}
</script>

<style></style>
