const baseProgressEventFactory = (
  ...args: ConstructorParameters<typeof ProgressEvent>
): InstanceType<typeof ProgressEvent> => new ProgressEvent(...args);

/**
 * Factory function to create a new ProgressEvent.
 *
 * @param {string} type - A string representing the name of the event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [lengthComputable=false] - A boolean indicating whether the total work is computable.
 * @param {number} [loaded=0] - A number representing the amount of work already performed.
 * @param {number} [total=0] - A number representing the total amount of work.
 * @returns {ProgressEvent} A new ProgressEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent | MDN ProgressEvent}
 *
 * @example
 * const progressEvent = createProgressEvent('load', true, true, true, 50, 100);
 * console.log(progressEvent.type); // 'load'
 * console.log(progressEvent.bubbles); // true
 * console.log(progressEvent.cancelable); // true
 * console.log(progressEvent.lengthComputable); // true
 * console.log(progressEvent.loaded); // 50
 * console.log(progressEvent.total); // 100
 */
export const createProgressEvent = baseProgressEventFactory;
/**
 * Factory function to create a new ProgressEvent.
 *
 * @param {string} type - A string representing the name of the event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [lengthComputable=false] - A boolean indicating whether the total work is computable.
 * @param {number} [loaded=0] - A number representing the amount of work already performed.
 * @param {number} [total=0] - A number representing the total amount of work.
 * @returns {ProgressEvent} A new ProgressEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent | MDN ProgressEvent}
 *
 * @example
 * const progressEvent = initProgressEvent('load', true, true, true, 50, 100);
 * console.log(progressEvent.type); // 'load'
 * console.log(progressEvent.bubbles); // true
 * console.log(progressEvent.cancelable); // true
 * console.log(progressEvent.lengthComputable); // true
 * console.log(progressEvent.loaded); // 50
 * console.log(progressEvent.total); // 100
 */
export const initProgressEvent = baseProgressEventFactory;
/**
 * Factory function to create a new ProgressEvent.
 *
 * @param {string} type - A string representing the name of the event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [lengthComputable=false] - A boolean indicating whether the total work is computable.
 * @param {number} [loaded=0] - A number representing the amount of work already performed.
 * @param {number} [total=0] - A number representing the total amount of work.
 * @returns {ProgressEvent} A new ProgressEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent | MDN ProgressEvent}
 *
 * @example
 * const progressEvent = spawnProgressEvent('load', true, true, true, 50, 100);
 * console.log(progressEvent.type); // 'load'
 * console.log(progressEvent.bubbles); // true
 * console.log(progressEvent.cancelable); // true
 * console.log(progressEvent.lengthComputable); // true
 * console.log(progressEvent.loaded); // 50
 * console.log(progressEvent.total); // 100
 */
export const spawnProgressEvent = baseProgressEventFactory;
/**
 * Factory function to create a new ProgressEvent.
 *
 * @param {string} type - A string representing the name of the event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [lengthComputable=false] - A boolean indicating whether the total work is computable.
 * @param {number} [loaded=0] - A number representing the amount of work already performed.
 * @param {number} [total=0] - A number representing the total amount of work.
 * @returns {ProgressEvent} A new ProgressEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent | MDN ProgressEvent}
 *
 * @example
 * const progressEvent = buildProgressEvent('load', true, true, true, 50, 100);
 * console.log(progressEvent.type); // 'load'
 * console.log(progressEvent.bubbles); // true
 * console.log(progressEvent.cancelable); // true
 * console.log(progressEvent.lengthComputable); // true
 * console.log(progressEvent.loaded); // 50
 * console.log(progressEvent.total); // 100
 */
export const buildProgressEvent = baseProgressEventFactory;
/**
 * Factory function to create a new ProgressEvent.
 *
 * @param {string} type - A string representing the name of the event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [lengthComputable=false] - A boolean indicating whether the total work is computable.
 * @param {number} [loaded=0] - A number representing the amount of work already performed.
 * @param {number} [total=0] - A number representing the total amount of work.
 * @returns {ProgressEvent} A new ProgressEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent | MDN ProgressEvent}
 *
 * @example
 * const progressEvent = makeProgressEvent('load', true, true, true, 50, 100);
 * console.log(progressEvent.type); // 'load'
 * console.log(progressEvent.bubbles); // true
 * console.log(progressEvent.cancelable); // true
 * console.log(progressEvent.lengthComputable); // true
 * console.log(progressEvent.loaded); // 50
 * console.log(progressEvent.total); // 100
 */
export const makeProgressEvent = baseProgressEventFactory;
/**
 * Factory function to create a new ProgressEvent.
 *
 * @param {string} type - A string representing the name of the event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {boolean} [lengthComputable=false] - A boolean indicating whether the total work is computable.
 * @param {number} [loaded=0] - A number representing the amount of work already performed.
 * @param {number} [total=0] - A number representing the total amount of work.
 * @returns {ProgressEvent} A new ProgressEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent | MDN ProgressEvent}
 *
 * @example
 * const progressEvent = constructProgressEvent('load', true, true, true, 50, 100);
 * console.log(progressEvent.type); // 'load'
 * console.log(progressEvent.bubbles); // true
 * console.log(progressEvent.cancelable); // true
 * console.log(progressEvent.lengthComputable); // true
 * console.log(progressEvent.loaded); // 50
 * console.log(progressEvent.total); // 100
 */
export const constructProgressEvent = baseProgressEventFactory;
