const marvel_heroes = ["thor" , "spiderman", "iroman"]
const dc_heroes = ["superman" ,"flash" , "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes [3][1]);

// const allheroes  =marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

// const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1,2,3,4,[5,6,7],[8,9],[7,5]]

const real_another_array = another_array.flat(12)
console.log(real_another_array);