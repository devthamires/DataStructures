import { Sorting } from "./src/sorting.js";

const sorting = new Sorting();

const array = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

console.log("Before: \n", array);
sorting.quickSort(array);
console.log("After: \n", array);
