const baseUint32ArrayFactory = (
  ...args: ConstructorParameters<typeof Uint32Array>
): InstanceType<typeof Uint32Array> => new Uint32Array(...args);

/**
 * Factory function to create a new Uint32Array with the specified length.
 *
 * @param {number} length - The length of the Uint32Array to create.
 * @returns {Uint32Array} A new Uint32Array instance with the given length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint32Array | Uint32Array - MDN}
 *
 * @example
 * // Create a Uint32Array of length 5
 * const uint32Array = createUint32Array(5);
 * console.log(uint32Array); // Uint32Array(5) [ 0, 0, 0, 0, 0 ]
 */
export const createUint32Array = baseUint32ArrayFactory;
/**
 * Factory function to create a new Uint32Array with the specified length.
 *
 * @param {number} length - The length of the Uint32Array to create.
 * @returns {Uint32Array} A new Uint32Array instance with the given length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint32Array | Uint32Array - MDN}
 *
 * @example
 * // Create a Uint32Array of length 5
 * const uint32Array = initUint32Array(5);
 * console.log(uint32Array); // Uint32Array(5) [ 0, 0, 0, 0, 0 ]
 */
export const initUint32Array = baseUint32ArrayFactory;
/**
 * Factory function to create a new Uint32Array with the specified length.
 *
 * @param {number} length - The length of the Uint32Array to create.
 * @returns {Uint32Array} A new Uint32Array instance with the given length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint32Array | Uint32Array - MDN}
 *
 * @example
 * // Create a Uint32Array of length 5
 * const uint32Array = spawnUint32Array(5);
 * console.log(uint32Array); // Uint32Array(5) [ 0, 0, 0, 0, 0 ]
 */
export const spawnUint32Array = baseUint32ArrayFactory;
/**
 * Factory function to create a new Uint32Array with the specified length.
 *
 * @param {number} length - The length of the Uint32Array to create.
 * @returns {Uint32Array} A new Uint32Array instance with the given length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint32Array | Uint32Array - MDN}
 *
 * @example
 * // Create a Uint32Array of length 5
 * const uint32Array = buildUint32Array(5);
 * console.log(uint32Array); // Uint32Array(5) [ 0, 0, 0, 0, 0 ]
 */
export const buildUint32Array = baseUint32ArrayFactory;
/**
 * Factory function to create a new Uint32Array with the specified length.
 *
 * @param {number} length - The length of the Uint32Array to create.
 * @returns {Uint32Array} A new Uint32Array instance with the given length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint32Array | Uint32Array - MDN}
 *
 * @example
 * // Create a Uint32Array of length 5
 * const uint32Array = makeUint32Array(5);
 * console.log(uint32Array); // Uint32Array(5) [ 0, 0, 0, 0, 0 ]
 */
export const makeUint32Array = baseUint32ArrayFactory;
/**
 * Factory function to create a new Uint32Array with the specified length.
 *
 * @param {number} length - The length of the Uint32Array to create.
 * @returns {Uint32Array} A new Uint32Array instance with the given length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint32Array | Uint32Array - MDN}
 *
 * @example
 * // Create a Uint32Array of length 5
 * const uint32Array = constructUint32Array(5);
 * console.log(uint32Array); // Uint32Array(5) [ 0, 0, 0, 0, 0 ]
 */
export const constructUint32Array = baseUint32ArrayFactory;
