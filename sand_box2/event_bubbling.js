// event bubbling is the routing up of events from the children all the way up
// to the parents.

// event delegation is when you put it up for the parent and then it goes all the way down 
// to one of the children

// EVENT BUBBLING
// when you click on just one child. or set an event for it. it goes all the way to the parent element.one by one.
document.querySelector('.card-title').addEventListener('click',
function(e){
    console.log('card title')
})

document.querySelector('.card').addEventListener('click',
function(e){
    console.log('card')
})

// EVENT DELEGATION
const delete_item = document.querySelector('.delete-item')


// choosing a parent
document.body.addEventListener('click', del_item)

function del_item(e){
    // console.log(e.target);
    // if (e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('delete item')
    // }
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item')
        e.target.parentElement.parentElement.remove() // this will remove the parent.
    }




}
