post_object = [
    {"title": 'posts one', "body": 'this is an ordinary posts'},
    {"title": 'posts two', "body": 'this is another one of them posts'}
]

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post_object.push(post)
            // resolve is what you call when your done with what your doing. reject is what to throw when there is some
            // kind of error.

            const error = true;
            if (error) {
                reject(`Error: something went wrong`);
            } else {
                resolve();
            }
        }, 2000);
        console.log(post_object);
    })
}

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        post_object.forEach( (post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML =output;
    }, 1000);
}

createPost({title: 'post 3', body:'just another thing' }).then(getPosts).catch(
    (err) => {
        console.log(err)
    }
);

