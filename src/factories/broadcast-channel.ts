const baseBroadcastChannelFactory = (
  ...args: ConstructorParameters<typeof BroadcastChannel>
): InstanceType<typeof BroadcastChannel> => new BroadcastChannel(...args);

/**
 * Creates a new instance of a BroadcastChannel with the specified name.
 *
 * The BroadcastChannel interface represents a named channel that any browsing context
 * of a given origin can subscribe to. It allows communication between different
 * windows/tabs, iframes, web workers, and service workers.
 *
 * @param {string} name - The name of the channel. This name is used to identify the channel
 * across different contexts.
 * @returns {BroadcastChannel} A new instance of BroadcastChannel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
 *
 * @example
 * const channel = createBroadcastChannel('my-channel');
 * channel.postMessage('Hello, world!');
 *
 * channel.onmessage = (event) => {
 *   console.log('Received message:', event.data);
 * };
 */
export const createBroadcastChannel = baseBroadcastChannelFactory;
/**
 * Creates a new instance of a BroadcastChannel with the specified name.
 *
 * The BroadcastChannel interface represents a named channel that any browsing context
 * of a given origin can subscribe to. It allows communication between different
 * windows/tabs, iframes, web workers, and service workers.
 *
 * @param {string} name - The name of the channel. This name is used to identify the channel
 * across different contexts.
 * @returns {BroadcastChannel} A new instance of BroadcastChannel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
 *
 * @example
 * const channel = initBroadcastChannel('my-channel');
 * channel.postMessage('Hello, world!');
 *
 * channel.onmessage = (event) => {
 *   console.log('Received message:', event.data);
 * };
 */
export const initBroadcastChannel = baseBroadcastChannelFactory;
/**
 * Creates a new instance of a BroadcastChannel with the specified name.
 *
 * The BroadcastChannel interface represents a named channel that any browsing context
 * of a given origin can subscribe to. It allows communication between different
 * windows/tabs, iframes, web workers, and service workers.
 *
 * @param {string} name - The name of the channel. This name is used to identify the channel
 * across different contexts.
 * @returns {BroadcastChannel} A new instance of BroadcastChannel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
 *
 * @example
 * const channel = spawnBroadcastChannel('my-channel');
 * channel.postMessage('Hello, world!');
 *
 * channel.onmessage = (event) => {
 *   console.log('Received message:', event.data);
 * };
 */
export const spawnBroadcastChannel = baseBroadcastChannelFactory;
/**
 * Creates a new instance of a BroadcastChannel with the specified name.
 *
 * The BroadcastChannel interface represents a named channel that any browsing context
 * of a given origin can subscribe to. It allows communication between different
 * windows/tabs, iframes, web workers, and service workers.
 *
 * @param {string} name - The name of the channel. This name is used to identify the channel
 * across different contexts.
 * @returns {BroadcastChannel} A new instance of BroadcastChannel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
 *
 * @example
 * const channel = buildBroadcastChannel('my-channel');
 * channel.postMessage('Hello, world!');
 *
 * channel.onmessage = (event) => {
 *   console.log('Received message:', event.data);
 * };
 */
export const buildBroadcastChannel = baseBroadcastChannelFactory;
/**
 * Creates a new instance of a BroadcastChannel with the specified name.
 *
 * The BroadcastChannel interface represents a named channel that any browsing context
 * of a given origin can subscribe to. It allows communication between different
 * windows/tabs, iframes, web workers, and service workers.
 *
 * @param {string} name - The name of the channel. This name is used to identify the channel
 * across different contexts.
 * @returns {BroadcastChannel} A new instance of BroadcastChannel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
 *
 * @example
 * const channel = makeBroadcastChannel('my-channel');
 * channel.postMessage('Hello, world!');
 *
 * channel.onmessage = (event) => {
 *   console.log('Received message:', event.data);
 * };
 */
export const makeBroadcastChannel = baseBroadcastChannelFactory;
/**
 * Creates a new instance of a BroadcastChannel with the specified name.
 *
 * The BroadcastChannel interface represents a named channel that any browsing context
 * of a given origin can subscribe to. It allows communication between different
 * windows/tabs, iframes, web workers, and service workers.
 *
 * @param {string} name - The name of the channel. This name is used to identify the channel
 * across different contexts.
 * @returns {BroadcastChannel} A new instance of BroadcastChannel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
 *
 * @example
 * const channel = constructBroadcastChannel('my-channel');
 * channel.postMessage('Hello, world!');
 *
 * channel.onmessage = (event) => {
 *   console.log('Received message:', event.data);
 * };
 */
export const constructBroadcastChannel = baseBroadcastChannelFactory;
