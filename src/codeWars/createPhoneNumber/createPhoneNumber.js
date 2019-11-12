// Create Phone Number 6kyu
// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Ex:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


const createPhoneNumber = (array) => {
  array.splice(0, 0, '(');
  array.splice(4, 0 ,')');
  array.splice(5, 0, ' ');
  array.splice(9, 0, '-');
  return array.join('');
};

//or

// function createPhoneNumber(numbers){
//   let format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }

export default createPhoneNumber;
