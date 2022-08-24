function evenOrOdd(num) {
    const remainder = num % 2;

    if (isNaN(remainder)) {
        return null;
    }

    if (remainder === 0) {
        return "even"
    }

    return "odd"
}

function test_evenOrOdd_should_return_even() {
    // ARRANGE
    const input = 4;
    const expected_output = "even"

    // ACT
    const result = evenOrOdd(input);

    // ASSERT
    if (result === expected_output) {
        console.log('test passed')
    } else {
        console.log('test failed')
    }
}

function test_evenOrAdd_should_return_odd() {
    const input = 3;
    const expected_output = "odd";

    // ACT
    const result = evenOrOdd(input);

    // ASSERT
    if (result === expected_output) {
        console.log('test passed')
    } else {
        console.log('test failed')
    }

}

test_evenOrOdd_should_return_even()
test_evenOrAdd_should_return_odd()