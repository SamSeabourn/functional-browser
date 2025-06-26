const baseInt8ArrayFactory = (
  ...args: ConstructorParameters<typeof Int8Array>
): InstanceType<typeof Int8Array> => new Int8Array(...args);

/**
 * Creates a new Int8Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int8Array to be created.
 * @param {number} initialValue - The value to initialize each element of the Int8Array.
 * @returns {Int8Array} A new Int8Array instance with the specified length and initialized values.
 *
 * @example
 * // Creates an Int8Array of length 5, with each element initialized to 7.
 * const int8Array = createInt8Array(5, 7);
 * console.log(int8Array); // Output: Int8Array [7, 7, 7, 7, 7]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int8Array|Int8Array - MDN}
 */
export const createInt8Array = baseInt8ArrayFactory;
/**
 * Creates a new Int8Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int8Array to be created.
 * @param {number} initialValue - The value to initialize each element of the Int8Array.
 * @returns {Int8Array} A new Int8Array instance with the specified length and initialized values.
 *
 * @example
 * // Creates an Int8Array of length 5, with each element initialized to 7.
 * const int8Array = initInt8Array(5, 7);
 * console.log(int8Array); // Output: Int8Array [7, 7, 7, 7, 7]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int8Array|Int8Array - MDN}
 */
export const initInt8Array = baseInt8ArrayFactory;
/**
 * Creates a new Int8Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int8Array to be created.
 * @param {number} initialValue - The value to initialize each element of the Int8Array.
 * @returns {Int8Array} A new Int8Array instance with the specified length and initialized values.
 *
 * @example
 * // Creates an Int8Array of length 5, with each element initialized to 7.
 * const int8Array = spawnInt8Array(5, 7);
 * console.log(int8Array); // Output: Int8Array [7, 7, 7, 7, 7]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int8Array|Int8Array - MDN}
 */
export const spawnInt8Array = baseInt8ArrayFactory;
/**
 * Creates a new Int8Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int8Array to be created.
 * @param {number} initialValue - The value to initialize each element of the Int8Array.
 * @returns {Int8Array} A new Int8Array instance with the specified length and initialized values.
 *
 * @example
 * // Creates an Int8Array of length 5, with each element initialized to 7.
 * const int8Array = buildInt8Array(5, 7);
 * console.log(int8Array); // Output: Int8Array [7, 7, 7, 7, 7]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int8Array|Int8Array - MDN}
 */
export const buildInt8Array = baseInt8ArrayFactory;
/**
 * Creates a new Int8Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int8Array to be created.
 * @param {number} initialValue - The value to initialize each element of the Int8Array.
 * @returns {Int8Array} A new Int8Array instance with the specified length and initialized values.
 *
 * @example
 * // Creates an Int8Array of length 5, with each element initialized to 7.
 * const int8Array = makeInt8Array(5, 7);
 * console.log(int8Array); // Output: Int8Array [7, 7, 7, 7, 7]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int8Array|Int8Array - MDN}
 */
export const makeInt8Array = baseInt8ArrayFactory;
/**
 * Creates a new Int8Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int8Array to be created.
 * @param {number} initialValue - The value to initialize each element of the Int8Array.
 * @returns {Int8Array} A new Int8Array instance with the specified length and initialized values.
 *
 * @example
 * // Creates an Int8Array of length 5, with each element initialized to 7.
 * const int8Array = constructInt8Array(5, 7);
 * console.log(int8Array); // Output: Int8Array [7, 7, 7, 7, 7]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int8Array|Int8Array - MDN}
 */
export const constructInt8Array = baseInt8ArrayFactory;
