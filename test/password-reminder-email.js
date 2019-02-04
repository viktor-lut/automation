const { assert } = require('chai');

describe('General', function () {

    it('Verify receive an email', function(){
        browser.url('https://mail.google.com');
        browser.waitForVisible("#headingText", 3000);

      //   $(".CwaK9").click();
        // browser.waitForVisible(sel.email, 5000);
        //
        $("#identifierId").setValue("testreacttest@gmail.com");
        $(".CwaK9").click();
        browser.waitForVisible("#headingText");
        browser.pause(5000);
        const pass = $("input.whsOnd.zHQkBf");
        pass.setValue(['t','e','s','t','T','e','s','t']);
        browser.pause(2000);

        console.log(pass.getValue());
        $(".CwaK9").click();
        // $(".VhKI7c").click();
        //
        // browser.waitForVisible(sel.emptyField, 5000);
        // const danger = $(sel.errorMessage).getText();     ".CwaK9" далее
        browser.pause(1000);
       // assert.equal(danger, exd.remindPass);
    });

});