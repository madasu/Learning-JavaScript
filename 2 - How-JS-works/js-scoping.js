/**********************/
/* JAVASCRIPT SCOPING */
/**********************/

// First scoping example (lexical scoping)
var a = 'Hello';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the difference between execution stack and scope chain 
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
      var c = 'hey!';
      third();
    }
}

function third() {
    var d = 'Paulo';
    // console.log(c);
    console.log(a + d);
} 