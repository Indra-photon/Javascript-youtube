const myObj = {
    "game1": "NFS",
    "game2": "SpiderMAN",
    "game3": "PUBG",
    "game4": "Clash of Clan"
}

for (const key in myObj) {
    console.log(`${key}game is ${myObj[key]}`);
}

const programming = ["js", "python", "C++"]
for (const key in programming) {
   console.log(programming[key]);
}