var block = document.querySelector('.block');
var blocktext = document.createElement('div');
var blockemoji = document.createElement('div');
var blockbutton = document.createElement('div');
var button = document.createElement('div');

button.classList.add('button');
blocktext.classList.add('blocktext');
blockemoji.classList.add('blockemoji');
blockbutton.classList.add('blockbutton');

block.appendChild(blocktext);
block.appendChild(blockemoji);
blockemoji.appendChild(blockbutton);
blockbutton.appendChild(button);

button.classList.toggle('buttonfocus');
