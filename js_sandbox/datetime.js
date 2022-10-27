let val;

const today = new Date()
let birthday = new Date('9-8-1981')

val = today.getMonth() // to get the month

val = today.getDate()

val = today.getFullYear()

birthday.setMonth(2) // to set to which attribute you want.

console.log(val)