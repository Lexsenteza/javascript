// console.log('hello world');

// var name = 'John Doe';



let another = 'Sarah';
// console.log(another);



const n = null;
// console.log(typeof n)

const firstName = 'william'

const lastName = 'Doe';

let val;

val = firstName + lastName

// append to a string
val = 'brad'

val = 'brad'.concat(' ', lastName)

val = firstName.toUpperCase()
val = firstName.toLowerCase()
val = firstName[0]

// to get the last character of a string
val = firstName.charAt(firstName.length - 1)

// getting substrings
val = firstName.substring(1, 4) // like in python list or string slicing
val = firstName.slice(-3, -1)

// splitting into separate words into an array or a list
const str = 'hello how are you doing'
val = str.split(' ') // need to specify where you would like to split the string

val = str.replace('how', 'jack')

val = str.includes('hello') // to check if something is in the variable

// console.log(val)

// another lesson for html templating

const name = 'John'
const age = 30
const job = 'web developer'
const city = 'Miami'

function hello() {
    return 'hello';
}

// you use the back ticks to indicate the beginning of the template strings
// and the ${} to include the variable you would like to pass on.
html = `
<ul>age: ${age} 
    <li>${hello()}</li>
    <li>${ age > 25 ? 'over 25' : 'under 25'}</li> 
</ul>

`;
// the ? at indicates a tannery expressoin like an if statement and the : is an else
// so its if age is > 25 print over 25, else print under 25
document.body.innerHTML = html;

