/* Strange JS behaviors and where to find (some of) them */
'use strict';

const type = typeof NaN;
console.log('NaN is a ' + type); // number
console.log(`NaN === NaN? ${NaN === NaN}\n`); //true -> FALSE

console.log(`NaN == NaN? ${NaN == NaN}\n`);
console.log(`null == null? ${null == null}\n`);
console.log(`undefined == undefined? ${undefined == undefined}\n`);

console.log(`null == false? ${null == false}`); // true -> FALSE
console.log(`'' == false? ${'' == false}`); // true
console.log(`3 == true? ${3 == true}\n`); // true -> FALSE
console.log(`0 == -0? ${0 == -0}\n`); // true

console.log(`true + true = ${true + true}`); // ??? -> 2
console.log(`true !== 1? ${true !== 1}`); // true

console.log(`5 + '10' = ${5 + '10'}\n`); // 510

console.log(`1 < 2 < 3? ${1 < 2 < 3}`); // true
console.log(`3 > 2 > 1? ${3 > 2 > 1}\n`); // true -> FALSE

console.log(`0.2 + 0.1 === 0.3? ${0.2 + 0.1 === 0.3}\n`); // true -> FALSE

console.log('b' + 'a' + (+ 'a') + 'a'); // baNaNa