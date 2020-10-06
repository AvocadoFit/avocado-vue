"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordValidator = exports.defaultPasswordState = exports.emailValidator = void 0;

var emailValidator = function emailValidator(email) {
  var regexp = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
  return regexp.test(email);
};

exports.emailValidator = emailValidator;
var defaultPasswordState = {
  state: null,
  lower_case: null,
  upper_case: null,
  num_characters: null,
  numbers: null
};
exports.defaultPasswordState = defaultPasswordState;

var passwordValidator = function passwordValidator(password) {
  var state = {
    state: true,
    lower_case: false,
    upper_case: false,
    num_characters: false,
    numbers: false
  }; // number checking

  if (password.search(/[0-9]+/) != -1) state.numbers = true; // characters number

  if (password.length >= 6 && password.length < 25) state.num_characters = true; // lower-case checking

  if (password.search(/[a-z]+/) != -1) state.lower_case = true; // upper-case checking

  if (password.search(/[A-Z]+/) != -1) state.upper_case = true; //update state

  Object.entries(state).forEach(function (value) {
    state.state = state.state && value[1];
  });
  return state;
};

exports.passwordValidator = passwordValidator;