const { assert } = require('chai');


describe('General', function () {

     it('Verify receive an email', function(){

        browser.url('https://mail.google.com');
        browser.waitForVisible("#headingText", 3000);
        $("#identifierId").setValue("testreacttest@gmail.com");
        const next = $(".CwaK9");
        next.click();
        browser.waitForVisible("#headingText");
        browser.pause(1000);
        const pass = $("input.whsOnd.zHQkBf");
        pass.setValue(['t','e','s','t','T','e','s','t']);
        browser.pause(500);

        console.log(pass.getValue());
        next.click();

       // const gmail = $("div[title='Gmail']");
       // const inbox = $( ".aHS-bnt");
       // const starred = $( ".J-Ke.n0");
       // console.log('--*--');
       // browser.waitForVisible(gmail,9000);
       // console.log('**-**');
       // starred.click();
       // inbox.click();
       // const nameMail = $("div span [name='react.bug.tracker']");
       // const mail = $(".zA.zE");
       // nameMail.click();
       // browser.pause(1000);

       // assert.equal(danger, exd.remindPass);
    });

   it(' it 2', function(){

      const element = $("#gb");
      const inbox = $( ".aHS-bnt");
      const starred = $( ".J-Ke.n0");
      console.log('**before gb**');
      browser.waitForVisible($(".gb_7d.gb_Ce.gb_fe"),9000);
      console.log('**after gb**');
      // starred.click();
      // inbox.click();

      // const nameMail = $("div span [name='react.bug.tracker']");
      // const mail = $(".zA.zE");
      // nameMail.click();
      // browser.pause(1000);

      // assert.equal(danger, exd.remindPass);
   });

});