const baseKeyboardEventFactory = (
  ...args: ConstructorParameters<typeof KeyboardEvent>
): InstanceType<typeof KeyboardEvent> => new KeyboardEvent(...args);

/**
 * Factory function to create a KeyboardEvent with specified type and properties.
 *
 * @param {string} type - The type of the keyboard event (e.g., 'keydown', 'keyup').
 * @param {Object} [options={}] - Additional properties to apply to the event.
 * @param {boolean} [options.bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [options.cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [options.view=window] - The Window object from which the event was generated.
 * @param {string} [options.key=''] - The key value of the key represented by the event.
 * @param {string} [options.code=''] - The code value of the physical key represented by the event.
 * @param {boolean} [options.ctrlKey=false] - A boolean indicating whether the control key was active.
 * @param {boolean} [options.shiftKey=false] - A boolean indicating whether the shift key was active.
 * @param {boolean} [options.altKey=false] - A boolean indicating whether the alt key was active.
 * @param {boolean} [options.metaKey=false] - A boolean indicating whether the meta key was active.
 * @returns {KeyboardEvent} The newly created KeyboardEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent | MDN KeyboardEvent}
 *
 * @example
 * const event = createKeyboardEvent('keydown', {
 *   key: 'a',
 *   code: 'KeyA',
 *   ctrlKey: true
 * });
 * document.dispatchEvent(event);
 */
export const createKeyboardEvent = baseKeyboardEventFactory;
/**
 * Factory function to create a KeyboardEvent with specified type and properties.
 *
 * @param {string} type - The type of the keyboard event (e.g., 'keydown', 'keyup').
 * @param {Object} [options={}] - Additional properties to apply to the event.
 * @param {boolean} [options.bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [options.cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [options.view=window] - The Window object from which the event was generated.
 * @param {string} [options.key=''] - The key value of the key represented by the event.
 * @param {string} [options.code=''] - The code value of the physical key represented by the event.
 * @param {boolean} [options.ctrlKey=false] - A boolean indicating whether the control key was active.
 * @param {boolean} [options.shiftKey=false] - A boolean indicating whether the shift key was active.
 * @param {boolean} [options.altKey=false] - A boolean indicating whether the alt key was active.
 * @param {boolean} [options.metaKey=false] - A boolean indicating whether the meta key was active.
 * @returns {KeyboardEvent} The newly created KeyboardEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent | MDN KeyboardEvent}
 *
 * @example
 * const event = initKeyboardEvent('keydown', {
 *   key: 'a',
 *   code: 'KeyA',
 *   ctrlKey: true
 * });
 * document.dispatchEvent(event);
 */
export const initKeyboardEvent = baseKeyboardEventFactory;
/**
 * Factory function to create a KeyboardEvent with specified type and properties.
 *
 * @param {string} type - The type of the keyboard event (e.g., 'keydown', 'keyup').
 * @param {Object} [options={}] - Additional properties to apply to the event.
 * @param {boolean} [options.bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [options.cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [options.view=window] - The Window object from which the event was generated.
 * @param {string} [options.key=''] - The key value of the key represented by the event.
 * @param {string} [options.code=''] - The code value of the physical key represented by the event.
 * @param {boolean} [options.ctrlKey=false] - A boolean indicating whether the control key was active.
 * @param {boolean} [options.shiftKey=false] - A boolean indicating whether the shift key was active.
 * @param {boolean} [options.altKey=false] - A boolean indicating whether the alt key was active.
 * @param {boolean} [options.metaKey=false] - A boolean indicating whether the meta key was active.
 * @returns {KeyboardEvent} The newly created KeyboardEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent | MDN KeyboardEvent}
 *
 * @example
 * const event = spawnKeyboardEvent('keydown', {
 *   key: 'a',
 *   code: 'KeyA',
 *   ctrlKey: true
 * });
 * document.dispatchEvent(event);
 */
