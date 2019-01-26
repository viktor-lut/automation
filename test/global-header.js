
const { assert } = require('chai');

describe('General', function () {

      it('Global Header exists', function(){
        browser.url('/');
        assert.equal($(".custom-header").isVisible(), true);
    })

})


describe('Design', function () {

   // it('Verify text-size is 30px', function(){
   //   let textS = $('.font-size').getElementSize('text-size');
   //     console.log(textS);
   //     assert.equal(textS.value,'30px', 'Text size is incorrect');
   // });


    it('Verify font family', function(){
        let fontFam = $('.custom-header').getCssProperty('font-family');
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $('.custom-header').getCssProperty('font-weight');
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

 //   it('Verify text size', function(){
 //       let textS = $('.font-size').getCssProperty('text-size');
 //       console.log(textS);
 //       assert.equal(textS.value,'30px', 'Text size is incorrect');
 //   })



    it('Verify color', function(){
        let color = $('.custom-header').getCssProperty('color');
        console.log(color);
        assert.equal(color.value,'rgba(33,37,41,1)', 'Color is incorrect');
})
    it('Verify background color', function() {
        let backColor = $('.custom-header').getCssProperty('background-color');
        assert.equal(backColor.value,'rgba(0,0,0,0.125)', 'Background color is incorrect');
    })

    it('Verify Icon size', function() {
            const logo = $('.align-content-center')
            const size = logo.getElementSize()
           // console.log(size);
            //assert.equal(size.value,'30*30px', 'Icon size color is incorrect');
    })


    it('Text with icon are center aligned', function(){
        assert.equal($(".align-content-center").isVisible(), true);
    })

})

