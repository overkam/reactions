/*var block = document.querySelector('.reactions');
var blocktext = document.createElement('div');
var blockemoji = document.createElement('div');
var blockbutton = document.createElement('div');
var button = document.createElement('div');
var blockcount = document.createElement('div');

button.classList.add('reactions__button');
blocktext.classList.add('reactions__text');
blockemoji.classList.add('reactions__emoji');
blockbutton.classList.add('reactions__button-wrapper');
blockcount.classList.add('reactions__count');

block.appendChild(blocktext);
block.appendChild(blockemoji);
blockemoji.appendChild(blockbutton);
blockemoji.appendChild(blockcount);
blockbutton.appendChild(button);

blocktext.innerHTML = 'How do you like this article?';*/

class Reactions {
 constructor(settings) {
  this.title = settings.title;
  this.wrapper = document.querySelector(settings.wrapperClass);
  this.appendToWrapper();
 }

 setTitle() {
  let title = document.createElement('div');
  title.innerHTML = this.title;
  title.classList.add('reactions__text');
  return title;
 }

 createReaction(item) {
  let div = document.createElement('div');
  div.classList.add(item);
  return div;
 }

 wrapButton(){
 	let div = document.createElement('div');
 	div.classList.add('reactions__emoji');
 	return div;
 }


 appendToWrapper() {
  let title = this.setTitle();
  console.log(title);
  this.wrapper.appendChild(title);
  var arr = ['reactions__emoji','reactions__button','reactions__count','reactions__button-wrapper'];
	 arr.forEach((item)=>{
	   	let block = this.createReaction(item);
	   	this.wrapper.appendChild(block);
	  });
	var arr2 = ['reactions__button-wrapper','reactions__button','reactions__count']
		arr2.forEach((item)=>{
			let blockemoji = document.querySelector('.reactions__emoji');
	  	console.log(blockemoji);
			let append = document.querySelector('.' + item);
			console.log(append);
  		blockemoji.appendChild(append);
  	});
 	let reactions__buttonWrapper = document.querySelector('.reactions__button-wrapper');
 	let reactions__button = document.querySelector('.reactions__button');
 	reactions__buttonWrapper.appendChild(reactions__button);
 }
 

}

let reaction = new Reactions({title : "Как вам статья?", wrapperClass : ".reactions"});
var count = 0;

var blockbutton = document.querySelector('.reactions__button-wrapper');
var blockcount = document.querySelector('.reactions__count');
blockbutton.addEventListener('click', countReactions );

function countReactions(){
	if (blockbutton.classList.contains('reactions__elem--active')) {
 	blockbutton.classList.remove('reactions__elem--active'); 
	 --count;
	} else {	
	 blockbutton.classList.add('reactions__elem--active'); 
	 ++count;
	} 
	blockcount.innerHTML = count;
};