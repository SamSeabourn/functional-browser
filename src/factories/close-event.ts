const baseCloseEventFactory = (
  ...args: ConstructorParameters<typeof CloseEvent>
): InstanceType<typeof CloseEvent> => new CloseEvent(...args);

/**
 * Factory function to create a CloseEvent.
 *
 * The CloseEvent interface represents events that occur when a WebSocket connection is closed.
 *
 * @param {string} type - The type of the event.
 * @param {boolean} wasClean - Indicates whether the connection was cleanly closed.
 * @param {number} code - The WebSocket connection close code provided by the server.
 * @param {string} reason - A human-readable string explaining why the connection was closed.
 * @returns {CloseEvent} A new CloseEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
 *
 * @example
 * const closeEvent = createCloseEvent('close', true, 1000, 'Normal closure');
 * console.log(closeEvent.type); // 'close'
 * console.log(closeEvent.wasClean); // true
 * console.log(closeEvent.code); // 1000
 * console.log(closeEvent.reason); // 'Normal closure'
 */
export const createCloseEvent = baseCloseEventFactory;
/**
 * Factory function to create a CloseEvent.
 *
 * The CloseEvent interface represents events that occur when a WebSocket connection is closed.
 *
 * @param {string} type - The type of the event.
 * @param {boolean} wasClean - Indicates whether the connection was cleanly closed.
 * @param {number} code - The WebSocket connection close code provided by the server.
 * @param {string} reason - A human-readable string explaining why the connection was closed.
 * @returns {CloseEvent} A new CloseEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
 *
 * @example
 * const closeEvent = initCloseEvent('close', true, 1000, 'Normal closure');
 * console.log(closeEvent.type); // 'close'
 * console.log(closeEvent.wasClean); // true
 * console.log(closeEvent.code); // 1000
 * console.log(closeEvent.reason); // 'Normal closure'
 */
export const initCloseEvent = baseCloseEventFactory;
/**
 * Factory function to create a CloseEvent.
 *
 * The CloseEvent interface represents events that occur when a WebSocket connection is closed.
 *
 * @param {string} type - The type of the event.
 * @param {boolean} wasClean - Indicates whether the connection was cleanly closed.
 * @param {number} code - The WebSocket connection close code provided by the server.
 * @param {string} reason - A human-readable string explaining why the connection was closed.
 * @returns {CloseEvent} A new CloseEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
 *
 * @example
 * const closeEvent = spawnCloseEvent('close', true, 1000, 'Normal closure');
 * console.log(closeEvent.type); // 'close'
 * console.log(closeEvent.wasClean); // true
 * console.log(closeEvent.code); // 1000
 * console.log(closeEvent.reason); // 'Normal closure'
 */
export const spawnCloseEvent = baseCloseEventFactory;
/**
 * Factory function to create a CloseEvent.
 *
 * The CloseEvent interface represents events that occur when a WebSocket connection is closed.
 *
 * @param {string} type - The type of the event.
 * @param {boolean} wasClean - Indicates whether the connection was cleanly closed.
 * @param {number} code - The WebSocket connection close code provided by the server.
 * @param {string} reason - A human-readable string explaining why the connection was closed.
 * @returns {CloseEvent} A new CloseEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
 *
 * @example
 * const closeEvent = buildCloseEvent('close', true, 1000, 'Normal closure');
 * console.log(closeEvent.type); // 'close'
 * console.log(closeEvent.wasClean); // true
 * console.log(closeEvent.code); // 1000
 * console.log(closeEvent.reason); // 'Normal closure'
 */
export const buildCloseEvent = baseCloseEventFactory;
/**
 * Factory function to create a CloseEvent.
 *
 * The CloseEvent interface represents events that occur when a WebSocket connection is closed.
 *
 * @param {string} type - The type of the event.
 * @param {boolean} wasClean - Indicates whether the connection was cleanly closed.
 * @param {number} code - The WebSocket connection close code provided by the server.
 * @param {string} reason - A human-readable string explaining why the connection was closed.
 * @returns {CloseEvent} A new CloseEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
 *
 * @example
 * const closeEvent = makeCloseEvent('close', true, 1000, 'Normal closure');
 * console.log(closeEvent.type); // 'close'
 * console.log(closeEvent.wasClean); // true
 * console.log(closeEvent.code); // 1000
 * console.log(closeEvent.reason); // 'Normal closure'
 */
export const makeCloseEvent = baseCloseEventFactory;
/**
 * Factory function to create a CloseEvent.
 *
 * The CloseEvent interface represents events that occur when a WebSocket connection is closed.
 *
 * @param {string} type - The type of the event.
 * @param {boolean} wasClean - Indicates whether the connection was cleanly closed.
 * @param {number} code - The WebSocket connection close code provided by the server.
 * @param {string} reason - A human-readable string explaining why the connection was closed.
 * @returns {CloseEvent} A new CloseEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
 *
 * @example
 * const closeEvent = constructCloseEvent('close', true, 1000, 'Normal closure');
 * console.log(closeEvent.type); // 'close'
 * console.log(closeEvent.wasClean); // true
 * console.log(closeEvent.code); // 1000
 * console.log(closeEvent.reason); // 'Normal closure'
 */
export const constructCloseEvent = baseCloseEventFactory;
