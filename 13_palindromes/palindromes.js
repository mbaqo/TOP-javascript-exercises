const palindromes = function (string) {
    string = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = string.split("").reverse().join("");
    return string === reversed;
};

// Do not edit below this line
module.exports = palindromes;
