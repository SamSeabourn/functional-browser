const baseDOMExceptionFactory = (
  ...args: ConstructorParameters<typeof DOMException>
): InstanceType<typeof DOMException> => new DOMException(...args);

/**
 * Factory function to create a new instance of a DOMException with a specified message and name.
 *
 * @param {string} message - The message describing the exception.
 * @param {string} name - The name of the exception.
 * @returns {DOMException} A new instance of DOMException.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException | MDN: DOMException}
 *
 * @example
 * const exception = createDOMException('An error occurred', 'CustomError');
 * console.log(exception.message); // 'An error occurred'
 * console.log(exception.name); // 'CustomError'
 */
export const createDOMException = baseDOMExceptionFactory;
/**
 * Factory function to create a new instance of a DOMException with a specified message and name.
 *
 * @param {string} message - The message describing the exception.
 * @param {string} name - The name of the exception.
 * @returns {DOMException} A new instance of DOMException.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException | MDN: DOMException}
 *
 * @example
 * const exception = initDOMException('An error occurred', 'CustomError');
 * console.log(exception.message); // 'An error occurred'
 * console.log(exception.name); // 'CustomError'
 */
export const initDOMException = baseDOMExceptionFactory;
/**
 * Factory function to create a new instance of a DOMException with a specified message and name.
 *
 * @param {string} message - The message describing the exception.
 * @param {string} name - The name of the exception.
 * @returns {DOMException} A new instance of DOMException.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException | MDN: DOMException}
 *
 * @example
 * const exception = spawnDOMException('An error occurred', 'CustomError');
 * console.log(exception.message); // 'An error occurred'
 * console.log(exception.name); // 'CustomError'
 */
export const spawnDOMException = baseDOMExceptionFactory;
/**
 * Factory function to create a new instance of a DOMException with a specified message and name.
 *
 * @param {string} message - The message describing the exception.
 * @param {string} name - The name of the exception.
 * @returns {DOMException} A new instance of DOMException.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException | MDN: DOMException}
 *
 * @example
 * const exception = buildDOMException('An error occurred', 'CustomError');
 * console.log(exception.message); // 'An error occurred'
 * console.log(exception.name); // 'CustomError'
 */
export const buildDOMException = baseDOMExceptionFactory;
/**
 * Factory function to create a new instance of a DOMException with a specified message and name.
 *
 * @param {string} message - The message describing the exception.
 * @param {string} name - The name of the exception.
 * @returns {DOMException} A new instance of DOMException.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException | MDN: DOMException}
 *
 * @example
 * const exception = makeDOMException('An error occurred', 'CustomError');
 * console.log(exception.message); // 'An error occurred'
 * console.log(exception.name); // 'CustomError'
 */
export const makeDOMException = baseDOMExceptionFactory;
/**
 * Factory function to create a new instance of a DOMException with a specified message and name.
 *
 * @param {string} message - The message describing the exception.
 * @param {string} name - The name of the exception.
 * @returns {DOMException} A new instance of DOMException.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException | MDN: DOMException}
 *
 * @example
 * const exception = constructDOMException('An error occurred', 'CustomError');
 * console.log(exception.message); // 'An error occurred'
 * console.log(exception.name); // 'CustomError'
 */
export const constructDOMException = baseDOMExceptionFactory;
