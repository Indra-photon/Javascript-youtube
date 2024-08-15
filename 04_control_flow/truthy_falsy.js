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
