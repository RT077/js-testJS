const marvel_char=["thor","c_ameriaca","ironman","spiderman"];
const dc_char=["superman","batman","flash"];

// console.log(marvel_char);
// console.log(dc_char);

// push().

// marvel_char.push(dc_char)
// console.log(marvel_char);
// console.log(marvel_char[4][1]);

// concate().

// const all_hero=marvel_char.concat(dc_char);
// console.log(all_hero);

//spread 
const all_newHeros=[...marvel_char,...dc_char];
console.log(`all the heros are ${all_newHeros}`);
