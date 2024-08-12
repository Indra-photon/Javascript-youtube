
//console.log(a,b,c);
// {} => Scopes
if (true) {
    let a = 10
    const b = 20
    var c = 30 
}
//console.log(a,b,c);

// nested Scope

function One (){
    const userName = 'Hitesh'
    function Two(){
        const website = "youtube"
        console.log(userName);
        
    }
    // console.log(website); It will give an error because website has been dexcribed in childs
    Two()
}
One()

if (true) {
    const userName = 'Hitesh'
    if (userName == 'Hitesh') {
        const website = 'you-tube'
        console.log(userName + website);
    }
   // console.log(website);
    console.log(userName);
}

function addOne(num) {
    return num+1
}
addOne(5)

const addTwo = function(num){
    return num+1
}
addTwo(5)