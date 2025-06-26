const baseOfflineAudioContextFactory = (
  ...args: ConstructorParameters<typeof OfflineAudioContext>
): InstanceType<typeof OfflineAudioContext> => new OfflineAudioContext(...args);

/**
 * Creates and returns an instance of OfflineAudioContext.
 *
 * An OfflineAudioContext is an AudioContext that doesn't render audio to the device hardware; instead, it generates it, processes it, and outputs it to an AudioBuffer.
 *
 * @param {number} numberOfChannels - The number of channels for the audio context.
 * @param {number} length - The total length of the buffer in sample-frames.
 * @param {number} sampleRate - The sample rate of the linear audio data in sample-frames per second.
 * @returns {OfflineAudioContext} An instance of OfflineAudioContext.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext | MDN - OfflineAudioContext}
 *
 * @example
 * const offlineAudioContext = createOfflineAudioContext(2, 44100, 44100);
 */
export const createOfflineAudioContext = baseOfflineAudioContextFactory;
/**
 * Creates and returns an instance of OfflineAudioContext.
 *
 * An OfflineAudioContext is an AudioContext that doesn't render audio to the device hardware; instead, it generates it, processes it, and outputs it to an AudioBuffer.
 *
 * @param {number} numberOfChannels - The number of channels for the audio context.
 * @param {number} length - The total length of the buffer in sample-frames.
 * @param {number} sampleRate - The sample rate of the linear audio data in sample-frames per second.
 * @returns {OfflineAudioContext} An instance of OfflineAudioContext.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext | MDN - OfflineAudioContext}
 *
 * @example
 * const offlineAudioContext = initOfflineAudioContext(2, 44100, 44100);
 */
export const initOfflineAudioContext = baseOfflineAudioContextFactory;
/**
 * Creates and returns an instance of OfflineAudioContext.
 *
 * An OfflineAudioContext is an AudioContext that doesn't render audio to the device hardware; instead, it generates it, processes it, and outputs it to an AudioBuffer.
 *
 * @param {number} numberOfChannels - The number of channels for the audio context.
 * @param {number} length - The total length of the buffer in sample-frames.
 * @param {number} sampleRate - The sample rate of the linear audio data in sample-frames per second.
 * @returns {OfflineAudioContext} An instance of OfflineAudioContext.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext | MDN - OfflineAudioContext}
 *
 * @example
 * const offlineAudioContext = spawnOfflineAudioContext(2, 44100, 44100);
 */
export const spawnOfflineAudioContext = baseOfflineAudioContextFactory;
/**
 * Creates and returns an instance of OfflineAudioContext.
 *
 * An OfflineAudioContext is an AudioContext that doesn't render audio to the device hardware; instead, it generates it, processes it, and outputs it to an AudioBuffer.
 *
 * @param {number} numberOfChannels - The number of channels for the audio context.
 * @param {number} length - The total length of the buffer in sample-frames.
 * @param {number} sampleRate - The sample rate of the linear audio data in sample-frames per second.
 * @returns {OfflineAudioContext} An instance of OfflineAudioContext.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext | MDN - OfflineAudioContext}
 *
 * @example
 * const offlineAudioContext = buildOfflineAudioContext(2, 44100, 44100);
 */
export const buildOfflineAudioContext = baseOfflineAudioContextFactory;
/**
 * Creates and returns an instance of OfflineAudioContext.
 *
 * An OfflineAudioContext is an AudioContext that doesn't render audio to the device hardware; instead, it generates it, processes it, and outputs it to an AudioBuffer.
 *
 * @param {number} numberOfChannels - The number of channels for the audio context.
 * @param {number} length - The total length of the buffer in sample-frames.
 * @param {number} sampleRate - The sample rate of the linear audio data in sample-frames per second.
 * @returns {OfflineAudioContext} An instance of OfflineAudioContext.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext | MDN - OfflineAudioContext}
 *
 * @example
 * const offlineAudioContext = makeOfflineAudioContext(2, 44100, 44100);
 */
export const makeOfflineAudioContext = baseOfflineAudioContextFactory;
/**
 * Creates and returns an instance of OfflineAudioContext.
 *
 * An OfflineAudioContext is an AudioContext that doesn't render audio to the device hardware; instead, it generates it, processes it, and outputs it to an AudioBuffer.
 *
 * @param {number} numberOfChannels - The number of channels for the audio context.
 * @param {number} length - The total length of the buffer in sample-frames.
 * @param {number} sampleRate - The sample rate of the linear audio data in sample-frames per second.
 * @returns {OfflineAudioContext} An instance of OfflineAudioContext.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext | MDN - OfflineAudioContext}
 *
 * @example
 * const offlineAudioContext = constructOfflineAudioContext(2, 44100, 44100);
 */
export const constructOfflineAudioContext = baseOfflineAudioContextFactory;
