const baseTextEncoderFactory = (
  ...args: ConstructorParameters<typeof TextEncoder>
): InstanceType<typeof TextEncoder> => new TextEncoder(...args);

/**
 * Creates a new instance of `TextEncoder`.
 *
 * The `TextEncoder` interface takes a stream of code points as input and emits a stream of UTF-8 bytes.
 *
 * @returns {TextEncoder} A new instance of `TextEncoder`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 *
 * @example
 * const textEncoder = createTextEncoder();
 * const encoded = textEncoder.encode('Hello, world!');
 * console.log(encoded); // Uint8Array of UTF-8 encoded bytes
 */
export const createTextEncoder = baseTextEncoderFactory;
/**
 * Creates a new instance of `TextEncoder`.
 *
 * The `TextEncoder` interface takes a stream of code points as input and emits a stream of UTF-8 bytes.
 *
 * @returns {TextEncoder} A new instance of `TextEncoder`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 *
 * @example
 * const textEncoder = initTextEncoder();
 * const encoded = textEncoder.encode('Hello, world!');
 * console.log(encoded); // Uint8Array of UTF-8 encoded bytes
 */
export const initTextEncoder = baseTextEncoderFactory;
/**
 * Creates a new instance of `TextEncoder`.
 *
 * The `TextEncoder` interface takes a stream of code points as input and emits a stream of UTF-8 bytes.
 *
 * @returns {TextEncoder} A new instance of `TextEncoder`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 *
 * @example
 * const textEncoder = spawnTextEncoder();
 * const encoded = textEncoder.encode('Hello, world!');
 * console.log(encoded); // Uint8Array of UTF-8 encoded bytes
 */
export const spawnTextEncoder = baseTextEncoderFactory;
/**
 * Creates a new instance of `TextEncoder`.
 *
 * The `TextEncoder` interface takes a stream of code points as input and emits a stream of UTF-8 bytes.
 *
 * @returns {TextEncoder} A new instance of `TextEncoder`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 *
 * @example
 * const textEncoder = buildTextEncoder();
 * const encoded = textEncoder.encode('Hello, world!');
 * console.log(encoded); // Uint8Array of UTF-8 encoded bytes
 */
export const buildTextEncoder = baseTextEncoderFactory;
/**
 * Creates a new instance of `TextEncoder`.
 *
 * The `TextEncoder` interface takes a stream of code points as input and emits a stream of UTF-8 bytes.
 *
 * @returns {TextEncoder} A new instance of `TextEncoder`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 *
 * @example
 * const textEncoder = makeTextEncoder();
 * const encoded = textEncoder.encode('Hello, world!');
 * console.log(encoded); // Uint8Array of UTF-8 encoded bytes
 */
export const makeTextEncoder = baseTextEncoderFactory;
/**
 * Creates a new instance of `TextEncoder`.
 *
 * The `TextEncoder` interface takes a stream of code points as input and emits a stream of UTF-8 bytes.
 *
 * @returns {TextEncoder} A new instance of `TextEncoder`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 *
 * @example
 * const textEncoder = constructTextEncoder();
 * const encoded = textEncoder.encode('Hello, world!');
 * console.log(encoded); // Uint8Array of UTF-8 encoded bytes
 */
export const constructTextEncoder = baseTextEncoderFactory;
