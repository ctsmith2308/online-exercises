// Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, 
// and returns a dictionary/hash which shows the least amount of coins used to make up that amount. 
// The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). 
// Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:
// If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be be rounded down, 
// and the resulting dictionary should never contain fractions of a coin.
 
 const looseChange = change => {
    let dict = {
      'Quarters': 25, 
      'Dimes': 10,
      'Nickels': 5,
      'Pennies': 1, 
    };
    let remainder = change;
    for(let coin in dict) {
      if(dict[coin] > remainder) {
        dict[coin] = 0;
      } else {
        let holdCoinValue = dict[coin];
        dict[coin] = Math.floor(remainder / holdCoinValue);
        remainder = remainder % holdCoinValue;
      }
    }
    return dict
  }

  export default looseChange