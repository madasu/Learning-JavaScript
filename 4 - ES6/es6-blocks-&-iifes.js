/***************************/
/* ES6 - BLOCKS AND IIFE'S */
/***************************/

// ES5 - WRITING AN IIFE TO ACHIEVE DATA PRIVACY
(function() {
    var c = 3;
})();

// ES6 - ACHIEVING DATA PRIVACY USING A BLOCK
{   
    // 'const' and 'let' are 'block scoped'
    const a = 1;
    let b = 2;

    // 'var' is 'function scoped', a variable declared with 'var' can be accessed ouside of the block
    var c = 3; 
}

console.log(a + b);
console.log(c);