const name = 'hitesh'
const repoCount = 50
console.log(name + " "+ repoCount)

// Use of backticks

console.log(`Hello my name is ${name}`)

const gameName = new String ('hites-hc')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf("t"))
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newString1 = "    hitesh   "
console.log(newString1)
console.log(newString1.trim()) // deletes the spaces inside a string


const url = 'https://hitesh.com/hitesh%20choudhury'
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

// String.prototype.at() : The at() method of String values takes an integer value and returns a new String

const herName = new String ("Archita")
console.log(herName.at(3))

//The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

console.log(herName.charCodeAt(3))

// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

const str1 = new String('Cats are the best!');
console.log(str1.endsWith('best!'));

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

const sentence = new String('The quick brown fox jumps over the lazy dog.');
const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);

// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.

// The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
