const { getUser } = require('../../../helpers/axios');
const { assert } = require('chai');
const { testId, email, pass} = require('./../../../test-data/users');
const { messageCorUserCredentials } = require('./../../../test-data/api');
let response;

describe('POSITIVE', () => {
    it('GET PARTICULAR USER', () => {
        return getUser( testId, email, pass)
            .then(res => {
                response = res;
                assert.equal(response.message, messageCorUserCredentials);
            })
    });

    it ('Correct Id', () => {
        assert.equal(response.user._id, testId, "Incorrect ID");
       });

    it ('Id type', () => {
        assert.isTrue(typeof response.user._id === 'string', 'id is not a string');
    });

    it ('fname type', () => {
        assert.isTrue(typeof response.user.fname === 'string', 'fname is not a string');
    });

    it ('Lname type', () => {
        assert.isTrue(typeof response.user.lname === 'string', 'lname is not a string');
    });

    it ('Email type', () => {
        assert.isTrue(typeof response.user.email === 'string', 'Email is not a string');
    });

    it ('Pass type', () => {
        assert.isTrue(typeof response.user.pass === 'string', 'Pass is not a string');
    });

    it ('Admin type', () => {
        assert.isTrue(typeof response.user.pass === 'string', 'Admin is not a boolean type');
    });

});