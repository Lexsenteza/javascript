document.getElementById('button1').addEventListener('click', getText);
// document.getElementById('button2').addEventListener('click', getJson);


function getText(e) {
    fetch('text.txt').then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data);
        document.getElementById('output').innerText = data;
    })// in case there is an error. you can catch it.
        .catch((err) => {
            console.log(err);
        })

    e.preventDefault();
    // fetch returns promises. so inorder to get the output we have to use the .then() function
    // you pass in a function with a response
}


const getJson = (e) => {
    fetch('posts.json').then((response) => {
        return response.json();
    }).then((posts) => {
        console.log(posts)
        let post_list = '';
        posts.forEach((post) => {
            post_list += `<ul>
                           <li>${post.title}</li>
                           <li>${post.body}</li> 
                           </ul>
                           `
        })
        document.getElementById('output').innerHTML = post_list;
    }).catch((err) => {
        console.log(err);
        // in case there is an error.
    })
}

const getExternalData = (e) => {
    fetch('https://api.github.com/users').then(response => response.json()
    ).then( posts => {
        let user_list = '';
        posts.forEach((post) => {
            user_list += `<ul>
                           <li>${post.node_id}</li>
                           <li>${post.url}</li> 
                           </ul>
                           `
        })
        document.getElementById('output').innerHTML = user_list;
    }).catch((err) => {
        console.log(err);
        // in case there is an error.
    })
}

document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternalData);