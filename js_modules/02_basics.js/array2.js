const marvel_Heros = ["spiderman","ironman","thor"]
const dc_heros = ["superman","batman","batman"]
console.log(marvel_Heros);
// marvel_Heros.push(dc_heros)
console.log(marvel_Heros);

const allheros = [...marvel_Heros,...dc_heros]  //spread(...) best operator to combine two or more string
console.log(allheros);

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));