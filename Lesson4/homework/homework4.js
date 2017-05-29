// 1. Change the background color of the entire document to red
document.body.style.backgroundColor = '#ff0000';
// 3. Change the font-style of the entire document to sans-serif
document.body.style.fontFamily = 'sans-serif';

document.getElementById('about_header').innerHTML = 'JavaScript\'s About Me';
// 2. Change the background color of just the "about me" portion to blue
document.getElementById('about_header').style.backgroundColor = '#0000ff';

// 4. Add your nickname
document.getElementById('nickname').innerHTML = 'JavaScript says it\'s, "mixelpix."';
// 5. Add your favorites
document.getElementById('favorites').innerHTML = 'JavaScript says it\'s, "Korean food, my dog \'Lucy\' analytical philosophy."';
// 6. Add your hometown
document.getElementById('hometown').innerHTML = 'JavaScript says it\'s, "Kailua, HI."';
