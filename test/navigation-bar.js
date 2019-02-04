const { assert } = require('chai');
const sel = require('./../test-data/selectors').loginFunctionality;
const selBar = require('./../test-data/selectors').navigationBar;
const user = require('./../test-data/users');

describe('Navigation Bar General', function () {

    before(function() {
        browser.url('/');
        browser.waitForVisible(sel.email);
        browser.setValue(sel.email, user.email);
        browser.setValue(sel.pass, user.pass);
        browser.click(sel.loginBtn);
        browser.waitForVisible(selBar.bar);
    });

    it('contains navigation buttons', function() {
        assert.isTrue($(selBar.newBugButton).isVisible());
        assert.isTrue($(selBar.allIssuesButton).isVisible());
        assert.isTrue($(selBar.logoutButton).isVisible());
    });

    it('has background color rgba(0, 0, 0, 0.03)', function () {
        let background =  $(selBar.bar).getCssProperty('background-color').value;
        assert.equal(background, "rgba(0,0,0,0.03)", 'Bar has incorrect background color');
    });

    it('has new_bug button with text New Bug', function () {
        let text = $(selBar.newBugButton).getText();
        assert.equal(text, "New Bug");
    });

    it('The font-size is 16px', function(){
        assert.equal($(selBar.newBugButton).getCssProperty("font-size").value, "16px", 'The font-size is not 16px');
    });

    it('The font-family is segoe ui', function(){
        let mainFooterFam = $(selBar.newBugButton).getCssProperty('font-family').value;
        assert.equal(mainFooterFam, "segoe ui", 'The font-family is not segoe');
    });

    it('The font weight is 400', function() {
        let mainFooterWeight = $(selBar.newBugButton).getCssProperty('font-weight').value;
        assert.equal(mainFooterWeight, 400, 'The font is not 400');
    });

    it('The color is #fff', function(){
        let mainFooterColor = $(selBar.newBugButton).getCssProperty('color').parsed.hex;
        assert.equal(mainFooterColor, "#ffffff", 'The color is not #ffffff');
    });

    it('has background color #17a2b8', function () {
        let background =  $(selBar.newBugButton).getCssProperty('background-color');
        assert.equal(background.parsed.hex, "#17a2b8", 'Bar has incorrect background color');
    });

    it('has hover background color #138496', function(){
        browser.moveToObject(selBar.newBugButton);
        browser.pause(200);
        let hBColor = $(selBar.newBugButton).getCssProperty('background-color');
        assert.equal(hBColor.parsed.hex, "#138496", 'Hover background color is incorrect');
    });

    it('navigates to New Bug Report', function () {
        browser.click(selBar.newBugButton);
        browser.pause(500);
        assert.isTrue($(selBar.newBugPage).isVisible());
    });
    //  all issues
    it('has allIssues button with text all issues', function () {
        let text = $(selBar.allIssuesButton).getText();
        assert.equal(text, "All Issues");
    });

    it('The font-size is 16px', function(){
        assert.equal($(selBar.allIssuesButton).getCssProperty("font-size").value, "16px", 'The font-size is not 16px');
    });

    it('The font-family is segoe ui', function(){
        let mainFooterFam = $(selBar.allIssuesButton).getCssProperty('font-family').value;
        assert.equal(mainFooterFam, "segoe ui", 'The font-family is not segoe');
    });

    it('The font weight is 400', function() {
        let mainFooterWeight = $(selBar.allIssuesButton).getCssProperty('font-weight').value;
        assert.equal(mainFooterWeight, 400, 'The font is not 400');
    });

    it('The color is #fff', function(){
        let mainFooterColor = $(selBar.allIssuesButton).getCssProperty('color').parsed.hex;
        assert.equal(mainFooterColor, "#ffffff", 'The color is not #ffffff');
    });

    it('has background color #17a2b8', function () {
        let background =  $(selBar.allIssuesButton).getCssProperty('background-color');
        assert.equal(background.parsed.hex, "#17a2b8", 'Bar has incorrect background color');
    });

    it('has hover background color #138496', function(){
        browser.moveToObject(selBar.allIssuesButton);
        browser.pause(200);
        let hBColor = $(selBar.allIssuesButton).getCssProperty('background-color');
        assert.equal(hBColor.parsed.hex, "#138496", 'Hover background color is incorrect');
    });

    it('navigates to all Issues Report', function () {
        browser.click(selBar.allIssuesButton);
        browser.pause(500);
        assert.isTrue($(selBar.allIssuesPage).isVisible());
    });

    //  Logout
    it('has logout button with text logout', function () {
        let text = $(selBar.logoutButton).getText();
        assert.equal(text, "Logout");
    });

    it('The font-size is 16px', function(){
        assert.equal($(selBar.logoutButton).getCssProperty("font-size").value, "16px", 'The font-size is not 16px');
    });

    it('The font-family is segoe ui', function(){
        let mainFooterFam = $(selBar.logoutButton).getCssProperty('font-family').value;
        assert.equal(mainFooterFam, "segoe ui", 'The font-family is not segoe');
    });

    it('The font weight is 400', function() {
        let mainFooterWeight = $(selBar.logoutButton).getCssProperty('font-weight').value;
        assert.equal(mainFooterWeight, 400, 'The font is not 400');
    });

    it('The color is #fff', function(){
        let mainFooterColor = $(selBar.logoutButton).getCssProperty('color').parsed.hex;
        assert.equal(mainFooterColor, "#ffffff", 'The color is not #ffffff');
    });

    it('has background color  #6c757d', function () {
        let background =  $(selBar.logoutButton).getCssProperty('background-color');
        assert.equal(background.parsed.hex, "#6c757d", 'Bar has incorrect background color');
    });

    it('has hover background color  #5a6268', function(){
        browser.moveToObject(selBar.logoutButton);
        browser.pause(200);
        let hBColor = $(selBar.logoutButton).getCssProperty('background-color');
        assert.equal(hBColor.parsed.hex, "#5a6268", 'Hover background color is incorrect');
    });

    it('navigates to logout Report', function () {
        browser.click(selBar.logoutButton);
        browser.pause(500);
        assert.isTrue($(selBar.logoutPage).isVisible());
    });
});