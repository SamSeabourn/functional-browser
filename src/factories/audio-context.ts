const baseAudioContextFactory = (
  ...args: ConstructorParameters<typeof AudioContext>
): InstanceType<typeof AudioContext> => new AudioContext(...args);

/**
 * Creates and returns a new instance of `BaseAudioContext`.
 *
 * The `BaseAudioContext` interface represents an audio-processing graph built from audio modules linked together, each represented by an `AudioNode`.
 *
 * @returns {BaseAudioContext} A new instance of `BaseAudioContext`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | MDN - AudioContext}
 *
 * @example
 * // Create a new BaseAudioContext instance
 * const audioContext = createAudioContext();
 */
export const createAudioContext = baseAudioContextFactory;
/**
 * Creates and returns a new instance of `BaseAudioContext`.
 *
 * The `BaseAudioContext` interface represents an audio-processing graph built from audio modules linked together, each represented by an `AudioNode`.
 *
 * @returns {BaseAudioContext} A new instance of `BaseAudioContext`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | MDN - AudioContext}
 *
 * @example
 * // Create a new BaseAudioContext instance
 * const audioContext = initAudioContext();
 */
export const initAudioContext = baseAudioContextFactory;
/**
 * Creates and returns a new instance of `BaseAudioContext`.
 *
 * The `BaseAudioContext` interface represents an audio-processing graph built from audio modules linked together, each represented by an `AudioNode`.
 *
 * @returns {BaseAudioContext} A new instance of `BaseAudioContext`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | MDN - AudioContext}
 *
 * @example
 * // Create a new BaseAudioContext instance
 * const audioContext = spawnAudioContext();
 */
export const spawnAudioContext = baseAudioContextFactory;
/**
 * Creates and returns a new instance of `BaseAudioContext`.
 *
 * The `BaseAudioContext` interface represents an audio-processing graph built from audio modules linked together, each represented by an `AudioNode`.
 *
 * @returns {BaseAudioContext} A new instance of `BaseAudioContext`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | MDN - AudioContext}
 *
 * @example
 * // Create a new BaseAudioContext instance
 * const audioContext = buildAudioContext();
 */
export const buildAudioContext = baseAudioContextFactory;
/**
 * Creates and returns a new instance of `BaseAudioContext`.
 *
 * The `BaseAudioContext` interface represents an audio-processing graph built from audio modules linked together, each represented by an `AudioNode`.
 *
 * @returns {BaseAudioContext} A new instance of `BaseAudioContext`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | MDN - AudioContext}
 *
 * @example
 * // Create a new BaseAudioContext instance
 * const audioContext = makeAudioContext();
 */
export const makeAudioContext = baseAudioContextFactory;
/**
 * Creates and returns a new instance of `BaseAudioContext`.
 *
 * The `BaseAudioContext` interface represents an audio-processing graph built from audio modules linked together, each represented by an `AudioNode`.
 *
 * @returns {BaseAudioContext} A new instance of `BaseAudioContext`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | MDN - AudioContext}
 *
 * @example
 * // Create a new BaseAudioContext instance
 * const audioContext = constructAudioContext();
 */
export const constructAudioContext = baseAudioContextFactory;
