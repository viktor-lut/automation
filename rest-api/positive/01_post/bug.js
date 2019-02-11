const { postBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const { bug, postResMessage } = require('../../../test-data/api');
const fs = require('fs');

describe('POST', () => {
  it('Positive', () => {
    return postBug()
      .then(res => {
        fs.writeFile(`${__dirname}/../../../test-data/id.json`,
          JSON.stringify(res.bug._id),
          'utf8',
          function (err) {
            if (err) throw err;
          });
        assert.equal(res.message, postResMessage);
        assert.deepEqual(res.bug.bug, bug.bug);
      })
  });
});