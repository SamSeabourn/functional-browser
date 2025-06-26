const baseAudioEncoderFactory = (
  ...args: ConstructorParameters<typeof AudioEncoder>
): InstanceType<typeof AudioEncoder> => new AudioEncoder(...args);

/**
 * Creates a new instance of an AudioEncoder.
 *
 * This function is a factory for creating AudioEncoder instances, which are used
 * to encode audio data. The AudioEncoder is part of the WebCodecs API and provides
 * a way to handle audio encoding in web applications.
 *
 * @experimental
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioEncoder | MDN AudioEncoder}
 *
 * @param {AudioEncoderInit} init - An object containing the initialization data for the AudioEncoder.
 * @returns {AudioEncoder} A new instance of AudioEncoder.
 *
 * @example
 * const encoder = createAudioEncoder({
 *   output: (chunk) => {
 *     console.log('Encoded audio chunk:', chunk);
 *   },
 *   error: (error) => {
 *     console.error('AudioEncoder error:', error);
 *   }
 * });
 */
export const createAudioEncoder = baseAudioEncoderFactory;
/**
 * Creates a new instance of an AudioEncoder.
 *
 * This function is a factory for creating AudioEncoder instances, which are used
 * to encode audio data. The AudioEncoder is part of the WebCodecs API and provides
 * a way to handle audio encoding in web applications.
 *
 * @experimental
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioEncoder | MDN AudioEncoder}
 *
 * @param {AudioEncoderInit} init - An object containing the initialization data for the AudioEncoder.
 * @returns {AudioEncoder} A new instance of AudioEncoder.
 *
 * @example
 * const encoder = initAudioEncoder({
 *   output: (chunk) => {
 *     console.log('Encoded audio chunk:', chunk);
 *   },
 *   error: (error) => {
 *     console.error('AudioEncoder error:', error);
 *   }
 * });
 */
export const initAudioEncoder = baseAudioEncoderFactory;
/**
 * Creates a new instance of an AudioEncoder.
 *
 * This function is a factory for creating AudioEncoder instances, which are used
 * to encode audio data. The AudioEncoder is part of the WebCodecs API and provides
 * a way to handle audio encoding in web applications.
 *
 * @experimental
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioEncoder | MDN AudioEncoder}
 *
 * @param {AudioEncoderInit} init - An object containing the initialization data for the AudioEncoder.
 * @returns {AudioEncoder} A new instance of AudioEncoder.
 *
 * @example
 * const encoder = spawnAudioEncoder({
 *   output: (chunk) => {
 *     console.log('Encoded audio chunk:', chunk);
 *   },
 *   error: (error) => {
 *     console.error('AudioEncoder error:', error);
 *   }
 * });
 */
export const spawnAudioEncoder = baseAudioEncoderFactory;
/**
 * Creates a new instance of an AudioEncoder.
 *
 * This function is a factory for creating AudioEncoder instances, which are used
 * to encode audio data. The AudioEncoder is part of the WebCodecs API and provides
 * a way to handle audio encoding in web applications.
 *
 * @experimental
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioEncoder | MDN AudioEncoder}
 *
 * @param {AudioEncoderInit} init - An object containing the initialization data for the AudioEncoder.
 * @returns {AudioEncoder} A new instance of AudioEncoder.
 *
 * @example
 * const encoder = buildAudioEncoder({
 *   output: (chunk) => {
 *     console.log('Encoded audio chunk:', chunk);
 *   },
 *   error: (error) => {
 *     console.error('AudioEncoder error:', error);
 *   }
 * });
 */
export const buildAudioEncoder = baseAudioEncoderFactory;
/**
 * Creates a new instance of an AudioEncoder.
 *
 * This function is a factory for creating AudioEncoder instances, which are used
 * to encode audio data. The AudioEncoder is part of the WebCodecs API and provides
 * a way to handle audio encoding in web applications.
 *
 * @experimental
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioEncoder | MDN AudioEncoder}
 *
 * @param {AudioEncoderInit} init - An object containing the initialization data for the AudioEncoder.
 * @returns {AudioEncoder} A new instance of AudioEncoder.
 *
 * @example
 * const encoder = makeAudioEncoder({
 *   output: (chunk) => {
 *     console.log('Encoded audio chunk:', chunk);
 *   },
 *   error: (error) => {
 *     console.error('AudioEncoder error:', error);
 *   }
 * });
 */
export const makeAudioEncoder = baseAudioEncoderFactory;
/**
 * Creates a new instance of an AudioEncoder.
 *
 * This function is a factory for creating AudioEncoder instances, which are used
 * to encode audio data. The AudioEncoder is part of the WebCodecs API and provides
 * a way to handle audio encoding in web applications.
 *
 * @experimental
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioEncoder | MDN AudioEncoder}
 *
 * @param {AudioEncoderInit} init - An object containing the initialization data for the AudioEncoder.
 * @returns {AudioEncoder} A new instance of AudioEncoder.
 *
 * @example
 * const encoder = constructAudioEncoder({
 *   output: (chunk) => {
 *     console.log('Encoded audio chunk:', chunk);
 *   },
 *   error: (error) => {
 *     console.error('AudioEncoder error:', error);
 *   }
 * });
 */
export const constructAudioEncoder = baseAudioEncoderFactory;
