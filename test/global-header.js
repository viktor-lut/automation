
const { assert } = require('chai');

describe('General', function () {

    it('Global Header exists', function(){
        browser.url('/Bug Tracker');
        assert.equal($(".custom-header").isVisible(), true);
    })

});


