const { updateBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const id = require('./../../../test-data/id');
const { bug, incorrectIDMessage } = require('../../../test-data/api');
const incorrectID = id + 'x';

for (let key of Object.keys(incorrectIDMessage)) {
    incorrectIDMessage[key] = incorrectIDMessage[key].replace(incorrectIDMessage.value, incorrectID);
}

describe('NEGATIVE', () => {
    it('UPDATE BUG WITH INCORRECT ID', () => {
        return updateBug(incorrectID, bug)
            .then(res => {
                assert.deepEqual(res, incorrectIDMessage);
            })
    });
});