"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var addUserToFirebase = function addUserToFirebase(email, password) {
  var value;
  return regeneratorRuntime.async(function addUserToFirebase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          value = null;
          _context.next = 3;
          return regeneratorRuntime.awrap(_firebase["default"].auth().createUserWithEmailAndPassword(email, password)["catch"](function (error) {
            value = error;
          }));

        case 3:
          return _context.abrupt("return", value);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = addUserToFirebase;
exports["default"] = _default;