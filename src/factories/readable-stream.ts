const baseReadableStreamFactory = (
  ...args: ConstructorParameters<typeof ReadableStream>
): InstanceType<typeof ReadableStream> => new ReadableStream(...args);

/**
 * Factory function to create a new instance of a ReadableStream.
 *
 * @returns {ReadableStream} A new ReadableStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | MDN ReadableStream}
 *
 * @example
 * const readableStream = createReadableStream();
 *
 * const reader = readableStream.getReader();
 * reader.read().then(({ done, value }) => {
 *   if (!done) {
 *     console.log(value);
 *   }
 * });
 */
export const createReadableStream = baseReadableStreamFactory;
/**
 * Factory function to create a new instance of a ReadableStream.
 *
 * @returns {ReadableStream} A new ReadableStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | MDN ReadableStream}
 *
 * @example
 * const readableStream = initReadableStream();
 *
 * const reader = readableStream.getReader();
 * reader.read().then(({ done, value }) => {
 *   if (!done) {
 *     console.log(value);
 *   }
 * });
 */
export const initReadableStream = baseReadableStreamFactory;
/**
 * Factory function to create a new instance of a ReadableStream.
 *
 * @returns {ReadableStream} A new ReadableStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | MDN ReadableStream}
 *
 * @example
 * const readableStream = spawnReadableStream();
 *
 * const reader = readableStream.getReader();
 * reader.read().then(({ done, value }) => {
 *   if (!done) {
 *     console.log(value);
 *   }
 * });
 */
export const spawnReadableStream = baseReadableStreamFactory;
/**
 * Factory function to create a new instance of a ReadableStream.
 *
 * @returns {ReadableStream} A new ReadableStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | MDN ReadableStream}
 *
 * @example
 * const readableStream = buildReadableStream();
 *
 * const reader = readableStream.getReader();
 * reader.read().then(({ done, value }) => {
 *   if (!done) {
 *     console.log(value);
 *   }
 * });
 */
export const buildReadableStream = baseReadableStreamFactory;
/**
 * Factory function to create a new instance of a ReadableStream.
 *
 * @returns {ReadableStream} A new ReadableStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | MDN ReadableStream}
 *
 * @example
 * const readableStream = makeReadableStream();
 *
 * const reader = readableStream.getReader();
 * reader.read().then(({ done, value }) => {
 *   if (!done) {
 *     console.log(value);
 *   }
 * });
 */
export const makeReadableStream = baseReadableStreamFactory;
/**
 * Factory function to create a new instance of a ReadableStream.
 *
 * @returns {ReadableStream} A new ReadableStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | MDN ReadableStream}
 *
 * @example
 * const readableStream = constructReadableStream();
 *
 * const reader = readableStream.getReader();
 * reader.read().then(({ done, value }) => {
 *   if (!done) {
 *     console.log(value);
 *   }
 * });
 */
export const constructReadableStream = baseReadableStreamFactory;
