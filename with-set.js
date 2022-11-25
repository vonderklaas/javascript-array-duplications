const numbers = [2, 1, 1, 1, 2, 1, 4, 5, 5, 5, 5, 2, 1, 1, 1];

// Remove Duplicates
const set = new Set(numbers);
const unique = Array.from(set);
console.log(unique);
