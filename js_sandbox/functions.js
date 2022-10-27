function greet() {
    return 'hello'
}

console.log(greet())

function greet_by_name(name1 = 'mary', name2 = 'jane') {
    // if you have parameters but want to have default values for when the 
    // function is called. you use and if statement
        // if (typeof name1 === 'undefined'){name1 = 'mary'}
        // if (typeof name2 === 'undefined'){name2 = 'jane'}
        // this is going to check if the value of name1 is  undefined, do this

    return 'hello '.concat(name1, ' ',name2)
}

console.log(greet_by_name());

// immediately invokable functions or effis
// these run immediately when they are delcared instead of waiting to be called upon

// (function () {
//     console.log('Ife run...');
// })() // the () is to call the function immediately because every function needs to have a
// () once its has been called.

// const some = function() {}

(function (name3) {
    console.log('hello ' + name3);
})('brad')

//property methods.

const todo = {
    add: function () {
        console.log('Add');
    },
    edit: function(id1){
        console.log(`edit this ${id1}`)
    }
}

todo.add
todo.edit(22)