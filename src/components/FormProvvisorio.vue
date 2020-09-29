<template>
   <input type="email" placeholder="email" @input="updateEmail" />
   <input type="password" placeholder="password" @input="updatePassword" />
   <button @click="submit">sub</button>
   <div v-if="error">{{ errorMessage }}</div>
</template>

<script>
import addUserToFirebase from '@/db/auth/auth.js'

export default {
   name: 'FormProvvisorio',
   data() {
      return {
         emailValue: '',
         passwordValue: '',
         error: false,
         errorMessage: 'no message'
      }
   },
   methods: {
      updateEmail(value) {
         this.emailValue = value.target.value
      },
      updatePassword(value) {
         this.passwordValue = value.target.value
      },
      async submit() {
         var state = await addUserToFirebase(this.emailValue, this.passwordValue)
         if (state != null) {
            this.error = true
            this.errorMessage = state.message
         }
      }
   }
}
</script>

<style lang="sass" scoped></style>
