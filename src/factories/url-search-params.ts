const baseURLSearchParamsFactory = (
  ...args: ConstructorParameters<typeof URLSearchParams>
): InstanceType<typeof URLSearchParams> => new URLSearchParams(...args);

/**
 * Factory function to create a new instance of URLSearchParams with the given query string.
 *
 * @param {string} queryString - The query string to initialize the URLSearchParams object.
 * @returns {URLSearchParams} A new instance of URLSearchParams initialized with the provided query string.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams | MDN URLSearchParams}
 *
 * @example
 * const searchParams = createURLSearchParams('key1=value1&key2=value2');
 * console.log(searchParams.get('key1')); // Outputs: 'value1'
 */
export const createURLSearchParams = baseURLSearchParamsFactory;
/**
 * Factory function to create a new instance of URLSearchParams with the given query string.
 *
 * @param {string} queryString - The query string to initialize the URLSearchParams object.
 * @returns {URLSearchParams} A new instance of URLSearchParams initialized with the provided query string.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams | MDN URLSearchParams}
 *
 * @example
 * const searchParams = initURLSearchParams('key1=value1&key2=value2');
 * console.log(searchParams.get('key1')); // Outputs: 'value1'
 */
export const initURLSearchParams = baseURLSearchParamsFactory;
/**
 * Factory function to create a new instance of URLSearchParams with the given query string.
 *
 * @param {string} queryString - The query string to initialize the URLSearchParams object.
 * @returns {URLSearchParams} A new instance of URLSearchParams initialized with the provided query string.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams | MDN URLSearchParams}
 *
 * @example
 * const searchParams = spawnURLSearchParams('key1=value1&key2=value2');
 * console.log(searchParams.get('key1')); // Outputs: 'value1'
 */
export const spawnURLSearchParams = baseURLSearchParamsFactory;
/**
 * Factory function to create a new instance of URLSearchParams with the given query string.
 *
 * @param {string} queryString - The query string to initialize the URLSearchParams object.
 * @returns {URLSearchParams} A new instance of URLSearchParams initialized with the provided query string.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams | MDN URLSearchParams}
 *
 * @example
 * const searchParams = buildURLSearchParams('key1=value1&key2=value2');
 * console.log(searchParams.get('key1')); // Outputs: 'value1'
 */
export const buildURLSearchParams = baseURLSearchParamsFactory;
/**
 * Factory function to create a new instance of URLSearchParams with the given query string.
 *
 * @param {string} queryString - The query string to initialize the URLSearchParams object.
 * @returns {URLSearchParams} A new instance of URLSearchParams initialized with the provided query string.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams | MDN URLSearchParams}
 *
 * @example
 * const searchParams = makeURLSearchParams('key1=value1&key2=value2');
 * console.log(searchParams.get('key1')); // Outputs: 'value1'
 */
export const makeURLSearchParams = baseURLSearchParamsFactory;
/**
 * Factory function to create a new instance of URLSearchParams with the given query string.
 *
 * @param {string} queryString - The query string to initialize the URLSearchParams object.
 * @returns {URLSearchParams} A new instance of URLSearchParams initialized with the provided query string.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams | MDN URLSearchParams}
 *
 * @example
 * const searchParams = constructURLSearchParams('key1=value1&key2=value2');
 * console.log(searchParams.get('key1')); // Outputs: 'value1'
 */
export const constructURLSearchParams = baseURLSearchParamsFactory;
