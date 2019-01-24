const { assert } = require('chai');
const exd = require('./../test-data/expected').loginFunctionality;
const sel = require('./../test-data/selectors').loginFunctionality;
const login = require('./../helpers/login');
const randomString = require('./../helpers/randomString');
const selB = require('./../test-data/selectors').bugList;
const user = require('./../test-data/users');

describe(exd.suite, function () {

  login();
  console.log(randomString(46));

});

it('Field Email accepts 1 letter', function () {
    browser.url('/');
    browser.waitForVisible(sel.loginBtn, 5000);
    let email = $(sel.email);
    email.setValue('z');
    let value = email.getValue();
    assert.equal(value, 'z', 'Email field doesn/t accepts 1 letter');
})
//
// it('Field Email accepts 1 number', function(){
//     browser.waitForVisible(sel.loginBtn, 5000);
//     let email = $(sel.email);
//     browser.clearElement(sel.email);
//     email.addValue(1);
//     let value = email.getValue();
//     assert.equal(value, 1, 'Email field doesn/t accepts 1 number');
// })
//
//     it('Field Email accepts 45 symbols', function(){
//         let email = $ (sel.email);
//         browser.clearElement(sel.email);
//         email.addValue('12345678910abcdEEDFF!@#$%.,123456111111111118');
//         browser.pause(5000);
//         let value = email.getValue();
//         assert.equal(value, '12345678910abcdEEDFF!@#$%.,123456111111111118', 'Email field  doesn/t accept 45 symbols');
//     })
//
//     it('Field Email doesn/t accepts 46 symbols', function(){
//         let email = $(sel.email);
//         email.addValue('2');
//         //console.log(email.addValue());
//         let value = email.getValue();
//         console.log(value);
//         assert.equal(value, '12345678910abcdEEDFF!@#$%.,123456111111111118', 'Email field doesn/t accept 46 symbols');
//     })
//
//     it('Text - Specify email and password - appears when trying to login with empty login field', function(){
//         browser.clearElement(sel.email);
//         const elem = $(sel.email);
//         let value = elem.getValue();
//         if (value === '') {
//             browser.click(sel.loginBtn);
//         }
//         let result = browser.waitForVisible(sel.alertSE, 3000);
//         assert.equal(result, true, 'The text doesn/t appear when field email is empty');
//     })
//
// });

describe('Password field', function () {
    it('---', function () {
        browser.url('/');
        browser.waitForVisible(sel.loginBtn, 5000);
        let password = $(sel.pass);
        password.setValue('z');
        let value = browser.isVisible(sel.pass);
        password.getCssProperty('-webkit-text-security');
        console.log(password.getCssProperty('-webkit-text-security'));
        assert.equal('-webkit-text-security', '-webkit-text-security', 'Password field doesn/t accepts 1 letter');
    })

    it('Field Password accepts 1 letter', function () {
        browser.url('/');
        browser.waitForVisible(sel.loginBtn, 5000);
        let password = $(sel.pass);
        password.setValue('z');
        let value = password.getValue();
        assert.equal(value, 'z', 'Password field doesn/t accepts 1 letter');
    })

    it('Field Password accepts 1 number', function () {
        browser.waitForVisible(sel.loginBtn, 5000);
        let password = $(sel.pass);
        browser.clearElement(sel.pass);
        password.setValue(1);
        let value = password.getValue();
        assert.equal(value, 1, 'Password field doesn/t accepts 1 number');
    })

    it('Field Password accepts 45 symbols', function () {
        let password = $(sel.pass);
        browser.clearElement(sel.pass);
        password.addValue('12345678910abcdEEDFF!@#$%.,123456111111111118');
        browser.pause(5000);
        let value = password.getValue();
        console.log(value);
        assert.equal(value, '12345678910abcdEEDFF!@#$%.,123456111111111118', 'Password field  doesn/t accept 45 symbols');
    })

    it('Field Pasasword doesn/t accepts 46 symbols', function () {
        let password = $(sel.pass);
        password.addValue('2');
        let value = password.getValue();
        console.log(value);
        assert.equal(value, '12345678910abcdEEDFF!@#$%.,123456111111111118', 'Password field doesn/t accept 46 symbols');
    })

    it('Text - Specify email and password - appears when trying to login with empty password field', function () {
        browser.url('/');
        browser.waitForVisible(sel.pass, 3000);
        browser.clearElement(sel.pass);
        const elem = $(sel.pass);
        const value = elem.getValue();
        if (value === '') {
            browser.click(sel.loginBtn);
        }
        let result = browser.waitForVisible(sel.alertSE, 5000);
        assert.equal(result, true, 'The text doesn/t appear when field password is empty');
    })

    it('------', function () {
        assert.equal();
    })
});
})



// describe('Correct credentials', function () {
//     it('------', function(){
//         assert.equal();
//     })
// });
//
// describe('Error design', function () {
//    it('error design font-family login-page', function(){
//         browser.url('/');
//         browser.waitForVisible('#login', 5000);
//         browser.click('#login');
//         browser.waitForVisible('.alert-local', 5000);
//         let elem = $('.alert-local');
//         let font = elem.getCssProperty('font-family');
//         assert.equal(font.value, 'segoe ui', 'Button has incorrect font-family');
//     })
//
//     it('error design background-color login-page', function(){
//         let elem = $('.alert-local');
//         let background = elem.getCssProperty('background-color');
//         assert.equal(background.parsed.hex, '#f8d7da', 'Button has incorrect background color');
//     })
//
//   it('Login', function(){
//     browser.url('/');
//     browser.waitForVisible(sel.email);
//     browser.setValue(sel.email, user.email);
//     browser.setValue(sel.pass, user.pass);
//     browser.click(sel.loginBtn);
//     browser.waitForVisible(selB.newBug);
//     assert.isTrue($(selB.newBug).isVisible());
//   });

// });

