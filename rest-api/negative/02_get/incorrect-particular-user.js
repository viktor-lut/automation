const { getUser } = require('../../../helpers/axios');
const { assert } = require('chai');
const { testId, email, pass} = require('./../../../test-data/users');
const { incorrectUser, incorrectUserId, correctIdWithNoPass } = require('./../../../test-data/api');
let errorId;
let incorEmail = email + "a";
let incorPass = pass + "a";
let incrId = testId + "a";

describe('NEGATIVE PARTICULAR USER', () => {

    it('Error for user with wrong email, correct id and pass', () => {
        return getUser( testId, incorEmail, pass)
            .then(res => {
                assert.deepEqual(res, incorrectUser);
            });
    });

    it('Error for user with wrong password, correct id&email', () => {
        return getUser( testId, email, incorPass)
            .then(res => {
                assert.deepEqual(res, incorrectUser);
            });
    });

    it('Error for user with wrong Id and correct email&password', () => {
        return getUser( incrId, email, pass)
            .then(res => {
                assert.equal(res.message, incorrectUserId.message);
            });
    });

    it('Get error for particular user with wrong Id and correct email&password', () => {
        return getUser( incrId, email, pass)
            .then(res => {
                assert.equal(res.value, incorrectUserId.value);
            });
    });

    it('Error for user with wrong Id and correct email&password', () => {
        return getUser( incrId, email, pass)
            .then(res => {
                errorId = res.error;
                assert.isTrue(errorId.includes(incrId), incorrectUserId.error.includes(incrId));
            });
    });

    it('Error for user with correct ID, wrong email&password', () => {
        return getUser(testId, incorEmail , incorPass)
            .then(res => {
                assert.deepEqual(res, incorrectUser);
            });
    });

    it('Error for incorrect user with no email& password', () => {
        return getUser(incrId)
            .then(res => {
                assert.equal(res.message, incorrectUserId.message);
            });
    });

    it('Correct Id, but no password&email', () => {
        return getUser(testId)
            .then(res => {
                assert.deepEqual(res, correctIdWithNoPass);
            });
    });

});


