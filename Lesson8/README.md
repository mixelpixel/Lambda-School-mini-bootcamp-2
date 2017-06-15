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
- essentially, this is a different pattern, but the result is the same thing as if we made a named function declaration like so:
  ```js
  var cb = function() {
    console.log('hi');
  }

  cb();
  ```

## [@12m58s](https://youtu.be/ffc6Le_UBQI?t=12m58s)
