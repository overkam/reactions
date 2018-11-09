const CSS = {
	titleClass : 'reactions__text',
	emojiClass : 'reactions__emoji',
	buttonClass : 'reactions__button',
	wrapperClass : 'reactions__button-wrapper',
	countClass : 'reactions__count',
	activeButtonClass : 'reactions__elem--active'
};

class Reactions {
 constructor(settings) {
  this.title = settings.title;
  this.wrapper = document.getElementsByClassName(settings.wrapperBlockClass)[0];
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
		let blockemoji = document.getElementsByClassName(CSS.emojiClass)[0];
		let inner = document.getElementsByClassName(item)[0];
		blockemoji.appendChild(inner);
	});


 	let reactionsButtonWrapper = document.getElementsByClassName(CSS.wrapperClass)[0];
 	let reactionsButton = document.getElementsByClassName(CSS.buttonClass)[0];
 	reactionsButtonWrapper.appendChild(reactionsButton);
}

this.count = 0;

let blockbutton = document.getElementsByClassName(CSS.wrapperClass)[0];
let blockcount = document.getElementsByClassName(CSS.countClass)[0];

blockbutton.addEventListener('click', countReactions() );

console.log(CSS.activeButtonClass);

countReactions(){
	if (blockbutton.classList.contains(CSS.activeButtonClass)) {
 	blockbutton.classList.remove(CSS.activeButtonClass); 
	 --count;
	} else {	
	 blockbutton.classList.add(CSS.activeButtonClass); 	
	 ++count;
	} 
	blockcount.innerHTML = count;
};
}

let reaction = new Reactions({title : "Как вам статья?", wrapperBlockClass : "reactions"});