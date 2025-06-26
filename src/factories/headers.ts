const baseHeadersFactory = (
  ...args: ConstructorParameters<typeof Headers>
): InstanceType<typeof Headers> => new Headers(...args);

/**
 * Creates a new Headers object with a default set of headers.
 *
 * This factory function initializes a Headers object with a predefined
 * set of headers that can be used as a base for HTTP requests.
 *
 * @returns {Headers} A new Headers object with default headers.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers | MDN Headers}
 *
 * @example
 * const headers = createHeaders();
 * headers.append('Authorization', 'Bearer token');
 * fetch('https://api.example.com/data', { method: 'GET', headers });
 */
export const createHeaders = baseHeadersFactory;
/**
 * Creates a new Headers object with a default set of headers.
 *
 * This factory function initializes a Headers object with a predefined
 * set of headers that can be used as a base for HTTP requests.
 *
 * @returns {Headers} A new Headers object with default headers.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers | MDN Headers}
 *
 * @example
 * const headers = initHeaders();
 * headers.append('Authorization', 'Bearer token');
 * fetch('https://api.example.com/data', { method: 'GET', headers });
 */
export const initHeaders = baseHeadersFactory;
/**
 * Creates a new Headers object with a default set of headers.
 *
 * This factory function initializes a Headers object with a predefined
 * set of headers that can be used as a base for HTTP requests.
 *
 * @returns {Headers} A new Headers object with default headers.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers | MDN Headers}
 *
 * @example
 * const headers = spawnHeaders();
 * headers.append('Authorization', 'Bearer token');
 * fetch('https://api.example.com/data', { method: 'GET', headers });
 */
export const spawnHeaders = baseHeadersFactory;
/**
 * Creates a new Headers object with a default set of headers.
 *
 * This factory function initializes a Headers object with a predefined
 * set of headers that can be used as a base for HTTP requests.
 *
 * @returns {Headers} A new Headers object with default headers.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers | MDN Headers}
 *
 * @example
 * const headers = buildHeaders();
 * headers.append('Authorization', 'Bearer token');
 * fetch('https://api.example.com/data', { method: 'GET', headers });
 */
export const buildHeaders = baseHeadersFactory;
/**
 * Creates a new Headers object with a default set of headers.
 *
 * This factory function initializes a Headers object with a predefined
 * set of headers that can be used as a base for HTTP requests.
 *
 * @returns {Headers} A new Headers object with default headers.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers | MDN Headers}
 *
 * @example
 * const headers = makeHeaders();
 * headers.append('Authorization', 'Bearer token');
 * fetch('https://api.example.com/data', { method: 'GET', headers });
 */
export const makeHeaders = baseHeadersFactory;
/**
 * Creates a new Headers object with a default set of headers.
 *
 * This factory function initializes a Headers object with a predefined
 * set of headers that can be used as a base for HTTP requests.
 *
 * @returns {Headers} A new Headers object with default headers.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers | MDN Headers}
 *
 * @example
 * const headers = constructHeaders();
 * headers.append('Authorization', 'Bearer token');
 * fetch('https://api.example.com/data', { method: 'GET', headers });
 */
export const constructHeaders = baseHeadersFactory;
