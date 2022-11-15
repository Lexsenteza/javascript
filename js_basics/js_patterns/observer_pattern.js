function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log(`You are subscribed to ${fn.name}`)
    },

    unsubscribe: function (fn) {
        this.observers = this.observers.filter((item) => {
            // filter out from the list whatever matches the function. if there is a match, the callback gets to stay on the list.
            // the filter returns a new list and reassigns the lists of observers.
            if (item !== fn) {
                return item;
            }
            console.log(`you are now unsubscribed from ${fn.name}`)
        })
    },

    fire: function () {
        this.observers.forEach((event) => {
            event.call(); // to call the method. you can use the call method.
        })
    }

}

const click = new EventObserver();
// create our event listeners.
document.querySelector('.sub-ms').addEventListener('click', () => {
    click.subscribe(getCurrMilliseconds)
})

document.querySelector('.unsub-ms').addEventListener('click', () => {
    click.unsubscribe(getCurrMilliseconds);
})

document.querySelector('.sub-s').addEventListener('click', () => {
    click.subscribe(getCurrSeconds);
})

document.querySelector('.unsub-s').addEventListener('click', () => {
    click.unsubscribe(getCurrSeconds);
})

document.querySelector('.fire').addEventListener('click', () => {
    click.fire();
})

const getCurrMilliseconds = function () {
    console.log(`current milliseconds: ${new Date().getMilliseconds()}`)
}

const getCurrSeconds = function () {
    console.log(`current milliseconds: ${new Date().getSeconds()}`)
}
