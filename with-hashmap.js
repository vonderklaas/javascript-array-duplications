const numbers = [2, 1, 1, 1, 2, 1, 4, 5, 5, 5, 5, 2, 1, 1, 1];

// Remove Duplicates (Example 1)
let hashMap = {};
let uniqueArr = [];
for (let i = 0; i < numbers.length; i++) {
  if (!(numbers[i] in hashMap)) {
    hashMap[numbers[i]] = true;
    uniqueArr.push(numbers[i]);
  }
}
console.log(uniqueArr);

// Remove Duplicates (Example 2)
let duplicates = {};
let uniqueFiltered = numbers.filter((number) => {
  let hash = number.valueOf();
  let isDuplicate = duplicates[hash];
  duplicates[hash] = true;
  return !isDuplicate;
});
console.log(uniqueFiltered);
