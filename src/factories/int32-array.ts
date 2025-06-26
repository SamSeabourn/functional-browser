const baseInt32ArrayFactory = (
  ...args: ConstructorParameters<typeof Int32Array>
): InstanceType<typeof Int32Array> => new Int32Array(...args);

/**
 * Creates a new Int32Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int32Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int32Array.
 * @returns {Int32Array} A new Int32Array of the specified length, with each element initialized to the given value.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int32Array|Int32Array - MDN}
 *
 * @example
 * // Create an Int32Array of length 5, with each element initialized to 10
 * const int32Array = createInt32Array(5, 10);
 * console.log(int32Array); // Int32Array [10, 10, 10, 10, 10]
 */
export const createInt32Array = baseInt32ArrayFactory;
/**
 * Creates a new Int32Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int32Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int32Array.
 * @returns {Int32Array} A new Int32Array of the specified length, with each element initialized to the given value.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int32Array|Int32Array - MDN}
 *
 * @example
 * // Create an Int32Array of length 5, with each element initialized to 10
 * const int32Array = initInt32Array(5, 10);
 * console.log(int32Array); // Int32Array [10, 10, 10, 10, 10]
 */
export const initInt32Array = baseInt32ArrayFactory;
/**
 * Creates a new Int32Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int32Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int32Array.
 * @returns {Int32Array} A new Int32Array of the specified length, with each element initialized to the given value.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int32Array|Int32Array - MDN}
 *
 * @example
 * // Create an Int32Array of length 5, with each element initialized to 10
 * const int32Array = spawnInt32Array(5, 10);
 * console.log(int32Array); // Int32Array [10, 10, 10, 10, 10]
 */
export const spawnInt32Array = baseInt32ArrayFactory;
/**
 * Creates a new Int32Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int32Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int32Array.
 * @returns {Int32Array} A new Int32Array of the specified length, with each element initialized to the given value.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int32Array|Int32Array - MDN}
 *
 * @example
 * // Create an Int32Array of length 5, with each element initialized to 10
 * const int32Array = buildInt32Array(5, 10);
 * console.log(int32Array); // Int32Array [10, 10, 10, 10, 10]
 */
export const buildInt32Array = baseInt32ArrayFactory;
/**
 * Creates a new Int32Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int32Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int32Array.
 * @returns {Int32Array} A new Int32Array of the specified length, with each element initialized to the given value.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int32Array|Int32Array - MDN}
 *
 * @example
 * // Create an Int32Array of length 5, with each element initialized to 10
 * const int32Array = makeInt32Array(5, 10);
 * console.log(int32Array); // Int32Array [10, 10, 10, 10, 10]
 */
export const makeInt32Array = baseInt32ArrayFactory;
/**
 * Creates a new Int32Array with the specified length and initializes it with the provided value.
 *
 * @param {number} length - The length of the Int32Array to create.
 * @param {number} initialValue - The value to initialize each element of the Int32Array.
 * @returns {Int32Array} A new Int32Array of the specified length, with each element initialized to the given value.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Int32Array|Int32Array - MDN}
 *
 * @example
 * // Create an Int32Array of length 5, with each element initialized to 10
 * const int32Array = constructInt32Array(5, 10);
 * console.log(int32Array); // Int32Array [10, 10, 10, 10, 10]
 */
export const constructInt32Array = baseInt32ArrayFactory;
