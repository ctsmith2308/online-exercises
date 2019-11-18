// Given an n x n array, return the array elements arranged from
// outermost elements to the middle element, traveling clockwise.
// NOTE: The idea is not sort the elements from the lowest value to the highest; 
// the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// https://www.codewars.com/kata/snail/javascript

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

const snail = (arr, completeArray = []) => {
  let [top, middle, bottom, end] = [[], [], [], []];
  for (let i = 0; i <= arr.length; i++) {
    if (i === 0) {
      top.push(...arr[0]);
    } else if (i === arr.length - 1) {
      bottom.push(...arr[arr.length - 1]);
    } else if (arr[i]) {
      let subArr = arr[i];
      middle.push(...subArr.splice(subArr.length - 1, 1));
      end.unshift(...subArr.splice(0, 1));
    }
  }
  let remainderArr = arr.slice(1, arr.length - 1);
  let concatedArr = completeArray.concat(top, middle, bottom.reverse(), end);
  return remainderArr.length >= 1
    ? snail(remainderArr, concatedArr)
    : concatedArr;
};

export default snail;
//  snail(testArr)
