const { updateBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const id = require('./../../../test-data/id');
const { bug, updateResMessage } = require('../../../test-data/api');

describe('POSITIVE', () => {
    it('UPDATE BUG', () => {
        return updateBug(id, bug)
            .then(res => {
                assert.equal(res.message, updateResMessage);
            })
    });
});