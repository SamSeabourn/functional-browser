const baseInt16ArrayFactory = (
  ...args: ConstructorParameters<typeof Int16Array>
): InstanceType<typeof Int16Array> => new Int16Array(...args);

/**
 * Creates a new Int16Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int16Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int16Array.
 * @returns {Int16Array} A new Int16Array of the specified length, initialized with the given value.
 *
 * @example
 * // Create an Int16Array of length 5, initialized with the value 10
 * const int16Array = createInt16Array(5, 10);
 * console.log(int16Array); // Int16Array [10, 10, 10, 10, 10]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int16Array | Int16Array - MDN}
 */
export const createInt16Array = baseInt16ArrayFactory;
/**
 * Creates a new Int16Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int16Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int16Array.
 * @returns {Int16Array} A new Int16Array of the specified length, initialized with the given value.
 *
 * @example
 * // Create an Int16Array of length 5, initialized with the value 10
 * const int16Array = initInt16Array(5, 10);
 * console.log(int16Array); // Int16Array [10, 10, 10, 10, 10]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int16Array | Int16Array - MDN}
 */
export const initInt16Array = baseInt16ArrayFactory;
/**
 * Creates a new Int16Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int16Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int16Array.
 * @returns {Int16Array} A new Int16Array of the specified length, initialized with the given value.
 *
 * @example
 * // Create an Int16Array of length 5, initialized with the value 10
 * const int16Array = spawnInt16Array(5, 10);
 * console.log(int16Array); // Int16Array [10, 10, 10, 10, 10]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int16Array | Int16Array - MDN}
 */
export const spawnInt16Array = baseInt16ArrayFactory;
/**
 * Creates a new Int16Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int16Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int16Array.
 * @returns {Int16Array} A new Int16Array of the specified length, initialized with the given value.
 *
 * @example
 * // Create an Int16Array of length 5, initialized with the value 10
 * const int16Array = buildInt16Array(5, 10);
 * console.log(int16Array); // Int16Array [10, 10, 10, 10, 10]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int16Array | Int16Array - MDN}
 */
export const buildInt16Array = baseInt16ArrayFactory;
/**
 * Creates a new Int16Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int16Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int16Array.
 * @returns {Int16Array} A new Int16Array of the specified length, initialized with the given value.
 *
 * @example
 * // Create an Int16Array of length 5, initialized with the value 10
 * const int16Array = makeInt16Array(5, 10);
 * console.log(int16Array); // Int16Array [10, 10, 10, 10, 10]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int16Array | Int16Array - MDN}
 */
export const makeInt16Array = baseInt16ArrayFactory;
/**
 * Creates a new Int16Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int16Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int16Array.
 * @returns {Int16Array} A new Int16Array of the specified length, initialized with the given value.
 *
 * @example
 * // Create an Int16Array of length 5, initialized with the value 10
 * const int16Array = constructInt16Array(5, 10);
 * console.log(int16Array); // Int16Array [10, 10, 10, 10, 10]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int16Array | Int16Array - MDN}
 */
export const constructInt16Array = baseInt16ArrayFactory;
