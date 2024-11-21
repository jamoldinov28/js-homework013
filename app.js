
{
  //Complete the square sum function so that it squares each number passed into it and then sums the results together.
  
  function squareSum(numbers) {
     return numbers.reduce((sum, num) => sum + num ** 2, 0);
  }

}


{

  //We need a function that can transform a string into a number. What ways of achieving this do you know?
 // Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

 const stringToNumber = function(str){
    return +str
  }

}
  

{
  //Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your   function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of   it, see the sample tests.
  var summation = function (num) {
      return (num * (num + 1)) 
  }
  
}


{
  //Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep presentin the array (true means present).
  function countSheeps(sheep) {
  return sheep.filter(Boolean).length
  }

}


{
  //Make a function that will return a greeting statement that uses an input;
  // your program should return, "Hello, <name> how are you doing today?".
  function greet(name) {
    return `Hello, ${name} how are you doing today?`;
  }
}


{
  //Given a random non-negative number, 
  //you have to return the digits of this number within an array in reverse order.
  function digitize(n) {
    return n.toString().split('').reverse().map(Number);
  }
 
  
}


{
  //Timmy & Sarah think they are in love, but around where they live, they will only know once
  // they pick a flower each. If one of the flowers has an even
  // number of petals and the other has an odd number of petals it means they are in love.

  function lovefunc(flower1, flower2) {
    return (flower1 % 2 !== flower2 % 2);
  }
}


{
  //You can assume, for the purpose of this kata, that the supplied array will not be empty.
  function findSmallestInt(array) {
    return Math.min(...array);
  }
}




{
  //Given an array of integers, return a new array with each value doubled.

  function maps(x) {
    return x.map(n => n * 2)
  }
  
}




{
  //This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
  function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
  }
  
}

