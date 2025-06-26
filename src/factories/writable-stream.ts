const baseWritableStreamFactory = (
  ...args: ConstructorParameters<typeof WritableStream>
): InstanceType<typeof WritableStream> => new WritableStream(...args);

/**
 * Creates a new instance of a WritableStream.
 *
 * @function
 * @returns {WritableStream} A new WritableStream instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WritableStream|WritableStream - MDN}
 *
 * @example
 * const writableStream = createWritableStream();
 * const writer = writableStream.getWriter();
 * writer.write('Hello, world!');
 * writer.close();
 */
export const createWritableStream = baseWritableStreamFactory;
/**
 * Creates a new instance of a WritableStream.
 *
 * @function
 * @returns {WritableStream} A new WritableStream instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WritableStream|WritableStream - MDN}
 *
 * @example
 * const writableStream = initWritableStream();
 * const writer = writableStream.getWriter();
 * writer.write('Hello, world!');
 * writer.close();
 */
export const initWritableStream = baseWritableStreamFactory;
/**
 * Creates a new instance of a WritableStream.
 *
 * @function
 * @returns {WritableStream} A new WritableStream instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WritableStream|WritableStream - MDN}
 *
 * @example
 * const writableStream = spawnWritableStream();
 * const writer = writableStream.getWriter();
 * writer.write('Hello, world!');
 * writer.close();
 */
export const spawnWritableStream = baseWritableStreamFactory;
/**
 * Creates a new instance of a WritableStream.
 *
 * @function
 * @returns {WritableStream} A new WritableStream instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WritableStream|WritableStream - MDN}
 *
 * @example
 * const writableStream = buildWritableStream();
 * const writer = writableStream.getWriter();
 * writer.write('Hello, world!');
 * writer.close();
 */
export const buildWritableStream = baseWritableStreamFactory;
/**
 * Creates a new instance of a WritableStream.
 *
 * @function
 * @returns {WritableStream} A new WritableStream instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WritableStream|WritableStream - MDN}
 *
 * @example
 * const writableStream = makeWritableStream();
 * const writer = writableStream.getWriter();
 * writer.write('Hello, world!');
 * writer.close();
 */
export const makeWritableStream = baseWritableStreamFactory;
/**
 * Creates a new instance of a WritableStream.
 *
 * @function
 * @returns {WritableStream} A new WritableStream instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WritableStream|WritableStream - MDN}
 *
 * @example
 * const writableStream = constructWritableStream();
 * const writer = writableStream.getWriter();
 * writer.write('Hello, world!');
 * writer.close();
 */
export const constructWritableStream = baseWritableStreamFactory;
