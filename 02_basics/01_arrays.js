const myArr = [0,1,2,3,4,true,"hitesh"]
const myHeroes = ['shaktiman', "nagraj"]
const myArr2 = new Array(1,2,3,4)

// Array methods
myArr.push(6)
myArr.pop() // delete last element
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(true))
console.log(myArr.includes('hitesh'))

const newArr = myArr.join() // to change the array to string comma seperated
console.log(typeof(newArr))


// slice, splice
console.log("A ", myArr)

const myn1 = myArr.slice(0,3)
console.log(myn1)
console.log("B ", myArr)

console.log("A ", myArr)

const myn2 = myArr.splice(0,3)
console.log(myn2)
console.log("B ", myArr)