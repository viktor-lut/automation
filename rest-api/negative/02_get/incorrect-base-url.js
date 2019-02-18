const { getUrl } = require('../../../helpers/axios');
const { assert } = require('chai');
const {correctUrlMessage} = require('../../../test-data/api');
let incorrectUrl = 'anyword';

describe('POSITIVE URL', () => {
    it('GET Base URL', () => {
        return getUrl(incorrectUrl)
            .then(res => {
                assert.isTrue(res.error.message === correctUrlMessage.error.message);
            })
    });
});