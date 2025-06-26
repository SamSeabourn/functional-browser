const baseCompressionStreamFactory = (
  ...args: ConstructorParameters<typeof CompressionStream>
): InstanceType<typeof CompressionStream> => new CompressionStream(...args);

/**
 * Creates a new instance of a CompressionStream with the specified format.
 *
 * @param {string} format - The compression format to be used. Typically, this would be "gzip", "deflate", or "deflate-raw".
 * @returns {CompressionStream} A new CompressionStream instance configured with the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream | CompressionStream - MDN}
 *
 * @example
 * // Example usage:
 * const compressionStream = createCompressionStream('gzip');
 * const writer = compressionStream.writable.getWriter();
 * writer.write(new TextEncoder().encode('Hello, world!'));
 * writer.close();
 */
export const createCompressionStream = baseCompressionStreamFactory;
/**
 * Creates a new instance of a CompressionStream with the specified format.
 *
 * @param {string} format - The compression format to be used. Typically, this would be "gzip", "deflate", or "deflate-raw".
 * @returns {CompressionStream} A new CompressionStream instance configured with the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream | CompressionStream - MDN}
 *
 * @example
 * // Example usage:
 * const compressionStream = initCompressionStream('gzip');
 * const writer = compressionStream.writable.getWriter();
 * writer.write(new TextEncoder().encode('Hello, world!'));
 * writer.close();
 */
export const initCompressionStream = baseCompressionStreamFactory;
/**
 * Creates a new instance of a CompressionStream with the specified format.
 *
 * @param {string} format - The compression format to be used. Typically, this would be "gzip", "deflate", or "deflate-raw".
 * @returns {CompressionStream} A new CompressionStream instance configured with the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream | CompressionStream - MDN}
 *
 * @example
 * // Example usage:
 * const compressionStream = spawnCompressionStream('gzip');
 * const writer = compressionStream.writable.getWriter();
 * writer.write(new TextEncoder().encode('Hello, world!'));
 * writer.close();
 */
export const spawnCompressionStream = baseCompressionStreamFactory;
/**
 * Creates a new instance of a CompressionStream with the specified format.
 *
 * @param {string} format - The compression format to be used. Typically, this would be "gzip", "deflate", or "deflate-raw".
 * @returns {CompressionStream} A new CompressionStream instance configured with the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream | CompressionStream - MDN}
 *
 * @example
 * // Example usage:
 * const compressionStream = buildCompressionStream('gzip');
 * const writer = compressionStream.writable.getWriter();
 * writer.write(new TextEncoder().encode('Hello, world!'));
 * writer.close();
 */
export const buildCompressionStream = baseCompressionStreamFactory;
/**
 * Creates a new instance of a CompressionStream with the specified format.
 *
 * @param {string} format - The compression format to be used. Typically, this would be "gzip", "deflate", or "deflate-raw".
 * @returns {CompressionStream} A new CompressionStream instance configured with the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream | CompressionStream - MDN}
 *
 * @example
 * // Example usage:
 * const compressionStream = makeCompressionStream('gzip');
 * const writer = compressionStream.writable.getWriter();
 * writer.write(new TextEncoder().encode('Hello, world!'));
 * writer.close();
 */
export const makeCompressionStream = baseCompressionStreamFactory;
/**
 * Creates a new instance of a CompressionStream with the specified format.
 *
 * @param {string} format - The compression format to be used. Typically, this would be "gzip", "deflate", or "deflate-raw".
 * @returns {CompressionStream} A new CompressionStream instance configured with the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream | CompressionStream - MDN}
 *
 * @example
 * // Example usage:
 * const compressionStream = constructCompressionStream('gzip');
 * const writer = compressionStream.writable.getWriter();
 * writer.write(new TextEncoder().encode('Hello, world!'));
 * writer.close();
 */
export const constructCompressionStream = baseCompressionStreamFactory;
