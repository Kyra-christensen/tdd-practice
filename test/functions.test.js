// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
} from '../functions.js';

import {
    multiplyBySeven,
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