export const spawnKeyboardEvent = baseKeyboardEventFactory;
/**
 * Factory function to create a KeyboardEvent with specified type and properties.
 *
 * @param {string} type - The type of the keyboard event (e.g., 'keydown', 'keyup').
 * @param {Object} [options={}] - Additional properties to apply to the event.
 * @param {boolean} [options.bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [options.cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [options.view=window] - The Window object from which the event was generated.
 * @param {string} [options.key=''] - The key value of the key represented by the event.
 * @param {string} [options.code=''] - The code value of the physical key represented by the event.
 * @param {boolean} [options.ctrlKey=false] - A boolean indicating whether the control key was active.
 * @param {boolean} [options.shiftKey=false] - A boolean indicating whether the shift key was active.
 * @param {boolean} [options.altKey=false] - A boolean indicating whether the alt key was active.
 * @param {boolean} [options.metaKey=false] - A boolean indicating whether the meta key was active.
 * @returns {KeyboardEvent} The newly created KeyboardEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent | MDN KeyboardEvent}
 *
 * @example
 * const event = buildKeyboardEvent('keydown', {
 *   key: 'a',
 *   code: 'KeyA',
 *   ctrlKey: true
 * });
 * document.dispatchEvent(event);
 */
export const buildKeyboardEvent = baseKeyboardEventFactory;
/**
 * Factory function to create a KeyboardEvent with specified type and properties.
 *
 * @param {string} type - The type of the keyboard event (e.g., 'keydown', 'keyup').
 * @param {Object} [options={}] - Additional properties to apply to the event.
 * @param {boolean} [options.bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [options.cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [options.view=window] - The Window object from which the event was generated.
 * @param {string} [options.key=''] - The key value of the key represented by the event.
 * @param {string} [options.code=''] - The code value of the physical key represented by the event.
 * @param {boolean} [options.ctrlKey=false] - A boolean indicating whether the control key was active.
 * @param {boolean} [options.shiftKey=false] - A boolean indicating whether the shift key was active.
 * @param {boolean} [options.altKey=false] - A boolean indicating whether the alt key was active.
 * @param {boolean} [options.metaKey=false] - A boolean indicating whether the meta key was active.
 * @returns {KeyboardEvent} The newly created KeyboardEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent | MDN KeyboardEvent}
 *
 * @example
 * const event = makeKeyboardEvent('keydown', {
 *   key: 'a',
 *   code: 'KeyA',
 *   ctrlKey: true
 * });
 * document.dispatchEvent(event);
 */
export const makeKeyboardEvent = baseKeyboardEventFactory;
/**
 * Factory function to create a KeyboardEvent with specified type and properties.
 *
 * @param {string} type - The type of the keyboard event (e.g., 'keydown', 'keyup').
 * @param {Object} [options={}] - Additional properties to apply to the event.
 * @param {boolean} [options.bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [options.cancelable=true] - A boolean indicating whether the event is cancelable.
 * @param {Window} [options.view=window] - The Window object from which the event was generated.
 * @param {string} [options.key=''] - The key value of the key represented by the event.
 * @param {string} [options.code=''] - The code value of the physical key represented by the event.
 * @param {boolean} [options.ctrlKey=false] - A boolean indicating whether the control key was active.
 * @param {boolean} [options.shiftKey=false] - A boolean indicating whether the shift key was active.
 * @param {boolean} [options.altKey=false] - A boolean indicating whether the alt key was active.
 * @param {boolean} [options.metaKey=false] - A boolean indicating whether the meta key was active.
 * @returns {KeyboardEvent} The newly created KeyboardEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent | MDN KeyboardEvent}
 *
 * @example
 * const event = constructKeyboardEvent('keydown', {
 *   key: 'a',
 *   code: 'KeyA',
 *   ctrlKey: true
 * });
 * document.dispatchEvent(event);
 */
export const constructKeyboardEvent = baseKeyboardEventFactory;
