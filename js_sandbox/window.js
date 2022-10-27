// window methods / objects / properties

// alert prompts
// window.alert('hello world')

// prompt
// const input = prompt() // this
// alert(input)

// confirm normally used if your deleting something

// if (confirm('are you sure')){
//     console.log('yes')
// }

let val;

val = window.outerHeight
val = window.outerWidth
val = window.innerHeight 
// scroll points to figure out where you are in term of scrolling

val = window.scrollY

// location object

val = window.location.hostname;
val = window.location.search; // queries in the url for the search. after the ?

// redirect

// window.location.href = 'https://google.com'

// reload
// window.location.reload()


// history object
// window.history.go(-1) // the negatives are the sites of history from the most recent one
window.history.length


// navigator
val = window.navigator
val = window.navigator.userAgent
val = window.navigator.platform // the machine they are using
val = window.navigator.language

console.log(val)