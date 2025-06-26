const baseUint8ArrayFactory = (
  ...args: ConstructorParameters<typeof Uint8Array>
): InstanceType<typeof Uint8Array> => new Uint8Array(...args);

/**
 * Factory function to create a new instance of Uint8Array.
 *
 * @param {number} length - The length of the array to create.
 * @returns {Uint8Array} A new Uint8Array instance of the specified length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array|Uint8Array - MDN}
 *
 * @example
 * // Create a Uint8Array of length 5
 * const uint8Array = createUint8Array(5);
 * console.log(uint8Array); // Uint8Array(5) [0, 0, 0, 0, 0]
 */
export const createUint8Array = baseUint8ArrayFactory;
/**
 * Factory function to create a new instance of Uint8Array.
 *
 * @param {number} length - The length of the array to create.
 * @returns {Uint8Array} A new Uint8Array instance of the specified length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array|Uint8Array - MDN}
 *
 * @example
 * // Create a Uint8Array of length 5
 * const uint8Array = initUint8Array(5);
 * console.log(uint8Array); // Uint8Array(5) [0, 0, 0, 0, 0]
 */
export const initUint8Array = baseUint8ArrayFactory;
/**
 * Factory function to create a new instance of Uint8Array.
 *
 * @param {number} length - The length of the array to create.
 * @returns {Uint8Array} A new Uint8Array instance of the specified length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array|Uint8Array - MDN}
 *
 * @example
 * // Create a Uint8Array of length 5
 * const uint8Array = spawnUint8Array(5);
 * console.log(uint8Array); // Uint8Array(5) [0, 0, 0, 0, 0]
 */
export const spawnUint8Array = baseUint8ArrayFactory;
/**
 * Factory function to create a new instance of Uint8Array.
 *
 * @param {number} length - The length of the array to create.
 * @returns {Uint8Array} A new Uint8Array instance of the specified length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array|Uint8Array - MDN}
 *
 * @example
 * // Create a Uint8Array of length 5
 * const uint8Array = buildUint8Array(5);
 * console.log(uint8Array); // Uint8Array(5) [0, 0, 0, 0, 0]
 */
export const buildUint8Array = baseUint8ArrayFactory;
/**
 * Factory function to create a new instance of Uint8Array.
 *
 * @param {number} length - The length of the array to create.
 * @returns {Uint8Array} A new Uint8Array instance of the specified length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array|Uint8Array - MDN}
 *
 * @example
 * // Create a Uint8Array of length 5
 * const uint8Array = makeUint8Array(5);
 * console.log(uint8Array); // Uint8Array(5) [0, 0, 0, 0, 0]
 */
export const makeUint8Array = baseUint8ArrayFactory;
/**
 * Factory function to create a new instance of Uint8Array.
 *
 * @param {number} length - The length of the array to create.
 * @returns {Uint8Array} A new Uint8Array instance of the specified length.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array|Uint8Array - MDN}
 *
 * @example
 * // Create a Uint8Array of length 5
 * const uint8Array = constructUint8Array(5);
 * console.log(uint8Array); // Uint8Array(5) [0, 0, 0, 0, 0]
 */
export const constructUint8Array = baseUint8ArrayFactory;
