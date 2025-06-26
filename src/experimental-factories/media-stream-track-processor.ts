const baseMediaStreamTrackProcessorFactory = (
  ...args: ConstructorParameters<typeof MediaStreamTrackProcessor>
): InstanceType<typeof MediaStreamTrackProcessor> => new MediaStreamTrackProcessor(...args);

/**
 * Factory function to create a MediaStreamTrackProcessor instance.
 *
 * @experimental
 *
 * @param {MediaStreamTrack} track - The media stream track to be processed.
 * @returns {MediaStreamTrackProcessor} A new MediaStreamTrackProcessor instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor}
 *
 * @example
 * const track = new MediaStreamTrack(); // Assume this is a valid MediaStreamTrack
 * const processor = createMediaStreamTrackProcessor(track);
 */
export const createMediaStreamTrackProcessor = baseMediaStreamTrackProcessorFactory;
/**
 * Factory function to create a MediaStreamTrackProcessor instance.
 *
 * @experimental
 *
 * @param {MediaStreamTrack} track - The media stream track to be processed.
 * @returns {MediaStreamTrackProcessor} A new MediaStreamTrackProcessor instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor}
 *
 * @example
 * const track = new MediaStreamTrack(); // Assume this is a valid MediaStreamTrack
 * const processor = initMediaStreamTrackProcessor(track);
 */
export const initMediaStreamTrackProcessor = baseMediaStreamTrackProcessorFactory;
/**
 * Factory function to create a MediaStreamTrackProcessor instance.
 *
 * @experimental
 *
 * @param {MediaStreamTrack} track - The media stream track to be processed.
 * @returns {MediaStreamTrackProcessor} A new MediaStreamTrackProcessor instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor}
 *
 * @example
 * const track = new MediaStreamTrack(); // Assume this is a valid MediaStreamTrack
 * const processor = spawnMediaStreamTrackProcessor(track);
 */
export const spawnMediaStreamTrackProcessor = baseMediaStreamTrackProcessorFactory;
/**
 * Factory function to create a MediaStreamTrackProcessor instance.
 *
 * @experimental
 *
 * @param {MediaStreamTrack} track - The media stream track to be processed.
 * @returns {MediaStreamTrackProcessor} A new MediaStreamTrackProcessor instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor}
 *
 * @example
 * const track = new MediaStreamTrack(); // Assume this is a valid MediaStreamTrack
 * const processor = buildMediaStreamTrackProcessor(track);
 */
export const buildMediaStreamTrackProcessor = baseMediaStreamTrackProcessorFactory;
/**
 * Factory function to create a MediaStreamTrackProcessor instance.
 *
 * @experimental
 *
 * @param {MediaStreamTrack} track - The media stream track to be processed.
 * @returns {MediaStreamTrackProcessor} A new MediaStreamTrackProcessor instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor}
 *
 * @example
 * const track = new MediaStreamTrack(); // Assume this is a valid MediaStreamTrack
 * const processor = makeMediaStreamTrackProcessor(track);
 */
export const makeMediaStreamTrackProcessor = baseMediaStreamTrackProcessorFactory;
/**
 * Factory function to create a MediaStreamTrackProcessor instance.
 *
 * @experimental
 *
 * @param {MediaStreamTrack} track - The media stream track to be processed.
 * @returns {MediaStreamTrackProcessor} A new MediaStreamTrackProcessor instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor}
 *
 * @example
 * const track = new MediaStreamTrack(); // Assume this is a valid MediaStreamTrack
 * const processor = constructMediaStreamTrackProcessor(track);
 */
export const constructMediaStreamTrackProcessor = baseMediaStreamTrackProcessorFactory;
