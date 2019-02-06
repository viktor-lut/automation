const { postBug, getBug, removeBug } = require('../helpers/axios');
const { assert } = require('chai');
const { bug, postResMessage } = require('../test-data/api');

let id;

describe('POST', () => {
  it('Positive', () => {
    return postBug()
      .then(res => {
        id = res.bug._id;
        console.log(res.message);
        assert.deepEqual(res.bug.bug, bug.bug);
      })
  });
});

describe('GET BUG', () => {
  it('Positive', () => {
    return getBug(id)
      .then(res => {
        console.log(res._id);
        assert.equal(res._id, id);
      })
  });
});

describe('REMOVE BUG', () => {
  it('Positive', () => {
    return removeBug(id)
      .then(res => {
        console.log(res.ok);
        assert.equal(res.n, 1);
      })
  });
});