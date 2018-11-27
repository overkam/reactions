/**
 * @typedef {object} ReactionsConfig
 * @property {string} title  - Text in text area
 * @property {string} wrapperBlockSelector - Module holder
 * @property {string[]} emojiCodes - unicodes of emoji to buttons
 */


/**
 * Creating blocks, adding emoji, text and buttons to general block
 */
class Reactions {

  /**
   * @param  {ReactionsConfig} settings - module configuration obj
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
    countBlock: [],
    itemActive: null,
    wrapperActive: null,
    count: []
  }

  this.nodes.unicode = settings.emojiCodes;
  this.titleText = settings.title;
  this.appendElementsToWrapper();
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
      activeButtonClass : 'reactions__button--active',
      emojiWrapperClass : 'reactions__emoji-wrapper',
      activeButtonWrapper: 'reactions__emoji-wrapper--active'
    }
  }

  /** 
   * Create blocks and give CSS class
   * @param {string} tagName
   * @param {string} className - CSS class for block
   * @returns {HTMLElement} element
   */
  make(tagName, className) {
    const element = document.createElement(tagName);

    element.classList.add(className);

    return element;
  }

  /**
   * Append emojiblock, emojiwrapper, buttons and counter to general block 
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
     * Create and append blocks to wrapper
     * @type {HTMLElement} 
     */
    for (let i = 0; i < this.nodes.unicode.length; i++){
      
      /**
       * Append wrapper to button and count clicks block
       * @type {HTMLElement} emojiWrapper
       */
      this.nodes.emojiWrapper[i] = this.make('div', Reactions.CSS.emojiWrapperClass);
      this.nodes.wrapper.appendChild(this.nodes.emojiWrapper[i]);

      /**
       * Append buttons
       * @type {HTMLElement} button
       */
      this.nodes.button[i] = this.make('div', Reactions.CSS.buttonClass);
      this.nodes.wrapper.appendChild(this.nodes.button[i]);
    
      /**
       * Append wrappers for button
       * @type {HTMLElement} buttonWrapper
       */
      this.nodes.buttonWrapper[i] = this.make('div', Reactions.CSS.buttonWrapperClass);
      this.nodes.wrapper.appendChild(this.nodes.buttonWrapper[i]);
      
      /**
       * Append blocks for clicks counter
       * @type {HTMLElement} countBlock
       */
      this.nodes.countBlock[i] = this.make('div', Reactions.CSS.countClicksClass);
      this.nodes.wrapper.appendChild(this.nodes.countBlock[i]);

      this.nodes.count[i] = '0';
    }

    this.appendElementsToEmojiBlock()
  }

  /**
   * Append emoji and counter to emojiBlock 
   */
  appendElementsToEmojiBlock(){

    /**
     * Append emojiwrapper to emojiblock and append button and counter in emojiwrapper
     */
    for (let i = 0; i < this.nodes.unicode.length; i++){

      /**
       * Append buttonWrapper to emojiBlock
       */
      this.nodes.emojiBlock.appendChild(this.nodes.buttonWrapper[i]);

      /**
       * Append emojiWrapper to emojiBlock
       */
      this.nodes.emojiBlock.appendChild(this.nodes.emojiWrapper[i]);
      
      /**
       * Append buttonWrapper to emojiWrapper
       */
      this.nodes.emojiWrapper[i].appendChild(this.nodes.buttonWrapper[i]);

      /**
       * Append countBlock to emojiWrapper
       */
      this.nodes.emojiWrapper[i].appendChild(this.nodes.countBlock[i]);

      /**
       * Append button to buttonWrapper
       */
      this.nodes.buttonWrapper[i].appendChild(this.nodes.button[i]);

      /**
       * Add emoji to button
       * @type {string} 
       */
      this.nodes.button[i].textContent = String.fromCodePoint(this.nodes.unicode[i]);

      /**
       * Get 0 count to countBlock
       * @type {String}
       */
      this.nodes.countBlock[i].textContent = '0'; 
    }
    

    /**
     * Transfer to counting clicks after click on button
     */
    for (let i = 0; i < this.nodes.unicode.length; i++) {
      this.nodes.buttonWrapper[i].addEventListener('click', () => {
        this.countClicksToButton(i);
      });
    }
  }

  /**
   * Increase or decrease counter after click, add or remove active CSS class
   * @param {HTMLElement} buttonWrapper
   * @param {HTMLElement} emojiWrapper
   * @param {HTMLElement} counter
   */
  countClicksToButton(i){

    /**
     * If there is no active button, add active CSS class 
     */
    if (this.nodes.wrapperActive === null){
      this.addReaction(i);

    } else {

      /**
       * If clicked button is active, remove active CSS class
       */
      if (this.nodes.wrapperActive === i){
        this.removeReaction(i);

      /**
       * Remove active CSS class for active button and add for clicked button
       */
      } else {

        /**
         * Count block of active button
         * @type {HTMLElement}
         */

        this.removeReaction(this.nodes.wrapperActive);

        this.addReaction(i);

      }
    }  
  }
  
  /**
   * Add CSS active class and increase counter
   * @param {HTMLElement} buttonWrapper 
   * @param {HTMLElement} emojiWrapper  
   * @param {HTMLElement} counter     
   */
  addReaction(i){
    this.nodes.buttonWrapper[i].classList.add(Reactions.CSS.activeButtonClass);
    this.nodes.emojiWrapper[i].classList.add(Reactions.CSS.activeButtonWrapper);
    this.nodes.itemActive = i;
    this.nodes.wrapperActive = i;

    /**
     * Increase counter
     * @type {string}
     */
    this.nodes.count[i] = parseInt(this.nodes.count[i]) + 1
    this.nodes.countBlock[i].textContent = this.nodes.count[i];
  }

  /**
   * Remove CSS active class and decrease counter
   * @param  {HTMLElement} buttonWrapper 
   * @param  {HTMLElement} emojiWrapper  
   * @param  {HTMLElement} counter       
   * @param  {HTMLElement} countActive                
   */
  removeReaction(i){
    this.nodes.buttonWrapper[i].classList.remove(Reactions.CSS.activeButtonClass);
    this.nodes.emojiWrapper[i].classList.remove(Reactions.CSS.activeButtonWrapper);
    this.nodes.itemActive = null;
    this.nodes.wrapperActive = null;

    /**
     * Decrease counter
     * @type {string}
     */
    this.nodes.count[i] = parseInt(this.nodes.count[i]) - 1
    this.nodes.countBlock[i].textContent = this.nodes.count[i];
  }
}

