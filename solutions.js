console.log('hello');

// ### Verbal questions

// What is the difference between a **parameter** and an **argument**?

// parameter = is what is in parenthesis when you DECLARE a function
// arguement = is what is in parenthesis when you CALL a function
// difference? = parameters are like the recipe and arguments are the instance


// Within a function, what is the difference between **return** and **console.log**?


// return = stops the function from continuing and it will RETURN a value to the function
// console.log = only logs something to the console - it doesn't really "update" anything.
// difference? - Returns will be more helpful when we being building real applications and not just
// playing with loggin things to the console.




// "Commit 1 - Verbal questions"








// ## Palindrome
// Write a function `checkPalindrome` that accepts a single argument, a string.
//
//  The function should return true (Boolean) if the string is a palindrome,
//
//   false if it is not.
//
//    Make sure your function will give the correct answer for words with **capital letters**.


const checkPalindrome = (possiblePalindrome) => {
      return possiblePalindrome == possiblePalindrome.split('').reverse().join('');
}


console.log(checkPalindrome('RADAR')); // true
console.log(checkPalindrome('Borscht')); // false

//                      console.log(checkPalindrome("Radar")); => true
//                      console.log(checkPalindrome("Borscht")); => false


// "Commit 2 - Palindrome".








// ## Digit Sum
// Write a function `sumDigits` that accepts a number
//                    and returns the sum of its digits.

// console.log(sumDigits(42));    => 6;

////////////////////////////////////////////////////////////////////

function digitSum(n) {
	   var sum = 0;
	   var string = n.toString();

	   for(i=0; i < string.length; i++){
		      sum = sum + parseInt(string.substring(i, i+1));
	        }

	return sum;
}

console.log(digitSum(12345)); // ----> 15


// "Commit 3 - Digit Sum".





// ## Pythagoras
// Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`,
//               and returns the solution for sideC using the Pythagorean theorem.

// _hint:_ discover the Pythagorean Theorem on a website called google.com
// _hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript



const calculateSide = (sideA, sideB) => {
	return Math.sqrt(sideA * sideA + sideB * sideB);

}

console.log(calculateSide(8, 6));

//console.log(calculateSide(8, 6));    => 10


// "Commit 4 - Pythagoras".



// ## Sum Array
// Write a function `sumArray` that takes an (array) as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array.
// Use a _for loop_ within the function to iterate over the array and sum the contents.
// Use a variable such as
//
//
// let sum = 0;

// that will **accumulate** value within the loop.
//Expected result: console.log(sumArray([1, 2, 3, 4, 5, 6]));  => 21


const sumArray = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		    sum = arr[i] + sum;
	}
   return sum
}

console.log(sumArray([2, 4, 6, 8, 10,]));


// "Commit 5 - Sum Array".






// ## Prime Numbers
// A Prime number is a number that is not evenly divisible by another number
// except 1 and itself. If you want to read more deeply about it,
//  [go here](https://en.wikipedia.org/wiki/Prime_number).
// To test whether a number is Prime, you only need to test as
// far as the **square root** of that number.
//  This is advisable for optimization and testing large numbers.


// ### Step One
// Write a function called `checkPrime` that will test whether a number is Prime.
//  The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for loop_.


const checkPrime = (num) => {
	for (i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

// PRIMES
console.log(checkPrime(2));
console.log(checkPrime(3));
console.log(checkPrime(5));
console.log(checkPrime(7));
console.log(checkPrime(11));
console.log(checkPrime(13));
console.log(checkPrime(17));

// NOT PRIMES
console.log(checkPrime(4));
console.log(checkPrime(6));
console.log(checkPrime(8));
console.log(checkPrime(9));
console.log(checkPrime(10));
console.log(checkPrime(12));
console.log(checkPrime(14));





// ### Step Two
// Write another function called `printPrimes` that will print (console log)
//  all the Primes up to an arbitrary limit. For example, if you invoke your
//   function with `printPrimes(97)`, it will print all the Prime numbers up
//    to and including 97.
//
// This function can **call on** the previous `checkPrime` function.

const printPrimes = (num) => {
      for (let i = 0; i <= num; i++) {
            if (checkPrime(i)) {
                console.log(`${i} is a prime number!!!!`);
    }
  }
}

printPrimes(97);





// "Commit 6 - Prime Numbers".








// ## Insert Dash
// Write a function `insertDash` that accepts a number as a parameter
//  and returns a string with a dash inserted between any consecutive
//   **odd numbers**. There should not be a dash at the end,
//    it goes only between numbers.


//  console.log(insertDash(454793));   => 4547-9-3







// "Commit 7 - Insert Dash".




























// # CSS
// Watch the following three videos on CSS:
//
// - [First CSS video - 5 minutes](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
// - [Second CSS video - 11 minutes](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
// - [Third CSS video - 17 minutes](https://www.youtube.com/watch?v=g0Aq2kP5-CY&index=5&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
//
// You will need to have watched these videos for tomorrow's lab.

// # Hungry for more
//
// 1. Complete the afternoon lab.
// 2. [Project euler](https://projecteuler.net/archives)



// "Commit 8 - Hungry for More".
