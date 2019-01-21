const { assert } = require('chai');
//const sel = require('./../test-data/selectors').client;

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
    });

    it('email is not registered in the system', function(){

        $("#email").setValue('zolotokrad@mail.ru');

        $("#remind").click();

        browser.waitForVisible(".alert-danger", 5000);
        browser.pause(2000);
        const danger = $(".alert-danger").getText();
        assert.equal(danger, 'User with this email is not registered in the system');
    });

    it('correct email', function(){

        $("#email").setValue('zolotokrad@gmail.com');

        $("#remind").click();

        browser.waitForVisible(".alert-danger", 5000);
        browser.pause(2000);
        const danger = $(".alert-danger").getText();
        console.log(danger);
        assert.equal(danger, 'Password reminder sent to your email. Please, check your inbox.');
    })






});
//zolotokrad@mail.ru