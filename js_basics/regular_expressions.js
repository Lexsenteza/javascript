let re;

re = /hello/i;
re = /hello/i; // makes the expression case insensitive
re = /hello/g; // searches for all instances of hello not just the first one it finds.

console.log(re)
console.log(re.source)

// functions used to evaluate regular expressions.
// exec() will return result in an array if match or null if no match.

const result = re.exec('hello world');
console.log(result);

// test() returns true or false
const another = re.test('hello')
console.log(another)

// match() wil return result array or null.
const str = 'hello there'
const results = str.match(re)
console.log(results)

// search() returns the index of the first match and if not found retun an index of -1
const string = 'hello there';
const resulting = string.search(re);
console.log(resulting);

// replace() will return a new string with some or all or all matches of a parent.
const stringing = 'hello there';
const newString = stringing.replace(re, 'hi')
console.log(newString)

//
let re1;
re1 = /hello/

//metacharacter symbols
re1 = /^h/i  // must start with;
re1 = /world$/i  // must end with;
re1 = /^hello world$/i  // begins with and ends with;
re1 = /^h.llo$/i  // matches any one character the one where the dot(.) is;
re1 = /h*llo/i  // matches any character zero or more times;

re1 = /gre?a?y/i // optional character the one that appears after the question mark.
re1 = /gre?a?y\?/i // escape a character

// brackets [] character sets
re1 = /gr[ae]y/i; // must be an a or e
re1 = /[^gf]rey/i; // should match anything except a g or an f.
re1 = /[A-Z]rey/; // should match any upper case letter.
re1 = /[a-z]rey/; // should match any lower case letter.
re1 = /[A-Za-z]rey/; // should match any letter in the alphabet.
re1 = /[0-9]rey/; // should match any digit.

// {} braces quantifiers
re1 = /hel{2}o/i // should be 2 l's in that part of the word. the number appears after the letter to be checked.
rel = /hel{2,4}o/i // must occur in the range of 2 to 4.
re1 = /hel{2,}0/i; // should appear at least {n} times. in this case 2 times.

// paratheneses () used for grouping.
re1 = /([0-3]x){3}/ // this is like saying you want a number between 0 and 3 with the x. 3 times..() helped group.

// short hand character classes.
re1 = /\w/  // word character - alaphanumneric. that means it can be any number or any letter or an underscore _.
re1 = /\w+/ // looks at the characters...one or more
re1 = /\W/ // looks for non word characters.
re1 = /\d+/; // this will match any digit..the + matches one or more.
re1 = /\D/; // matches any non digit.
re1 = /\s/; // matches whitespace character
re1 = /\S/; // matches non whitespace character
re1 = /hell\b/i; // word boundary.. when looking for the actual word not a word that contains the letters.

// assertions
re1 = /x(?=y)/; // match x only if followed by y
re1 = /x(?!y)/; // match x only if not followed by y

//string to match
const str1 = 'grey?xy';

// log results.
const result1 = re1.exec(str1);
console.log(result1);

const reTest = (regular_expression, string) => {
    if (regular_expression.test(string)) {
        console.log(`the string matches the ${regular_expression.source}`)
    } else {
        console.log(`${string} doesnot match the ${regular_expression.source}`)
    }

}

reTest(re1, str1);