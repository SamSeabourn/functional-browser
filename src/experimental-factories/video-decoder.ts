const baseVideoDecoderFactory = (
  ...args: ConstructorParameters<typeof VideoDecoder>
): InstanceType<typeof VideoDecoder> => new VideoDecoder(...args);

/**
 * Factory function to create a new instance of a VideoDecoder.
 *
 * @function
 * @returns {VideoDecoder} A new instance of VideoDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder | MDN VideoDecoder}
 *
 * @example
 * // Usage example
 * const videoDecoder = createVideoDecoder();
 *
 * @experimental
 */
export const createVideoDecoder = baseVideoDecoderFactory;
/**
 * Factory function to create a new instance of a VideoDecoder.
 *
 * @function
 * @returns {VideoDecoder} A new instance of VideoDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder | MDN VideoDecoder}
 *
 * @example
 * // Usage example
 * const videoDecoder = initVideoDecoder();
 *
 * @experimental
 */
export const initVideoDecoder = baseVideoDecoderFactory;
/**
 * Factory function to create a new instance of a VideoDecoder.
 *
 * @function
 * @returns {VideoDecoder} A new instance of VideoDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder | MDN VideoDecoder}
 *
 * @example
 * // Usage example
 * const videoDecoder = spawnVideoDecoder();
 *
 * @experimental
 */
export const spawnVideoDecoder = baseVideoDecoderFactory;
/**
 * Factory function to create a new instance of a VideoDecoder.
 *
 * @function
 * @returns {VideoDecoder} A new instance of VideoDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder | MDN VideoDecoder}
 *
 * @example
 * // Usage example
 * const videoDecoder = buildVideoDecoder();
 *
 * @experimental
 */
export const buildVideoDecoder = baseVideoDecoderFactory;
/**
 * Factory function to create a new instance of a VideoDecoder.
 *
 * @function
 * @returns {VideoDecoder} A new instance of VideoDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder | MDN VideoDecoder}
 *
 * @example
 * // Usage example
 * const videoDecoder = makeVideoDecoder();
 *
 * @experimental
 */
export const makeVideoDecoder = baseVideoDecoderFactory;
/**
 * Factory function to create a new instance of a VideoDecoder.
 *
 * @function
 * @returns {VideoDecoder} A new instance of VideoDecoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder | MDN VideoDecoder}
 *
 * @example
 * // Usage example
 * const videoDecoder = constructVideoDecoder();
 *
 * @experimental
 */
export const constructVideoDecoder = baseVideoDecoderFactory;
