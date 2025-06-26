const baseAudioDecoderFactory = (
  ...args: ConstructorParameters<typeof AudioDecoder>
): InstanceType<typeof AudioDecoder> => new AudioDecoder(...args);

/**
 * Factory function to create an instance of an AudioDecoder.
 *
 * This function initializes and returns a new AudioDecoder object, which
 * can be used to decode audio streams in various formats.
 *
 * @returns {AudioDecoder} A new instance of AudioDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder | MDN AudioDecoder}
 *
 * @example
 * // Example usage:
 * const audioDecoder = createAudioDecoder();
 *
 * @experimental
 */
export const createAudioDecoder = baseAudioDecoderFactory;
/**
 * Factory function to create an instance of an AudioDecoder.
 *
 * This function initializes and returns a new AudioDecoder object, which
 * can be used to decode audio streams in various formats.
 *
 * @returns {AudioDecoder} A new instance of AudioDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder | MDN AudioDecoder}
 *
 * @example
 * // Example usage:
 * const audioDecoder = initAudioDecoder();
 *
 * @experimental
 */
export const initAudioDecoder = baseAudioDecoderFactory;
/**
 * Factory function to create an instance of an AudioDecoder.
 *
 * This function initializes and returns a new AudioDecoder object, which
 * can be used to decode audio streams in various formats.
 *
 * @returns {AudioDecoder} A new instance of AudioDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder | MDN AudioDecoder}
 *
 * @example
 * // Example usage:
 * const audioDecoder = spawnAudioDecoder();
 *
 * @experimental
 */
export const spawnAudioDecoder = baseAudioDecoderFactory;
/**
 * Factory function to create an instance of an AudioDecoder.
 *
 * This function initializes and returns a new AudioDecoder object, which
 * can be used to decode audio streams in various formats.
 *
 * @returns {AudioDecoder} A new instance of AudioDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder | MDN AudioDecoder}
 *
 * @example
 * // Example usage:
 * const audioDecoder = buildAudioDecoder();
 *
 * @experimental
 */
export const buildAudioDecoder = baseAudioDecoderFactory;
/**
 * Factory function to create an instance of an AudioDecoder.
 *
 * This function initializes and returns a new AudioDecoder object, which
 * can be used to decode audio streams in various formats.
 *
 * @returns {AudioDecoder} A new instance of AudioDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder | MDN AudioDecoder}
 *
 * @example
 * // Example usage:
 * const audioDecoder = makeAudioDecoder();
 *
 * @experimental
 */
export const makeAudioDecoder = baseAudioDecoderFactory;
/**
 * Factory function to create an instance of an AudioDecoder.
 *
 * This function initializes and returns a new AudioDecoder object, which
 * can be used to decode audio streams in various formats.
 *
 * @returns {AudioDecoder} A new instance of AudioDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder | MDN AudioDecoder}
 *
 * @example
 * // Example usage:
 * const audioDecoder = constructAudioDecoder();
 *
 * @experimental
 */
export const constructAudioDecoder = baseAudioDecoderFactory;
