
// unit testing

// AAA
/* STEPS
    1. A -> Arrange (you setup the env, variables, or anything else that you need to run the unit)
    2. A -> Act (run the unit of code the "function")
    3. A -> Assert (you check if the output you got from the unit is what you expected to get)
 */

// This is a unit of code
// a unit is a piece of code that does 1 job
function add(numArray) {
    let sum = 0;
    for (let num of numArray){
        sum += num;
    }

    return sum;
}

function test_add_should_add_number_array(){
    // ARRANGE
    const input = [1,2,3];
    const expectedOutput = 6;

    // ACT
    const result = add(input);

    // ASSERTS
    if (result != expectedOutput) {
        console.log('test failed')
    } else {
        console.log('test passed')
    }
}

function test_add_should_throw_error_when_pass_null_input(){
    // ARRANGE
    const input = null;

    try {
        // ACT
        // ASSERT
        const result = add(input);
        console.log('test failed');

    } catch (error) {
        // func thew the error
        console.log('test passed');
    }

}

test_add_should_add_number_array()
test_add_should_throw_error_when_pass_null_input()
