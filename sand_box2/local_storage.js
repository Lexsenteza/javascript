// set local storage item

localStorage.setItem('name', 'John')

// set session storage item
// sessionStorage.setItem('name', 'beth')

// remove from storage
// localStorage.removeItem('name')

// get from storage
const name = localStorage.getItem('name');

// clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit',
    function (e){
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')) // we parse because the local storage comes as strings
        // parsing turns it into a string
    }

    // add to the array
    tasks.push(task);



    // console.log(task);
    localStorage.setItem('tasks', JSON.stringify(tasks)); // stringfy to turn into strings to store into the local storage
    alert('task saved')
    e.preventDefault()
    })
console.log(name)