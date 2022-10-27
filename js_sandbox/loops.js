for(let i = 0; i < 10; i++){
    // console.log(i)
    if (i === 2) {
        console.log(`${i} is my favorite number`);
        continue;
    }

    if (i === 5){
        console.log('am breaking');
        break;
    }
    console.log(i)
}
// the for loop takes on 3 paramaters all separated by semi colons
// the first is the variable declaration
// the second is the condition under w hich to perfrom the for loop
// the third is what you would like to do to the variable after each iteration

let a = 0;

while (a < 10) {
    console.log('number '.concat(a))
    a++ // adds 1 to a every after the loop
}


// looping through arrays

const cars = ['ford', 'chevy', 'honda', 'toyota']

for (let b = 0; b < cars.length; b++) {
    const element = cars[b];
    
}

// for each loop
// like your looping through a list in python.
cars.forEach(function (car) {
    console.log(car);
});

cars.forEach(function (car, index){ // the index for the items in the list or array
    console.log(`${index}: ${car}`)
})

const users = [
    {id:1, bame:'sarah'},
    {id:2, bame:'mike'},
    {id:3, bame:'jane'}
]

// the map returns an array for objects that were inside the array
// depending what you wanted to extract from those objects or dictionaries

const ids = users.map(function(user){
    return user.id
})


console.log(ids)


// for in loop that's often used for objects.

const user1 = {
    first_name: 'john',
    last_name: 'smith',
    aging: 26
};

for (let x in user1){ // x is the key of the object or dictionary
    console.log(`${x}: ${user1[x]}`)
};