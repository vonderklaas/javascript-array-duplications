const numbers = [2, 1, 1, 1, 2, 1, 4, 5, 5, 5, 5, 2, 1, 1, 1];

// Remove Duplicates
const unique = numbers.filter((num, index) => {
  if (numbers.indexOf(num) === index) {
    return num;
  }
});
console.log(unique);
