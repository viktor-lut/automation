const {assert} = require('chai');
const data = require('../../test-data/rest-api');
const axios = require('../../helpers/axios');

let id;

describe('POST', () => {
  it('Positive', () => {
    return axios.postBugs()
      .then(res => {
        id = res.bug._id;
        console.log(res.message);
        assert.equal(res.message, data.postResMessage);
        assert.equal(res.bug.bug.summary, data.bug.bug.summary);
      })
  });
});

describe('GET BUG', () => {
  it('Positive', () => {
    return axios.getBug(id)
      .then(res => {
        console.log(res._id);
        assert.equal(res._id, id);
      })
  });
});

describe('REMOVE BUG', () => {
  it('Positive', () => {
    return axios.removeBug(id)
      .then(res => {
        console.log(res.ok);
        assert.equal(res.ok, 1);
      })
  });
});