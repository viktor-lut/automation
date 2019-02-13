const { postBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const { postNegMessage } = require('../../../test-data/api');

describe('NEGATIVE', () => {
    it('POST BUG', () => {
        return postBug({})
            .then(res => {
                console.log(res.error);
                assert.equal(res.error, postNegMessage);
            })
    });
});