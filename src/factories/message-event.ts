const baseMessageEventFactory = (
  ...args: ConstructorParameters<typeof MessageEvent>
): InstanceType<typeof MessageEvent> => new MessageEvent(...args);

/**
 * Factory function to create a new `MessageEvent` instance.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInitDict] - An optional object that contains event initialization properties.
 * @param {boolean} [eventInitDict.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInitDict.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInitDict.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @param {*} [eventInitDict.data=null] - The data sent by the message emitter.
 * @param {string} [eventInitDict.origin=''] - The origin of the message emitter.
 * @param {string} [eventInitDict.lastEventId=''] - The last event ID string, for server-sent events.
 * @param {WindowProxy} [eventInitDict.source=null] - A reference to the window object that sent the message.
 * @param {MessageEventSource} [eventInitDict.ports=[]] - An array of `MessagePort` objects representing the ports associated with the channel.
 * @returns {MessageEvent} A new `MessageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent}
 *
 * @example
 * const messageEvent = createMessageEvent('message', {
 *   data: 'Hello, world!',
 *   origin: 'https://example.com',
 *   lastEventId: '12345',
 *   source: window,
 *   ports: []
 * });
 */
export const createMessageEvent = baseMessageEventFactory;
/**
 * Factory function to create a new `MessageEvent` instance.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInitDict] - An optional object that contains event initialization properties.
 * @param {boolean} [eventInitDict.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInitDict.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInitDict.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @param {*} [eventInitDict.data=null] - The data sent by the message emitter.
 * @param {string} [eventInitDict.origin=''] - The origin of the message emitter.
 * @param {string} [eventInitDict.lastEventId=''] - The last event ID string, for server-sent events.
 * @param {WindowProxy} [eventInitDict.source=null] - A reference to the window object that sent the message.
 * @param {MessageEventSource} [eventInitDict.ports=[]] - An array of `MessagePort` objects representing the ports associated with the channel.
 * @returns {MessageEvent} A new `MessageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent}
 *
 * @example
 * const messageEvent = initMessageEvent('message', {
 *   data: 'Hello, world!',
 *   origin: 'https://example.com',
 *   lastEventId: '12345',
 *   source: window,
 *   ports: []
 * });
 */
export const initMessageEvent = baseMessageEventFactory;
/**
 * Factory function to create a new `MessageEvent` instance.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInitDict] - An optional object that contains event initialization properties.
 * @param {boolean} [eventInitDict.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInitDict.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInitDict.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @param {*} [eventInitDict.data=null] - The data sent by the message emitter.
 * @param {string} [eventInitDict.origin=''] - The origin of the message emitter.
 * @param {string} [eventInitDict.lastEventId=''] - The last event ID string, for server-sent events.
 * @param {WindowProxy} [eventInitDict.source=null] - A reference to the window object that sent the message.
 * @param {MessageEventSource} [eventInitDict.ports=[]] - An array of `MessagePort` objects representing the ports associated with the channel.
 * @returns {MessageEvent} A new `MessageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent}
 *
 * @example
 * const messageEvent = spawnMessageEvent('message', {
 *   data: 'Hello, world!',
 *   origin: 'https://example.com',
 *   lastEventId: '12345',
 *   source: window,
 *   ports: []
 * });
 */
export const spawnMessageEvent = baseMessageEventFactory;
/**
 * Factory function to create a new `MessageEvent` instance.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInitDict] - An optional object that contains event initialization properties.
 * @param {boolean} [eventInitDict.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInitDict.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInitDict.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @param {*} [eventInitDict.data=null] - The data sent by the message emitter.
 * @param {string} [eventInitDict.origin=''] - The origin of the message emitter.
 * @param {string} [eventInitDict.lastEventId=''] - The last event ID string, for server-sent events.
 * @param {WindowProxy} [eventInitDict.source=null] - A reference to the window object that sent the message.
 * @param {MessageEventSource} [eventInitDict.ports=[]] - An array of `MessagePort` objects representing the ports associated with the channel.
 * @returns {MessageEvent} A new `MessageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent}
 *
 * @example
 * const messageEvent = buildMessageEvent('message', {
 *   data: 'Hello, world!',
 *   origin: 'https://example.com',
 *   lastEventId: '12345',
 *   source: window,
 *   ports: []
 * });
 */
export const buildMessageEvent = baseMessageEventFactory;
/**
 * Factory function to create a new `MessageEvent` instance.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInitDict] - An optional object that contains event initialization properties.
 * @param {boolean} [eventInitDict.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInitDict.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInitDict.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @param {*} [eventInitDict.data=null] - The data sent by the message emitter.
 * @param {string} [eventInitDict.origin=''] - The origin of the message emitter.
 * @param {string} [eventInitDict.lastEventId=''] - The last event ID string, for server-sent events.
 * @param {WindowProxy} [eventInitDict.source=null] - A reference to the window object that sent the message.
 * @param {MessageEventSource} [eventInitDict.ports=[]] - An array of `MessagePort` objects representing the ports associated with the channel.
 * @returns {MessageEvent} A new `MessageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent}
 *
 * @example
 * const messageEvent = makeMessageEvent('message', {
 *   data: 'Hello, world!',
 *   origin: 'https://example.com',
 *   lastEventId: '12345',
 *   source: window,
 *   ports: []
 * });
 */
export const makeMessageEvent = baseMessageEventFactory;
/**
 * Factory function to create a new `MessageEvent` instance.
 *
 * @param {string} type - The type of the event.
 * @param {Object} [eventInitDict] - An optional object that contains event initialization properties.
 * @param {boolean} [eventInitDict.bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [eventInitDict.cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [eventInitDict.composed=false] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @param {*} [eventInitDict.data=null] - The data sent by the message emitter.
 * @param {string} [eventInitDict.origin=''] - The origin of the message emitter.
 * @param {string} [eventInitDict.lastEventId=''] - The last event ID string, for server-sent events.
 * @param {WindowProxy} [eventInitDict.source=null] - A reference to the window object that sent the message.
 * @param {MessageEventSource} [eventInitDict.ports=[]] - An array of `MessagePort` objects representing the ports associated with the channel.
 * @returns {MessageEvent} A new `MessageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent}
 *
 * @example
 * const messageEvent = constructMessageEvent('message', {
 *   data: 'Hello, world!',
 *   origin: 'https://example.com',
 *   lastEventId: '12345',
 *   source: window,
 *   ports: []
 * });
 */
export const constructMessageEvent = baseMessageEventFactory;
