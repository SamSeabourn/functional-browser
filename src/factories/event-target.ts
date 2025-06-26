const baseEventTargetFactory = (
  ...args: ConstructorParameters<typeof EventTarget>
): InstanceType<typeof EventTarget> => new EventTarget(...args);

/**
 * Creates a new instance of an EventTarget.
 *
 * This factory function returns an object that implements the EventTarget interface,
 * allowing you to add event listeners, remove them, and dispatch events.
 *
 * @returns {EventTarget} A new instance of an EventTarget.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget|EventTarget - MDN}
 *
 * @example
 * const eventTarget = createEventTarget();
 *
 * function handleEvent(event) {
 *   console.log('Event received:', event.type);
 * }
 *
 * eventTarget.addEventListener('customEvent', handleEvent);
 *
 * const event = new Event('customEvent');
 * eventTarget.dispatchEvent(event);
 *
 * eventTarget.removeEventListener('customEvent', handleEvent);
 */
export const createEventTarget = baseEventTargetFactory;
/**
 * Creates a new instance of an EventTarget.
 *
 * This factory function returns an object that implements the EventTarget interface,
 * allowing you to add event listeners, remove them, and dispatch events.
 *
 * @returns {EventTarget} A new instance of an EventTarget.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget|EventTarget - MDN}
 *
 * @example
 * const eventTarget = initEventTarget();
 *
 * function handleEvent(event) {
 *   console.log('Event received:', event.type);
 * }
 *
 * eventTarget.addEventListener('customEvent', handleEvent);
 *
 * const event = new Event('customEvent');
 * eventTarget.dispatchEvent(event);
 *
 * eventTarget.removeEventListener('customEvent', handleEvent);
 */
export const initEventTarget = baseEventTargetFactory;
/**
 * Creates a new instance of an EventTarget.
 *
 * This factory function returns an object that implements the EventTarget interface,
 * allowing you to add event listeners, remove them, and dispatch events.
 *
 * @returns {EventTarget} A new instance of an EventTarget.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget|EventTarget - MDN}
 *
 * @example
 * const eventTarget = spawnEventTarget();
 *
 * function handleEvent(event) {
 *   console.log('Event received:', event.type);
 * }
 *
 * eventTarget.addEventListener('customEvent', handleEvent);
 *
 * const event = new Event('customEvent');
 * eventTarget.dispatchEvent(event);
 *
 * eventTarget.removeEventListener('customEvent', handleEvent);
 */
export const spawnEventTarget = baseEventTargetFactory;
/**
 * Creates a new instance of an EventTarget.
 *
 * This factory function returns an object that implements the EventTarget interface,
 * allowing you to add event listeners, remove them, and dispatch events.
 *
 * @returns {EventTarget} A new instance of an EventTarget.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget|EventTarget - MDN}
 *
 * @example
 * const eventTarget = buildEventTarget();
 *
 * function handleEvent(event) {
 *   console.log('Event received:', event.type);
 * }
 *
 * eventTarget.addEventListener('customEvent', handleEvent);
 *
 * const event = new Event('customEvent');
 * eventTarget.dispatchEvent(event);
 *
 * eventTarget.removeEventListener('customEvent', handleEvent);
 */
export const buildEventTarget = baseEventTargetFactory;
/**
 * Creates a new instance of an EventTarget.
 *
 * This factory function returns an object that implements the EventTarget interface,
 * allowing you to add event listeners, remove them, and dispatch events.
 *
 * @returns {EventTarget} A new instance of an EventTarget.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget|EventTarget - MDN}
 *
 * @example
 * const eventTarget = makeEventTarget();
 *
 * function handleEvent(event) {
 *   console.log('Event received:', event.type);
 * }
 *
 * eventTarget.addEventListener('customEvent', handleEvent);
 *
 * const event = new Event('customEvent');
 * eventTarget.dispatchEvent(event);
 *
 * eventTarget.removeEventListener('customEvent', handleEvent);
 */
export const makeEventTarget = baseEventTargetFactory;
/**
 * Creates a new instance of an EventTarget.
 *
 * This factory function returns an object that implements the EventTarget interface,
 * allowing you to add event listeners, remove them, and dispatch events.
 *
 * @returns {EventTarget} A new instance of an EventTarget.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget|EventTarget - MDN}
 *
 * @example
 * const eventTarget = constructEventTarget();
 *
 * function handleEvent(event) {
 *   console.log('Event received:', event.type);
 * }
 *
 * eventTarget.addEventListener('customEvent', handleEvent);
 *
 * const event = new Event('customEvent');
 * eventTarget.dispatchEvent(event);
 *
 * eventTarget.removeEventListener('customEvent', handleEvent);
 */
export const constructEventTarget = baseEventTargetFactory;
