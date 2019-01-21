const assert = require('assert');

describe('forgot password functionality', function () {

    it('Remind Password', function(){
        browser.url('/');
        browser.waitForVisible(".btn-link", 5000);

        $(".btn-link").click();
        browser.waitForVisible("#email", 5000);

        $("#email").setValue(['\uE01A', '\uE003']);

        $("#remind").click();

        browser.waitForVisible(".alert-danger", 5000);
        const danger = $(".alert-danger").getText();
        assert.equal(danger, 'Please specify an email registered in the system');
    })

   // it('Global Header exists', function(){
     //   assert.equal($(".custom-header").isVisible(), true);   remind
  //  });

});