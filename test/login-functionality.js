const { assert } = require('chai');
const exd = require('./../test-data/expected').loginFunctionality;
const sel = require('./../test-data/selectors').loginFunctionality;
const login = require('./../helpers/login');
const randomString = require('./../helpers/randomString');

describe(exd.suite, function () {

  login();
  console.log(randomString(46));

});