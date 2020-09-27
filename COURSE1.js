/* var game ={};
game.murder="?";
game['weapons']=[
    {type    :'lasers' , location:'lab'},
    {type :'angry cats'...},
    {...'dish soap'...}
];
game.name=[];
game.name[0]='Miss Scarlet';
game.name.push('Mr Green')
['Mis Scarlet','Mr.Green'] */
/* 
const game = {
    'suspects': [{
            name: "Rusty",
            color: "Orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

function foo() {
    for (let i = 0; i < game.suspects.lenght; i++)
        console.log(game.suspects[i]);
}
foo()

var gameLoop = function() {

    for (var i = 0; i < game.suspects.length; i++) {
        console.log('outter loop');
        for (var key in game.suspects[i]) {
            console.log('inner loop');
            if (game.suspects[i][key] === "Rusty") {
                console.log('Found \em !');
            } else {
                console.log('next time!');
            }
        }
    }
}

var suspects = [{
    name: "Rusty",
    color: "orange"
},
{
    name: "Miss Scarlet",
    color: "red"
}
]

var game_var = function() {
var r = "red";
var o = "orange";
for (var i = 0; i < game.suspects.length; i++) {
    for (var key in game.suspects[i]) {
        if (game.suspects[i][key] === o) {
            console.log(r[i]+"lol");
        } else {
            console.log(o[i]+"neah");
        }
    }
}
}
game_var();




 */


// *********************EACH LOOP
/*
function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split('')[1],
        speak() {
            log("my name is ${name}");
        }
    };
};
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectList = [];

_.each(suspects, function(name) {
    let suspectObj = CreateSuspectObjects(name);
    suspectList.push(suspectObj);
});
*/
// --------------------------------------------------------------------
const _ = {};
_.map = function(list, callback) {
    //create an empty array to store
    var storage = [];

    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list));
    });
    /* for (var i = 0; i < list.length; i++)
    {
     storage.push(callback(list[i], i , list ))

    } */
    return storage;
    //loopin
    //callback (element)
    //push it to to our array
    //return []
}

_.map([1, 2, 3], function(val) {
    return val + 1;
})

_.each = function(list, callback) {
    //
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
        //loop through array
    } else {
        for (var key in list) {
            callback(list[key], key, list)
        }
        //loop through object 
        //call the callback with a list item
    }
    //loop through the list

}
_.each(['Sally', 'Georgie', 'Octavian'], function(name, i, list) {
    if (list[i + 1]) {
        console.log(name, 'is younger than ', list[i + 1])

    } else {
        console.log(name, 'is the oldest');
    }

});

//------------------------------------------------------------------
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function(item) {
    return `broken ${item}`;
};
const brokenWeapons = _.map(weapons, makeBroken);
brokenWeapons;
//---------------------------------------------------------

function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            log(`my name is ${this.name}`);
        }
    }
}
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectList = _.map(suspects, function(name) {
    return CreateSuspectObjects(name);
});
suspectList
/* ------------------------------------------------------/*  */
const _ = {};

_.filter = function(arr, cb) {
        const storage = [];
        //create  a new arr  
        //loop through arr
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i], i, arr) === true) {
                storage.push(arr[i])
            }
        }
        //check if cb return true
        //if returns true .push into array
        //return arr
        return storage;
    }
    //---------------------------------------------simple for loop
_.filter = function(arr, cb) {
    const storage = [];
    //create  a new arr  
    //loop through arr
    _.each(arr, function(val, i, list) {
        if (cb(val, i, list) === true) {
            storage.push(item);
        }
    }); //loop with each function
    //check if cb return true
    //if returns true .push into array
    //return arr
    return storage;
}

var nameImprover = function(name, adj) {
    return 'Col' + name + 'Mc' + adj + 'pants';
};
$('body').hide();
myArr.forEach(function(val) { console.log(val); });
$('button').on('click', function() {
    console.log('Don\'t press my buttons!');
});

