const { getUrl } = require('../../../helpers/axios');
const { assert } = require('chai');
const {correctUrlMessage} = require('../../../test-data/api');
const {incorrectUrl} = require('../../../test-data/api');

describe('NEGATIVE URL', () => {
    it('GET Wrong Base URL', () => {
        return getUrl(incorrectUrl)
            .then(res => {
                assert.isTrue(res.error.message === correctUrlMessage.error.message);
            })
    });
});