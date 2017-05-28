document.getElementById('about_header').innerHTML = 'JavaScript\'s About Me';

document.getElementById('nickname').innerHTML = 'JavaScript says it\'s, "Paprika"';

var elem = document.createElement('div');
elem.innerHTML = '<p>Hello World!</p>';
document.body.appendChild(elem);

var elem2 = document.querySelector('div');
var elem3 = document.createElement('p');
