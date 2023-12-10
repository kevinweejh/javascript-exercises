const sumAll = function(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        console.log('typecheck fail');
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0) {
        console.log('negativity check fail');
        return 'ERROR';
    }
    if (num1 > num2) {
        let sum = num2;
        let counter = num2 + 1;
        while (counter <= num1) {
            sum += counter;
            counter++;
        }
        return sum;
    } else {
        let sum = num1;
        let counter = num1 + 1;
        while (counter <= num2) {
            sum += counter;
            counter++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
