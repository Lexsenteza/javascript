class Individual {
    constructor(firstName, lastName, dob) {
        this.first_name = firstName;
        this.last_name = lastName;
        this.birthday = new Date(dob);
    }
    greeting() {
        return `hello there. ${this.first_name} ${this.last_name}`
    }

    goodNight() {
        console.log(this.greeting()); // how to get hold of the greeting function
        return `good night ${this.first_name}, sweet dreams`
    }

    static addNumber(x, y) {
        return x + y;
    }
}

const mary = new Individual('mary', 'johnson', '11-12-1980');
console.log(mary.birthday.getUTCFullYear(), mary.goodNight())

// get ahold of the static function. that's one that doesn't really depend on any of the classes but its free on its own
console.log(Individual.addNumber(2, 4))

//creating another subclass of individual.
class Member extends Individual {
    constructor(firstName, lastName, membership) {
        super(firstName, lastName);
        this.membership = membership;
    }
}

const john = new Member('john', 'smith', 'standard')
console.log(john.goodNight())