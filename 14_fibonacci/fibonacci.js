const fibonacci = function(index) {
    index = Number(index);

    if (index < 0) {
        return "OOPS";
    }
    if (index === 0) {
        return 0;
    }

    let first = 0;
    let second = 1;
    for (let i = 2; i <= index; i++) {
        let current = first + second;
        first = second;
        second = current;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
