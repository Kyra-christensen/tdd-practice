// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray, 
    returnAsAString,
    makeLuckyGreeting
} from '../functions.js';

import {
    getSecondItem,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamation points added to the end', (expect) => {
    const expected1 = 'puppy!!!';

    const actual1 = addExclamationPoints('puppy');
    const expected2 = 'guppy!!!';

    const actual2 = addExclamationPoints('guppy');


    expect.equal(actual1, expected1, 'should return puppy!!!');
    expect.equal(actual2, expected2, 'should return guppy!!!');
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

    expect.equal(actual1, expected1, 'should return the number 35');
    expect.equal(actual2, expected2, 'should return the number 14');
});

test('multiplyByTwelveThenHalve should take in a number, multiply that number by 12 and then halve that sum', (expect) => {
    const expected1 = (4 * 12) / 2;
    const actual1 = multiplyBy12ThenHalve(4);

    const expected2 = (3 * 12) / 2;
    const actual2 = multiplyBy12ThenHalve(3);

    expect.equal(actual1, expected1, 'should return the number 24');
    expect.equal(actual2, expected2, 'should return the number 18');
});

test('divideThenMultiply should take in three numbers, divide the first by the second and then multipy the sum by the last number', (expect) => {
    const expected1 = (12 / 4) * 2;
    const actual1 = divideThenMultiply(12, 4, 2);

    const expected2 = (36 / 2) * 5;
    const actual2 = divideThenMultiply(36, 2, 5);

    expect.equal(actual1, expected1, 'should return the number 6');
    expect.equal(actual2, expected2, 'should return the number 90');
});

test('returnAsAnArray should take in three numbers and return those three numbers in an array', (expect) => {
    const expected1 = [2, 3, 4];
    const actual1 = returnAsAnArray(2, 3, 4) ;

    const expected2 = [7, 2, 9];
    const actual2 = returnAsAnArray(7, 2, 9);

    expect.deepEqual(actual1, expected1, 'should return the array [2, 3, 4]');
    expect.deepEqual(actual2, expected2, 'should return the array [7, 2, 9]');
});

test('returnAsAString should take in three numbers and return them as a mushed string', (expect) => {
    const expected1 = ('842');
    const actual1 = returnAsAString(8, 4, 2) ;

    const expected2 = ('342');
    const actual2 = returnAsAString(3, 4, 2) ;

    expect.deepEqual(actual1, expected1, 'should return the string 842');
    expect.deepEqual(actual2, expected2, 'should return the string 342');
});

test('makeLuckyGreeting should take in two numbers and return a greeting where it says that the sum of those two numbers is todays lucky number', (expect) => {
    const expected1 = 'Hello! Your lucky number for the day is 9.';
    const actual1 = makeLuckyGreeting(2, 7);

    const expected2 = 'Hello! Your lucky number for the day is 22.';
    const actual2 = makeLuckyGreeting(20, 2);

    expect.equal(actual1, expected1, 'should return 14 as the lucky number');
    expect.equal(actual2, expected2, 'should return 22 as the lucky number');
});

test('getSecondItem should take an array and return the second item of that array', (expect) => {
    const expected1 = 'apple';
    const actual1 = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual1, expected1, ' should return the second item of the array');
});