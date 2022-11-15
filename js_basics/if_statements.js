// if (condition) {
//     // do something
// } else {
//     // do something else.
// }

const id = '100'

if (id == 100) {
    console.log('correct')   
} else {
    console.log('incorrect')
}

// equal to value and type with the 3 equal signs that check for the value and type
// also !== for not equal to.

if (id === 100) {
    console.log('correct')   
} else {
    console.log('incorrect')
}

// to check if something exists.
if (typeof id !== undefined) {
    console.log(`the id is ${id}`)
} else {
    console.log(`there is no id`)
}


// and you use &&
if (id > 50 && id < 200) {
    console.log(`number is ${id}`)
} else if(id === 'some') {
    console.log('incorret')
}

// or you use ||
if (id > 50 || id < 200) {
    console.log('this is the or sign')
}

// tanery operators. short hand for using if staems
console.log(id === 100 ? 'tanery' : 'incorret' );

// swtiches work best if you want to check the if statement amongst lots of 
// things instead of doing alot of else if else if

const color = 'blue';

switch (color) {
    case 'blue':
        console.log('the color is blue')
        break;
    case 'green':
        console.log('the color is green')
        break;
    default:
        console.log('the color is not green or blue')
        break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday'
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
                                
    default:
        break;
}

console.log(`today is ${day}`)