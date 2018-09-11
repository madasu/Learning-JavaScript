/***************************/
/* ES6 - BLOCKS AND IIFE'S */
/***************************/

// ES5 version of writting an IIFE 
(function() {
    var c = 3;
})();

// ES6 - Achieving data privacy using a block 
{   
    // 'const' and 'let' are 'block scoped'
    const a = 1;
    let b = 2;

    // 'var' is 'function scoped', a variable declared with 'var' can be accessed ouside of the block
    var c = 3; 
}

console.log(a + b);
console.log(c);