const firstName = "Popovici";
const lastName = "Octavian";
const senteceWithTemplate = `First name: ${firstName} LastName: ${lastName}`;
console.log(senteceWithTemplate);

const me = {
    name: {
        firstName: "Popovici",
        lastName: "Octavian"
    },
    location: {
        city: "Cluj-Napoca",
        state: " Cluj ",
        country: "Romania"
    }
}
console.log(me.location); //objects

//------------------------------------------------------
//CONTEXT 
const me = {
    name: {
        firstName: "Popovici",
        lastName: "Octavian"
    },
    location: {
        streetNumber: 20,
        street: "Pajistei",
        city: "Cluj-Napoca",
        zipcode: 11111,
        country: "Romania",
        getCityAndCountry() {
            return `${this.city} ${this.country}`
        }
    },
    getAddress() {
        return `${this.name.firstName} ${this.name.lastName} 
    ${this.location.streetNumber} ${this.location.street} ${this.location.city} ${this.location.country}`;
    }

}

function getAddress(person) {

}
console.log(me.getAddress());
//--------------------------------------------------------------------objects
const daysOfTheWeek = [
    "Luni", //key 0
    "Marti", //key 1
    "Miercuri", //key 2
    "Joi",
    "Vineri",
    "Sambata",
    "Duminica"
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);
//-----------------------------------------------------------------------arrays
const primeNumbers = [1, 2, 3, 4, 5, 6, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));

const cities = [
    "Cluj-N",
    "Buc",
    "Ploiesti",
    "Braila",
    "Bacau"
]
let numberofTimesRan = 0;

cities.forEach(function(city, index) {
    numberofTimesRan;
    console.log(index, city);
});
console.log(numberofTimesRan);
//----------------------------------------------------------forEachfunctions to output all cities
<
button class = "event-button" > Click me! < /button> 
const button = document.querySelector('.event-button'); //javascript
button.addEventListener('click', function() {
        alert("Hi theres");
    })
    //-------------
    /*     <input placeholder = "type into me!" class = "input-to-copy"  >
            < p class = "p-to-copy-to" > Nothing has happened yet < /p> */
const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.p-to-copy-to');

input.addEventListener("keyup", function() {
        paragraph.innerText = input.value;
    })
    //---------------
document.querySelector('.button-container').addEventListener('click', function() {
    Event.target.innerText = 'CLICKED';
    alert(`You clicked on button ${Event.target.innerText}`);
})