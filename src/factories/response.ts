const baseResponseFactory = (
  ...args: ConstructorParameters<typeof Response>
): InstanceType<typeof Response> => new Response(...args);

/**
 * Factory function to create a base Response object.
 *
 * This function generates a new Response object with default settings.
 *
 * @returns {Response} A new Response object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|Response - MDN}
 *
 * @example
 * const response = createResponse();
 * console.log(response.status); // Example: 200
 */
export const createResponse = baseResponseFactory;
/**
 * Factory function to create a base Response object.
 *
 * This function generates a new Response object with default settings.
 *
 * @returns {Response} A new Response object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|Response - MDN}
 *
 * @example
 * const response = initResponse();
 * console.log(response.status); // Example: 200
 */
export const initResponse = baseResponseFactory;
/**
 * Factory function to create a base Response object.
 *
 * This function generates a new Response object with default settings.
 *
 * @returns {Response} A new Response object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|Response - MDN}
 *
 * @example
 * const response = spawnResponse();
 * console.log(response.status); // Example: 200
 */
export const spawnResponse = baseResponseFactory;
/**
 * Factory function to create a base Response object.
 *
 * This function generates a new Response object with default settings.
 *
 * @returns {Response} A new Response object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|Response - MDN}
 *
 * @example
 * const response = buildResponse();
 * console.log(response.status); // Example: 200
 */
export const buildResponse = baseResponseFactory;
/**
 * Factory function to create a base Response object.
 *
 * This function generates a new Response object with default settings.
 *
 * @returns {Response} A new Response object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|Response - MDN}
 *
 * @example
 * const response = makeResponse();
 * console.log(response.status); // Example: 200
 */
export const makeResponse = baseResponseFactory;
/**
 * Factory function to create a base Response object.
 *
 * This function generates a new Response object with default settings.
 *
 * @returns {Response} A new Response object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|Response - MDN}
 *
 * @example
 * const response = constructResponse();
 * console.log(response.status); // Example: 200
 */
export const constructResponse = baseResponseFactory;
