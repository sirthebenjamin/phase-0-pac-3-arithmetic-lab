
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        // Can't divide by zero
        throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

    function increment(n) {
        return n + 1;
    }

    function decrement(n) {
        return n - 1;
    }

function makeInt(string) {
    return parseInt(string,10)
}

function preserveDecimal(string) {
    return parseFloat(string, 10)
}
    
    
    
    

