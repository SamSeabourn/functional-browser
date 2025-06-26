const baseMediaSourceFactory = (
  ...args: ConstructorParameters<typeof MediaSource>
): InstanceType<typeof MediaSource> => new MediaSource(...args);

/**
 * Creates and returns a new instance of `MediaSource`.
 *
 * The `MediaSource` interface of the Media Source Extensions API is used to
 * represent a source of media data for an `HTMLMediaElement` object.
 *
 * @returns {MediaSource} A new `MediaSource` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaSource | MDN MediaSource Documentation}
 *
 * @example
 * // Usage example
 * const mediaSource = createMediaSource();
 * const videoElement = document.querySelector('video');
 * videoElement.src = URL.createObjectURL(mediaSource);
 */
export const createMediaSource = baseMediaSourceFactory;
/**
 * Creates and returns a new instance of `MediaSource`.
 *
 * The `MediaSource` interface of the Media Source Extensions API is used to
 * represent a source of media data for an `HTMLMediaElement` object.
 *
 * @returns {MediaSource} A new `MediaSource` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaSource | MDN MediaSource Documentation}
 *
 * @example
 * // Usage example
 * const mediaSource = initMediaSource();
 * const videoElement = document.querySelector('video');
 * videoElement.src = URL.createObjectURL(mediaSource);
 */
export const initMediaSource = baseMediaSourceFactory;
/**
 * Creates and returns a new instance of `MediaSource`.
 *
 * The `MediaSource` interface of the Media Source Extensions API is used to
 * represent a source of media data for an `HTMLMediaElement` object.
 *
 * @returns {MediaSource} A new `MediaSource` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaSource | MDN MediaSource Documentation}
 *
 * @example
 * // Usage example
 * const mediaSource = spawnMediaSource();
 * const videoElement = document.querySelector('video');
 * videoElement.src = URL.createObjectURL(mediaSource);
 */
export const spawnMediaSource = baseMediaSourceFactory;
/**
 * Creates and returns a new instance of `MediaSource`.
 *
 * The `MediaSource` interface of the Media Source Extensions API is used to
 * represent a source of media data for an `HTMLMediaElement` object.
 *
 * @returns {MediaSource} A new `MediaSource` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaSource | MDN MediaSource Documentation}
 *
 * @example
 * // Usage example
 * const mediaSource = buildMediaSource();
 * const videoElement = document.querySelector('video');
 * videoElement.src = URL.createObjectURL(mediaSource);
 */
export const buildMediaSource = baseMediaSourceFactory;
/**
 * Creates and returns a new instance of `MediaSource`.
 *
 * The `MediaSource` interface of the Media Source Extensions API is used to
 * represent a source of media data for an `HTMLMediaElement` object.
 *
 * @returns {MediaSource} A new `MediaSource` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaSource | MDN MediaSource Documentation}
 *
 * @example
 * // Usage example
 * const mediaSource = makeMediaSource();
 * const videoElement = document.querySelector('video');
 * videoElement.src = URL.createObjectURL(mediaSource);
 */
export const makeMediaSource = baseMediaSourceFactory;
/**
 * Creates and returns a new instance of `MediaSource`.
 *
 * The `MediaSource` interface of the Media Source Extensions API is used to
 * represent a source of media data for an `HTMLMediaElement` object.
 *
 * @returns {MediaSource} A new `MediaSource` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaSource | MDN MediaSource Documentation}
 *
 * @example
 * // Usage example
 * const mediaSource = constructMediaSource();
 * const videoElement = document.querySelector('video');
 * videoElement.src = URL.createObjectURL(mediaSource);
 */
export const constructMediaSource = baseMediaSourceFactory;
