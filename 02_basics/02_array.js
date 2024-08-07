const marvel_heroes = new Array ("thor", "ironman", "spiderman")
const dc_heroes = new Array ("superman", "flash", "batman")

console.log(marvel_heroes.concat(dc_heroes));
const allnewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allnewHeroes);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherArr = anotherArr.flat(Infinity)
console.log(realanotherArr);

console.log(Array.isArray("Hitesh"))
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
