const baseErrorEventFactory = (
  ...args: ConstructorParameters<typeof ErrorEvent>
): InstanceType<typeof ErrorEvent> => new ErrorEvent(...args);

/**
 * Creates a new `ErrorEvent` with the specified parameters.
 *
 * @param {string} type - The type of the error event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {string} [message=''] - A human-readable error message describing the problem.
 * @param {string} [filename=''] - The name of the script file in which the error occurred.
 * @param {number} [lineno=0] - The line number at which the error occurred.
 * @param {number} [colno=0] - The column number at which the error occurred.
 * @param {Error} [error=null] - The error object associated with the event.
 * @returns {ErrorEvent} A new `ErrorEvent` object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent | MDN ErrorEvent Documentation}
 *
 * @example
 * const errorEvent = createErrorEvent(
 *   'error',
 *   true,
 *   true,
 *   'An unexpected error occurred',
 *   'app.js',
 *   42,
 *   13,
 *   new Error('Something went wrong')
 * );
 */
export const createErrorEvent = baseErrorEventFactory;
/**
 * Creates a new `ErrorEvent` with the specified parameters.
 *
 * @param {string} type - The type of the error event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {string} [message=''] - A human-readable error message describing the problem.
 * @param {string} [filename=''] - The name of the script file in which the error occurred.
 * @param {number} [lineno=0] - The line number at which the error occurred.
 * @param {number} [colno=0] - The column number at which the error occurred.
 * @param {Error} [error=null] - The error object associated with the event.
 * @returns {ErrorEvent} A new `ErrorEvent` object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent | MDN ErrorEvent Documentation}
 *
 * @example
 * const errorEvent = initErrorEvent(
 *   'error',
 *   true,
 *   true,
 *   'An unexpected error occurred',
 *   'app.js',
 *   42,
 *   13,
 *   new Error('Something went wrong')
 * );
 */
export const initErrorEvent = baseErrorEventFactory;
/**
 * Creates a new `ErrorEvent` with the specified parameters.
 *
 * @param {string} type - The type of the error event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {string} [message=''] - A human-readable error message describing the problem.
 * @param {string} [filename=''] - The name of the script file in which the error occurred.
 * @param {number} [lineno=0] - The line number at which the error occurred.
 * @param {number} [colno=0] - The column number at which the error occurred.
 * @param {Error} [error=null] - The error object associated with the event.
 * @returns {ErrorEvent} A new `ErrorEvent` object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent | MDN ErrorEvent Documentation}
 *
 * @example
 * const errorEvent = spawnErrorEvent(
 *   'error',
 *   true,
 *   true,
 *   'An unexpected error occurred',
 *   'app.js',
 *   42,
 *   13,
 *   new Error('Something went wrong')
 * );
 */
export const spawnErrorEvent = baseErrorEventFactory;
/**
 * Creates a new `ErrorEvent` with the specified parameters.
 *
 * @param {string} type - The type of the error event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {string} [message=''] - A human-readable error message describing the problem.
 * @param {string} [filename=''] - The name of the script file in which the error occurred.
 * @param {number} [lineno=0] - The line number at which the error occurred.
 * @param {number} [colno=0] - The column number at which the error occurred.
 * @param {Error} [error=null] - The error object associated with the event.
 * @returns {ErrorEvent} A new `ErrorEvent` object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent | MDN ErrorEvent Documentation}
 *
 * @example
 * const errorEvent = buildErrorEvent(
 *   'error',
 *   true,
 *   true,
 *   'An unexpected error occurred',
 *   'app.js',
 *   42,
 *   13,
 *   new Error('Something went wrong')
 * );
 */
export const buildErrorEvent = baseErrorEventFactory;
/**
 * Creates a new `ErrorEvent` with the specified parameters.
 *
 * @param {string} type - The type of the error event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {string} [message=''] - A human-readable error message describing the problem.
 * @param {string} [filename=''] - The name of the script file in which the error occurred.
 * @param {number} [lineno=0] - The line number at which the error occurred.
 * @param {number} [colno=0] - The column number at which the error occurred.
 * @param {Error} [error=null] - The error object associated with the event.
 * @returns {ErrorEvent} A new `ErrorEvent` object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent | MDN ErrorEvent Documentation}
 *
 * @example
 * const errorEvent = makeErrorEvent(
 *   'error',
 *   true,
 *   true,
 *   'An unexpected error occurred',
 *   'app.js',
 *   42,
 *   13,
 *   new Error('Something went wrong')
 * );
 */
export const makeErrorEvent = baseErrorEventFactory;
/**
 * Creates a new `ErrorEvent` with the specified parameters.
 *
 * @param {string} type - The type of the error event.
 * @param {boolean} [bubbles=false] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [cancelable=false] - A boolean indicating whether the event is cancelable.
 * @param {string} [message=''] - A human-readable error message describing the problem.
 * @param {string} [filename=''] - The name of the script file in which the error occurred.
 * @param {number} [lineno=0] - The line number at which the error occurred.
 * @param {number} [colno=0] - The column number at which the error occurred.
 * @param {Error} [error=null] - The error object associated with the event.
 * @returns {ErrorEvent} A new `ErrorEvent` object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent | MDN ErrorEvent Documentation}
 *
 * @example
 * const errorEvent = constructErrorEvent(
 *   'error',
 *   true,
 *   true,
 *   'An unexpected error occurred',
 *   'app.js',
 *   42,
 *   13,
 *   new Error('Something went wrong')
 * );
 */
export const constructErrorEvent = baseErrorEventFactory;
