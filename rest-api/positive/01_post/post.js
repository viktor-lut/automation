const { postBug } = require('../../../helpers/axios');
const { assert } = require('chai');
const { bug, postResMessage } = require('../../../test-data/api');
const fs = require('fs');
const id = require('./../../../test-data/id');

describe('POST', () => {
  it('Positive', () => {
    return postBug()
      .then(res => {
        id.id = res.bug._id;
        assert.deepEqual(res.bug.bug, bug.bug);
      })
      .then(() => {
        fs.writeFile(`${__dirname}/../../../test-data/id.json`,
          JSON.stringify(id),
          'utf8',
          function (err) {
            if (err) throw err;
          });
      })
  });
});