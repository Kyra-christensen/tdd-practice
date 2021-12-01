// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray, 
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
} from '../functions.js';

import {
    getLastItem,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamation points added to the end', (expect) => {
    const expected1 = 'puppy!!!';

    const actual1 = addExclamationPoints('puppy');
    const expected2 = 'guppy!!!';

    const actual2 = addExclamationPoints('guppy');
    const expected3 = 'kitty!!!';
    const actual3 = addExclamationPoints('kitty');


    expect.equal(actual1, expected1, 'should return puppy!!!');
    expect.equal(actual2, expected2, 'should return guppy!!!');
    expect.equal(actual3, expected3, 'should return kitty!!!');
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('multiplyBySeven should take in a number and multiply it by seven', (expect) => {
    const expected1 = 5 * 7;
    const actual1 = multiplyBySeven(5);

    const expected2 = 2 * 7;
    const actual2 = multiplyBySeven(2);

    const expected3 = 4 * 7;
    const actual3 = multiplyBySeven(4);

    expect.equal(actual1, expected1, 'should return the number 35');
    expect.equal(actual2, expected2, 'should return the number 14');
    expect.equal(actual3, expected3, 'should return the number 28');
});

test('multiplyByTwelveThenHalve should take in a number, multiply that number by 12 and then halve that sum', (expect) => {
    const expected1 = (4 * 12) / 2;
    const actual1 = multiplyBy12ThenHalve(4);

    const expected2 = (3 * 12) / 2;
    const actual2 = multiplyBy12ThenHalve(3);

    const expected3 = (7 * 12) / 2;
    const actual3 = multiplyBy12ThenHalve(7);

    expect.equal(actual1, expected1, 'should return the number 24');
    expect.equal(actual2, expected2, 'should return the number 18');
    expect.equal(actual3, expected3, 'should return the number 42');
});

test('divideThenMultiply should take in three numbers, divide the first by the second and then multipy the sum by the last number', (expect) => {
    const expected1 = (12 / 4) * 2;
    const actual1 = divideThenMultiply(12, 4, 2);

    const expected2 = (36 / 2) * 5;
    const actual2 = divideThenMultiply(36, 2, 5);

    const expected3 = (48 / 2) * 9;
    const actual3 = divideThenMultiply(48, 2, 9);

    expect.equal(actual1, expected1, 'should return the number 6');
    expect.equal(actual2, expected2, 'should return the number 90');
    expect.equal(actual3, expected3, 'should return the number 216');
});

test('returnAsAnArray should take in three numbers and return those three numbers in an array', (expect) => {
    const expected1 = [2, 3, 4];
    const actual1 = returnAsAnArray(2, 3, 4) ;

    const expected2 = [7, 2, 9];
    const actual2 = returnAsAnArray(7, 2, 9);

    const expected3 = [8, 4, 9];
    const actual3 = returnAsAnArray(8, 4, 9);

    expect.deepEqual(actual1, expected1, 'should return the array [2, 3, 4]');
    expect.deepEqual(actual2, expected2, 'should return the array [7, 2, 9]');
    expect.deepEqual(actual3, expected3, 'should return the array [8, 4, 9]');
});

test('returnAsAString should take in three numbers and return them as a mushed string', (expect) => {
    const expected1 = ('842');
    const actual1 = returnAsAString(8, 4, 2) ;

    const expected2 = ('342');
    const actual2 = returnAsAString(3, 4, 2) ;

    const expected3 = ('689');
    const actual3 = returnAsAString(6, 8, 9) ;

    expect.deepEqual(actual1, expected1, 'should return the string 842');
    expect.deepEqual(actual2, expected2, 'should return the string 342');
    expect.deepEqual(actual3, expected3, 'should return the string 689');
});

test('makeLuckyGreeting should take in two numbers and return a greeting where it says that the sum of those two numbers is todays lucky number', (expect) => {
    const expected1 = 'Hello! Your lucky number for the day is 9.';
    const actual1 = makeLuckyGreeting(2, 7);

    const expected2 = 'Hello! Your lucky number for the day is 22.';
    const actual2 = makeLuckyGreeting(20, 2);

    const expected3 = 'Hello! Your lucky number for the day is 55.';
    const actual3 = makeLuckyGreeting(50, 5);

    expect.equal(actual1, expected1, 'should return 9 as the lucky number');
    expect.equal(actual2, expected2, 'should return 22 as the lucky number');
    expect.equal(actual3, expected3, 'should return 55 as the lucky number');
});

test('getSecondItem should take an array and return the second item of that array', (expect) => {
    const expected1 = 'apple';
    const actual1 = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual1, expected1, ' should return the second item of the array');
});

test('getLastItem should take an array and display the last item, no matter the length of the array', (expect) => {
    const expected1 = 'plum';
    const actual1 = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual1, expected1, 'should return the last array item');
});
