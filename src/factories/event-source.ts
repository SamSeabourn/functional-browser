const baseEventSourceFactory = (
  ...args: ConstructorParameters<typeof EventSource>
): InstanceType<typeof EventSource> => new EventSource(...args);

/**
 * Factory function to create a new EventSource instance.
 *
 * @param {string} url - The URL to which the EventSource will connect.
 * @param {boolean} [withCredentials=false] - Indicates whether credentials such as cookies or authorization headers should be sent with the request.
 * @returns {EventSource} A new EventSource instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventSource | MDN EventSource}
 *
 * @example
 * const eventSource = createEventSource('https://example.com/events', true);
 * eventSource.onmessage = function(event) {
 *   console.log('New message:', event.data);
 * };
 */
export const createEventSource = baseEventSourceFactory;
/**
 * Factory function to create a new EventSource instance.
 *
 * @param {string} url - The URL to which the EventSource will connect.
 * @param {boolean} [withCredentials=false] - Indicates whether credentials such as cookies or authorization headers should be sent with the request.
 * @returns {EventSource} A new EventSource instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventSource | MDN EventSource}
 *
 * @example
 * const eventSource = initEventSource('https://example.com/events', true);
 * eventSource.onmessage = function(event) {
 *   console.log('New message:', event.data);
 * };
 */
export const initEventSource = baseEventSourceFactory;
/**
 * Factory function to create a new EventSource instance.
 *
 * @param {string} url - The URL to which the EventSource will connect.
 * @param {boolean} [withCredentials=false] - Indicates whether credentials such as cookies or authorization headers should be sent with the request.
 * @returns {EventSource} A new EventSource instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventSource | MDN EventSource}
 *
 * @example
 * const eventSource = spawnEventSource('https://example.com/events', true);
 * eventSource.onmessage = function(event) {
 *   console.log('New message:', event.data);
 * };
 */
export const spawnEventSource = baseEventSourceFactory;
/**
 * Factory function to create a new EventSource instance.
 *
 * @param {string} url - The URL to which the EventSource will connect.
 * @param {boolean} [withCredentials=false] - Indicates whether credentials such as cookies or authorization headers should be sent with the request.
 * @returns {EventSource} A new EventSource instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventSource | MDN EventSource}
 *
 * @example
 * const eventSource = buildEventSource('https://example.com/events', true);
 * eventSource.onmessage = function(event) {
 *   console.log('New message:', event.data);
 * };
 */
export const buildEventSource = baseEventSourceFactory;
/**
 * Factory function to create a new EventSource instance.
 *
 * @param {string} url - The URL to which the EventSource will connect.
 * @param {boolean} [withCredentials=false] - Indicates whether credentials such as cookies or authorization headers should be sent with the request.
 * @returns {EventSource} A new EventSource instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventSource | MDN EventSource}
 *
 * @example
 * const eventSource = makeEventSource('https://example.com/events', true);
 * eventSource.onmessage = function(event) {
 *   console.log('New message:', event.data);
 * };
 */
export const makeEventSource = baseEventSourceFactory;
/**
 * Factory function to create a new EventSource instance.
 *
 * @param {string} url - The URL to which the EventSource will connect.
 * @param {boolean} [withCredentials=false] - Indicates whether credentials such as cookies or authorization headers should be sent with the request.
 * @returns {EventSource} A new EventSource instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventSource | MDN EventSource}
 *
 * @example
 * const eventSource = constructEventSource('https://example.com/events', true);
 * eventSource.onmessage = function(event) {
 *   console.log('New message:', event.data);
 * };
 */
export const constructEventSource = baseEventSourceFactory;
