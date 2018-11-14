/**
 * @typedef {object} ReactionsConfig
 * @property {string} title  - Label for button
 * @property {string} wrapperBlockSelector - Module holder
 * 
 */


/**
 * Creating blocks, adding emoji, text and buttons to general block
 */
class Reactions {

  /**
   * @param  {ReactionsConfig} settings - module configuration object
   * @return {void}
   */
  constructor(settings) {
    this.title = settings.title;
    // this.wrapper = 
    this.appendToBlock();
    this.blockButton = null;
    this.blockCount = null;
    this.count = 0;

    this.nodes = {
      wrapper: document.querySelector(settings.wrapperBlockSelector),
      title: null,
      emojiBlock: null,
      button: null,
      buttons: [],
    }
  }

  /**
   * CSS classes of elements in class Reactions
   */
  static get CSS(){
    return {
      titleClass : 'reactions__text',
      emojiClass : 'reactions__emoji',
      buttonClass : 'reactions__button',
      wrapperClass : 'reactions__button-wrapper',
      countClass : 'reactions__count',
      activeButtonClass : 'reactions__elem--active'
    }
  }

 /** 
 * Create a text block and append to general block 
 * @returns {HTMLElement} title
 *//**
  setTitle() {
    let title = document.createElement('div');
    title.classList.add(Reactions.CSS.titleClass);
    return title;
  }*/

/** 
 * Create a general block 
 * @param {CSSClass} CSSClass - CSS class for block
 * @returns {HTMLElement} div
 */
 make(tagName, className) {
  let div = document.createElement(tagName);

  div.classList.add(className);
 
  return div;
 }

/** 
 * Create inner blocks
 * @returns {HTMLElement} div
 *//**
 wrapButton(){
  let div = document.createElement('div');
  div.classList.add(Reactions.CSS.emojiClass);
  return div;
 }*/

/** 
 * Append emojiblock, buttons and counter to general block
 */
appendToBlock() {
  /**let title = this.setTitle();

  this.wrapper.appendChild(title);*/

  /**
   * Elemets which appends into general block
   * @type {string[]}
   
  var elementsIntoBlock = [
    Reactions.CSS.titleClass, 
    Reactions.CSS.emojiClass, 
    Reactions.CSS.buttonClass, 
    Reactions.CSS.countClass, 
    Reactions.CSS.wrapperClass
  ];*/

  /**
   * Append title
   */
  this.nodes.title = this.make('div', Reactions.CSS.titleClass);
  this.nodes.wrapper.appendChild(this.nodes.title);

  /**
   * Append emoji wrapper
   * @type {HTMLElement} emojiBlock
   */
  this.nodes.emojiBlock = this.make('div', Reactions.CSS.emojiClass)
  this.nodes.wrapper.appendChild(this.nodes.emojiBlock);

  /**
   * Append button
   * @type {HTMLElement} button
   */
  this.nodes.button = this.make('div', Reactions.CSS.buttonClass);
  this.nodes.wrapper.appendChild(this.nodes.button);

  elementsIntoBlock.forEach((CSSClass) => {
    let block = this.createReaction(CSSClass);
    this.wrapper.appendChild(block);
  });
  //this.title.innerHTML = this.title;
	this.appendToEmojiBlock()
}

/** 
 * Append emoji and counter to emojiBlock 
 */ 
 appendToEmojiBlock(){
  /**
   * Elements which appends into emojiBlock
   * @type {Array}
   */
	var elementsIntoEmojiBlock = [
    Reactions.CSS.wrapperClass, 
    Reactions.CSS.buttonClass, 
    Reactions.CSS.countClass
  ];

	elementsIntoEmojiBlock.forEach((CSSClass) => {
		let blockemoji = document.getElementsByClassName(Reactions.CSS.emojiClass)[0];
		let inner = document.querySelector('.' + CSSClass);
		blockemoji.appendChild(inner);
	});

  /**
   * [reactionsButtonWrapper description]
   * @type {[type]}
   */
	let reactionsButtonWrapper = document.getElementsByClassName(Reactions.CSS.wrapperClass)[0];
	let reactionsButton = document.getElementsByClassName(Reactions.CSS.buttonClass)[0];
	reactionsButtonWrapper.appendChild(reactionsButton);
	
  /**
   * 
   */
  this.transfer();
}

/** 
 * Counting clicks to emoji
 */ 
transfer(){
	let blockButton = document.getElementsByClassName(Reactions.CSS.wrapperClass)[0];
  let blockCount = document.getElementsByClassName(Reactions.CSS.countClass)[0];

	blockButton.addEventListener('click', () => {
		this.countClicksToButton(blockButton,blockCount);
  });
};

/**
 * Increase or decrease counter after click
 * @param {HTMLElement} blockButton
 * @param {HTMLElement} blockCount
 */
countClicksToButton(blockButton,blockCount){
 if (blockButton.classList.contains(Reactions.CSS.activeButtonClass)) {
 blockButton.classList.remove(Reactions.CSS.activeButtonClass); 
  --this.count;
 } else {	
 blockButton.classList.add(Reactions.CSS.activeButtonClass); 	
  ++this.count;
 }
 blockCount.innerHTML = this.count;
};
}

