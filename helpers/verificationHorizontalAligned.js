const { assert } = require("chai");

module.exports =
    function (elementSel, wholePageSel, expAligned) {
        it("aligned", function(){
            const pageWidth = browser.getElementSize(wholePageSel,"width");
            const elementWidth = browser.getElementSize(elementSel,"width");
            const leftMargin = browser.getLocation(elementSel, "x");
            const rightMargin = pageWidth - elementWidth - leftMargin;
            const aligned = leftMargin === rightMargin? "middle" : leftMargin < rightMargin? "left" : "right";
            assert.equal(aligned, expAligned, "expected " + expAligned + "-aligned, got " + aligned + "-aligned;"
                + " left margin = " + leftMargin + " right margin = " + rightMargin);
        })
    };