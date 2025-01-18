// 1.
let arr = [32, 23, 65, 4, 8, 10, 12];
let maxValue = Math.max(...arr);
console.log(maxValue);

//2.
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

let maxLength = Math.max(array1.length, array2.length);

let arraySum = Array.from({ length: maxLength }, (_, i) => 
(array1[i] || 0) + (array2[i] || 0));

console.log(arraySum);

//3.
let array = [4, 2, 8, 5];
let sum = 0;

for(let value of array) {
    sum += value;
}
console.log(sum)