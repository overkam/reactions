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
    this.nodes = {
    wrapper: document.querySelector(settings.wrapperBlockSelector),
    title: settings.title,
    emojiBlock: null,
    emojiWrapper: [],
    buttonWrapper: [],
    button: [],
    unicode: [],
    countBlock: []
  }
  this.nodes.unicode = settings.code;
  this.titleText = settings.title;
  this.appendElementsToWrapper();
  this.count=0;
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
      activeButtonClass : 'reactions__elem--active',
      emojiWrapperClass : 'reactions__emoji-wrapper',
      activeButtonWrapper: 'reactions__emoji-wrapper--active'
    }
  }

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
  * Append emojiblock, buttons and counter to general block
  */
  appendElementsToWrapper() {
    /**
    * Append title
    */
    this.nodes.title = this.make('div', Reactions.CSS.titleClass);
    this.nodes.wrapper.appendChild(this.nodes.title);
    this.nodes.title.innerHTML = this.titleText;

    /**
    * Append emoji wrapper
    * @type {HTMLElement} emojiBlock
    */
    this.nodes.emojiBlock = this.make('div', Reactions.CSS.emojiClass);
    this.nodes.wrapper.appendChild(this.nodes.emojiBlock);

    /**
    * Append button
    * @type {HTMLElement} button
    */
    for (let i = 0; i < this.nodes.unicode.length; i++){
      this.nodes.emojiWrapper[i] = this.make('div', Reactions.CSS.emojiWrapperClass);
      this.nodes.wrapper.appendChild(this.nodes.emojiWrapper[i]);

      this.nodes.button[i] = this.make('div', Reactions.CSS.buttonClass);
      this.nodes.wrapper.appendChild(this.nodes.button[i]);
    
      /**
      * Append wrapper for button
      * @type {HTMLElement} buttonWrapper
      */
        this.nodes.buttonWrapper[i] = this.make('div', Reactions.CSS.buttonWrapperClass);
        this.nodes.wrapper.appendChild(this.nodes.buttonWrapper[i]);
      
      /**
      * Append clicks counter
      * @type {HTMLElement} countBlock
      */
      this.nodes.countBlock[i] = this.make('div', Reactions.CSS.countClicksClass);
      this.nodes.wrapper.appendChild(this.nodes.countBlock[i]);
      }

    this.appendElementsToEmojiBlock()
  }

  /** 
  * Append emoji and counter to emojiBlock 
  */ 
  appendElementsToEmojiBlock(){

  /**
    * Append button wrapper to emojiBlock
    */
   for (let i = 0; i < this.nodes.unicode.length; i++){
    this.nodes.emojiBlock.appendChild(this.nodes.buttonWrapper[i]);

    this.nodes.emojiBlock.appendChild(this.nodes.emojiWrapper[i]);
    
    this.nodes.emojiWrapper[i].appendChild(this.nodes.buttonWrapper[i]);

    this.nodes.emojiWrapper[i].appendChild(this.nodes.countBlock[i]);

    this.nodes.buttonWrapper[i].appendChild(this.nodes.button[i]);

    this.nodes.button[i].innerText = String.fromCodePoint(this.nodes.unicode[i]);

    this.nodes.countBlock[i].innerText = '0'; 

    }
    

    /**
    * Transfer to counting clicks
    * @param  {HTMLElement} 'click' add CSS class, count clicks
    * @return {void}
    */
   for (let i = 0; i < this.nodes.unicode.length; i++) {
      this.nodes.buttonWrapper[i].addEventListener('click', () => {
        this.countClicksToButton(this.nodes.buttonWrapper[i],this.nodes.emojiWrapper[i],i);
      })
    ;}
  };

  /**
  * Increase or decrease counter after click
  * @param {HTMLElement} buttonWrapper
  * @param {HTMLElement} count of clicks
  */
  countClicksToButton(buttonWrapper,emojiWrapper,i){
    let itemActive = document.querySelector('.reactions__elem--active'); 
    let wrapperActive = document.querySelector('.reactions__emoji-wrapper--active');
    if (itemActive === null){
      buttonWrapper.classList.add(Reactions.CSS.activeButtonClass);
      emojiWrapper.classList.add(Reactions.CSS.activeButtonWrapper);
      this.nodes.countBlock[i].innerHTML = ++this.count;
    }else{
      if(itemActive === buttonWrapper){
        buttonWrapper.classList.remove(Reactions.CSS.activeButtonClass);
        emojiWrapper.classList.remove(Reactions.CSS.activeButtonWrapper);
        this.nodes.countBlock[i].innerHTML = --this.count;
      }else{
        let countActive = wrapperActive.querySelector('.reactions__count');
        countActive.innerHTML = --this.count;
        itemActive.classList.remove(Reactions.CSS.activeButtonClass);
        wrapperActive.classList.remove(Reactions.CSS.activeButtonWrapper);
        buttonWrapper.classList.add(Reactions.CSS.activeButtonClass);
        emojiWrapper.classList.add(Reactions.CSS.activeButtonWrapper);
        this.nodes.countBlock[i].innerHTML = ++this.count;
      }
    }  
  };
  
}

