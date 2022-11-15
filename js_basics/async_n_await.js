async function myFunc() {

    const promise = new Promise((resolve, reject)=> {
        setTimeout(() => resolve('hello'), 1000)
    });

    const err = true;

    if (!err) {
        const res = await promise // wait until the promise is resolved.
    } else {
        await Promise.reject(new Error('something went wrong...'))
    }

}


myFunc().then((res) => console.log(res)).catch(err => console.log(err))

// working with the fetch api and async and await.

async function getUsers() {
    // await the response from the fetch call
    const response = await fetch('https://api.github.com/users');

    // only proceed once its resolved
    const data = await response.json();

    // only proceed once second promise is resolved.
    return data;
}