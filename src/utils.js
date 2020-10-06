var emailValidator = email => {
   var regexp = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
   return regexp.test(email)
}

var defaultPasswordState = {
   state: null,
   lower_case: null,
   upper_case: null,
   num_characters: null,
   numbers: null
}
var passwordValidator = password => {
   var state = {
      state: true,
      lower_case: false,
      upper_case: false,
      num_characters: false,
      numbers: false
   }
   // number checking
   if (password.search(/[0-9]+/) != -1) state.numbers = true
   // characters number
   if (password.length >= 6 && password.length < 25) state.num_characters = true
   // lower-case checking
   if (password.search(/[a-z]+/) != -1) state.lower_case = true
   // upper-case checking
   if (password.search(/[A-Z]+/) != -1) state.upper_case = true
   //update state
   Object.entries(state).forEach(value => {
      state.state = state.state && value[1]
   })
   return state
}

export { emailValidator, defaultPasswordState, passwordValidator }
