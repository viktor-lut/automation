const assert = require('assert');

describe('Email field design', function () {

    it('Email field placeholder displayed', function(){
        browser.url('/');
        assert.equal($(selector).isVisible(), 'Email *');
    })

});