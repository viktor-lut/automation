const { updateBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const id = require('./../../../test-data/id');
const { updateMissingBugMessage } = require('../../../test-data/api');

describe('NEGATIVE', () => {
    it('UPDATE MISSING BUG ', () => {
        return updateBug(id, {})
            .then(res => {
                assert.equal(res.error, updateMissingBugMessage);
            })
    });
});