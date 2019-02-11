const { removeBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const { id } = require('./../../../test-data/id');

describe('REMOVE BUG', () => {
  it('REMOVE BUG', () => {
    return removeBug(id)
      .then(res => {
        assert.equal(res.n, 1);
      })
  });
});