const { getBug } = require('../../../helpers/axios');
const { assert } = require('chai');

describe('POSITIVE', () => {
  it('GET ALL BUGS', () => {
    return getBug()
      .then(res => {
        assert.isTrue(Array.isArray(res), `${res} is not array`);
        assert.isTrue(typeof(res[0]._id) === 'string', 'id is not a string');
        assert.isTrue(typeof(res[0].bug) === 'object' &&
          Array.isArray(res[0].bug) === false &&
          res[0].bug !== null,
          `bug is not object`);
      })
  });
});