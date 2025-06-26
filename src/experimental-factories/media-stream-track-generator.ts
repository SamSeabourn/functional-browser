const baseMediaStreamTrackGeneratorFactory = (
  ...args: ConstructorParameters<typeof MediaStreamTrackGenerator>
): InstanceType<typeof MediaStreamTrackGenerator> => new MediaStreamTrackGenerator(...args);

/**
 * Creates a new instance of a MediaStreamTrackGenerator.
 *
 * @experimental
 *
 * @returns {MediaStreamTrackGenerator} A new MediaStreamTrackGenerator instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackGenerator}
 *
 * @example
 * // Usage example
 * const trackGenerator = createMediaStreamTrackGenerator();
 */
export const createMediaStreamTrackGenerator = baseMediaStreamTrackGeneratorFactory;
/**
 * Creates a new instance of a MediaStreamTrackGenerator.
 *
 * @experimental
 *
 * @returns {MediaStreamTrackGenerator} A new MediaStreamTrackGenerator instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackGenerator}
 *
 * @example
 * // Usage example
 * const trackGenerator = initMediaStreamTrackGenerator();
 */
export const initMediaStreamTrackGenerator = baseMediaStreamTrackGeneratorFactory;
/**
 * Creates a new instance of a MediaStreamTrackGenerator.
 *
 * @experimental
 *
 * @returns {MediaStreamTrackGenerator} A new MediaStreamTrackGenerator instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackGenerator}
 *
 * @example
 * // Usage example
 * const trackGenerator = spawnMediaStreamTrackGenerator();
 */
export const spawnMediaStreamTrackGenerator = baseMediaStreamTrackGeneratorFactory;
/**
 * Creates a new instance of a MediaStreamTrackGenerator.
 *
 * @experimental
 *
 * @returns {MediaStreamTrackGenerator} A new MediaStreamTrackGenerator instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackGenerator}
 *
 * @example
 * // Usage example
 * const trackGenerator = buildMediaStreamTrackGenerator();
 */
export const buildMediaStreamTrackGenerator = baseMediaStreamTrackGeneratorFactory;
/**
 * Creates a new instance of a MediaStreamTrackGenerator.
 *
 * @experimental
 *
 * @returns {MediaStreamTrackGenerator} A new MediaStreamTrackGenerator instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackGenerator}
 *
 * @example
 * // Usage example
 * const trackGenerator = makeMediaStreamTrackGenerator();
 */
export const makeMediaStreamTrackGenerator = baseMediaStreamTrackGeneratorFactory;
/**
 * Creates a new instance of a MediaStreamTrackGenerator.
 *
 * @experimental
 *
 * @returns {MediaStreamTrackGenerator} A new MediaStreamTrackGenerator instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackGenerator}
 *
 * @example
 * // Usage example
 * const trackGenerator = constructMediaStreamTrackGenerator();
 */
export const constructMediaStreamTrackGenerator = baseMediaStreamTrackGeneratorFactory;
