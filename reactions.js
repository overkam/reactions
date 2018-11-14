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
      buttonWrapper: null,
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
      buttonWrapperClass : 'reactions__button-wrapper',
      countClicksClass : 'reactions__count',
      activeButtonClass : 'reactions__elem--active'
    }
  }

/** 
 * Create a general block 
 * @param {CSSClass} CSSClass - CSS class for block
 * @returns {HTMLElement} div
 */
 make(tagName, className) {
  console.log(tagName, className);
  let div = document.createElement(tagName);

  div.classList.add(className);
 
  return div;
 }

/** 
 * Append emojiblock, buttons and counter to general block
 */
appendToBlock() {
  /**
   * Append title
   */
  this.nodes.title = this.make('div', Reactions.CSS.titleClass);
  this.nodes.wrapper.appendChild(this.nodes.title);
  console.log(this.nodes.title);

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

  /**
   * Append wrapper for button
   * @type {HTMLElement} buttonWrapper
   */
  this.nodes.buttonWrapper = this.make('div', Reactions.CSS.buttonWrapperClass);
  this.nodes.wrapper.appendChild(this.nodes.buttonWrapper);

  /**
   * Append clicks counter
   * @type {HTMLElement} countClicks
   */
  this.nodes.countClicks = this.make('div', Reactions.CSS.countClicksClass);
  this.nodes.wrapper.appendChild(this.nodes.countClicks);


	this.appendToEmojiBlock()
}

/** 
 * Append emoji and counter to emojiBlock 
 */ 
 appendToEmojiBlock(){

  /**
   * Append button wrapper to emojiBlock
   */
  this.nodes.emojiBlock.appendChild(this.nodes.buttonWrapper);

  /**
   * Append button to emojiBlock
   */
  this.nodes.emojiBlock.appendChild(this.nodes.button);

  /**
   * Append clicks counter to emojiBlock
   */
  this.nodes.emojiBlock.appendChild(this.nodes.countClicks);

  /**
   * Append button to button wrapper
   */
  this.nodes.buttonWrapper.appendChild(this.nodes.button);


	this.nodes.buttonWrapper.addEventListener('click', () => {
		this.countClicksToButton(this.nodes.buttonWrapper, this.nodes.countClicks);
  });
};

/**
 * Increase or decrease counter after click
 * @param {HTMLElement} blockButton
 * @param {HTMLElement} blockCount
 */
countClicksToButton(buttonWrapper, countClicks){
 if (buttonWrapper.classList.contains(Reactions.CSS.activeButtonClass)) {
 buttonWrapper.classList.remove(Reactions.CSS.activeButtonClass); 
  --this.count;
 } else {	
 buttonWrapper.classList.add(Reactions.CSS.activeButtonClass); 	
  ++this.count;
 }
 countClicks.innerHTML = this.count;
};
}

