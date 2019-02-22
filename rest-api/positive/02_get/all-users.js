const { getUser } = require('../../../helpers/axios');
const { assert } = require('chai');
let response;

describe('POSITIVE GET ALL USERS', () => {
  it('Is Array', () => {
    return getUser()
      .then(res => {
          response = res;
          assert.isTrue(Array.isArray(res), 'Result is not array');
      })
  });

  it('Id type', () => {
      assert.isTrue(typeof(response[0]._id) === 'string', 'id is not a string');
  });

    it('Fname type', () => {
        assert.isTrue(typeof(response[0].fname) === 'string', 'fname is not a string');
    });

    it('Lname type', () => {
        assert.isTrue(typeof(response[0].lname) === 'string', 'lname is not a string');
    });

    it('Email type', () => {
        assert.isTrue(typeof(response[0].email) === 'string', 'email is not a string');
    });

    it('Pass type', () => {
        assert.isTrue(typeof(response[0].pass) === 'string', 'pass is not a string');
    });

    it('Admin type', () => {
        assert.isTrue(typeof(response[0].admin) === 'boolean', 'admin is not a boolean');
    });
    
});