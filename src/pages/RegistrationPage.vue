<template>
   <div class="fullpage">
      <div class="right">
         <div class="header flex">
            <h3>Create account</h3>
            <div class="flex">
               <p>or</p>
               <router-link to="/" class="login-link">
                  <p>login</p>
               </router-link>
            </div>
         </div>
         <div class="body flex">
            <div class="progressbar">
               <ProgressBar
                  :config="{ numItems: 3, sizes: ['6.2', '21'], current: this.current }"
               />
            </div>
            <div class="reg-form">
               <BaseInput
                  width="23"
                  height="60"
                  placeholder="email"
                  @input="validateEmail"
                  :state="emailState"
                  class="input"
                  :active="inputActive == 1"
                  textColor="#FE6558"
                  :disabled="formState.email.disabled"
                  @focus="changeActive(1)"
               />
               <div class="password-form">
                  <BaseInput
                     width="23"
                     height="60"
                     placeholder="password"
                     @input="validatePassword"
                     :state="passwordState.state"
                     class="input"
                     :active="inputActive == 2"
                     textColor="#FE6558"
                     :disabled="isPasswordDisabled"
                     @focus="changeActive(2)"
                  />
                  <div class="password-state" :class="{ active: inputActive == 2 }">
                     <p>password must contain :</p>
                     <div class="grid2x2">
                        <div>
                           <div
                              class="circle"
                              :class="{
                                 'circle-red': passwordState.lower_case === false,
                                 'circle-green': passwordState.lower_case
                              }"
                           ></div>
                           lower-case
                        </div>
                        <div>
                           <div
                              class="circle"
                              :class="{
                                 'circle-red': passwordState.numbers === false,
                                 'circle-green': passwordState.numbers
                              }"
                           ></div>
                           numbers
                        </div>
                        <div>
                           <div
                              class="circle"
                              :class="{
                                 'circle-red': passwordState.upper_case === false,
                                 'circle-green': passwordState.upper_case
                              }"
                           ></div>
                           upper-case
                        </div>
                        <div>
                           <div
                              class="circle"
                              :class="{
                                 'circle-red': passwordState.num_characters === false,
                                 'circle-green': passwordState.num_characters
                              }"
                           ></div>
                           6-24 characters
                        </div>
                     </div>
                  </div>
                  <BaseInput
                     width="23"
                     height="60"
                     placeholder="repeat password"
                     @input="doesPasswordMatch"
                     :state="passwordMatchState"
                     class="input"
                     :active="inputActive == 2"
                     textColor="#FE6558"
                     :disabled="isPasswordDisabled"
                     @focus="changeActive(2)"
                  />
               </div>
               <div class="flex policy" :class="{ active: inputActive == 3 }">
                  <input
                     type="checkbox"
                     name="policy"
                     :disabled="isCheckboxDisabled"
                     @click="changeActive(3)"
                  />
                  <p>
                     Creating an account means you’re okay with our Terms of Service, Privacy
                     Policy, and our default Notification Settings.
                  </p>
               </div>
            </div>
         </div>
         <div class="buttons">
            <BaseButton
               width="40"
               height="60"
               :active="isButtonEnabled"
               color="#FE6558"
               :shadow="true"
               @click="baseRegistration"
               >create account</BaseButton
            >
            <p>or</p>
            <div class="social">
               <!-- <BaseCircleButton :side="4">
                  <BaseIcon width="25" height="25" viewBox="0 0 25 25">
                     <FacebookIcon />
                  </BaseIcon>
               </BaseCircleButton> -->
               <BaseCircleButton :side="3.5" @click="googleRegistration">
                  <BaseIcon width="20" height="21" viewBox="0 0 20 21">
                     <GoogleIcon />
                  </BaseIcon>
               </BaseCircleButton>
            </div>
         </div>
         <p v-if="error">
            {{ this.error }}
         </p>
      </div>
   </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCircleButton from '@/components/base/BaseCircleButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
// import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import GoogleIcon from '@/assets/icons/GoogleIcon.vue'
import { emailValidator, passwordValidator } from '@/utils.js'
import { defaultPasswordState } from '@/utils.js'
import { addUserToFirebaseByMail, addUserToFirebaseByGoogle } from '@/db/auth/auth.js'

