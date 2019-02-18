const { getUser } = require('../../../helpers/axios');
const { assert } = require('chai');
const { testId, email, pass} = require('./../../../test-data/users');

describe('POSITIVE', () => {
    it('GET PARTICULAR BUG', () => {
        return getUser( testId, email, pass)
            .then(res => {
                assert.equal(res, id);
            })
    });
});