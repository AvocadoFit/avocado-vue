"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUserToFirebaseByGoogle = exports.addUserToFirebaseByMail = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
};

_firebase["default"].initializeApp(firebaseConfig);

var addUserToFirebaseByMail = function addUserToFirebaseByMail(credentials) {
  var value;
  return regeneratorRuntime.async(function addUserToFirebaseByMail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          value = null;
          console.log('email  ' + credentials.email);
          console.log('password  ' + credentials.password);
          _context.next = 5;
          return regeneratorRuntime.awrap(_firebase["default"].auth().createUserWithEmailAndPassword(credentials.email, credentials.password)["catch"](function (error) {
            value = error;
          }));

        case 5:
          return _context.abrupt("return", value);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.addUserToFirebaseByMail = addUserToFirebaseByMail;

var addUserToFirebaseByGoogle = function addUserToFirebaseByGoogle() {
  var provider;
  return regeneratorRuntime.async(function addUserToFirebaseByGoogle$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          provider = new _firebase["default"].auth.GoogleAuthProvider();

          _firebase["default"].auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken; // The signed-in user info.

            var user = result.user; // ...

            console.log('token: ' + token);
            console.log('user: ' + user);

            for (var a in user) {
              console.log(a + ' :  ' + user[a]);
            }
          })["catch"](function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message; // The email of the user's account used.

            var email = error.email; // The firebase.auth.AuthCredential type that was used.

            var credential = error.credential; // ...

            errorCode;
            console.log(errorMessage);
            email;
            credential;
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.addUserToFirebaseByGoogle = addUserToFirebaseByGoogle;