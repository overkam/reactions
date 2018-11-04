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

blocktext.innerHTML = 'How do you like this article?';

var count = 0;

blockbutton.addEventListener('click', countReactions );*/

/*function countReactions(){
	if (blockbutton.classList.contains('reactions__elem--active')) {
 	blockbutton.classList.remove('reactions__elem--active'); 
	 --count;
	} else {	
	 blockbutton.classList.add('reactions__elem--active'); 
	 ++count;
	} 
	blockcount.innerHTML = count;
};*/

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
  console.log(this.item);
  div.classList.add('.' + this.item);
  return div;
 }

 wrapButton(){
 	let div = document.createElement('div');
 	div.classList.add('reactions__emoji');
 	return div;
 }

 appendToWrapper() {
  var reaction = this.createReaction('reactions');
  let title = this.setTitle();
  var arr = ['reactions__emoji','reactions__button','reactions__count'];
  arr.forEach(function(item){
  	let block = reaction.createReaction(item);
  	console.log(block);
  })
  this.wrapper.appendChild(title);
  this.wrapper.appendChild(reaction);
 }
}

let reaction = new Reactions({title : "Как вам статья?", wrapperClass : ".reactions"});