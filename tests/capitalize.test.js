
import { capitalize } from "../src/capitalize.js";

if (capitalize('') !== '') {
    throw new Error('Function error!');
}

if (capitalize('hello') !== 'Hello') {
    throw new Error('Функция работает неверно!')
}

console.log('All test passed');