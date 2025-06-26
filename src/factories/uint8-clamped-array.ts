const baseUint8ClampedArrayFactory = (
  ...args: ConstructorParameters<typeof Uint8ClampedArray>
): InstanceType<typeof Uint8ClampedArray> => new Uint8ClampedArray(...args);

/**
 * Creates a new instance of a Uint8ClampedArray.
 *
 * The Uint8ClampedArray is a typed array that represents an array of 8-bit unsigned integers clamped to 0-255.
 * If a value is less than 0, it will be clamped to 0; if a value is greater than 255, it will be clamped to 255.
 *
 * @param {number | ArrayLike<number> | ArrayBuffer} lengthOrArrayOrBuffer - The length of the array, an array-like object, or an ArrayBuffer to initialize the array.
 * @returns {Uint8ClampedArray} A new Uint8ClampedArray instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8ClampedArray|Uint8ClampedArray - MDN}
 *
 * @example
 * // Creating a Uint8ClampedArray with a specified length
 * const clampedArray1 = createUint8ClampedArray(5);
 * console.log(clampedArray1); // Uint8ClampedArray(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Creating a Uint8ClampedArray from an array-like object
 * const clampedArray2 = baseUint8ClampedArrayFactory([300, -20, 100, 200]);
 * console.log(clampedArray2); // Uint8ClampedArray(4) [255, 0, 100, 200]
 *
 * @example
 * // Creating a Uint8ClampedArray from an ArrayBuffer
 * const buffer = new ArrayBuffer(8);
 * const clampedArray3 = baseUint8ClampedArrayFactory(buffer);
 * console.log(clampedArray3); // Uint8ClampedArray(8) [0, 0, 0, 0, 0, 0, 0, 0]
 */
export const createUint8ClampedArray = baseUint8ClampedArrayFactory;
/**
 * Creates a new instance of a Uint8ClampedArray.
 *
 * The Uint8ClampedArray is a typed array that represents an array of 8-bit unsigned integers clamped to 0-255.
 * If a value is less than 0, it will be clamped to 0; if a value is greater than 255, it will be clamped to 255.
 *
 * @param {number | ArrayLike<number> | ArrayBuffer} lengthOrArrayOrBuffer - The length of the array, an array-like object, or an ArrayBuffer to initialize the array.
 * @returns {Uint8ClampedArray} A new Uint8ClampedArray instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8ClampedArray|Uint8ClampedArray - MDN}
 *
 * @example
 * // Creating a Uint8ClampedArray with a specified length
 * const clampedArray1 = initUint8ClampedArray(5);
 * console.log(clampedArray1); // Uint8ClampedArray(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Creating a Uint8ClampedArray from an array-like object
 * const clampedArray2 = baseUint8ClampedArrayFactory([300, -20, 100, 200]);
 * console.log(clampedArray2); // Uint8ClampedArray(4) [255, 0, 100, 200]
 *
 * @example
 * // Creating a Uint8ClampedArray from an ArrayBuffer
 * const buffer = new ArrayBuffer(8);
 * const clampedArray3 = baseUint8ClampedArrayFactory(buffer);
 * console.log(clampedArray3); // Uint8ClampedArray(8) [0, 0, 0, 0, 0, 0, 0, 0]
 */
export const initUint8ClampedArray = baseUint8ClampedArrayFactory;
/**
 * Creates a new instance of a Uint8ClampedArray.
 *
 * The Uint8ClampedArray is a typed array that represents an array of 8-bit unsigned integers clamped to 0-255.
 * If a value is less than 0, it will be clamped to 0; if a value is greater than 255, it will be clamped to 255.
 *
 * @param {number | ArrayLike<number> | ArrayBuffer} lengthOrArrayOrBuffer - The length of the array, an array-like object, or an ArrayBuffer to initialize the array.
 * @returns {Uint8ClampedArray} A new Uint8ClampedArray instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8ClampedArray|Uint8ClampedArray - MDN}
 *
 * @example
 * // Creating a Uint8ClampedArray with a specified length
 * const clampedArray1 = spawnUint8ClampedArray(5);
 * console.log(clampedArray1); // Uint8ClampedArray(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Creating a Uint8ClampedArray from an array-like object
 * const clampedArray2 = baseUint8ClampedArrayFactory([300, -20, 100, 200]);
 * console.log(clampedArray2); // Uint8ClampedArray(4) [255, 0, 100, 200]
 *
 * @example
 * // Creating a Uint8ClampedArray from an ArrayBuffer
 * const buffer = new ArrayBuffer(8);
 * const clampedArray3 = baseUint8ClampedArrayFactory(buffer);
 * console.log(clampedArray3); // Uint8ClampedArray(8) [0, 0, 0, 0, 0, 0, 0, 0]
 */
