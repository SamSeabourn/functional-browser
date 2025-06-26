const baseMediaStreamFactory = (
  ...args: ConstructorParameters<typeof MediaStream>
): InstanceType<typeof MediaStream> => new MediaStream(...args);

/**
 * Creates a new instance of a MediaStream.
 *
 * This factory function initializes a MediaStream object, which represents a stream of media content.
 * The stream can contain multiple tracks, such as video or audio tracks.
 *
 * @returns {MediaStream} A new MediaStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream}
 *
 * @example
 * // Example usage:
 * const mediaStream = createMediaStream();
 * console.log(mediaStream instanceof MediaStream); // true
 */
export const createMediaStream = baseMediaStreamFactory;
/**
 * Creates a new instance of a MediaStream.
 *
 * This factory function initializes a MediaStream object, which represents a stream of media content.
 * The stream can contain multiple tracks, such as video or audio tracks.
 *
 * @returns {MediaStream} A new MediaStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream}
 *
 * @example
 * // Example usage:
 * const mediaStream = initMediaStream();
 * console.log(mediaStream instanceof MediaStream); // true
 */
export const initMediaStream = baseMediaStreamFactory;
/**
 * Creates a new instance of a MediaStream.
 *
 * This factory function initializes a MediaStream object, which represents a stream of media content.
 * The stream can contain multiple tracks, such as video or audio tracks.
 *
 * @returns {MediaStream} A new MediaStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream}
 *
 * @example
 * // Example usage:
 * const mediaStream = spawnMediaStream();
 * console.log(mediaStream instanceof MediaStream); // true
 */
export const spawnMediaStream = baseMediaStreamFactory;
/**
 * Creates a new instance of a MediaStream.
 *
 * This factory function initializes a MediaStream object, which represents a stream of media content.
 * The stream can contain multiple tracks, such as video or audio tracks.
 *
 * @returns {MediaStream} A new MediaStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream}
 *
 * @example
 * // Example usage:
 * const mediaStream = buildMediaStream();
 * console.log(mediaStream instanceof MediaStream); // true
 */
export const buildMediaStream = baseMediaStreamFactory;
/**
 * Creates a new instance of a MediaStream.
 *
 * This factory function initializes a MediaStream object, which represents a stream of media content.
 * The stream can contain multiple tracks, such as video or audio tracks.
 *
 * @returns {MediaStream} A new MediaStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream}
 *
 * @example
 * // Example usage:
 * const mediaStream = makeMediaStream();
 * console.log(mediaStream instanceof MediaStream); // true
 */
export const makeMediaStream = baseMediaStreamFactory;
/**
 * Creates a new instance of a MediaStream.
 *
 * This factory function initializes a MediaStream object, which represents a stream of media content.
 * The stream can contain multiple tracks, such as video or audio tracks.
 *
 * @returns {MediaStream} A new MediaStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream}
 *
 * @example
 * // Example usage:
 * const mediaStream = constructMediaStream();
 * console.log(mediaStream instanceof MediaStream); // true
 */
export const constructMediaStream = baseMediaStreamFactory;
