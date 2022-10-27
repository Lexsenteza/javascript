let val;

val = document.getElementById('task-title')

// change styling.
val.style.background = '#fffff'

// console.log(val)

// change the content

val.textContent = 'task list'
val.innerHTML = '<span>Task</span>'


// query selector

val = document.querySelector('#task-title'); // gets the first query selector

document.querySelector('li:nth-child(3)').style.color = 'yellow';


// by class name

const items = document.getElementsByClassName('collection-item')
console.log(items[0])

items[0].style.color = '#ccc'

document.querySelector('ul').getElementsByClassName('collection-item')

document.getElementsByTagName('li')
// like in css selecting only the collection-items with the parent of ul

// query selector all.
// it returns a node list which has the same properties like a standard array
// getElementsbyid or class returns an html colletion which you have to convert to an array inorder to loop through it.
// in this way.

// val = Array.from(value_from_theselector) then you can loop through like a normal array.

const other_items = document.querySelectorAll('ul .collection-item')
const liodd = document.querySelectorAll('li:nth-child(odd)')
const lieven = document.querySelectorAll('li:nth-child(even)')

liodd.forEach(function(li){
    li.style.color = 'grey'
})

for (let a = 0; a < lieven.length; a++) {
    lieven[a].style.background = 'blue'; // this will work on an html collection even if
    // you dont covert it to an array because you can still use the length on an html collection.
    
}
console.log(other_items)