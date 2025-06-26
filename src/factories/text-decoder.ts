const baseTextDecoderFactory = (
  ...args: ConstructorParameters<typeof TextDecoder>
): InstanceType<typeof TextDecoder> => new TextDecoder(...args);

/**
 * Factory function to create a new instance of `TextDecoder`.
 *
 * @returns {TextDecoder} A new `TextDecoder` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder | TextDecoder - MDN}
 *
 * @example
 * const textDecoder = createTextDecoder();
 * const decodedText = textDecoder.decode(new Uint8Array([72, 101, 108, 108, 111]));
 * console.log(decodedText); // Output: "Hello"
 */
export const createTextDecoder = baseTextDecoderFactory;
/**
 * Factory function to create a new instance of `TextDecoder`.
 *
 * @returns {TextDecoder} A new `TextDecoder` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder | TextDecoder - MDN}
 *
 * @example
 * const textDecoder = initTextDecoder();
 * const decodedText = textDecoder.decode(new Uint8Array([72, 101, 108, 108, 111]));
 * console.log(decodedText); // Output: "Hello"
 */
export const initTextDecoder = baseTextDecoderFactory;
/**
 * Factory function to create a new instance of `TextDecoder`.
 *
 * @returns {TextDecoder} A new `TextDecoder` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder | TextDecoder - MDN}
 *
 * @example
 * const textDecoder = spawnTextDecoder();
 * const decodedText = textDecoder.decode(new Uint8Array([72, 101, 108, 108, 111]));
 * console.log(decodedText); // Output: "Hello"
 */
export const spawnTextDecoder = baseTextDecoderFactory;
/**
 * Factory function to create a new instance of `TextDecoder`.
 *
 * @returns {TextDecoder} A new `TextDecoder` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder | TextDecoder - MDN}
 *
 * @example
 * const textDecoder = buildTextDecoder();
 * const decodedText = textDecoder.decode(new Uint8Array([72, 101, 108, 108, 111]));
 * console.log(decodedText); // Output: "Hello"
 */
export const buildTextDecoder = baseTextDecoderFactory;
/**
 * Factory function to create a new instance of `TextDecoder`.
 *
 * @returns {TextDecoder} A new `TextDecoder` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder | TextDecoder - MDN}
 *
 * @example
 * const textDecoder = makeTextDecoder();
 * const decodedText = textDecoder.decode(new Uint8Array([72, 101, 108, 108, 111]));
 * console.log(decodedText); // Output: "Hello"
 */
export const makeTextDecoder = baseTextDecoderFactory;
/**
 * Factory function to create a new instance of `TextDecoder`.
 *
 * @returns {TextDecoder} A new `TextDecoder` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder | TextDecoder - MDN}
 *
 * @example
 * const textDecoder = constructTextDecoder();
 * const decodedText = textDecoder.decode(new Uint8Array([72, 101, 108, 108, 111]));
 * console.log(decodedText); // Output: "Hello"
 */
export const constructTextDecoder = baseTextDecoderFactory;
