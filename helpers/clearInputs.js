module.exports =
    function (inputSelectors) {

        let valueArr = [];
        inputSelectors.map(el => {
            valueArr.push($(el).getValue());
            $(el).setValue(['a', '\uE003']);
        });
        return valueArr;

    };