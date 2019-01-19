const { assert } = require('chai');

describe('Navigation Bar', function () {

    let userName = 'test';
    let password = 'test';

    describe('General', function () {

        it('click new bug button', function () {
            browser.url('/');
            browser.waitForVisible('#login');

            browser.setValue('#email', userName);
            browser.setValue('#pass', password);
            browser.click('#login');

            browser.waitForVisible('#new_bug');
            browser.click('#new_bug');
            let result = browser.waitForVisible('.mt-2', 5000);
            assert.equal(result, true, 'Button is not clicked');
        });

    });

    // it('Verify that  navigation Bar contains navigation buttons. ', function () {
    //
    // });

    //     Verify that Background color: rgba(0, 0, 0, 0.03)
    xit('Verify color', function () {
        let backgroundColor = $('.text-sm-left').getCssProperty('color');
        // console.log(fontColor);
        assert.equal(fontColor.value, 'rgba(33,37,41,1)', 'Font color is incorrect');
        // Verify that  navBar width is 100%. Located just below the Header.
        //     Verify that  for Sprint 1 buttons are: New Bug
        // Verify that  for Sprint 1 buttons are: All Issues
        // Verify that  for Sprint 1 buttons are: Logout

    });

    describe('Design', function () {

        it('click new bug button', function () {
            browser.url('/');
            browser.waitForVisible('#login');

            browser.setValue('#email', userName);
            browser.setValue('#pass', password);
            browser.click('#login');

            browser.waitForVisible('#new_bug');
            browser.click('#new_bug');
            let result = browser.waitForVisible('.mt-2', 5000);
            assert.equal(result, true, 'Button is not clicked');
        });
        // Verify that  all the buttons have: Font family: Segoe UI
        // Verify that  font size: 16px
        // Verify that  font weight: 400
        // Verify that  font color: #fff
        // Verify that  button New Bug: Background color: #17a2b8
        // Verify that button New Bug hover background color: #138496
        // Verify that  button All Issues: Background color: #17a2b8
        // Verify that button All Issues hover background color: #138496
        // Verify that  button Logout:Background color: #6c757d
        // Verify that button Logout  hover background color: #5a6268
    });

    describe('Functionality', function () {

        it('click new bug button', function () {
            browser.url('/');
            browser.waitForVisible('#login');

            browser.setValue('#email', userName);
            browser.setValue('#pass', password);
            browser.click('#login');

            browser.waitForVisible('#new_bug');
            browser.click('#new_bug');
            let result = browser.waitForVisible('.mt-2', 5000);
            assert.equal(result, true, 'Button is not clicked');
        });
    });

});