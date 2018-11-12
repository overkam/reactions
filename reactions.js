/**
 * CSS classes of elements in class Reactions
 */
const CSS = {
	titleClass : 'reactions__text',
	emojiClass : 'reactions__emoji',
	buttonClass : 'reactions__button',
	wrapperClass : 'reactions__button-wrapper',
	countClass : 'reactions__count',
	activeButtonClass : 'reactions__elem--active'
};

/**
 * Creating blocks, adding emoji, text and buttons to general block
 */
class Reactions {
 constructor(settings) {
  this.title = settings.title;
  this.wrapper = document.getElementsByClassName(settings.wrapperBlockClass)[0];
  this.appendToBlock();
  this.blockbutton = null;
  this.blockcount = null;
  this.count = 0;
 }

/** 
 * Create a text block and append to general block 
 * @returns {HTMLElement} title
 */
 setTitle() {
  let title = document.createElement('div');
  title.innerHTML = this.title;
  title.classList.add(CSS.titleClass);
  return title;
 }

/** 
 * Create a general block 
 * @param {item} item - CSS class for block
 * @returns {HTMLElement} div
 */
 createReaction(item) {
  let div = document.createElement('div');
  div.classList.add(item);
  return div;
 }

/** 
 * Create inner blocks
 * @returns {HTMLElement} div
 */
 wrapButton(){
	let div = document.createElement('div');
	div.classList.add(CSS.emojiClass);
	return div;
 }

/** 
 * Append emojiblock, buttnos and counter to general block
 */
appendToBlock() {
	let title = this.setTitle();
	this.wrapper.appendChild(title);
	var arr = [CSS.emojiClass,CSS.buttonClass,CSS.countClass,CSS.wrapperClass];
	arr.forEach((item) => {
		let block = this.createReaction(item);
		this.wrapper.appendChild(block);
	});
	this.appendToEmojiBlock()
}

/** 
 * Append emoji and counter to emojiblock 
 */ 
 appendToEmojiBlock(){
	var arr2 = [CSS.wrapperClass,CSS.buttonClass,CSS.countClass]
	arr2.forEach((item) => {
		let blockemoji = document.getElementsByClassName(CSS.emojiClass)[0];
		let inner = document.getElementsByClassName(item)[0];
		blockemoji.appendChild(inner);
	});

	let reactionsButtonWrapper = document.getElementsByClassName(CSS.wrapperClass)[0];
	let reactionsButton = document.getElementsByClassName(CSS.buttonClass)[0];
	reactionsButtonWrapper.appendChild(reactionsButton);
	this.transfer();
}

/** 
 * Counting clicks to emoji
 */ 
transfer(){

let blockbutton = document.getElementsByClassName(CSS.wrapperClass)[0];
let blockcount = document.getElementsByClassName(CSS.countClass)[0];

blockbutton.addEventListener('click', () => 
	{this.countReactions(blockbutton,blockcount)});
};

countReactions(blockbutton,blockcount){
 if (blockbutton.classList.contains(CSS.activeButtonClass)) {
 blockbutton.classList.remove(CSS.activeButtonClass); 
  --this.count;
 } else {	
 blockbutton.classList.add(CSS.activeButtonClass); 	
  ++this.count;
 } 
 console.log(this.count,blockcount);
 blockcount.innerHTML = this.count;
};
}

let reaction = new Reactions({title : "Как вам статья?", wrapperBlockClass : "reactions"});