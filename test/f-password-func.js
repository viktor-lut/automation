const { assert } = require('chai');
//const sel = require('./../test-data/selectors').client;

describe('General', function () {

    it('Remind Password', function(){
        browser.url('/');
        browser.waitForVisible(".btn-link", 10000);

        $(".btn-link").click();
        browser.waitForVisible("#email", 5000);

        $("#email").setValue(['\uE01A', '\uE003']);
        $("#remind").click();

        browser.waitForVisible("div*=Please", 5000);
        const danger = $(".alert-danger").getText();
        assert.equal(danger, 'Please specify an email registered in the system');
    });

    it('email is not registered in the system', function(){

        $("#email").setValue('takogoadresanesushestvuet@mail.ru');
        $("#remind").click();
        browser.waitForVisible("div*=User", 5000);
        const danger = $(".alert-danger").getText();
        assert.equal(danger, 'User with this email is not registered in the system');
    });


    it('correct email', function(){
        $(".btn").click();
        browser.waitForVisible(".btn-link", 5000);
        $(".btn-link").click();
        browser.waitForVisible("#email", 5000);
        $("#email").setValue('zolotokrad@gmail.com');
        $("#remind").click();
        browser.waitForVisible(".alert-danger", 5000);
        const danger = $(".alert-danger").getText();
        assert.equal(danger, 'Password reminder sent to your email. Please, check your inbox.');
    });

    it('Verify Message disappears after 5 seconds', function(){
        $(".btn").click();
        browser.waitForVisible(".btn-link", 5000);                       //этот
        $(".btn-link").click();                                    //тест
        browser.waitForVisible("#email", 5000);                              //написан
        $("#email").setValue('zolotokrad@gmail.com');                  //не
        $("#remind").click();                                            //верно
        const mainPage = browser.waitForVisible(".btn-link", 10000); // а именно эта строка, нужно узнать сколько
                                                                   // по времени висит надпись 'Password reminder sent to your email.'
        assert.equal(mainPage, true,'Can not return main page');
    })

    //////////////////////////////////////////////////////////////////////////
});

describe('Messages design', function () {

    it('Verify Background color', function(){
        $(".btn-link").click();
        browser.waitForVisible("#email", 5000);
        $("#email").setValue(['\uE01A', '\uE003']);
        $("#remind").click();

        let backColor = $('.alert-danger').getCssProperty('background-color');
        assert.equal(backColor.value,'rgba(248,215,218,1)', 'Background color is incorrect');
    });

    it('Verify border color', function(){
        let borderColor = $('.alert-danger').getCssProperty('border-top-color');
        assert.equal(borderColor.value,'rgba(245,198,203,1)', 'Border color is incorrect');
    });

    it('Verify Font family', function(){
        let borderColor = $('.alert-danger').getCssProperty('font-family');
        assert.equal(borderColor.value,'segoe ui', 'Font family is incorrect');
    });

    it('Verify font size', function(){
        let fontSize = $('.alert-danger').getCssProperty('font-size');
        assert.equal(fontSize.value,'16px', 'Font size is incorrect');
    });

    it('Verify font weight', function(){
        let fontWeight = $('.alert-danger').getCssProperty('font-weight');
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    });

    it('Verify font color', function(){
        let fontColor = $('.alert-danger').getCssProperty('color');
        assert.equal(fontColor.value,'rgba(114,28,36,1)', 'Font color is incorrect');
    });

    it('Verify Text is center aligned.', function(){
        let txtCtrAlign = $('.alert-danger').getCssProperty('text-align');
        assert.equal(txtCtrAlign.value,'center', 'Text align is incorrect');
    })
});