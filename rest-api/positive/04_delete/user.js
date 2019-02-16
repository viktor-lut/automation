const { assert } = require('chai');
const { removeUser } = require('../../../helpers/axios');
const idUser = require('../../../test-data/idUser');

describe('POSITIVE', () => {
    it('REMOVE USER', () => {
        return removeUser(idUser)
            .then(res => {
                assert.equal(res.result, 1);
            })
    });
});