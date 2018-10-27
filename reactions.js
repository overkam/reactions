var block = document.querySelector('.block');
var blocktext = document.createElement('div');
var blockemoji = document.createElement('div');
var blockbutton = document.createElement('div');
var button = document.createElement('div');
var blockcount = document.createElement('div');

button.classList.add('button');
blocktext.classList.add('blocktext');
blockemoji.classList.add('blockemoji');
blockbutton.classList.add('blockbutton');
blockcount.classList.add('blockcount');

block.appendChild(blocktext);
block.appendChild(blockemoji);
blockemoji.appendChild(blockbutton);
blockemoji.appendChild(blockcount);
blockbutton.appendChild(button);

var count = 0;
var mark = 1;

button.addEventListener('click', function () {
											if (mark % 2 != 0 ) {
											 button.classList.toggle('buttonfocus'); 
											 ++count;
											 ++mark;
											 console.log(count);
											 console.log(mark);
											 } else {
											 	--count;
											 	--mark;
											 	console.log(count);
											 	console.log(mark);
											 }
											}
);
