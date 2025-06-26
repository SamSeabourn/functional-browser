const baseWebSocketFactory = (
  ...args: ConstructorParameters<typeof WebSocket>
): InstanceType<typeof WebSocket> => new WebSocket(...args);

/**
 * Creates and returns a new WebSocket instance.
 *
 * @function
 * @name createWebSocket
 * @param {string} url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param {string|string[]} [protocols] - Optional subprotocols parameter. Either a single protocol string or an array of protocol strings.
 * @returns {WebSocket} A new WebSocket instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket|WebSocket - MDN}
 *
 * @example
 * // Create a new WebSocket connection
 * const socket = baseWebSocketFactory('ws://example.com/socket', 'protocolOne');
 */
export const createWebSocket = baseWebSocketFactory;
/**
 * Creates and returns a new WebSocket instance.
 *
 * @function
 * @name initWebSocket
 * @param {string} url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param {string|string[]} [protocols] - Optional subprotocols parameter. Either a single protocol string or an array of protocol strings.
 * @returns {WebSocket} A new WebSocket instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket|WebSocket - MDN}
 *
 * @example
 * // Create a new WebSocket connection
 * const socket = baseWebSocketFactory('ws://example.com/socket', 'protocolOne');
 */
export const initWebSocket = baseWebSocketFactory;
/**
 * Creates and returns a new WebSocket instance.
 *
 * @function
 * @name spawnWebSocket
 * @param {string} url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param {string|string[]} [protocols] - Optional subprotocols parameter. Either a single protocol string or an array of protocol strings.
 * @returns {WebSocket} A new WebSocket instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket|WebSocket - MDN}
 *
 * @example
 * // Create a new WebSocket connection
 * const socket = baseWebSocketFactory('ws://example.com/socket', 'protocolOne');
 */
export const spawnWebSocket = baseWebSocketFactory;
/**
 * Creates and returns a new WebSocket instance.
 *
 * @function
 * @name buildWebSocket
 * @param {string} url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param {string|string[]} [protocols] - Optional subprotocols parameter. Either a single protocol string or an array of protocol strings.
 * @returns {WebSocket} A new WebSocket instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket|WebSocket - MDN}
 *
 * @example
 * // Create a new WebSocket connection
 * const socket = baseWebSocketFactory('ws://example.com/socket', 'protocolOne');
 */
export const buildWebSocket = baseWebSocketFactory;
/**
 * Creates and returns a new WebSocket instance.
 *
 * @function
 * @name makeWebSocket
 * @param {string} url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param {string|string[]} [protocols] - Optional subprotocols parameter. Either a single protocol string or an array of protocol strings.
 * @returns {WebSocket} A new WebSocket instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket|WebSocket - MDN}
 *
 * @example
 * // Create a new WebSocket connection
 * const socket = baseWebSocketFactory('ws://example.com/socket', 'protocolOne');
 */
export const makeWebSocket = baseWebSocketFactory;
/**
 * Creates and returns a new WebSocket instance.
 *
 * @function
 * @name constructWebSocket
 * @param {string} url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param {string|string[]} [protocols] - Optional subprotocols parameter. Either a single protocol string or an array of protocol strings.
 * @returns {WebSocket} A new WebSocket instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket|WebSocket - MDN}
 *
 * @example
 * // Create a new WebSocket connection
 * const socket = baseWebSocketFactory('ws://example.com/socket', 'protocolOne');
 */
export const constructWebSocket = baseWebSocketFactory;
