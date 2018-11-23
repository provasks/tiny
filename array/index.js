/**********************************************
 * returns the product of each item in an array
 **********************************************/
const product = arr => arr.reduce((c, i) => c * i);

/**********************************************
 * Check if the each item of the Array a and b
 * are present in the array c
 **********************************************/
export const isInterleave = (a, b, c) =>
  a.split("").every(val => c.split("").includes(val)) &&
  b.split("").every(val => c.split("").includes(val));

/**********************************************
 * Remove duplicate item (if any) from a array
 **********************************************/
export const removeDuplicate = arr => [...new Set([...arr])];

/********************************************* */
/* Given an integer array, find a maximum product of a triplet in array.

Examples:

Input:  [10, 3, 5, 6, 20]
Output: 1200
Multiplication of 10, 6 and 20
 
Input:  [-10, -3, -5, -6, -20]
Output: -90

Input:  [1, -4, 3, -6, 7, 0]
Output: 168
/********************************************* */
export const maxProduct = (arr = [], n) =>
  arr.length >= n && n > 0
    ? arr
        .sort((a, b) => a < b)
        .splice(0, n)
        .reduce((c, i) => c * i)
    : 0;

/*
getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
 For example, given:
  [1, 7, 3, 4]
 your function would return:
  [84, 12, 28, 21]
 by calculating:
   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
*/
export const getProductsOfAllIntsExceptAtIndex = arr => {
  return arr.map((c, i) => {
    const tmpArr = Object.assign([], arr);
    const tmp = tmpArr.splice(i, 1);
    return product(tmpArr);
  });
};

/********************************************************************
 * Move all zeroes to end of array
 ********************************************************************/
export const pushZerosToEnd = (arr = []) => {
  let count = 0; // Count of non-zero elements
  let n = arr.length;

  // Traverse the array. If element encountered is non-
  // zero, then replace the element at index 'count'
  // with this element
  for (let i = 0; i < n; i++) if (arr[i] != 0) arr[count++] = arr[i]; // here count is
  // incremented

  // Now all non-zero elements have been shifted to
  // front and  'count' is set as index of first 0.
  // Make all elements 0 from count to end.
  while (count < n) arr[count++] = 0;

  return arr;
};

/********************************************************************
 * get Intersection of three sorted arrays
 ********************************************************************/
export const intersectSortedArray = (x = [], y = [], z = []) => {
  let i = 0,
    j = 0,
    k = 0;
  const xl = x.length,
    yl = y.length,
    zl = z.length,
    result = [];

  while (i < xl && j < yl && k < zl) {
    if (x[i] === y[j] && y[j] === z[k]) {
      result.push(x[i]);
      i++;
      j++;
      k++;
    } else if (x[i] < y[j]) i++;
    else if (y[j] < z[k]) j++;
    else k++;
  }
  return result;
};

const intersect = (set1, set2) => [...set1].filter(num => set2.has(num));
const differ = (set1, set2) => [...set1].filter(num => !set2.has(num));
const joinSet = (set1, set2) => [...set1, ...set2];
/********************************************************************
 * get Intersection of three unsorted arrays
 ********************************************************************/
export const intersectUnsortedArray = (x = [], y = []) =>
  intersect(new Set(x), new Set(y));

/********************************************************************
 * check if two arrays are disjoint  (i,e: No common element)
 ********************************************************************/
export const isDisjoint = (x = [], y = []) =>
  !intersect(new Set(x), new Set(y)).length;

/********************************************************************
 *        Transpose a Matrix
 ********************************************************************/
export const TransposeMatrix = (matrix = []) => {
  const tMatrix = [];
  const rows = matrix.length,
    columns = matrix[0] ? matrix[0].length : 0;
  //init the grid matrix
  for (let col = 0; col < columns; col++) {
    tMatrix[col] = [];
    for (let row = 0; row < rows; row++) {
      tMatrix[col][row] = matrix[row][col];
      // val++;
    }
  }
  return tMatrix;
};

export const getMatrix = (startValue, rows, columns) => {
  // var matrix = new Array(rows).fill(0).map(row => new Array(columns).fill(0));
  // console.log(
  //   `Start: ${startValue}, Rows: ${rows}, Columns: ${columns}, Matrix: ${matrix}`
  // );
  const matrix = [];
  let val = startValue;
  //init the grid matrix
  for (let row = 0; row < rows; row++) {
    matrix[row] = [];
    for (let col = 0; col < columns; col++) {
      matrix[row][col] = val;
      val++;
    }
  }
  return matrix;
  // console.log(`Array: ${matrix}`);
};

export const multiplyMatrix = (A, B) => {
  var result = new Array(A.length)
    .fill(0)
    .map(row => new Array(B[0].length).fill(0));

  return result.map((row, i) => {
    return row.map((val, j) => {
      return A[i].reduce((sum, elm, k) => sum + elm * B[k][j], 0);
    });
  });
};
