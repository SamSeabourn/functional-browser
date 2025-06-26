const baseXRInputSourceEventFactory = (
  ...args: ConstructorParameters<typeof XRInputSourceEvent>
): InstanceType<typeof XRInputSourceEvent> => new XRInputSourceEvent(...args);

/**
 * Creates a new instance of an XRInputSourceEvent.
 *
 * @param {string} type - A string representing the type of the event.
 * @param {Object} eventInitDict - An object containing the properties to initialize the XRInputSourceEvent.
 * @param {XRInputSource} eventInitDict.inputSource - The XRInputSource that generated the event.
 * @param {number} [eventInitDict.frame] - The XRFrame at the time the event was generated.
 * @returns {XRInputSourceEvent} A new XRInputSourceEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent
 *
 * @experimental
 *
 * @example
 * const inputSource = {}; // Assume this is a valid XRInputSource object
 * const frame = {}; // Assume this is a valid XRFrame object
 * const event = createXRInputSourceEvent('selectstart', { inputSource, frame });
 */
export const createXRInputSourceEvent = baseXRInputSourceEventFactory;
/**
 * Creates a new instance of an XRInputSourceEvent.
 *
 * @param {string} type - A string representing the type of the event.
 * @param {Object} eventInitDict - An object containing the properties to initialize the XRInputSourceEvent.
 * @param {XRInputSource} eventInitDict.inputSource - The XRInputSource that generated the event.
 * @param {number} [eventInitDict.frame] - The XRFrame at the time the event was generated.
 * @returns {XRInputSourceEvent} A new XRInputSourceEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent
 *
 * @experimental
 *
 * @example
 * const inputSource = {}; // Assume this is a valid XRInputSource object
 * const frame = {}; // Assume this is a valid XRFrame object
 * const event = initXRInputSourceEvent('selectstart', { inputSource, frame });
 */
export const initXRInputSourceEvent = baseXRInputSourceEventFactory;
/**
 * Creates a new instance of an XRInputSourceEvent.
 *
 * @param {string} type - A string representing the type of the event.
 * @param {Object} eventInitDict - An object containing the properties to initialize the XRInputSourceEvent.
 * @param {XRInputSource} eventInitDict.inputSource - The XRInputSource that generated the event.
 * @param {number} [eventInitDict.frame] - The XRFrame at the time the event was generated.
 * @returns {XRInputSourceEvent} A new XRInputSourceEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent
 *
 * @experimental
 *
 * @example
 * const inputSource = {}; // Assume this is a valid XRInputSource object
 * const frame = {}; // Assume this is a valid XRFrame object
 * const event = spawnXRInputSourceEvent('selectstart', { inputSource, frame });
 */
export const spawnXRInputSourceEvent = baseXRInputSourceEventFactory;
/**
 * Creates a new instance of an XRInputSourceEvent.
 *
 * @param {string} type - A string representing the type of the event.
 * @param {Object} eventInitDict - An object containing the properties to initialize the XRInputSourceEvent.
 * @param {XRInputSource} eventInitDict.inputSource - The XRInputSource that generated the event.
 * @param {number} [eventInitDict.frame] - The XRFrame at the time the event was generated.
 * @returns {XRInputSourceEvent} A new XRInputSourceEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent
 *
 * @experimental
 *
 * @example
 * const inputSource = {}; // Assume this is a valid XRInputSource object
 * const frame = {}; // Assume this is a valid XRFrame object
 * const event = buildXRInputSourceEvent('selectstart', { inputSource, frame });
 */
export const buildXRInputSourceEvent = baseXRInputSourceEventFactory;
/**
 * Creates a new instance of an XRInputSourceEvent.
 *
 * @param {string} type - A string representing the type of the event.
 * @param {Object} eventInitDict - An object containing the properties to initialize the XRInputSourceEvent.
 * @param {XRInputSource} eventInitDict.inputSource - The XRInputSource that generated the event.
 * @param {number} [eventInitDict.frame] - The XRFrame at the time the event was generated.
 * @returns {XRInputSourceEvent} A new XRInputSourceEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent
 *
 * @experimental
 *
 * @example
 * const inputSource = {}; // Assume this is a valid XRInputSource object
 * const frame = {}; // Assume this is a valid XRFrame object
 * const event = makeXRInputSourceEvent('selectstart', { inputSource, frame });
 */
export const makeXRInputSourceEvent = baseXRInputSourceEventFactory;
/**
 * Creates a new instance of an XRInputSourceEvent.
 *
 * @param {string} type - A string representing the type of the event.
 * @param {Object} eventInitDict - An object containing the properties to initialize the XRInputSourceEvent.
 * @param {XRInputSource} eventInitDict.inputSource - The XRInputSource that generated the event.
 * @param {number} [eventInitDict.frame] - The XRFrame at the time the event was generated.
 * @returns {XRInputSourceEvent} A new XRInputSourceEvent instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent
 *
 * @experimental
 *
 * @example
 * const inputSource = {}; // Assume this is a valid XRInputSource object
 * const frame = {}; // Assume this is a valid XRFrame object
 * const event = constructXRInputSourceEvent('selectstart', { inputSource, frame });
 */
export const constructXRInputSourceEvent = baseXRInputSourceEventFactory;
