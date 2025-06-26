const baseMessageChannelFactory = (
  ...args: ConstructorParameters<typeof MessageChannel>
): InstanceType<typeof MessageChannel> => new MessageChannel(...args);

/**
 * Factory function to create a new instance of MessageChannel.
 *
 * The MessageChannel interface of the Channel Messaging API allows us to create a new message channel
 * and send data through it via two MessagePort objects. These ports are linked to each other, and
 * messages sent through one are delivered at the other.
 *
 * @returns {MessageChannel} A new instance of MessageChannel.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel|MessageChannel - MDN}
 *
 * @example
 * const messageChannel = createMessageChannel();
 * const port1 = messageChannel.port1;
 * const port2 = messageChannel.port2;
 *
 * port1.onmessage = (event) => {
 *   console.log('Message received on port1:', event.data);
 * };
 *
 * port2.postMessage('Hello from port2!');
 */
export const createMessageChannel = baseMessageChannelFactory;
/**
 * Factory function to create a new instance of MessageChannel.
 *
 * The MessageChannel interface of the Channel Messaging API allows us to create a new message channel
 * and send data through it via two MessagePort objects. These ports are linked to each other, and
 * messages sent through one are delivered at the other.
 *
 * @returns {MessageChannel} A new instance of MessageChannel.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel|MessageChannel - MDN}
 *
 * @example
 * const messageChannel = initMessageChannel();
 * const port1 = messageChannel.port1;
 * const port2 = messageChannel.port2;
 *
 * port1.onmessage = (event) => {
 *   console.log('Message received on port1:', event.data);
 * };
 *
 * port2.postMessage('Hello from port2!');
 */
export const initMessageChannel = baseMessageChannelFactory;
/**
 * Factory function to create a new instance of MessageChannel.
 *
 * The MessageChannel interface of the Channel Messaging API allows us to create a new message channel
 * and send data through it via two MessagePort objects. These ports are linked to each other, and
 * messages sent through one are delivered at the other.
 *
 * @returns {MessageChannel} A new instance of MessageChannel.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel|MessageChannel - MDN}
 *
 * @example
 * const messageChannel = spawnMessageChannel();
 * const port1 = messageChannel.port1;
 * const port2 = messageChannel.port2;
 *
 * port1.onmessage = (event) => {
 *   console.log('Message received on port1:', event.data);
 * };
 *
 * port2.postMessage('Hello from port2!');
 */
export const spawnMessageChannel = baseMessageChannelFactory;
/**
 * Factory function to create a new instance of MessageChannel.
 *
 * The MessageChannel interface of the Channel Messaging API allows us to create a new message channel
 * and send data through it via two MessagePort objects. These ports are linked to each other, and
 * messages sent through one are delivered at the other.
 *
 * @returns {MessageChannel} A new instance of MessageChannel.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel|MessageChannel - MDN}
 *
 * @example
 * const messageChannel = buildMessageChannel();
 * const port1 = messageChannel.port1;
 * const port2 = messageChannel.port2;
 *
 * port1.onmessage = (event) => {
 *   console.log('Message received on port1:', event.data);
 * };
 *
 * port2.postMessage('Hello from port2!');
 */
export const buildMessageChannel = baseMessageChannelFactory;
/**
 * Factory function to create a new instance of MessageChannel.
 *
 * The MessageChannel interface of the Channel Messaging API allows us to create a new message channel
 * and send data through it via two MessagePort objects. These ports are linked to each other, and
 * messages sent through one are delivered at the other.
 *
 * @returns {MessageChannel} A new instance of MessageChannel.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel|MessageChannel - MDN}
 *
 * @example
 * const messageChannel = makeMessageChannel();
 * const port1 = messageChannel.port1;
 * const port2 = messageChannel.port2;
 *
 * port1.onmessage = (event) => {
 *   console.log('Message received on port1:', event.data);
 * };
 *
 * port2.postMessage('Hello from port2!');
 */
export const makeMessageChannel = baseMessageChannelFactory;
/**
 * Factory function to create a new instance of MessageChannel.
 *
 * The MessageChannel interface of the Channel Messaging API allows us to create a new message channel
 * and send data through it via two MessagePort objects. These ports are linked to each other, and
 * messages sent through one are delivered at the other.
 *
 * @returns {MessageChannel} A new instance of MessageChannel.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel|MessageChannel - MDN}
 *
 * @example
 * const messageChannel = constructMessageChannel();
 * const port1 = messageChannel.port1;
 * const port2 = messageChannel.port2;
 *
 * port1.onmessage = (event) => {
 *   console.log('Message received on port1:', event.data);
 * };
 *
 * port2.postMessage('Hello from port2!');
 */
export const constructMessageChannel = baseMessageChannelFactory;
