const baseMouseEventFactory = (
  ...args: ConstructorParameters<typeof MouseEvent>
): InstanceType<typeof MouseEvent> => new MouseEvent(...args);

/**
 * Factory function to create a base MouseEvent object.
 *
 * @param {string} type - The type of the mouse event, e.g., 'click', 'mousedown'.
 * @param {boolean} [bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [view=window] - The Window object from which the event was generated.
 * @param {number} [detail=0] - The detail property of the event, typically the number of clicks.
 * @param {number} [screenX=0] - The X coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [screenY=0] - The Y coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [clientX=0] - The X coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {number} [clientY=0] - The Y coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {boolean} [ctrlKey=false] - A boolean indicating whether the control key was pressed during the event.
 * @param {boolean} [altKey=false] - A boolean indicating whether the alt key was pressed during the event.
 * @param {boolean} [shiftKey=false] - A boolean indicating whether the shift key was pressed during the event.
 * @param {boolean} [metaKey=false] - A boolean indicating whether the meta key was pressed during the event.
 * @param {number} [button=0] - The button number that was pressed (if applicable) when the mouse event was fired.
 * @param {EventTarget} [relatedTarget=null] - The secondary target for the event, if there is one.
 * @returns {MouseEvent} The constructed MouseEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent - MDN}
 *
 * @example
 * const clickEvent = createMouseEvent('click', true, true, window, 1, 100, 100, 50, 50, false, false, false, false, 0, null);
 * document.dispatchEvent(clickEvent);
 */
export const createMouseEvent = baseMouseEventFactory;
/**
 * Factory function to create a base MouseEvent object.
 *
 * @param {string} type - The type of the mouse event, e.g., 'click', 'mousedown'.
 * @param {boolean} [bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [view=window] - The Window object from which the event was generated.
 * @param {number} [detail=0] - The detail property of the event, typically the number of clicks.
 * @param {number} [screenX=0] - The X coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [screenY=0] - The Y coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [clientX=0] - The X coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {number} [clientY=0] - The Y coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {boolean} [ctrlKey=false] - A boolean indicating whether the control key was pressed during the event.
 * @param {boolean} [altKey=false] - A boolean indicating whether the alt key was pressed during the event.
 * @param {boolean} [shiftKey=false] - A boolean indicating whether the shift key was pressed during the event.
 * @param {boolean} [metaKey=false] - A boolean indicating whether the meta key was pressed during the event.
 * @param {number} [button=0] - The button number that was pressed (if applicable) when the mouse event was fired.
 * @param {EventTarget} [relatedTarget=null] - The secondary target for the event, if there is one.
 * @returns {MouseEvent} The constructed MouseEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent - MDN}
 *
 * @example
 * const clickEvent = initMouseEvent('click', true, true, window, 1, 100, 100, 50, 50, false, false, false, false, 0, null);
 * document.dispatchEvent(clickEvent);
 */
export const initMouseEvent = baseMouseEventFactory;
/**
 * Factory function to create a base MouseEvent object.
 *
 * @param {string} type - The type of the mouse event, e.g., 'click', 'mousedown'.
 * @param {boolean} [bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [view=window] - The Window object from which the event was generated.
 * @param {number} [detail=0] - The detail property of the event, typically the number of clicks.
 * @param {number} [screenX=0] - The X coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [screenY=0] - The Y coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [clientX=0] - The X coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {number} [clientY=0] - The Y coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {boolean} [ctrlKey=false] - A boolean indicating whether the control key was pressed during the event.
 * @param {boolean} [altKey=false] - A boolean indicating whether the alt key was pressed during the event.
 * @param {boolean} [shiftKey=false] - A boolean indicating whether the shift key was pressed during the event.
 * @param {boolean} [metaKey=false] - A boolean indicating whether the meta key was pressed during the event.
 * @param {number} [button=0] - The button number that was pressed (if applicable) when the mouse event was fired.
 * @param {EventTarget} [relatedTarget=null] - The secondary target for the event, if there is one.
 * @returns {MouseEvent} The constructed MouseEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent - MDN}
 *
 * @example
 * const clickEvent = spawnMouseEvent('click', true, true, window, 1, 100, 100, 50, 50, false, false, false, false, 0, null);
 * document.dispatchEvent(clickEvent);
 */
