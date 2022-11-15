const http = new EasyHttp();

//get post
// http.get('https://jsonplaceholder.typicode.com/posts', (err, response) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

const data_to_send = {
    title: 'custom post',
    body: ' this is a custom post'
}

// create a new post.
http.post('https://jsonplaceholder.typicode.com/posts', data_to_send, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
} )