//Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

function pyramid(n) {
    let newArr = []
    for(let i = n; i>0; i--) {
      let subArray= Array(i).fill(1)
      newArr.unshift(subArray)
    }
    return newArr
}