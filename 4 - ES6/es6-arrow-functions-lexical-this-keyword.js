/************************************************/
/* ES6 - ARROW FUNCTIONS LEXICAL 'THIS' KEYWORD */
/************************************************/

// ES5 - Creating an object and a function which will attach an event handler to the green box 
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it\'s ' + self.color + '.';
            alert(str);
        });

    }
};

box5.clickMe();

/* ES6 - Creating an object and a function which will attach an event handler to the green box (scenario #1). The inner method shares the lexical 'this' keyword from its surrondings, so the event works properly. */
const box6_scenario1 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
           const str = `This is box number ${this.position} and it\'s ${this.color}.`;
           alert(str);           
        });
    }
};

box6_scenario1.clickMe();

/* ES6 - Creating an object and a function which will attach an event handler to the green box (scenario #2). The inner method shares the lexical 'this' keyword from its surroundings (in this case the surrounding is the global context, so the event doesn't work properly). */
const box6_scenario2 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            const str = `This is box number ${this.position} and it\'s ${this.color}.`;
            alert(str);
        });
    }
};

box6_scenario2.clickMe();

// ES5 - Another example of using the arrow functions when dealing with objects 
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is a friend of ' + el + '.';
    }.bind(this));
    console.log(arr);
};

var friends = ['Henrique', 'James', 'Bob'];

new Person('Paulo').myFriends5(friends);

// ES6 - Another example of using the arrow functions when dealing with objects
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is a friend of ${el}.`);
    console.log(arr);
};

new Person('Peter').myFriends6(friends);