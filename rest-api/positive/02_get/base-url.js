const { getUrl } = require('../../../helpers/axios');
const { assert } = require('chai');
const {correctUrlMessage} = require('../../../test-data/api');

describe('POSITIVE URL', () => {
    it('GET Base URL', () => {
        return getUrl()
            .then(res => {
                assert.isTrue(res.error.message === correctUrlMessage.error.message);
            })
    });
});