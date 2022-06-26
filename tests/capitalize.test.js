import { capitalize } from "../src/capitalize.js";
import { strict as assert } from 'assert';

assert.deepEqual(capitalize(''), '');
assert.deepEqual(capitalize('biba'), 'Biba');

// if (capitalize('') !== '') {
//    throw new Error('Function error!');
// }

// if (capitalize('hello') !== 'Hello') {
//    throw new Error('Функция работает неверно!')
// }

console.log('All test passed');