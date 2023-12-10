const fibonacci = function(input) {
    // Convert num input to int
    // Reject if it is less than 1
    const num = parseInt(input);
    if (num < 1) {
        return "OOPS"
    }
    
    if (num == 1 || num == 2) {
        return 1;
    }

    let seq = [1, 1];
    for (let i = 2; i < num; i++) {
        seq.push(parseInt(seq.slice(-2,-1)) + parseInt(seq.slice(-1)))
        console.log(`seq is ${seq}`)
    }
    return seq.pop();
};

// Do not edit below this line
module.exports = fibonacci;
