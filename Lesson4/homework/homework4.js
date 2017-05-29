// From lecture:
document.getElementById('about_header').innerHTML = 'JavaScript\'s About Me';
// Homework Assignment:
// 1. Change the background color of the entire document to red
document.body.style.backgroundColor = '#ff0000';
// 2. Change the background color of just the "about me" portion to blue
document.getElementById('about_header').style.backgroundColor = '#0000ff';
// 3. Change the font-style of the entire document to sans-serif
document.body.style.fontFamily = 'sans-serif';
// 4. Add your nickname
document.getElementById('nickname').innerHTML = 'JavaScript says it\'s, "mixelpix."';
// 5. Add your favorites
document.getElementById('favorites').innerHTML = 'JavaScript says it\'s, "Korean food, my dog \'Lucy\' analytical philosophy."';
// 6. Add your hometown
document.getElementById('hometown').innerHTML = 'JavaScript says it\'s, "Kailua, HI."';

// Extra Credit: Iterate through each li and change the class to "listitem".
// Add a style tag that sets a rule for "listitem" to make the color red.

var allListItems = document.getElementsByTagName('li');
console.log(allListItems)

// allListItems.forEach(function (item, i) {
//   item[i].className = 'listitem';
// });

for (var i = 0; i < allListItems.length; i++) {
  allListItems[i].className = 'listitem';
};

var allListItemsByClass = document.getElementsByClassName('listitem');
console.log(allListItemsByClass);

for (var i = 0; i < allListItemsByClass.length; i++) {
  allListItemsByClass[i].style.color = '#ff0000';
};
// x.style.color = '#ff0000';
// document.getElementsByClassName('listitem').style.color = '#0000ff';

// Extra Credit: Create a new img element and set its src attribute to a picture of you.
// Append that element to the page.
