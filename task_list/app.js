// define ui variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// call a function to load all event listeners.
loadEventListeners();

function loadEventListeners(){
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks) // the DOMContentLoaded is an event that happens right
    // the DOM has loaded.

    // add task form or add task event
    form.addEventListener('submit', addTask)

    // remove task event
    // we used the tasklist for we are to use event delegation from the parent element to the children
    taskList.addEventListener('click', removeTask)

    // clear task event
    clearBtn.addEventListener('click', clearTask)

    // filter task events
    filter.addEventListener('keyup', filterTasks)

}

// creates a task element by string given to it
function create_element(task_to_add) {
    // create li element
    const li = document.createElement('li')
    li.className = 'collection-item';
    // create  a text node and append to the li.
    li.appendChild(document.createTextNode(task_to_add));
    // create new link element
    const link = document.createElement('a')
    // add class
    link.className = 'delete-item secondary-content';
    // add href attribute
    link.setAttribute('href', '#')
    // add inner html for the font awesome icons
    link.innerHTML = '<i class="fa fa-remove"></i>'

    // append the link to the li
    li.appendChild(link)

    // append the li to the ul.
    taskList.appendChild(li)
}


// get tasks from local storage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')) //now tasks is array like so you can loop through it due to
        // json.parse
    }
    tasks.forEach(function (task) {
        // for each of those stored elements..you need to create the dom elements
        create_element(task);

    })
}


// add task function
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task')
    }

    create_element(taskInput.value);

    // store task in local storage
    storeTaskInLocalStorage(taskInput.value)

    //clear the input
    taskInput.value = ''


    e.preventDefault()
}

// add in local storage
function storeTaskInLocalStorage(task) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task)

    // send it back to local storage, it will clear out the other name.
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// remove task
function removeTask(e){
    // targeting the delete item
    if (e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target)
        if (confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove()

            // REMOVE FROM LOCAL STORAGE
            removeFromLocalStorage(e.target.parentElement.parentElement);
        }
    }

}

//remove from local storage
function removeFromLocalStorage(taskItem) {
    let tasks;
    tasks = JSON.parse(localStorage.getItem('tasks'))

    tasks.forEach( function (task, index)  { // the index is the index of the task in the array
        if (taskItem.textContent === task) {

            tasks.splice(index, 1); // slicing from the index of the task to the count of 1..which means only that index
            // and nothing more.
        }
    })
    // put the tasks back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// clear the Tasks
function clearTask (e) {
    // taskList.innerHTML = '' // one way of doing it because all the tasks are children of the tasklist

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
        clearTaskFromLocalStorage();
    }
}

// clear from local storage
function clearTaskFromLocalStorage () {
    localStorage.clear()
}

// filter tasks
function filterTasks (e) {
    // the target is an input field
    // the event listener for this function is keyup so whenever someone presses a key and lifts up.
    // get the value in that input field and turn it to lowercase.
    const text = e.target.value.toLowerCase();

    // get all the values in the target search area which are the tasks that have been added
    // using query selector all returns a node list which acts like an array so you can use the foreach array function
    // the task inside the for each function is each element in the node list since you are looping through them
    // you do what you want to each of the tasks as it loops through them
    // create a item which will be the firstchild and get its text content.
    // you know its the first child because of how you created it.
    // check if the item has a letter of the text input by using the index of..but also need to first convert it to lowercase to match
    // if it doesn't exist. it will return a negative 1 so check if isnot equal to negative 1.
    // then change its display style to block and the others to none because they match the search query
    document.querySelectorAll('.collection-item').forEach(function (task){
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
        console.log(item)
    })
    // console.log(text)
}