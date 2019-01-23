
const assert = require('assert');

describe('General', function () {

    it('Global Header exist', function(){
        browser.url('/Bug Tracker');
        assert.equal($(".custom-header").isVisible(), true);
    })

 //   it('Global Header title', function(){
   //   console.log($(".custom-header span style"));
    //   assert.equal($(".custom-header span style").isVisible(), true);
   // })

});


