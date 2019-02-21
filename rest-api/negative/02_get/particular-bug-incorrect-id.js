const { getBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const { incorrectIdMessage } = require('../../../test-data/api');
const incorrectId = require('./../../../test-data/incorrectId');
let response;

describe('NEGATIVE GET PARTICULAR BUG WITH INCORRECT ID', () => {
    it('correct message', () => {
        return getBug(incorrectId)
            .then(res => {
                response = res;
                assert.equal(res.message, incorrectIdMessage.message);
            })
    });

    it('correct error', () => {
        assert.equal(response.error, incorrectIdMessage.error);
    });

    it('correct value', () => {
        assert.equal(response.value, incorrectIdMessage.value);
    });
});