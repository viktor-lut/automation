module.exports =
    function (resObj, expObj, comparisonDataObj) {
        for (let key of Object.keys(comparisonDataObj)) {
            if (resObj[key] == undefined) {
                console.log(`${key} not found in the response object`);
                return false;
            }
            if (expObj[key] == undefined) {
                console.log(`${key} is missing in the expected object`);
                return false;
            }
            switch (comparisonDataObj[key]) {
                case "type":
                    if (typeof resObj[key] !== typeof expObj[key]) {
                        console.log(`${key} value type comparison failed, expected: ${typeof expObj[key]}, got: ${typeof resObj[key]}`);
                        return false;
                    }
                    break;
                case true:
                    if (resObj[key] !== expObj[key]) {
                        console.log(`${key} value comparison failed, expected: ${expObj[key]}, got: ${resObj[key]}`);
                        return false;
                    }
                    break;
            }
        }
        return true;
    };