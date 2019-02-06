const { assert } = require('chai');

describe('General', function () {

     it('Verify receive an email', function(){
        browser.url('https://mail.google.com');
        browser.waitForVisible("#headingText", 3000);

        $("#identifierId").setValue("bonsecavek@gmail.com");
        const next = $(".CwaK9");
        next.click();
        browser.waitForVisible("#headingText");
        browser.pause(2000);
        const pass = $("input.whsOnd.zHQkBf");
        pass.setValue(['T','e','s','t','1','T','e','s','t','2']);
        browser.pause(3000);

        console.log(pass.getValue());
        next.click();
        browser.pause(1000);
       // assert.equal(danger, exd.remindPass);
    });

});