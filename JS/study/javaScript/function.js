// Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrader logic...
    }
}

//good
function upgradeuser2(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

//Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    //anonymous function
    console.log('print;');
};

print();
const printAgain = print;
printAgain();
