const { assert } = require("chai");

module.exports =
    function (selector, cssProp) {         // cssProp is object {'property name':'expected value'}
        const keys = Object.keys(cssProp);
        let state = "";
        let value;
        for (let key of keys) {
            it(key, function(){
                switch (key) {
                    case "hover":
                        state = key + " ";
                        browser.moveToObject(selector);
                        browser.pause(200);
                        cssProp = cssProp[key];
                        key = Object.keys(cssProp)[0];
                        break;
                    case "focus":
                        browser.click(selector);
                        browser.pause(200);
                        cssProp = cssProp[key];
                        key = Object.keys(cssProp)[0];
                        break;
                }
                value = $(selector).getCssProperty(key);
                value = key.includes("color") ? value["parsed"]["hex"] : value["value"];
                assert.equal(value, cssProp[key], `expected ${state} ${key} is ${cssProp[key]}, got ${value}`);
            })
        }
    };