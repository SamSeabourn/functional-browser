const baseFloat64ArrayFactory = (
  ...args: ConstructorParameters<typeof Float64Array>
): InstanceType<typeof Float64Array> => new Float64Array(...args);

/**
 * Creates a new Float64Array with the specified length or from an existing array or iterable object.
 *
 * @function
 * @param {number | ArrayLike<number> | Iterable<number>} input - The length of the array to create, or an array-like or iterable object to initialize the Float64Array.
 * @returns {Float64Array} A new Float64Array instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Float64Array | MDN Float64Array}
 *
 * @example
 * // Create a Float64Array with a specified length
 * const floatArray1 = createFloat64Array(5);
 * console.log(floatArray1); // Float64Array(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Create a Float64Array from an existing array
 * const floatArray2 = baseFloat64ArrayFactory([1.1, 2.2, 3.3]);
 * console.log(floatArray2); // Float64Array(3) [1.1, 2.2, 3.3]
 *
 * @example
 * // Create a Float64Array from an iterable
 * const floatArray3 = baseFloat64ArrayFactory(new Set([4.4, 5.5, 6.6]));
 * console.log(floatArray3); // Float64Array(3) [4.4, 5.5, 6.6]
 */
export const createFloat64Array = baseFloat64ArrayFactory;
/**
 * Creates a new Float64Array with the specified length or from an existing array or iterable object.
 *
 * @function
 * @param {number | ArrayLike<number> | Iterable<number>} input - The length of the array to create, or an array-like or iterable object to initialize the Float64Array.
 * @returns {Float64Array} A new Float64Array instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Float64Array | MDN Float64Array}
 *
 * @example
 * // Create a Float64Array with a specified length
 * const floatArray1 = initFloat64Array(5);
 * console.log(floatArray1); // Float64Array(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Create a Float64Array from an existing array
 * const floatArray2 = baseFloat64ArrayFactory([1.1, 2.2, 3.3]);
 * console.log(floatArray2); // Float64Array(3) [1.1, 2.2, 3.3]
 *
 * @example
 * // Create a Float64Array from an iterable
 * const floatArray3 = baseFloat64ArrayFactory(new Set([4.4, 5.5, 6.6]));
 * console.log(floatArray3); // Float64Array(3) [4.4, 5.5, 6.6]
 */
export const initFloat64Array = baseFloat64ArrayFactory;
/**
 * Creates a new Float64Array with the specified length or from an existing array or iterable object.
 *
 * @function
 * @param {number | ArrayLike<number> | Iterable<number>} input - The length of the array to create, or an array-like or iterable object to initialize the Float64Array.
 * @returns {Float64Array} A new Float64Array instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Float64Array | MDN Float64Array}
 *
 * @example
 * // Create a Float64Array with a specified length
 * const floatArray1 = spawnFloat64Array(5);
 * console.log(floatArray1); // Float64Array(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Create a Float64Array from an existing array
 * const floatArray2 = baseFloat64ArrayFactory([1.1, 2.2, 3.3]);
 * console.log(floatArray2); // Float64Array(3) [1.1, 2.2, 3.3]
 *
 * @example
 * // Create a Float64Array from an iterable
 * const floatArray3 = baseFloat64ArrayFactory(new Set([4.4, 5.5, 6.6]));
 * console.log(floatArray3); // Float64Array(3) [4.4, 5.5, 6.6]
 */
export const spawnFloat64Array = baseFloat64ArrayFactory;
/**
 * Creates a new Float64Array with the specified length or from an existing array or iterable object.
 *
 * @function
 * @param {number | ArrayLike<number> | Iterable<number>} input - The length of the array to create, or an array-like or iterable object to initialize the Float64Array.
 * @returns {Float64Array} A new Float64Array instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Float64Array | MDN Float64Array}
 *
 * @example
 * // Create a Float64Array with a specified length
 * const floatArray1 = buildFloat64Array(5);
 * console.log(floatArray1); // Float64Array(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Create a Float64Array from an existing array
 * const floatArray2 = baseFloat64ArrayFactory([1.1, 2.2, 3.3]);
 * console.log(floatArray2); // Float64Array(3) [1.1, 2.2, 3.3]
 *
 * @example
 * // Create a Float64Array from an iterable
 * const floatArray3 = baseFloat64ArrayFactory(new Set([4.4, 5.5, 6.6]));
 * console.log(floatArray3); // Float64Array(3) [4.4, 5.5, 6.6]
 */
export const buildFloat64Array = baseFloat64ArrayFactory;
/**
 * Creates a new Float64Array with the specified length or from an existing array or iterable object.
 *
 * @function
 * @param {number | ArrayLike<number> | Iterable<number>} input - The length of the array to create, or an array-like or iterable object to initialize the Float64Array.
 * @returns {Float64Array} A new Float64Array instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Float64Array | MDN Float64Array}
 *
 * @example
 * // Create a Float64Array with a specified length
 * const floatArray1 = makeFloat64Array(5);
 * console.log(floatArray1); // Float64Array(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Create a Float64Array from an existing array
 * const floatArray2 = baseFloat64ArrayFactory([1.1, 2.2, 3.3]);
 * console.log(floatArray2); // Float64Array(3) [1.1, 2.2, 3.3]
 *
 * @example
 * // Create a Float64Array from an iterable
 * const floatArray3 = baseFloat64ArrayFactory(new Set([4.4, 5.5, 6.6]));
 * console.log(floatArray3); // Float64Array(3) [4.4, 5.5, 6.6]
 */
export const makeFloat64Array = baseFloat64ArrayFactory;
/**
 * Creates a new Float64Array with the specified length or from an existing array or iterable object.
 *
 * @function
 * @param {number | ArrayLike<number> | Iterable<number>} input - The length of the array to create, or an array-like or iterable object to initialize the Float64Array.
 * @returns {Float64Array} A new Float64Array instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Float64Array | MDN Float64Array}
 *
 * @example
 * // Create a Float64Array with a specified length
 * const floatArray1 = constructFloat64Array(5);
 * console.log(floatArray1); // Float64Array(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Create a Float64Array from an existing array
 * const floatArray2 = baseFloat64ArrayFactory([1.1, 2.2, 3.3]);
 * console.log(floatArray2); // Float64Array(3) [1.1, 2.2, 3.3]
 *
 * @example
 * // Create a Float64Array from an iterable
 * const floatArray3 = baseFloat64ArrayFactory(new Set([4.4, 5.5, 6.6]));
 * console.log(floatArray3); // Float64Array(3) [4.4, 5.5, 6.6]
 */
export const constructFloat64Array = baseFloat64ArrayFactory;
