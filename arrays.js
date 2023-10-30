//Challenge 1 - Get Even Numbers

const getEvenNums = [1, 2, 3, 4, 5, 6];
function getEvenNumbers(nums) {
  // Your code goes here...
  const filterEven = nums.filter((number) => number % 2 === 0);
  return filterEven;
}

// console.log(getEvenNumbers(getEvenNums));

///////////////////////////////////////////////////////////////////////
//Challenge 2 - Get Items Longer Than

function getStrings(array, len) {
  const filterArray = array.filter((element) => element.length > len);
  return filterArray;
}
const arrStrings = ["a", "bb", "ccc"];

// console.log(getStrings(arrStrings, 2));

////////////////////////////////////////////////////////////////////////
//Challenge 4 - Get Sandwich Felling
function getSandwichFilling(sandwich) {
  // Your code goes here...
  //   const filling = sandwich.filter(
  //     (element, index) => index > 0 && index < sandwich.length - 1
  //   );
  //   return filling;

  const filling = sandwich.slice(1, -1);
  return filling;
}

const sandwichSample = ["bread", "halluomi", "lettuce", "bread"];

// console.log(getSandwichFilling(sandwichSample));

/////////////////////////////////////////////////////////////////////////
//Challenge 5 - Remove Item
function removeItem(array, n) {
  // Your code goes here...
  const filter = array.filter((element, index) => index != n);
  return array.length > 0 ? filter : [];

  //   const sliceConcat = array.slice(0, n).concat(array.slice(n + 1));
  //   return sliceConcat;
}

const items = [1, 2, 3, 4];
const item = 0;
// console.log(removeItem(items, item));

/////////////////////////////////////////////////////////////////////////
//Challenge 6 - Mergue Arrays

function mergeArrays(arr1, arr2) {
  // Your code goes here...
  //   const mergue = new Array(...arr1);
  //   return mergue.concat(arr2);

  const merge = arr1.concat(arr2);
  return merge;
}

// console.log(mergeArrays([1, 2], [3, 4]));

/////////////////////////////////////////////////////////////////////////
//Challenge 7 - Is Item Omnipresent
function isItemOmnipresent(arrayOfArrays, item) {
  // Your code goes here...
  const evaluate = arrayOfArrays.every((element) => element.includes(item));
  return evaluate;
}

const itemOmnipresent = [
  [1, 2, 8],
  [2, 3, 8],
  [3, 4, 2],
];

const valToFind = 2;

// console.log(isItemOmnipresent(itemOmnipresent, valToFind));

////////////////////////////////////////////////////////////////////////
//Challenge 8 - Flatten the array

function flatten(array) {
  const valToReturn = array.flat();
  return valToReturn;
}

const anArray = [[1], [2], [[3, 4]]];

// console.log(flatten(anArray));

//////////////////////////////////////////////////////////////
