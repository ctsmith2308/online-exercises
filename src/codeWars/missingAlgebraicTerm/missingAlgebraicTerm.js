// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. 
// You are provided with consecutive elements of an Arithmetic Progression. 
// There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. 
// The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. 
// The missing term will never be the first or last one.

var findMissing = function (arr) { 
    let list = arr.sort((a,b) => a-b);
     for(let i = 1; i < list.length - 1; i++) {
       let leftOperation = list[i-1] - list[i]
       let rightOperation = list[i] - list[i+1]
       if(leftOperation !== rightOperation) {
         if(Math.abs(leftOperation) > Math.abs(rightOperation)) {
           return list[i-1] + Math.min(Math.abs(leftOperation), Math.abs(rightOperation))
         } else {
           return list[i] + Math.min(Math.abs(leftOperation), Math.abs(rightOperation))
         }
       }
    }
    return 0
  }
  
  //or

  let findMissing = function (list) {  
    let pattern = (list[list.length-1] - list[0]) / list.length;
    let i = 0;
    while (list[i] + pattern === list[i+1]) i++;
    return list[i] + pattern;
  }