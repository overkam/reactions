const CSS = {
	titleClass : '.reactions__text',
	emojiClass : '.reactions__emoji',
	buttonClass : '.reactions__button',
	wrapperClass : '.reactions__button-wrapper',
	countClass : '.reactions__count',
	activeButtonClass : '.reactions__elem--active'
};
	console.log(CSS.titleClass);

class Reactions {
 constructor(settings) {
  this.title = settings.title;
  this.wrapper = document.querySelector(settings.wrapperBlock);
  this.appendToWrapper();
 }

 setTitle() {
  let title = document.createElement('div');
  title.innerHTML = this.title;
  title.classList.add(CSS.titleClass);
  return title;
 }

 createReaction(item) {
  let div = document.createElement('div');
  div.classList.add(item);
  return div;
 }

 wrapButton(){
 	let div = document.createElement('div');
 	div.classList.add(CSS.emojiClass);
 	return div;
 }


 appendToWrapper() {
  let title = this.setTitle();
  this.wrapper.appendChild(title);
  var arr = [CSS.emojiClass,CSS.buttonClass,CSS.countClass,CSS.wrapperClass];
	arr.forEach((item) => {
	  let block = this.createReaction(item);
		this.wrapper.appendChild(block);
	});
	var arr2 = [CSS.wrapperClass,CSS.buttonClass,CSS.countClass]
	arr2.forEach((item) => {
		let blockemoji = document.querySelector(CSS.emojiClass);
		let inner = document.querySelector(item);
		console.log(blockemoji, inner);
		blockemoji.appendChild(inner);
	});

 	let reactionsButtonWrapper = document.querySelector(CSS.wrapperClass);
 	let reactionsButton = document.querySelector(CSS.buttonClass);
 	reactionsButtonWrapper.appendChild(reactionsButton);
 }
 

}

let reaction = new Reactions({title : "Как вам статья?", wrapperBlock : ".reactions"});
var count = 0;

var blockbutton = document.querySelector(CSS.buttonClass);
var blockcount = document.querySelector(CSS.countClass);
blockbutton.addEventListener('click', countReactions );

function countReactions(){
	if (blockbutton.classList.contains(CSS.activeButtonClass)) {
 	blockbutton.classList.remove(CSS.activeButtonClass); 
	 --count;
	} else {	
	 blockbutton.classList.add(CSS.activeButtonClass); 
	 ++count;
	} 
	blockcount.innerHTML = count;
};