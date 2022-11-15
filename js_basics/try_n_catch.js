const user = {email: 'user@email.com'}

try {
    theFunction();

    // produce a type of error.
} catch (err) {
    console.log(err)
    console.log(err.name) // name of the error
    console.log(err.message) // the message of the error.
    console.log(err instanceof ReferenceError) // to check which try of error is being thrown,
} finally {
    // runs no matter what.
}

if (!user.name) {
    throw new SyntaxError('there is no user name');
}
