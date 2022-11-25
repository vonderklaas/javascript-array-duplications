const numbers = [2, 1, 1, 1, 2, 1, 4, 5, 5, 5, 5, 2, 1, 1, 1];

// Remove Duplicates
let unique = [];
for (let i = 0; i < numbers.length; i++) {
  if (unique.indexOf(numbers[i]) === -1) {
    unique.push(numbers[i]);
  }
}
console.log(unique);
