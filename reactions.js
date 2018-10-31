var block = document.querySelector('.reactions');
/*var blocktext = document.createElement('div');
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
class Reactions {
 constructor(settings) {
  this.title = settings.title;
  this.wrapper = document.querySelector(settings.wrapperClass);
  this.appendToWrapper(); 
 }

 setTitle() {
  let title = document.createElement('div');
  title.innerHTML = this.title;
  title.classList.add('blocktext');
  return title;
 }

 createReaction() {
  let div = document.createElement('div');
  div.classList.add('button');
  return div;
 }

 appendToWrapper() {
  let reaction = this.createReaction();
  let title = this.setTitle();
  console.log(title);
  this.wrapper.appendChild(title);
  this.wrapper.appendChild(reaction);
 }
}

let reaction = new Reactions({title : "Как вам статья?", wrapperClass : ".block"});

/*
class Reactions {
 constructor(name,cssclass, first, second) {
  this.name = name;
  this.cssclass = cssclass;
  this.first = first;
  this.second = second;
  this.createReaction(name, cssclass, first, second);
 }

 createReaction(name, cssclass, first, second) {
  this.name = document.createElement('div');
  this.name.classList.add(this.cssclass);
  if (this.first != false) {
  	this.name.appendChild(this.first);
  }
  if (this.second != false) {
  	this.name.appendChild(this.second);
  }
  console.log(this.name);
 }
}

var button = new Reactions('button', 'reactions__button', false, false);
var blockbutton = new Reactions('blockbutton', 'reactions__button-wrapper', button, false);


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