const { getBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const id = require('./../../../test-data/id');

describe('POSITIVE', () => {
  it('GET PARTICULAR BUG', () => {
    return getBug(id)
      .then(res => {
        assert.equal(res._id, id);
      })
  });
});