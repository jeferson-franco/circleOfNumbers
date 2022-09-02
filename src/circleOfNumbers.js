function solution(n, firstNumber) {
    return (firstNumber + n / 2) % n;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test circleOfNumbers

// alternative solution
// const solution = (n, firstNumber) => (firstNumber + n / 2) % n;
