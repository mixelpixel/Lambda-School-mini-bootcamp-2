# Lecture 6 Notes - JavaScript Functions, Parameters, Arguments
## [@7m](https://youtu.be/ffc6Le_UBQI?t=7m) LECTURE STARTS
- Callback functions
- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
- we can pass function from one function into another (just like numbers, strings, arrays, objects, etc.)
- anonymous function

```js
function_keyword name() {
  do something
}
```
i.e.
```js
function sayHi(cb) {
  cb();
}

sayHi(function(){
  console.log('hello');
});
```

e.g.
```js
function sayHi(cb) {
  console.log('hi');
}

sayHi();
```
## [@12m58s]((https://youtu.be/ffc6Le_UBQI?t=12m58s))
