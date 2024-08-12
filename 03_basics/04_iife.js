(function chai (){
    console.log(`db Connected`);
})();

(()=> {
    console.log(`DB CONNECTED TWO`);
})();

((name)=> {
    console.log(`${name} DB CONNECTED TWO`);
})('Mongo');