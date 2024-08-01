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
