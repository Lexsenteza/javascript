// iterator example
const nameIterator = (names) => {
    let nextIndex = 0;
    return {
        next: () => {
            return nextIndex < names.length ? { value: names[nextIndex++], done: false} : { done: true};
            // if nextIndex is less than names.length return an object with the value of nextindex + 1 every time it loops
            // through. and a done of false to show that its still looping or iterating through.
            // else represented by : return an object of done showing true.
        }
    }
}

// create an array of names.
 const namesArr = ['Jack', 'Jill', 'John']

const names = nameIterator(namesArr);

console.log(names.next().value); // returns jack
console.log(names.next().value); // returns jill
console.log(names.next().value); // returns john
console.log(names.next()); // returns {done: true}

// generators are iterators that return multiple values.
// the * sign is what makes it a generator.
function* sayNames () {
    yield 'jack';
    yield 'jill';
    yield 'john';
}

const names1 = sayNames();
console.log(names1.next().value);
console.log(names1.next().value);
console.log(names1.next().value);
console.log(names1.next());

// create ids
function* createIds () {
    let index = 0;

    while (true) {
        yield index++
    }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
