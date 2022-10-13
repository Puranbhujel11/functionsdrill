/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */


//  * Prompt 1:
//  * Write a function, using the function keyword. Call the function sayHello.
//  * When invoked, sayHello should print the string 'hello world'.

//  function sayHello(){
//   console.log('Hello World')
// }
// sayHello()


//  * Prompt 2:
//  Create a function called print. Print should take a parameter called message.
//  * When invoked and passed a string, print should `console.log` the message.
//  */

// const print = (message) => {
// console.log(message)
// }
// print('the message')



//   Prompt 3:
//  * Create a function called printMessage. This function should take a parameter
//  * called message. When invoked and passed a string, print 'Today's message
//  * is:', followed by the message passed in as a parameter.
 
// const printMessage = (message) => {
//   console.log(message)
// }
// printMessage('Todays message is')


/*
 * Prompt 4:
 * Fix the following function:
** Starter Code */
// function multiply (a, b) {
//     return a * b
//   }
//   console.log(2 * 2)


/*
   * Prompt 5:
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
//   const reverseMessage = (message) => {
//     let newMessage = "";
//     for (let i = message.length - 1; i >= 0; i--) {
//         newMessage += message[i];
//     }
//     return newMessage;
// }
// console.log(reverseMessage('puran'))
  
  
/*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
//   const multiply = (a , b) => {
//     return a * b; 
  
//   } 
//   console.log(2 * 2)
  

  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
//   function makePerson(firstname, lastname) {
//     let personName = {
//       firstname: firstname,
//       lastname: lastname,

//     }
//     return personName;
//   }
  
//   const zakk = makePerson('Zakk', 'F')
//   const jimmy = makePerson('Jimmy', 'B')

//   console.log('Zakk', 'F');
//   console.log('Jimmy', 'B');
  
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
   */
//   const puran = (a, b, c) =>{
//     let fact= {
//       'Name': 'Puran',
//       'car': 'BMW',
//       'Age': 18

//     }
//     return fact;

//   }
//   let myFact = puran()
//   console.log(myFact)


  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
// let array = [1, 2, 3, 4];
// const removeLastNumb = arr => {
//  arr.pop();
//  return arr;
// }
// removeLastNumb(array);
// console.log(array);


  
/*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code */
//   let sum = 0

//   function add(a, sum = 0) {
//     return a + sum;
//   }
//   console.log(add(3 , sum));




/*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
//   var array = [1,2,3,4];
//   let sum = (x , y) => {
//     return x + y;
//   }
//   console.log(array.reduce(sum));


/*
   * Prompt 12:
   * Write a function that takes a string and returns an array of every word in
   * the string.
   
  // function getAllWords(string) {

  //   let arr = string.split(" ")
  //   return arr;
  //  }
   
  //    console.log(getAllWords('My name is Puran'));
  
  
/*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
  // const testFunc = function(shouldWork){
  //   if(shouldWork === 'yes'){
  //     return "this works";
  //   }else {
  //     return "doesn't work";
  //   }
  // };
  // testFunc('yes')
  // console.log(testFunc('yes'))
  
  
/*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
//  function add(a, b) {
//     return a + b
//   }
//   console.log(add(2 ,4)) ;
  
  

/*
   * Prompt 15:
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
   */
// function outerFunction(greet1) {
//   return greet1;
// }

// function innerFunction (greet2) {
// return outerFunction(greet2);
// };;
// const greet = innerFunction("hello world")
// console.log(greet)
