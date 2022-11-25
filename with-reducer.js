const numbers = [2, 1, 1, 1, 2, 1, 4, 5, 5, 5, 5, 2, 1, 1, 1];

// Remove Duplicates
const unique = numbers.reduce((acc, cur) => {
  if (acc.indexOf(cur) === -1) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(unique);
