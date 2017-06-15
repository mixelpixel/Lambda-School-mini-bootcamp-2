# Lecture 8 Notes - Callback functions
## [@1m34s](https://youtu.be/ffc6Le_UBQI?t=1m34s) LECTURE STARTS
- https://jsfiddle.net
- Advanced JavaScript Concepts, Callback functions, what they are, how to write them, how they fit into the overall architecture.
- Data Structure, algorithms, full stack JS web development, incl: React, Redux, servers, DB's etc.
- Computer architecture, compiled languages, etc.

## [@6m58s](https://youtu.be/ffc6Le_UBQI?t=6m58s) Callback Funtions
- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
- Functions are flexible - they can be passed around. Callbacks: passing one function into another function.
- we can pass function from one function into another (just like numbers, strings, arrays, objects, etc.)
- a basic function:
  ```js
  function sayHi() {
    console.log('hi');
  }
  ```
- "calling" a basic function:
  ```js
  sayHi();
  ```
- No arguments, passed in, not returning anything, basic ***named function declaration*** syntax:
  ```js
  function_keyword name() {
    do something;
  }
  ```
- Generally the way callback functions are used is by constructing a function parameter which is called in the body of the function and then by passing an anonymous inline function:
  ```js
  function sayHi(cb) { // <--- function parameter
    cb();              // <--- invoking the function parameter
  }

  sayHi(function() {   // <--- anonymous inline function argument
    console.log('hi'); // <--- does something
  });
  ```
- "anonymous" functions: simply, they don't have a name
- essentially, this is a different code pattern, but the result is the same thing as if we made a named function declaration like so:
  ```js
  var cb = function() {
    console.log('hi');
  }

  cb();
  ```
- Functions can be in arrays, on objects, pass them in to functions, even return the from functions
- Closure... returning an anonymous functions... "higher order functions"

## [@12m58s](https://youtu.be/ffc6Le_UBQI?t=12m58s)
- functional programming in JavaScript
  ```js
  // [1, 2, 3] --> 6
  function sum(numbers, cb) { // <--- cb often takes the place of a return statement
    return numbers.reduce(function(accumulator, value) {
      // console.log(accumulator, value);
      return accumulator + value;
    });
  }

  console.log(sum([1, 2, 3]));
  ```
- Using the cb:
  ```js
  // [1, 2, 3] --> 6
  function sum(numbers, cb) {
    var result = numbers.reduce(function(accumulator, value) {
      return accumulator + value;
    });
    cb(result);
  }

  sum([1, 2, 3], function(result) {
      console.log(result);
  });
  ```
- synchronous vs. asynchronous code...

## [@21m25s](https://youtu.be/ffc6Le_UBQI?t=21m25s)
- return the last item in an array
- synchronous code
  ```js
  // [1, 2, 3, 4, 5] --> 5
  function last(anArray, cb) {
    cb(anArray[anArray.length - 1]);
  }

  last([1, 2, 3, 4, 5], function(lastItem){
    console.log(lastItem);
  });
  ```
## [@24m45s](https://youtu.be/ffc6Le_UBQI?t=24m45s)
- http://underscorejs.org

## [@26m40s](https://youtu.be/ffc6Le_UBQI?t=26m40s)
- Asynchronous requests (JQuery, Axios, etc.)
- the spot where the process is gonna come back and revisit the code at a later point in time.\
- Things we're glossing over: "this" keyword, constructors, hoisting, ES6, recursion, closure, etc.

## [@29m50s](https://youtu.be/ffc6Le_UBQI?t=29m50s)
- Closures
