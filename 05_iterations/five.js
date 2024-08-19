const coding = ['python', 'ruby', 'java', 'c++']
// coding.forEach( function (item){

// } )

coding.forEach( (item)=>{
    console.log(item);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "PH"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    }
]
myCoding.forEach( (item)=> {
    console.log(item.languageName);
})