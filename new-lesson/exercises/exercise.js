function addFavoriteBook(bookName) {

    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName);
    }

}

function printFavBooks() {
    console.log(

        `Favorite books: ${favoriteBooks.length}`
    );
    for (let bookName of favoriteBooks) {
        console.log(bookName);
    }
}
var favoriteBooks = [];
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You don't know JS");
printFavBooks();
//------------------------------------------
var msg1 = "There are";
var numStudent = 16;
var msg2 = "students."
console.log(msg1 + numStudent + msg2);
console.log(`${msg1} ${numStudent} ${msg2}`)
    //-------------------------------------------
    //coercion : string concatenation (number to string)
function addAStudent(numStudents) {
    return numStudent + 1;
}
//--------------------------------------------------
addAStudent(Number(studentsInputElem.value));

function ask(question) {
    setTimeout(function waitASec() {
        console.log(question);
    }, 100);
}
ask("What is closure?")
    //-----------------------------------------------closure
function ask(question) {
    return function holdYourQuestion() {
        console.log(question);
    }
}
var myQuestion = ask("What is closure?");

myQuestion();
//-------------------------------------------------------CLOSURE again

var workshop = {
    teacher: "Kyle",
    ask(question) {
        console.log(this.teacher, question)
    },
    student: "Octavian",
    ask1(question) {
        console.log(this.student, question);
    },
}
workshop.ask1("What is dynamic context?");
//------------------------------------------------------------this 1
function ask(question) {
    console.log(this.teacher, question);
}

function otherClass() {
    var myContext = {
        teacher: "Octavian"
    };
    ask.call(myContext, "Why?");
}
otherClass();
//-----------------------------------------------------------this 2
function Workshop(teacher) {
    this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);

};
var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");
deepJS.ask("Is 'prototype' a class? ");
reactJS.ask("Isn't 'prototype' ugly?");
//------------------------------------------------------------prototype
class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}
var deepJS = new Workshop("Kyle"); //object
var reactJS = new Workshop("Suzy"); //object

deepJS.ask("Is 'class' a class?");
reactJS.ask("Is this class OK?");
//---------------------------------------------------------CLASS