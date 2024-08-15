const useremail = "h@gmail.com"
if (useremail) {
    console.log("got user email");
} else {
    console.log("Don't have user email");
}

// falsy values: false, 0, -0, bigInt, null, undefined, NaN
// truthy values: "0", "false", " ",[], function(){}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0 ) {
    console.log("empty");
    
}

// nullish coalescing operator (??)

let val1;
val1 = 5 ?? 10 // It will set the value at 5 but
val1 = null ?? 1
0 // It will set the value 10, not null
val1 = undefined ?? 15 // It will also set the value 15
val1 = null ?? 10 ?? 30 // It will set the value which is set first

// Ternary Operator : condition ? true : false
const iceTeaPrice = 100
iceTeaPrice === 100 ? console.log("True") : console.log("False");
;

