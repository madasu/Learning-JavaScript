/************************************************/
/* ES6 - ARROW FUNCTIONS LEXICAL 'THIS' KEYWORD */
/************************************************/

/* ES5 - CREATING AN OBJECT AND A FUNCTION WHICH WILL ATTACH AN EVENT HANDLER TO THE GREEN BOX */
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

/* ES6 - CREATING AN OBJECT AND A FUNCTION WHICH WILL ATTACH AN EVENT HANDLER TO THE GREEN BOX (SCENARIO #1). THE INNER METHOD SHARES THE LEXICAL 'THIS' KEYWORD FROM ITS SURROUNDINGS, SO THE EVENT WORKS PROPERLY */
const box6_scenario1 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
           const str = `This is box number ${this.position} and it's ${this.color}.`;
           alert(str);           
        });
    }
};

box6_scenario1.clickMe();
/* ES6 - CREATING AN OBJECT AND A FUNCTION WHICH WILL ATTACH AN EVENT HANDLER TO THE GREEN BOX (SCENARIO #2). THE INNER METHOD SHARES THE LEXICAL 'THIS' KEYWORD FROM ITS SURROUNDINGS (IN THIS CASE THE SURROUNDING IT'S THE GLOBAL CONTEXT, SO THE EVENT DOESN'T WORK PROPERLY) */
const box6_scenario2 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            const str = `This is box number ${this.position} and it's ${this.color}.`;
            alert(str);
        });
    }
};

box6_scenario2.clickMe();

/* ES5 - OLDER WAY TO DEAL WITH OBJECTS, SETTING THE 'THIS' VARIABLE MANUALLY, USING THE 'BIND TRICK' */
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

/* ES6 - ANOTHER EXAMPLE OF USING THE ARROW FUNCTIONS FOR ACHIEVING THE SAME RESULT WITH USING THE 'TRICK' SHOWED ABOVE */
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
    let arr = friends.map(el => `${this.name} is a friend of ${el}.`);
    console.log(arr);
};

new Person('Peter').myFriends6(friends);