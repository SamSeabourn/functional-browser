const baseRequestFactory = (
  ...args: ConstructorParameters<typeof Request>
): InstanceType<typeof Request> => new Request(...args);

/**
 * Creates a new Request object with the specified URL and options.
 *
 * This factory function simplifies the creation of a Request object
 * by allowing you to specify the URL and options in a single call.
 *
 * @param {string} url - The URL of the resource you want to request.
 * @param {RequestInit} [options] - An optional object containing any custom settings that you want to apply to the request.
 * @returns {Request} A new Request object configured with the specified URL and options.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request | MDN Request documentation}
 *
 * @example
 * const request = createRequest('https://api.example.com/data', {
 *   method: 'GET',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   }
 * });
 */
export const createRequest = baseRequestFactory;
/**
 * Creates a new Request object with the specified URL and options.
 *
 * This factory function simplifies the creation of a Request object
 * by allowing you to specify the URL and options in a single call.
 *
 * @param {string} url - The URL of the resource you want to request.
 * @param {RequestInit} [options] - An optional object containing any custom settings that you want to apply to the request.
 * @returns {Request} A new Request object configured with the specified URL and options.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request | MDN Request documentation}
 *
 * @example
 * const request = initRequest('https://api.example.com/data', {
 *   method: 'GET',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   }
 * });
 */
export const initRequest = baseRequestFactory;
/**
 * Creates a new Request object with the specified URL and options.
 *
 * This factory function simplifies the creation of a Request object
 * by allowing you to specify the URL and options in a single call.
 *
 * @param {string} url - The URL of the resource you want to request.
 * @param {RequestInit} [options] - An optional object containing any custom settings that you want to apply to the request.
 * @returns {Request} A new Request object configured with the specified URL and options.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request | MDN Request documentation}
 *
 * @example
 * const request = spawnRequest('https://api.example.com/data', {
 *   method: 'GET',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   }
 * });
 */
export const spawnRequest = baseRequestFactory;
/**
 * Creates a new Request object with the specified URL and options.
 *
 * This factory function simplifies the creation of a Request object
 * by allowing you to specify the URL and options in a single call.
 *
 * @param {string} url - The URL of the resource you want to request.
 * @param {RequestInit} [options] - An optional object containing any custom settings that you want to apply to the request.
 * @returns {Request} A new Request object configured with the specified URL and options.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request | MDN Request documentation}
 *
 * @example
 * const request = buildRequest('https://api.example.com/data', {
 *   method: 'GET',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   }
 * });
 */
export const buildRequest = baseRequestFactory;
/**
 * Creates a new Request object with the specified URL and options.
 *
 * This factory function simplifies the creation of a Request object
 * by allowing you to specify the URL and options in a single call.
 *
 * @param {string} url - The URL of the resource you want to request.
 * @param {RequestInit} [options] - An optional object containing any custom settings that you want to apply to the request.
 * @returns {Request} A new Request object configured with the specified URL and options.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request | MDN Request documentation}
 *
 * @example
 * const request = makeRequest('https://api.example.com/data', {
 *   method: 'GET',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   }
 * });
 */
export const makeRequest = baseRequestFactory;
/**
 * Creates a new Request object with the specified URL and options.
 *
 * This factory function simplifies the creation of a Request object
 * by allowing you to specify the URL and options in a single call.
 *
 * @param {string} url - The URL of the resource you want to request.
 * @param {RequestInit} [options] - An optional object containing any custom settings that you want to apply to the request.
 * @returns {Request} A new Request object configured with the specified URL and options.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request | MDN Request documentation}
 *
 * @example
 * const request = constructRequest('https://api.example.com/data', {
 *   method: 'GET',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   }
 * });
 */
export const constructRequest = baseRequestFactory;
