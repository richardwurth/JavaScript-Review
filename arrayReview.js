var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here

function last (array) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    result = array[i];
  }
  return result;
}

alert(last(threeItems));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

function allEvens (array) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
}

evenArray = allEvens(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

function finder (random,array) {
  let result = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === random) {
      result = true;
    }
  }
  return result;
}

alert(finder(getRandomArbitrary(),randomArray));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here

second = first.slice().concat([first.length+1,first.length+2]);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here

  function longest (string) {
    let array = string.split(" ");
    let result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > result.length) {
        result = array[i];
      }
    }
    return result;
  }

  longest(sentence);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here

  function capitalize (string) {
    let result = "";
    for (var i = 0; i < string.length; i++) {
      if (!string[i-1] || string[i-1] === " ") {
        result += string[i].toUpperCase();
      } else {
        result += string[i];
      }
    }
    return result;
  }

myPoem = capitalize(myPoem);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.


function vowelCounter (string) {
  let upperCase = string.toUpperCase();
  let result = 0;
  for (var i = 0; i < upperCase.length; i++) {
    if(upperCase[i] == "A" || upperCase[i] == "E" || upperCase[i] == "I" || upperCase[i] == "O" || upperCase[i] == "U" || upperCase[i] == "Y") {
      result += 1;
    }
  }
  return result;
}

console.log(vowelCounter(theOdyssey));
