// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('hello world')
//     e.preventDefault() // to prevent the default of the link from redirecting to another page.
// });

const clear_button = document.querySelector('.clear-tasks')
//.addEventListener('click', onClick); // named function onClick
// so when you click on the link. it will look for a function called onClick then perfrom whatever what
// in the function.

function onClick(e){
//   console.log('clicked')  
  

  let val;
  val = e;

  // target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'hello world';

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;

  // coordinates of events relative to the window.
  val = e.clientY;
  val = e.clientX;
  // cordinates relative to the element that you are clicking.
  val = e.offsetY;

  console.log(val);

};

const card = document.querySelector('.card');
const heading1 = document.querySelector('h5')


//click
// clear_button.addEventListener('click', runEvent)
// doubleclicked
// clear_button.addEventListener('dblclick', runEvent);

// mouse down and up
// clear_button.addEventListener('mousedown', runEvent);
// clear_button.addEventListener('mouseup', runEvent);

// mouseenter
// clear_button.addEventListener('mouseenter', runEvent);
// mouseleave
// clear_button.addEventListener('mouseleave', runEvent);

// mouseover
// clear_button.addEventListener('mouseover', runEvent);
// mouseout
// clear_button.addEventListener('mouseout', runEvent);

// mouse move
// card.addEventListener('mousemove', runEvent);

// creating event handler


// function runEvent (e){
//     console.log(`Event type: ${e.type}`)
//     heading1.textContent = `mousex: ${e.offsetX} mousey: ${e.offsetY}`

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 80)`
// };

const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// clear input value
// taskInput.value = ''

//submit
// form.addEventListener('submit', runEvent);

// key down and key up
// taskInput.addEventListener('keydown', runEvent) // for when the user is typing.

// focus. when the cursor is that element of the window. the opposite of blur
// taskInput.addEventListener('focus', runEvent)

// cut and paste
// taskInput.addEventListener('cut', runEvent)

// input gets any type of event of all the above
// taskInput.addEventListener('input', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)
    
    // get input values
    // console.log(taskInput.value)
    // heading1.innerText = e.target.value

    console.log(e.target.value);

}; 
