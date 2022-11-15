// creating an object.or a class like we call it in python
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.getName = function () {
        return `my name is ${this.name} and i am ${this.getAge()} years old`
    }

}

// using prototypes. they are not stored from within the object itself but in the prototype.
Person.prototype.getAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    // birthday is like seconds. set a new date object with this.
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
}

Person.prototype.changeName = function (new_name) {
    this.name = new_name;
    return `your name has been changed to ${new_name}`;
}


const mike = new Person('mike','08-12-1989')
console.log(mike.getAge())
console.log(mike.getName())
// now we can change the name
console.log(mike.changeName('amina'))
console.log(mike.getName())
console.log(mike.birthday)

// create a new class and inherit the prototypes from another class

function Customer(name, membership, dob) {
    Person.call(this, name, dob);

    this.membership = membership
}

// inherit customer prototypes methods
Customer.prototype = Object.create(Person.prototype)
// make customer.prototype return customer
Customer.prototype.constructor = Customer;

const customer = new Customer('johnny', 'standard', '07-03-2000' )
customer.changeName('jack')
console.log(customer)
console.log(customer.getName())