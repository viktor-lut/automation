const { postUser } = require('../../../helpers/axios');
const { assert } = require('chai');
const { user, postUserResMessage } = require('../../../test-data/api');
const fs = require('fs');
const randomString = require('../../../helpers/randomString');
let response = {};

for (let key of Object.keys(user)) {
    if (typeof user[key] === "string") {
        user[key] = user[key].replace("x", randomString(6, true) );
    };
}

describe('POSITIVE POST USER RESPONSE', () => {

    it('is object with correct message', () => {
        return postUser(user)
            .then(res => {
                fs.writeFile(`${__dirname}/../../../test-data/idUser.json`,
                    JSON.stringify(res.user._id),
                    'utf8',
                    function (err) {
                        if (err) throw err;
                    });
                response = res;
                assert.isTrue(typeof(res) === 'object' &&
                    Array.isArray(res) === false &&
                    res !== null,
                    `FAILED, response is not object`);
                assert.equal(res.message, postUserResMessage, `FAILED, expected: '${postUserResMessage}', got '${res.message}'`);
            })
    });


    it("id type", () => {
        assert.equal(typeof response.user._id, "string", `FAILED, expected: string, got ${typeof response.user._id}`);
    });


    Object.keys(user).map(key => {
        if (key !== "pass") {

            it(`${key} value`, () => {
                assert.equal(response.user[key], user[key], `FAILED, expected: '${user[key]}', got '${response.user[key]}'`);
            })

        }
    })

});

