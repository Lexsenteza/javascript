const numbers = [43, 56, 33, 23, 44, 5];

const numbers2 = new Array(22, 34, 34, 23, 56);

const fruit =['jackfruit','apple', 'banana', 'orange', 'pear'];

let val;

val = numbers.length

// check if this is an array

val = Array.isArray(numbers);

val = numbers[2];

// insert into array

numbers[2] = 100;

// index of value
val = numbers.indexOf(23);

// mutating arrays like appending to a list in python
numbers.push(250);
numbers.unshift(120); // this adds to the first value of the list.

numbers.pop(); // removes the last item in the array or list.

numbers.shift();// take off from the front.

// splice values from the array like list slicing
numbers.splice(2, 4); // 2 is the index of number you would like delete and then the
// delete count is 4. that is 4 indices from 2, including 2 will be deleted

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// reverse the array
numbers.reverse();

// concat arrays, like adding different arrays
val = numbers.concat(numbers2);

val = fruit.sort(); // puts them in alphabetical order for array of strings

// sorting numbers from lowest to highest
val = numbers.sort(function(x , y) {
    return x - y
    // and then y - x if you want from highest from lowest.
});

// taking a function
function under50 (num) {
    return num < 50
}

val = numbers.find(under50) // will return the first number that is under 50
// through using the function.


const person = {
    first: 'william',
    last: 'smith',
    age: 30,
    funt: function() {
        return 2017 - this.age // this is like specifying that the value is in the object literal or dictionary
    }
};

val = person['first'];
val = person.first;
val = person.funt();

console.log(val);
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element)
    
}