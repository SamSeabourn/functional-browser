const baseAudioWorkletNodeFactory = (
  ...args: ConstructorParameters<typeof AudioWorkletNode>
): InstanceType<typeof AudioWorkletNode> => new AudioWorkletNode(...args);

/**
 * Factory function to create an instance of `BaseAudioWorkletNode`.
 *
 * @function
 * @param {AudioContext} audioContext - The audio context to associate with the node.
 * @param {string} name - The name of the audio worklet node.
 * @param {Object} [options] - Optional parameters for configuring the node.
 * @returns {AudioWorkletNode} An instance of `AudioWorkletNode`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode | MDN AudioWorkletNode}
 *
 * @experimental
 *
 * @example
 * // Example usage:
 * const audioContext = new AudioContext();
 * const nodeName = 'my-audio-worklet-node';
 * const options = { numberOfInputs: 1, numberOfOutputs: 1 };
 * const audioWorkletNode = createAudioWorkletNode(audioContext, nodeName, options);
 */
export const createAudioWorkletNode = baseAudioWorkletNodeFactory;
/**
 * Factory function to create an instance of `BaseAudioWorkletNode`.
 *
 * @function
 * @param {AudioContext} audioContext - The audio context to associate with the node.
 * @param {string} name - The name of the audio worklet node.
 * @param {Object} [options] - Optional parameters for configuring the node.
 * @returns {AudioWorkletNode} An instance of `AudioWorkletNode`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode | MDN AudioWorkletNode}
 *
 * @experimental
 *
 * @example
 * // Example usage:
 * const audioContext = new AudioContext();
 * const nodeName = 'my-audio-worklet-node';
 * const options = { numberOfInputs: 1, numberOfOutputs: 1 };
 * const audioWorkletNode = initAudioWorkletNode(audioContext, nodeName, options);
 */
export const initAudioWorkletNode = baseAudioWorkletNodeFactory;
/**
 * Factory function to create an instance of `BaseAudioWorkletNode`.
 *
 * @function
 * @param {AudioContext} audioContext - The audio context to associate with the node.
 * @param {string} name - The name of the audio worklet node.
 * @param {Object} [options] - Optional parameters for configuring the node.
 * @returns {AudioWorkletNode} An instance of `AudioWorkletNode`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode | MDN AudioWorkletNode}
 *
 * @experimental
 *
 * @example
 * // Example usage:
 * const audioContext = new AudioContext();
 * const nodeName = 'my-audio-worklet-node';
 * const options = { numberOfInputs: 1, numberOfOutputs: 1 };
 * const audioWorkletNode = spawnAudioWorkletNode(audioContext, nodeName, options);
 */
export const spawnAudioWorkletNode = baseAudioWorkletNodeFactory;
/**
 * Factory function to create an instance of `BaseAudioWorkletNode`.
 *
 * @function
 * @param {AudioContext} audioContext - The audio context to associate with the node.
 * @param {string} name - The name of the audio worklet node.
 * @param {Object} [options] - Optional parameters for configuring the node.
 * @returns {AudioWorkletNode} An instance of `AudioWorkletNode`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode | MDN AudioWorkletNode}
 *
 * @experimental
 *
 * @example
 * // Example usage:
 * const audioContext = new AudioContext();
 * const nodeName = 'my-audio-worklet-node';
 * const options = { numberOfInputs: 1, numberOfOutputs: 1 };
 * const audioWorkletNode = buildAudioWorkletNode(audioContext, nodeName, options);
 */
export const buildAudioWorkletNode = baseAudioWorkletNodeFactory;
/**
 * Factory function to create an instance of `BaseAudioWorkletNode`.
 *
 * @function
 * @param {AudioContext} audioContext - The audio context to associate with the node.
 * @param {string} name - The name of the audio worklet node.
 * @param {Object} [options] - Optional parameters for configuring the node.
 * @returns {AudioWorkletNode} An instance of `AudioWorkletNode`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode | MDN AudioWorkletNode}
 *
 * @experimental
 *
 * @example
 * // Example usage:
 * const audioContext = new AudioContext();
 * const nodeName = 'my-audio-worklet-node';
 * const options = { numberOfInputs: 1, numberOfOutputs: 1 };
 * const audioWorkletNode = makeAudioWorkletNode(audioContext, nodeName, options);
 */
export const makeAudioWorkletNode = baseAudioWorkletNodeFactory;
/**
 * Factory function to create an instance of `BaseAudioWorkletNode`.
 *
 * @function
 * @param {AudioContext} audioContext - The audio context to associate with the node.
 * @param {string} name - The name of the audio worklet node.
 * @param {Object} [options] - Optional parameters for configuring the node.
 * @returns {AudioWorkletNode} An instance of `AudioWorkletNode`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode | MDN AudioWorkletNode}
 *
 * @experimental
 *
 * @example
 * // Example usage:
 * const audioContext = new AudioContext();
 * const nodeName = 'my-audio-worklet-node';
 * const options = { numberOfInputs: 1, numberOfOutputs: 1 };
 * const audioWorkletNode = constructAudioWorkletNode(audioContext, nodeName, options);
 */
export const constructAudioWorkletNode = baseAudioWorkletNodeFactory;
