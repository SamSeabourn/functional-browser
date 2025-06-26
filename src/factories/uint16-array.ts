const baseUint16ArrayFactory = (
  ...args: ConstructorParameters<typeof Uint16Array>
): InstanceType<typeof Uint16Array> => new Uint16Array(...args);

/**
 * Creates a new Uint16Array with the specified length and initializes it with the provided values.
 *
 * @param {number} length - The length of the Uint16Array to be created.
 * @param {number[]} values - An array of numbers to initialize the Uint16Array.
 * @returns {Uint16Array} A new Uint16Array instance initialized with the provided values.
 *
 * @example
 * // Create a Uint16Array of length 5 and initialize it with values [1, 2, 3, 4, 5]
 * const uint16Array = createUint16Array(5, [1, 2, 3, 4, 5]);
 * console.log(uint16Array); // Uint16Array(5) [1, 2, 3, 4, 5]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint16Array | Uint16Array - MDN}
 */
export const createUint16Array = baseUint16ArrayFactory;
/**
 * Creates a new Uint16Array with the specified length and initializes it with the provided values.
 *
 * @param {number} length - The length of the Uint16Array to be created.
 * @param {number[]} values - An array of numbers to initialize the Uint16Array.
 * @returns {Uint16Array} A new Uint16Array instance initialized with the provided values.
 *
 * @example
 * // Create a Uint16Array of length 5 and initialize it with values [1, 2, 3, 4, 5]
 * const uint16Array = initUint16Array(5, [1, 2, 3, 4, 5]);
 * console.log(uint16Array); // Uint16Array(5) [1, 2, 3, 4, 5]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint16Array | Uint16Array - MDN}
 */
export const initUint16Array = baseUint16ArrayFactory;
/**
 * Creates a new Uint16Array with the specified length and initializes it with the provided values.
 *
 * @param {number} length - The length of the Uint16Array to be created.
 * @param {number[]} values - An array of numbers to initialize the Uint16Array.
 * @returns {Uint16Array} A new Uint16Array instance initialized with the provided values.
 *
 * @example
 * // Create a Uint16Array of length 5 and initialize it with values [1, 2, 3, 4, 5]
 * const uint16Array = spawnUint16Array(5, [1, 2, 3, 4, 5]);
 * console.log(uint16Array); // Uint16Array(5) [1, 2, 3, 4, 5]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint16Array | Uint16Array - MDN}
 */
export const spawnUint16Array = baseUint16ArrayFactory;
/**
 * Creates a new Uint16Array with the specified length and initializes it with the provided values.
 *
 * @param {number} length - The length of the Uint16Array to be created.
 * @param {number[]} values - An array of numbers to initialize the Uint16Array.
 * @returns {Uint16Array} A new Uint16Array instance initialized with the provided values.
 *
 * @example
 * // Create a Uint16Array of length 5 and initialize it with values [1, 2, 3, 4, 5]
 * const uint16Array = buildUint16Array(5, [1, 2, 3, 4, 5]);
 * console.log(uint16Array); // Uint16Array(5) [1, 2, 3, 4, 5]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint16Array | Uint16Array - MDN}
 */
export const buildUint16Array = baseUint16ArrayFactory;
/**
 * Creates a new Uint16Array with the specified length and initializes it with the provided values.
 *
 * @param {number} length - The length of the Uint16Array to be created.
 * @param {number[]} values - An array of numbers to initialize the Uint16Array.
 * @returns {Uint16Array} A new Uint16Array instance initialized with the provided values.
 *
 * @example
 * // Create a Uint16Array of length 5 and initialize it with values [1, 2, 3, 4, 5]
 * const uint16Array = makeUint16Array(5, [1, 2, 3, 4, 5]);
 * console.log(uint16Array); // Uint16Array(5) [1, 2, 3, 4, 5]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint16Array | Uint16Array - MDN}
 */
export const makeUint16Array = baseUint16ArrayFactory;
/**
 * Creates a new Uint16Array with the specified length and initializes it with the provided values.
 *
 * @param {number} length - The length of the Uint16Array to be created.
 * @param {number[]} values - An array of numbers to initialize the Uint16Array.
 * @returns {Uint16Array} A new Uint16Array instance initialized with the provided values.
 *
 * @example
 * // Create a Uint16Array of length 5 and initialize it with values [1, 2, 3, 4, 5]
 * const uint16Array = constructUint16Array(5, [1, 2, 3, 4, 5]);
 * console.log(uint16Array); // Uint16Array(5) [1, 2, 3, 4, 5]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint16Array | Uint16Array - MDN}
 */
export const constructUint16Array = baseUint16ArrayFactory;