//-----------------------------------------------Rewrite IN ES5
const add = function(a, b) {
    b = b || 2;
    console.log(arguments);
    return a + b;
};
add(3);
//-------------------------array like objects ES5
const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
}
constructArr('was', 'it', 'in');
//----------------------------------------------ARRAY LIKE OBJECT ES6
const constructArr = function() {
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    return arr.join('');

}
constructArr('was', 'it', 'in');
//-------------------------------------Implement _.from()
/* const from =arr =>{

}
 */
const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue : isFalse;
}
ifElse(true,
    () => { console.log(true); },
    () => { console.log(false); }
); //=>CALLBACKS
//------------------------------------------------
const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
}
const logTrue = () => { console.log(true); }

const logFalse = () => { console.log(false); }

ifElse(true, logTrue, logFalse); //HIGH ORDER FUNCTIONS !
//--------------------------------------------------
var increment = function(n) { return n + 1; };
var square = function(n) { return n * n };
var doMathSoIDontHaveTo = function(n, func) { return func(n); }

doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);
//callback func
//----------------------------------------------------
_.reduce([1, 2], function(sum, n) {
    return sum + n;
}, 0); //initial value
//=>3
_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = []).push(key));
    return result;
}, {});
//=>{'1':['a','c'],'2':['b']}
//-----------------------------------------._reduce() function
_.forEachRight([1, 2], function(value) {
    console.log(value);
});
//=>Logs 2 then 1

const reduce = function(list, cb, initial) { //list=[1.2.3] // cb=sum

    let memo = initial; //0
    //loop list

    for (var i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0];
        } else {
            memo = cb(list[i], memo) //1,0 |2,1 |3.3
        }

    }
    return memo;
    //call the cb with the arr[i],prev/initial
    //save value of the cb
    //return the result(1 value)
}
reduce([1, 2, 3], (v, sum) => v + sum /*return*/ , 0 /* initial value*/ );
//-----------------------------------------------------------------------------reduce method
const newDevelopment = [{
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': true },
            { 'billiard room': false },
            { library: true }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': true },
            { 'billiard room': false },
            { library: false }
        ]
    }
];
const notInRoom = suspect => {
    const emptyRooms = reduce(suspect.rooms, (room, memo) => {

        if (room === false) memo.push(room)
        return memo;
        //return an array of all the falses
        //not there
    }, []); /*empty array for emptyRooms*/
    return emptyRooms;
}
notInRooms = _.map(newDevelopment, notInRoom)
_.intersection(...notInRooms) //=>'Solutions' 
    //---------------------------------------------------------find the empty room
var abc = function(a, b, c) {
    return [a, b, c];
}
var curried = _.curry(abc);
curried(1)(2)(3);
//-----------------------------------------------------currying 
const consider = (name) => {
    return `I think it could be... ${name}`;
}
const exclaim = (statement) => {
    return `${statement.toUpperCase()}!`;
}
const blame = _.compose(consider, exclaim);
blame('you');
//----------------------------------------------------composing
const myalert = () => {
    const x = "Help ! I think I found a clue!";
    const alerter = () => {
        myalert(x);
    }
    alerter();
    setTimeout(alerter, 1000)
}
myalert();
//-----------------------------------------------------scope
const myalert = () => {
    const x = "Help ! I think I found a clue!";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    }
    return alerter;
}
const funcAlert = myalert(); //funcAlert este separat de funcAlert2
const funcAlert2 = myalert(); // two different states
funcAlert(); //1
funcAlert(); //2
//--------------------------------------------------------advanced scope

const makeTimer = () => {
    let elapsed = 0;
    const stopwatch = () => { return elapsed; }
    const increase = () => elapsed++;
    setInterval(increase, 1000);
    return stopwatch;
}
let timer = makeTimer();
//------------------------------------------------TIMER  (advanced scope)
var abc = function(a, b) {
    return [a, b];
}
var curried = _.curry(abc);
curried(1)(2);

const curry = (fn) => { //abc
        return (arg) => { //1
            return (arg2) => { //2
                return fn(arg, arg2);
            }
        }
    }
    //-------------------------------------CURRY evercises 

//---------------------COURSE 1