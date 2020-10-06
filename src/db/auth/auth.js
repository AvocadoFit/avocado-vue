import firebase from 'firebase'
// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
   apiKey: 'AIzaSyCAroMuvt5NJ0RDF0_S_4zc6HYZ_h024LE',
   authDomain: 'avocado-5ddb2.firebaseapp.com',
   databaseURL: 'https://avocado-5ddb2.firebaseio.com',
   projectId: 'avocado-5ddb2',
   storageBucket: 'avocado-5ddb2.appspot.com',
   messagingSenderId: '269232762424',
   appId: '1:269232762424:web:24fb1531d8069776ca00cd',
   measurementId: 'G-2Q6B1DZK47'
}
firebase.initializeApp(firebaseConfig)

var addUserToFirebaseByMail = async credentials => {
   var value = null
   console.log('email  ' + credentials.email)
   console.log('password  ' + credentials.password)
   await firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .catch(error => {
         value = error
      })
   return value
}

var addUserToFirebaseByGoogle = async () => {
   var provider = new firebase.auth.GoogleAuthProvider()
   firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
         // This gives you a Google Access Token. You can use it to access the Google API.
         var token = result.credential.accessToken
         // The signed-in user info.
         var user = result.user
         // ...
         console.log('token: ' + token)
         console.log('user: ' + user)
         for (var a in user) {
            console.log(a + ' :  ' + user[a])
         }
      })
      .catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code
         var errorMessage = error.message
         // The email of the user's account used.
         var email = error.email
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential
         // ...
         errorCode
         console.log(errorMessage)
         email
         credential
      })
}

export { addUserToFirebaseByMail, addUserToFirebaseByGoogle }
