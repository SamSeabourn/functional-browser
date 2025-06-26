const baseURLFactory = (...args: ConstructorParameters<typeof URL>): InstanceType<typeof URL> =>
  new URL(...args);

/**
 * Creates a new URL object using the specified base URL and relative path.
 *
 * @function
 * @param {string} baseURL - The base URL to use for creating the new URL.
 * @param {string} relativePath - The relative path to append to the base URL.
 * @returns {URL} A new URL object representing the combined base URL and relative path.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL | MDN URL Documentation}
 *
 * @example
 * const fullURL = createURL('https://example.com', '/path/to/resource');
 * console.log(fullURL.toString()); // Outputs: 'https://example.com/path/to/resource'
 */
export const createURL = baseURLFactory;
/**
 * Creates a new URL object using the specified base URL and relative path.
 *
 * @function
 * @param {string} baseURL - The base URL to use for creating the new URL.
 * @param {string} relativePath - The relative path to append to the base URL.
 * @returns {URL} A new URL object representing the combined base URL and relative path.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL | MDN URL Documentation}
 *
 * @example
 * const fullURL = initURL('https://example.com', '/path/to/resource');
 * console.log(fullURL.toString()); // Outputs: 'https://example.com/path/to/resource'
 */
export const initURL = baseURLFactory;
/**
 * Creates a new URL object using the specified base URL and relative path.
 *
 * @function
 * @param {string} baseURL - The base URL to use for creating the new URL.
 * @param {string} relativePath - The relative path to append to the base URL.
 * @returns {URL} A new URL object representing the combined base URL and relative path.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL | MDN URL Documentation}
 *
 * @example
 * const fullURL = spawnURL('https://example.com', '/path/to/resource');
 * console.log(fullURL.toString()); // Outputs: 'https://example.com/path/to/resource'
 */
export const spawnURL = baseURLFactory;
/**
 * Creates a new URL object using the specified base URL and relative path.
 *
 * @function
 * @param {string} baseURL - The base URL to use for creating the new URL.
 * @param {string} relativePath - The relative path to append to the base URL.
 * @returns {URL} A new URL object representing the combined base URL and relative path.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL | MDN URL Documentation}
 *
 * @example
 * const fullURL = buildURL('https://example.com', '/path/to/resource');
 * console.log(fullURL.toString()); // Outputs: 'https://example.com/path/to/resource'
 */
export const buildURL = baseURLFactory;
/**
 * Creates a new URL object using the specified base URL and relative path.
 *
 * @function
 * @param {string} baseURL - The base URL to use for creating the new URL.
 * @param {string} relativePath - The relative path to append to the base URL.
 * @returns {URL} A new URL object representing the combined base URL and relative path.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL | MDN URL Documentation}
 *
 * @example
 * const fullURL = makeURL('https://example.com', '/path/to/resource');
 * console.log(fullURL.toString()); // Outputs: 'https://example.com/path/to/resource'
 */
export const makeURL = baseURLFactory;
/**
 * Creates a new URL object using the specified base URL and relative path.
 *
 * @function
 * @param {string} baseURL - The base URL to use for creating the new URL.
 * @param {string} relativePath - The relative path to append to the base URL.
 * @returns {URL} A new URL object representing the combined base URL and relative path.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL | MDN URL Documentation}
 *
 * @example
 * const fullURL = constructURL('https://example.com', '/path/to/resource');
 * console.log(fullURL.toString()); // Outputs: 'https://example.com/path/to/resource'
 */
export const constructURL = baseURLFactory;
