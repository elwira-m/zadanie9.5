//script.js

var myButtons = document.getElementsByClassName('button');
console.log(myButtons.length);

var content = '';

for (var k=0; k < myButtons.length; k++) {
	content = myButtons[k];
    alert(content.innerText);
}
