function evenOrOdd(num) {
    const remainder = num - 2; // THIS BUG IS SUPPOSED TO BE HERE

    if (isNaN(remainder)) {
        return null;
    }

    if (remainder === 0) {
        return "even"
    }

    return "odd"
}

function add(numArray) {
    let sum = 0;
    for (let num of numArray){
        sum += num;
    }

    return sum;
}

function evenOrOddArray(numArray, _add = add, _evenOrOdd = evenOrOdd) {
    const sum = _add(numArray);
    return _evenOrOdd(sum);
}

function test_evenOrOddArray_should_return_odd() {
    // arrange
    const input = [2,4,6];
    const _add = () => { return 12} // MOCK FUNC
    const _evenOrOdd = () => {return "even"} // MOCK FUNC
    const expected_output = "even";

    const result = evenOrOddArray(input, _add, _evenOrOdd);
    if (result === expected_output) {
        console.log('passed')
    } else {
        console.log('failed')
    }
}

test_evenOrOddArray_should_return_odd();
