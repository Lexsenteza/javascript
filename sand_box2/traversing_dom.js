let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;

// get child nodes of the ul.
val = list.childNodes // returns a node list

// get children elements
val = list.children // returns an html collection

// children of children
val = list.children[3].children

val = list.firstChild
val = list.firstElementChild

// get parent node
val = listItem.parentNode
val = listItem.parentElement.parentElement

// get siblings
val = listItem.nextSibling
val = listItem.nextElementSibling
val = listItem.previousElementSibling


// creating elements

const li = document.createElement('li')
// add class
li.className = 'collection-item'
li.id = 'new-item'
// li.setAttribute('title', 'new item')

// creating text and append
li.appendChild(document.createTextNode('hello world')) // this is the text inside the element

// create new link element
const link = document.createElement('a')
link.className = 'delete-item secondary-content'
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
// add href attribute to link
link.setAttribute('href', '#')


// append link into li
li.appendChild(link)

// append li as child to ul.
document.querySelector('ul.collection').appendChild(li)

// replacing elements
// create element
const new_heading = document.createElement('h2')
new_heading.id = 'task-title'
// new text node
new_heading.appendChild(document.createTextNode('Task list'))

// get old heading.
// gets the first id with task-title
const old_heading = document.getElementById('task-title');
// parent
const cardAction = document.querySelector('.card-action')

cardAction.replaceChild(new_heading, old_heading)

//REMOVE ELEMENT
const lis = document.querySelectorAll('li')
const list1 = document.querySelector('ul')

// remove list item
lis[0].remove();

// remove child element
list1.removeChild(lis[3])


// CLASSES AND ATTRIBUTES.
const firstLi = document.querySelector('li:first-child')
const link1 = firstLi.children[0]

val = link1.className; // gives a string of the class names
val = link1.classList; // set up like an array. but a DOMTokenList
val = link1.classList[0];
link1.classList.add('test'); // adds a class
link1.classList.remove('test'); // removes a class
val = link1

// attributes
val = link1.getAttribute('href'); // get specific attribute
link1.setAttribute('href' ,'https://google.com');
val = link1.hasAttribute('href'); // test whether it has an attribute returns true or false
link1.removeAttribute('href');




console.log(val)