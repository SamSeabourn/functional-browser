const baseCustomEventFactory = (
  ...args: ConstructorParameters<typeof CustomEvent>
): InstanceType<typeof CustomEvent> => new CustomEvent(...args);

/**
 * Factory function to create a CustomEvent with the specified type and detail.
 *
 * @param {string} type - The name of the event. Case-sensitive.
 * @param {any} detail - The data passed when initializing the event.
 * @returns {CustomEvent} A new CustomEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent | MDN CustomEvent}
 *
 * @example
 * // Create a custom event with type 'my-event' and detail { foo: 'bar' }
 * const myEvent = createCustomEvent('my-event', { foo: 'bar' });
 * document.dispatchEvent(myEvent);
 */
export const createCustomEvent = baseCustomEventFactory;
/**
 * Factory function to create a CustomEvent with the specified type and detail.
 *
 * @param {string} type - The name of the event. Case-sensitive.
 * @param {any} detail - The data passed when initializing the event.
 * @returns {CustomEvent} A new CustomEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent | MDN CustomEvent}
 *
 * @example
 * // Create a custom event with type 'my-event' and detail { foo: 'bar' }
 * const myEvent = initCustomEvent('my-event', { foo: 'bar' });
 * document.dispatchEvent(myEvent);
 */
export const initCustomEvent = baseCustomEventFactory;
/**
 * Factory function to create a CustomEvent with the specified type and detail.
 *
 * @param {string} type - The name of the event. Case-sensitive.
 * @param {any} detail - The data passed when initializing the event.
 * @returns {CustomEvent} A new CustomEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent | MDN CustomEvent}
 *
 * @example
 * // Create a custom event with type 'my-event' and detail { foo: 'bar' }
 * const myEvent = spawnCustomEvent('my-event', { foo: 'bar' });
 * document.dispatchEvent(myEvent);
 */
export const spawnCustomEvent = baseCustomEventFactory;
/**
 * Factory function to create a CustomEvent with the specified type and detail.
 *
 * @param {string} type - The name of the event. Case-sensitive.
 * @param {any} detail - The data passed when initializing the event.
 * @returns {CustomEvent} A new CustomEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent | MDN CustomEvent}
 *
 * @example
 * // Create a custom event with type 'my-event' and detail { foo: 'bar' }
 * const myEvent = buildCustomEvent('my-event', { foo: 'bar' });
 * document.dispatchEvent(myEvent);
 */
export const buildCustomEvent = baseCustomEventFactory;
/**
 * Factory function to create a CustomEvent with the specified type and detail.
 *
 * @param {string} type - The name of the event. Case-sensitive.
 * @param {any} detail - The data passed when initializing the event.
 * @returns {CustomEvent} A new CustomEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent | MDN CustomEvent}
 *
 * @example
 * // Create a custom event with type 'my-event' and detail { foo: 'bar' }
 * const myEvent = makeCustomEvent('my-event', { foo: 'bar' });
 * document.dispatchEvent(myEvent);
 */
export const makeCustomEvent = baseCustomEventFactory;
/**
 * Factory function to create a CustomEvent with the specified type and detail.
 *
 * @param {string} type - The name of the event. Case-sensitive.
 * @param {any} detail - The data passed when initializing the event.
 * @returns {CustomEvent} A new CustomEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent | MDN CustomEvent}
 *
 * @example
 * // Create a custom event with type 'my-event' and detail { foo: 'bar' }
 * const myEvent = constructCustomEvent('my-event', { foo: 'bar' });
 * document.dispatchEvent(myEvent);
 */
export const constructCustomEvent = baseCustomEventFactory;
