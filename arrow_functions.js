evens=[2,4,6,8,10,12,14,16,18,20];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

console.log("evens : ", evens);
console.log("odds : ", odds);
console.log("nums : ", nums);
console.log("pairs : ", pairs);
