const { assert } = require('chai');
const exd = require('./../../test-data/expected').globalFooter;
const sel = require('./../../test-data/selectors').globalFooter;
const selCl = require('./../../test-data/selectors').client;

module.exports =
    function(){
        return it("The Global Footer is on the bottom on the page", function(){
            browser.url('/');
            let headerLocat = $(selCl.header).getLocation('y');
            let appLocat = $(selCl.app).getLocation('y');
            let footerLocatPage = $(selCl.footer).getLocation('y');
            assert.equal(footerLocatPage >= (headerLocat + appLocat)? "on the bottom" : 'not correct', exd.glFooterBottom);
        });

    }