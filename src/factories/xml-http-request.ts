const baseXMLHttpRequestFactory = (
  ...args: ConstructorParameters<typeof XMLHttpRequest>
): InstanceType<typeof XMLHttpRequest> => new XMLHttpRequest(...args);

/**
 * Factory function to create a new instance of XMLHttpRequest.
 *
 * This function provides a convenient way to create and configure
 * XMLHttpRequest objects for making HTTP requests.
 *
 * @returns {XMLHttpRequest} A new instance of XMLHttpRequest.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest - MDN}
 *
 * @example
 * const xhr = createXMLHttpRequest();
 * xhr.open('GET', 'https://api.example.com/data', true);
 * xhr.onreadystatechange = function() {
 *   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
 *     console.log(xhr.responseText);
 *   }
 * };
 * xhr.send();
 */
export const createXMLHttpRequest = baseXMLHttpRequestFactory;
/**
 * Factory function to create a new instance of XMLHttpRequest.
 *
 * This function provides a convenient way to create and configure
 * XMLHttpRequest objects for making HTTP requests.
 *
 * @returns {XMLHttpRequest} A new instance of XMLHttpRequest.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest - MDN}
 *
 * @example
 * const xhr = initXMLHttpRequest();
 * xhr.open('GET', 'https://api.example.com/data', true);
 * xhr.onreadystatechange = function() {
 *   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
 *     console.log(xhr.responseText);
 *   }
 * };
 * xhr.send();
 */
export const initXMLHttpRequest = baseXMLHttpRequestFactory;
/**
 * Factory function to create a new instance of XMLHttpRequest.
 *
 * This function provides a convenient way to create and configure
 * XMLHttpRequest objects for making HTTP requests.
 *
 * @returns {XMLHttpRequest} A new instance of XMLHttpRequest.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest - MDN}
 *
 * @example
 * const xhr = spawnXMLHttpRequest();
 * xhr.open('GET', 'https://api.example.com/data', true);
 * xhr.onreadystatechange = function() {
 *   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
 *     console.log(xhr.responseText);
 *   }
 * };
 * xhr.send();
 */
export const spawnXMLHttpRequest = baseXMLHttpRequestFactory;
/**
 * Factory function to create a new instance of XMLHttpRequest.
 *
 * This function provides a convenient way to create and configure
 * XMLHttpRequest objects for making HTTP requests.
 *
 * @returns {XMLHttpRequest} A new instance of XMLHttpRequest.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest - MDN}
 *
 * @example
 * const xhr = buildXMLHttpRequest();
 * xhr.open('GET', 'https://api.example.com/data', true);
 * xhr.onreadystatechange = function() {
 *   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
 *     console.log(xhr.responseText);
 *   }
 * };
 * xhr.send();
 */
export const buildXMLHttpRequest = baseXMLHttpRequestFactory;
/**
 * Factory function to create a new instance of XMLHttpRequest.
 *
 * This function provides a convenient way to create and configure
 * XMLHttpRequest objects for making HTTP requests.
 *
 * @returns {XMLHttpRequest} A new instance of XMLHttpRequest.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest - MDN}
 *
 * @example
 * const xhr = makeXMLHttpRequest();
 * xhr.open('GET', 'https://api.example.com/data', true);
 * xhr.onreadystatechange = function() {
 *   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
 *     console.log(xhr.responseText);
 *   }
 * };
 * xhr.send();
 */
export const makeXMLHttpRequest = baseXMLHttpRequestFactory;
/**
 * Factory function to create a new instance of XMLHttpRequest.
 *
 * This function provides a convenient way to create and configure
 * XMLHttpRequest objects for making HTTP requests.
 *
 * @returns {XMLHttpRequest} A new instance of XMLHttpRequest.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest - MDN}
 *
 * @example
 * const xhr = constructXMLHttpRequest();
 * xhr.open('GET', 'https://api.example.com/data', true);
 * xhr.onreadystatechange = function() {
 *   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
 *     console.log(xhr.responseText);
 *   }
 * };
 * xhr.send();
 */
export const constructXMLHttpRequest = baseXMLHttpRequestFactory;