export const spawnMouseEvent = baseMouseEventFactory;
/**
 * Factory function to create a base MouseEvent object.
 *
 * @param {string} type - The type of the mouse event, e.g., 'click', 'mousedown'.
 * @param {boolean} [bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [view=window] - The Window object from which the event was generated.
 * @param {number} [detail=0] - The detail property of the event, typically the number of clicks.
 * @param {number} [screenX=0] - The X coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [screenY=0] - The Y coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [clientX=0] - The X coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {number} [clientY=0] - The Y coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {boolean} [ctrlKey=false] - A boolean indicating whether the control key was pressed during the event.
 * @param {boolean} [altKey=false] - A boolean indicating whether the alt key was pressed during the event.
 * @param {boolean} [shiftKey=false] - A boolean indicating whether the shift key was pressed during the event.
 * @param {boolean} [metaKey=false] - A boolean indicating whether the meta key was pressed during the event.
 * @param {number} [button=0] - The button number that was pressed (if applicable) when the mouse event was fired.
 * @param {EventTarget} [relatedTarget=null] - The secondary target for the event, if there is one.
 * @returns {MouseEvent} The constructed MouseEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent - MDN}
 *
 * @example
 * const clickEvent = buildMouseEvent('click', true, true, window, 1, 100, 100, 50, 50, false, false, false, false, 0, null);
 * document.dispatchEvent(clickEvent);
 */
export const buildMouseEvent = baseMouseEventFactory;
/**
 * Factory function to create a base MouseEvent object.
 *
 * @param {string} type - The type of the mouse event, e.g., 'click', 'mousedown'.
 * @param {boolean} [bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [view=window] - The Window object from which the event was generated.
 * @param {number} [detail=0] - The detail property of the event, typically the number of clicks.
 * @param {number} [screenX=0] - The X coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [screenY=0] - The Y coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [clientX=0] - The X coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {number} [clientY=0] - The Y coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {boolean} [ctrlKey=false] - A boolean indicating whether the control key was pressed during the event.
 * @param {boolean} [altKey=false] - A boolean indicating whether the alt key was pressed during the event.
 * @param {boolean} [shiftKey=false] - A boolean indicating whether the shift key was pressed during the event.
 * @param {boolean} [metaKey=false] - A boolean indicating whether the meta key was pressed during the event.
 * @param {number} [button=0] - The button number that was pressed (if applicable) when the mouse event was fired.
 * @param {EventTarget} [relatedTarget=null] - The secondary target for the event, if there is one.
 * @returns {MouseEvent} The constructed MouseEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent - MDN}
 *
 * @example
 * const clickEvent = makeMouseEvent('click', true, true, window, 1, 100, 100, 50, 50, false, false, false, false, 0, null);
 * document.dispatchEvent(clickEvent);
 */
export const makeMouseEvent = baseMouseEventFactory;
/**
 * Factory function to create a base MouseEvent object.
 *
 * @param {string} type - The type of the mouse event, e.g., 'click', 'mousedown'.
 * @param {boolean} [bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [view=window] - The Window object from which the event was generated.
 * @param {number} [detail=0] - The detail property of the event, typically the number of clicks.
 * @param {number} [screenX=0] - The X coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [screenY=0] - The Y coordinate of the mouse pointer in global (screen) coordinates.
 * @param {number} [clientX=0] - The X coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {number} [clientY=0] - The Y coordinate of the mouse pointer in local (DOM content) coordinates.
 * @param {boolean} [ctrlKey=false] - A boolean indicating whether the control key was pressed during the event.
 * @param {boolean} [altKey=false] - A boolean indicating whether the alt key was pressed during the event.
 * @param {boolean} [shiftKey=false] - A boolean indicating whether the shift key was pressed during the event.
 * @param {boolean} [metaKey=false] - A boolean indicating whether the meta key was pressed during the event.
 * @param {number} [button=0] - The button number that was pressed (if applicable) when the mouse event was fired.
 * @param {EventTarget} [relatedTarget=null] - The secondary target for the event, if there is one.
 * @returns {MouseEvent} The constructed MouseEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent|MouseEvent - MDN}
 *
 * @example
 * const clickEvent = constructMouseEvent('click', true, true, window, 1, 100, 100, 50, 50, false, false, false, false, 0, null);
 * document.dispatchEvent(clickEvent);
 */
export const constructMouseEvent = baseMouseEventFactory;
