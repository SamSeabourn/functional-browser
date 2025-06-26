const baseVideoEncoderFactory = (
  ...args: ConstructorParameters<typeof VideoEncoder>
): InstanceType<typeof VideoEncoder> => new VideoEncoder(...args);

/**
 * Factory function to create a new instance of a VideoEncoder.
 *
 * @function
 * @experimental
 *
 * @returns {VideoEncoder} A new instance of VideoEncoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder | VideoEncoder - MDN}
 *
 * @example
 * const encoder = createVideoEncoder();
 * // Use the encoder instance for video encoding tasks.
 */
export const createVideoEncoder = baseVideoEncoderFactory;
/**
 * Factory function to create a new instance of a VideoEncoder.
 *
 * @function
 * @experimental
 *
 * @returns {VideoEncoder} A new instance of VideoEncoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder | VideoEncoder - MDN}
 *
 * @example
 * const encoder = initVideoEncoder();
 * // Use the encoder instance for video encoding tasks.
 */
export const initVideoEncoder = baseVideoEncoderFactory;
/**
 * Factory function to create a new instance of a VideoEncoder.
 *
 * @function
 * @experimental
 *
 * @returns {VideoEncoder} A new instance of VideoEncoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder | VideoEncoder - MDN}
 *
 * @example
 * const encoder = spawnVideoEncoder();
 * // Use the encoder instance for video encoding tasks.
 */
export const spawnVideoEncoder = baseVideoEncoderFactory;
/**
 * Factory function to create a new instance of a VideoEncoder.
 *
 * @function
 * @experimental
 *
 * @returns {VideoEncoder} A new instance of VideoEncoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder | VideoEncoder - MDN}
 *
 * @example
 * const encoder = buildVideoEncoder();
 * // Use the encoder instance for video encoding tasks.
 */
export const buildVideoEncoder = baseVideoEncoderFactory;
/**
 * Factory function to create a new instance of a VideoEncoder.
 *
 * @function
 * @experimental
 *
 * @returns {VideoEncoder} A new instance of VideoEncoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder | VideoEncoder - MDN}
 *
 * @example
 * const encoder = makeVideoEncoder();
 * // Use the encoder instance for video encoding tasks.
 */
export const makeVideoEncoder = baseVideoEncoderFactory;
/**
 * Factory function to create a new instance of a VideoEncoder.
 *
 * @function
 * @experimental
 *
 * @returns {VideoEncoder} A new instance of VideoEncoder.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder | VideoEncoder - MDN}
 *
 * @example
 * const encoder = constructVideoEncoder();
 * // Use the encoder instance for video encoding tasks.
 */
export const constructVideoEncoder = baseVideoEncoderFactory;
