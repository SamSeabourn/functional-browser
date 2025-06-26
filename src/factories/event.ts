const baseEventFactory = (
  ...args: ConstructorParameters<typeof Event>
): InstanceType<typeof Event> => new Event(...args);

/**
 * Creates a new Event object with the specified type and optional event properties.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInit] - An optional object that contains event properties.
 * @param {boolean} [eventInit.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInit.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInit.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @returns {Event} The newly created Event object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event | MDN Event}
 *
 * @example
 * // Create a simple click event
 * const clickEvent = createEvent('click', { bubbles: true, cancelable: true });
 * document.dispatchEvent(clickEvent);
 */
export const createEvent = baseEventFactory;
/**
 * Creates a new Event object with the specified type and optional event properties.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInit] - An optional object that contains event properties.
 * @param {boolean} [eventInit.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInit.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInit.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @returns {Event} The newly created Event object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event | MDN Event}
 *
 * @example
 * // Create a simple click event
 * const clickEvent = initEvent('click', { bubbles: true, cancelable: true });
 * document.dispatchEvent(clickEvent);
 */
export const initEvent = baseEventFactory;
/**
 * Creates a new Event object with the specified type and optional event properties.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInit] - An optional object that contains event properties.
 * @param {boolean} [eventInit.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInit.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInit.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @returns {Event} The newly created Event object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event | MDN Event}
 *
 * @example
 * // Create a simple click event
 * const clickEvent = spawnEvent('click', { bubbles: true, cancelable: true });
 * document.dispatchEvent(clickEvent);
 */
export const spawnEvent = baseEventFactory;
/**
 * Creates a new Event object with the specified type and optional event properties.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInit] - An optional object that contains event properties.
 * @param {boolean} [eventInit.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInit.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInit.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @returns {Event} The newly created Event object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event | MDN Event}
 *
 * @example
 * // Create a simple click event
 * const clickEvent = buildEvent('click', { bubbles: true, cancelable: true });
 * document.dispatchEvent(clickEvent);
 */
export const buildEvent = baseEventFactory;
/**
 * Creates a new Event object with the specified type and optional event properties.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInit] - An optional object that contains event properties.
 * @param {boolean} [eventInit.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInit.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInit.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @returns {Event} The newly created Event object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event | MDN Event}
 *
 * @example
 * // Create a simple click event
 * const clickEvent = makeEvent('click', { bubbles: true, cancelable: true });
 * document.dispatchEvent(clickEvent);
 */
export const makeEvent = baseEventFactory;
/**
 * Creates a new Event object with the specified type and optional event properties.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInit] - An optional object that contains event properties.
 * @param {boolean} [eventInit.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInit.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInit.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @returns {Event} The newly created Event object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event | MDN Event}
 *
 * @example
 * // Create a simple click event
 * const clickEvent = constructEvent('click', { bubbles: true, cancelable: true });
 * document.dispatchEvent(clickEvent);
 */
export const constructEvent = baseEventFactory;