export default {
   name: 'RegistrationPage',
   components: {
      BaseInput,
      ProgressBar,
      BaseButton,
      BaseCircleButton,
      BaseIcon,
      // FacebookIcon,
      GoogleIcon
   },
   data() {
      return {
         emailState: null,
         passwordState: defaultPasswordState,
         passwordMatchState: null,
         checkboxState: null,
         credentials: {
            password: null,
            email: null
         },
         inputActive: 1, // email, password or checkbox
         current: 1,
         formState: {
            email: {
               active: true,
               disabled: false
            },
            password: {
               active: false,
               disabled: true
            }
         },
         error: null
      }
   },
   computed: {
      isPasswordDisabled() {
         return !this.emailState
      },
      isCheckboxDisabled() {
         return !this.passwordMatchState
      },
      isButtonEnabled() {
         return this.emailState && this.passwordMatchState && this.checkboxState
      }
   },
   methods: {
      // UI methods
      changeActive(toActive) {
         if (toActive == 3) this.checkboxState = !this.checkboxState
         if (toActive > this.current) this.current = toActive
         this.inputActive = toActive
      },
      // Validation methods
      validateEmail(event) {
         var email = event.target.value
         if (emailValidator(email)) {
            this.emailState = true
            this.credentials.email = email
         } else {
            this.emailState = false
            this.credentials.email = null
         }
      },
      validatePassword(event) {
         this.credentials.password = event.target.value
         this.passwordState = passwordValidator(this.credentials.password)
         if (this.credentials.password == '') this.passwordState = defaultPasswordState
      },
      doesPasswordMatch(event) {
         var password2 = event.target.value
         this.passwordMatchState = this.credentials.password === password2
         if (password2 === '') this.passwordMatchState = null
      },
      // Registration methods
      async baseRegistration() {
         this.error = null
         var esit = await addUserToFirebaseByMail(this.credentials)
         if (esit) this.error = esit.message
      },
      googleRegistration() {
         addUserToFirebaseByGoogle()
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/variables.scss'

.fullpage
   width: 100vw
   height: 100vh
   background-color: map-get($colors, 'primary')
.right
   position: relative
   width: 40%
   height: calc(100% - 3vw)
   margin: 1.5vw
   background-color: white
   float: right
   border-radius: 20px
   padding: 0 5vw
   box-sizing: border-box
.flex
   display: flex
   justify-content: space-between
   align-items: center
.header
   height: 17%
   align-items: flex-end
   & h3
      color: #696969
      font-size: 40px
      font-weight: 500
   & p
      margin-right: 1vw
      color: #ABABAB
   & .login-link
      text-decoration: none
      & p
         color: map-get($colors, 'secondary')
         margin: 0
.body
   width: 100%
   height: 52%
   padding: 6vh 0 0 0
   & .progressbar
      padding: 3vh 0 0 0
      width: 20%
      height: 100%
   & .reg-form
      color: #BABABA
      width: 80%
      height: 100%
      display: flex
      flex-direction: column
      align-items: flex-end
      justify-content: flex-start
      padding: 0 0 0 2vw
      & .password-form
         margin: 4vh 0 0 0
         & .password-state
            margin: 1vh 0 1.7vh .7vw
            & p
               margin-bottom: .7vh
            .grid2x2
               display: grid
               grid-template-rows: auto auto
               grid-template-columns: auto auto
               font-weight: 300
               font-size: 15px
               & > div
                  display: flex
                  justify-content: flex-start
                  align-items: center
                  & .circle
                     width: 8px
                     height: 8px
                     background-color: #ABABAB
                     border-radius: 5px
                     margin-right: .7vw
                     transition: all 200ms linear
                  & .circle-red
                     background-color: #FF0000
                     transition: all 200ms linear
                  & .circle-green
                     background-color: #04DF00
                     transition: all 200ms linear
         & .password-state[class="password-state active"]
            color: #454545
      & .policy
         margin: 4vh 0 0 0
         display: flex
         align-items: flex-start
         justify-content: space-between
         & input
            margin: .2vh 0 0 .6vw
         & p
            margin-left: 1vw
            font-size: 17px
      & .policy[class="flex policy active"]
         color: #454545
   & .reg-form[class="reg-form active"]
      color: #454545
.buttons
   position: absolute
   bottom: 10vh
   left: 0
   padding: inherit
   box-sizing: border-box
   height: 10%
   width: 100%
   display: flex
   justify-content: space-between
   align-items: center
   & .social
      display: flex
      justify-content: space-between
      align-items: center
.input[class="container input actived"] > input
   color: tomato !important
</style>
