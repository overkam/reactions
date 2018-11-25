/**
* @typedef {object} ReactionsConfig
* @property {string} title  - Text in text area
* @property {string} wrapperBlockSelector - Module holder
* @property   {string[]} emojiCodes - uncodes of emijo to buttons
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

  this.nodes.unicode = settings.emojiCodes;
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
      activeButtonClass : 'reactions__button--active',
      emojiWrapperClass : 'reactions__emoji-wrapper',
      activeButtonWrapper: 'reactions__emoji-wrapper--active'
    }
  }

  /** 
  * Create blocks and give CSS class
  * @param {CSSClass} CSSClass - CSS class for block
  * @returns {HTMLElement} div
  */
  make(tagName, className) {
    let div = document.createElement(tagName);

    div.classList.add(className);

    return div;
  }

  /**
   * Append emojiblock, emojiwrapper, buttons and counter to general block
   * @return {void} 
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
    * Create blocks and append them to wrapper
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
    }

    this.appendElementsToEmojiBlock()
  }

  /**
   * Append emoji and counter to emojiBlock 
   * @return {void} 
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

      this.nodes.emojiBlock.appendChild(this.nodes.emojiWrapper[i]);
      
      this.nodes.emojiWrapper[i].appendChild(this.nodes.buttonWrapper[i]);

      this.nodes.emojiWrapper[i].appendChild(this.nodes.countBlock[i]);

      this.nodes.buttonWrapper[i].appendChild(this.nodes.button[i]);

      this.nodes.button[i].innerText = String.fromCodePoint(this.nodes.unicode[i]);

      this.nodes.countBlock[i].innerText = '0'; 
    }
    

    /**
     * Transfer to counting clicks after click on button
     */
    for (let i = 0; i < this.nodes.unicode.length; i++) {
      this.nodes.buttonWrapper[i].addEventListener('click', () => {
        let counter = this.nodes.countBlock[i];

        this.countClicksToButton(this.nodes.buttonWrapper[i],this.nodes.emojiWrapper[i],counter);
      });
    }
  }

  /**
  * Increase or decrease counter after click, add or remove acyive CSS class
  * @param {HTMLElement} buttonWrapper
  * @param {HTMLElement} emojiWrapper
  * @param {HTMLElement} counter
  * @return {void}
  */
  countClicksToButton(buttonWrapper,emojiWrapper,counter){

    /**
     * Find an active button
     * @type {HTMLElement}
     */
    let itemActive = document.querySelector('.reactions__button--active'); 

    /**
     * Find an active emojiwrapper
     * @type {HTMLElement}
     */
    let wrapperActive = document.querySelector('.reactions__emoji-wrapper--active');

    /**
     * If there is no active button, add active CSS class 
     * @param  {HTMLElement} itemActive
     * @return {void}            
     */
    if (itemActive === null){
      this.addReaction(buttonWrapper,emojiWrapper,counter);

    }else{

      /**
       * If clicked button is clicked, remove active CSS class
       * @param  {HTMLElement} itemActive 
       * @param  {HTMLElement} buttonWrapper
       * @return {void}            
       */
      if(itemActive === buttonWrapper){
        this.removeReaction(buttonWrapper,emojiWrapper,counter);

      /**
       * Remove active CSS class for active button and add for clicked button
       * @param  {HTMLElement} itemActive
       * @param  {HTMLElement} buttonWrapper
       * @return {void} 
       */
      }else{

        /**
         * Count block of active button
         * @type {HTMLElement}
         */
        let countActive = wrapperActive.querySelector('.reactions__count');

        this.removeReaction(itemActive,wrapperActive,counter,countActive);
        this.addReaction(buttonWrapper,emojiWrapper,counter);
      }
    }  
  }
  
  /**
   * Add CSS active class and increase counter
   * @param {HTMLElement} buttonWrapper 
   * @param {HTMLElement} emojiWrapper  
   * @param {HTMLElement} counter  
   * @return {void}     
   */
  addReaction(buttonWrapper,emojiWrapper,counter){
    buttonWrapper.classList.add(Reactions.CSS.activeButtonClass);
    emojiWrapper.classList.add(Reactions.CSS.activeButtonWrapper);

    /**
     * Increase counter
     * @type {HTMLElement}
     */
    counter.innerText = ++this.count;
  }

  /**
   * Remove CSS active class and decrease counter
   * @param  {HTMLElement} buttonWrapper 
   * @param  {HTMLElement} emojiWrapper  
   * @param  {HTMLElement} counter       
   * @param  {HTMLElement} countActive   
   * @return {void}               
   */
  removeReaction(buttonWrapper,emojiWrapper,counter,countActive){
    buttonWrapper.classList.remove(Reactions.CSS.activeButtonClass);
    emojiWrapper.classList.remove(Reactions.CSS.activeButtonWrapper);

    /**
     * Decrease counter
     * @type {HTMLElement}
     */
    counter.innerText = --this.count;

    /**
     * If we have an active count block write decreased counter
     * @param  {HTMLElement} countActive 
     * @return {void}             
     */
    if (countActive !== undefined){
      countActive.innerText = this.count;
    }  
  }
}

