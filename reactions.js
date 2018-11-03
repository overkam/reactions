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
/*class Reactions {
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

 createReaction() {
  let div = document.createElement('div');
  div.classList.add('reactions__button');
  return div;
 }

 appendToWrapper() {
  let reaction = this.createReaction();
  let title = this.setTitle();
  this.wrapper.appendChild(title);
  this.wrapper.appendChild(reaction);
 }
}

let reaction = new Reactions({title : "Как вам статья?", wrapperClass : ".reactions"});*/



class Reactions {
 	constructor(name, cssClass, inner) {
	 	this.cssClass = cssClass;
	 	this.inner = inner;
	 	//console.log(this.name);
	 	this.createReaction(this.name, this.cssClass, this.inner);
 	}

 	createReaction(name, cssClass, inner) {
		this.name = document.createElement('div');
		this.name.classList.add(this.cssClass);
		document.body.appendChild(this.name);
		if (this.inner != false){
 			this.inner = document.querySelector(this.inner);
			this.appendReaction(this.name, this.inner);
		}
	 	//console.log(this.name, this.inner);
	}
 	
 	appendReaction(name,inner){
	 	this.name = document.querySelector('.' + this.cssClass);
	 	this.inner = document.querySelector('.' + this.cssClass);
	 	console.log(this.name, this.inner);
 	}
}

var blockemoji = new Reactions ('blockemoji','reactions__emoji', false);
var block = new Reactions ('block', 'reactions', 'reactions__emoji');
/*var blocktext = new Reactions ('blocktext', 'reactions__text');

class Reaction {
	constructor(name, inner){
		this.name = name;
		this.inner = inner;
		console.log(this.name, this.inner);
		this.appendInner(this.name, this.inner);
	}
	appendInner(name, inner){
		console.log(typeof this.name, this.inner);
		document.getElementByClassName(this.name).appendChild(this.inner);
	}
}

var inn1 = new Reaction ('block', 'blocktext');
var inn2 = new Reaction (block, blockemoji);*/
/*function countReactions(){
	if (blockbutton.classList.contains('reactions__elem--active')) {
 	blockbutton.classList.remove('reactions__elem--active'); 
	 --count;
	} else {	
	 blockbutton.classList.add('reactions__elem--active'); 
	 ++count;
	}
	blockcount.innerHTML = count;
};


/*class Reactions{
	constructor (name, cssclass, child){
		this.name = name;
		this.cssclass = cssclass;
		this.child = child;
		this.createReaction(name, cssclass, child);
	}
	createReaction(name, cssclass, child){
		this.name = document.createElement('div');
		this.name.classList.add(this.cssclass)
		document.body.appendChild(this.child);
	}
}

var blockemoji = new Reactions (blockemoji, 'reactions__emoji', blockbutton);
var blockbutton = new Reactions (blockbutton, 'reactions__button-wrapper', button);*/