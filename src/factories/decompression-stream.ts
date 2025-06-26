const baseDecompressionStreamFactory = (
  ...args: ConstructorParameters<typeof DecompressionStream>
): InstanceType<typeof DecompressionStream> => new DecompressionStream(...args);

/**
 * Creates a new instance of `DecompressionStream` for the specified compression format.
 *
 * @param {string} format - The compression format to be used for decompression. Common formats include 'gzip', 'deflate', etc.
 * @returns {DecompressionStream} A new `DecompressionStream` instance configured for the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream | DecompressionStream - MDN}
 *
 * @example
 * const decompressionStream = createDecompressionStream('gzip');
 * const readableStream = new Response(compressedData).body;
 * const decompressedStream = readableStream.pipeThrough(decompressionStream);
 */
export const createDecompressionStream = baseDecompressionStreamFactory;
/**
 * Creates a new instance of `DecompressionStream` for the specified compression format.
 *
 * @param {string} format - The compression format to be used for decompression. Common formats include 'gzip', 'deflate', etc.
 * @returns {DecompressionStream} A new `DecompressionStream` instance configured for the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream | DecompressionStream - MDN}
 *
 * @example
 * const decompressionStream = initDecompressionStream('gzip');
 * const readableStream = new Response(compressedData).body;
 * const decompressedStream = readableStream.pipeThrough(decompressionStream);
 */
export const initDecompressionStream = baseDecompressionStreamFactory;
/**
 * Creates a new instance of `DecompressionStream` for the specified compression format.
 *
 * @param {string} format - The compression format to be used for decompression. Common formats include 'gzip', 'deflate', etc.
 * @returns {DecompressionStream} A new `DecompressionStream` instance configured for the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream | DecompressionStream - MDN}
 *
 * @example
 * const decompressionStream = spawnDecompressionStream('gzip');
 * const readableStream = new Response(compressedData).body;
 * const decompressedStream = readableStream.pipeThrough(decompressionStream);
 */
export const spawnDecompressionStream = baseDecompressionStreamFactory;
/**
 * Creates a new instance of `DecompressionStream` for the specified compression format.
 *
 * @param {string} format - The compression format to be used for decompression. Common formats include 'gzip', 'deflate', etc.
 * @returns {DecompressionStream} A new `DecompressionStream` instance configured for the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream | DecompressionStream - MDN}
 *
 * @example
 * const decompressionStream = buildDecompressionStream('gzip');
 * const readableStream = new Response(compressedData).body;
 * const decompressedStream = readableStream.pipeThrough(decompressionStream);
 */
export const buildDecompressionStream = baseDecompressionStreamFactory;
/**
 * Creates a new instance of `DecompressionStream` for the specified compression format.
 *
 * @param {string} format - The compression format to be used for decompression. Common formats include 'gzip', 'deflate', etc.
 * @returns {DecompressionStream} A new `DecompressionStream` instance configured for the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream | DecompressionStream - MDN}
 *
 * @example
 * const decompressionStream = makeDecompressionStream('gzip');
 * const readableStream = new Response(compressedData).body;
 * const decompressedStream = readableStream.pipeThrough(decompressionStream);
 */
export const makeDecompressionStream = baseDecompressionStreamFactory;
/**
 * Creates a new instance of `DecompressionStream` for the specified compression format.
 *
 * @param {string} format - The compression format to be used for decompression. Common formats include 'gzip', 'deflate', etc.
 * @returns {DecompressionStream} A new `DecompressionStream` instance configured for the specified format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream | DecompressionStream - MDN}
 *
 * @example
 * const decompressionStream = constructDecompressionStream('gzip');
 * const readableStream = new Response(compressedData).body;
 * const decompressedStream = readableStream.pipeThrough(decompressionStream);
 */
export const constructDecompressionStream = baseDecompressionStreamFactory;
