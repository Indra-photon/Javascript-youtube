let myDate = new Date()
console.log(myDate);

console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let mycreatedDate = new Date(2023, 0, 23)
let mycreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(mycreatedDate.toDateString())
console.log(mycreatedDate1.toLocaleString())

let myTimestamp = Date.now()
console.log(mycreatedDate.getTime()) // get the time stamp

// console.log(Date.now()/1000)

let newDate = new Date()
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday:"long"
})