export const spawnUint8ClampedArray = baseUint8ClampedArrayFactory;
/**
 * Creates a new instance of a Uint8ClampedArray.
 *
 * The Uint8ClampedArray is a typed array that represents an array of 8-bit unsigned integers clamped to 0-255.
 * If a value is less than 0, it will be clamped to 0; if a value is greater than 255, it will be clamped to 255.
 *
 * @param {number | ArrayLike<number> | ArrayBuffer} lengthOrArrayOrBuffer - The length of the array, an array-like object, or an ArrayBuffer to initialize the array.
 * @returns {Uint8ClampedArray} A new Uint8ClampedArray instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8ClampedArray|Uint8ClampedArray - MDN}
 *
 * @example
 * // Creating a Uint8ClampedArray with a specified length
 * const clampedArray1 = buildUint8ClampedArray(5);
 * console.log(clampedArray1); // Uint8ClampedArray(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Creating a Uint8ClampedArray from an array-like object
 * const clampedArray2 = baseUint8ClampedArrayFactory([300, -20, 100, 200]);
 * console.log(clampedArray2); // Uint8ClampedArray(4) [255, 0, 100, 200]
 *
 * @example
 * // Creating a Uint8ClampedArray from an ArrayBuffer
 * const buffer = new ArrayBuffer(8);
 * const clampedArray3 = baseUint8ClampedArrayFactory(buffer);
 * console.log(clampedArray3); // Uint8ClampedArray(8) [0, 0, 0, 0, 0, 0, 0, 0]
 */
export const buildUint8ClampedArray = baseUint8ClampedArrayFactory;
/**
 * Creates a new instance of a Uint8ClampedArray.
 *
 * The Uint8ClampedArray is a typed array that represents an array of 8-bit unsigned integers clamped to 0-255.
 * If a value is less than 0, it will be clamped to 0; if a value is greater than 255, it will be clamped to 255.
 *
 * @param {number | ArrayLike<number> | ArrayBuffer} lengthOrArrayOrBuffer - The length of the array, an array-like object, or an ArrayBuffer to initialize the array.
 * @returns {Uint8ClampedArray} A new Uint8ClampedArray instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8ClampedArray|Uint8ClampedArray - MDN}
 *
 * @example
 * // Creating a Uint8ClampedArray with a specified length
 * const clampedArray1 = makeUint8ClampedArray(5);
 * console.log(clampedArray1); // Uint8ClampedArray(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Creating a Uint8ClampedArray from an array-like object
 * const clampedArray2 = baseUint8ClampedArrayFactory([300, -20, 100, 200]);
 * console.log(clampedArray2); // Uint8ClampedArray(4) [255, 0, 100, 200]
 *
 * @example
 * // Creating a Uint8ClampedArray from an ArrayBuffer
 * const buffer = new ArrayBuffer(8);
 * const clampedArray3 = baseUint8ClampedArrayFactory(buffer);
 * console.log(clampedArray3); // Uint8ClampedArray(8) [0, 0, 0, 0, 0, 0, 0, 0]
 */
export const makeUint8ClampedArray = baseUint8ClampedArrayFactory;
/**
 * Creates a new instance of a Uint8ClampedArray.
 *
 * The Uint8ClampedArray is a typed array that represents an array of 8-bit unsigned integers clamped to 0-255.
 * If a value is less than 0, it will be clamped to 0; if a value is greater than 255, it will be clamped to 255.
 *
 * @param {number | ArrayLike<number> | ArrayBuffer} lengthOrArrayOrBuffer - The length of the array, an array-like object, or an ArrayBuffer to initialize the array.
 * @returns {Uint8ClampedArray} A new Uint8ClampedArray instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Uint8ClampedArray|Uint8ClampedArray - MDN}
 *
 * @example
 * // Creating a Uint8ClampedArray with a specified length
 * const clampedArray1 = constructUint8ClampedArray(5);
 * console.log(clampedArray1); // Uint8ClampedArray(5) [0, 0, 0, 0, 0]
 *
 * @example
 * // Creating a Uint8ClampedArray from an array-like object
 * const clampedArray2 = baseUint8ClampedArrayFactory([300, -20, 100, 200]);
 * console.log(clampedArray2); // Uint8ClampedArray(4) [255, 0, 100, 200]
 *
 * @example
 * // Creating a Uint8ClampedArray from an ArrayBuffer
 * const buffer = new ArrayBuffer(8);
 * const clampedArray3 = baseUint8ClampedArrayFactory(buffer);
 * console.log(clampedArray3); // Uint8ClampedArray(8) [0, 0, 0, 0, 0, 0, 0, 0]
 */
export const constructUint8ClampedArray = baseUint8ClampedArrayFactory;
