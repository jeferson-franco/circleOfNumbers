const solution = require('./circleOfNumbers.js');

test('test 1', () => {
    expect(solution(10, 2)).toEqual(7);
});

test('test 2', () => {
    expect(solution(10, 7)).toEqual(2);
});

test('test 3', () => {
    expect(solution(4, 1)).toEqual(3);
});

test('test 4', () => {
    expect(solution(6, 3)).toEqual(0);
});

test('test 5', () => {
    expect(solution(18, 6)).toEqual(15);
});

test('test 6', () => {
    expect(solution(12, 10)).toEqual(4);
});

test('test 7', () => {
    expect(solution(18, 5)).toEqual(14);
});
