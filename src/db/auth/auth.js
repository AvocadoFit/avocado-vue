import firebase from 'firebase/app'
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

var addUserToFirebase = async (email, password) => {
   var value = null
   await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
         value = error
      })
   return value
}

export default addUserToFirebase
