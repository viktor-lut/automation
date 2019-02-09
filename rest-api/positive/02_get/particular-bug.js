const { getBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const { id } = require('./../../../test-data/id');

describe('GET BUG', () => {
  it('Positive', () => {
    return getBug(id)
      .then(res => {
        assert.equal(res._id, id);
      })
  });
});