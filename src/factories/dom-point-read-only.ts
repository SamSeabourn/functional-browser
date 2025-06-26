const baseDOMPointReadOnlyFactory = (
  ...args: ConstructorParameters<typeof DOMPointReadOnly>
): InstanceType<typeof DOMPointReadOnly> => new DOMPointReadOnly(...args);

/**
 * Factory function to create a new instance of DOMPointReadOnly.
 *
 * @returns {DOMPointReadOnly} A new instance of DOMPointReadOnly.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly | DOMPointReadOnly - MDN}
 *
 * @example
 * const point = createDOMPointReadOnly();
 * console.log(point.x, point.y, point.z, point.w); // Outputs: 0 0 0 1 (default values)
 */
export const createDOMPointReadOnly = baseDOMPointReadOnlyFactory;
/**
 * Factory function to create a new instance of DOMPointReadOnly.
 *
 * @returns {DOMPointReadOnly} A new instance of DOMPointReadOnly.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly | DOMPointReadOnly - MDN}
 *
 * @example
 * const point = initDOMPointReadOnly();
 * console.log(point.x, point.y, point.z, point.w); // Outputs: 0 0 0 1 (default values)
 */
export const initDOMPointReadOnly = baseDOMPointReadOnlyFactory;
/**
 * Factory function to create a new instance of DOMPointReadOnly.
 *
 * @returns {DOMPointReadOnly} A new instance of DOMPointReadOnly.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly | DOMPointReadOnly - MDN}
 *
 * @example
 * const point = spawnDOMPointReadOnly();
 * console.log(point.x, point.y, point.z, point.w); // Outputs: 0 0 0 1 (default values)
 */
export const spawnDOMPointReadOnly = baseDOMPointReadOnlyFactory;
/**
 * Factory function to create a new instance of DOMPointReadOnly.
 *
 * @returns {DOMPointReadOnly} A new instance of DOMPointReadOnly.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly | DOMPointReadOnly - MDN}
 *
 * @example
 * const point = buildDOMPointReadOnly();
 * console.log(point.x, point.y, point.z, point.w); // Outputs: 0 0 0 1 (default values)
 */
export const buildDOMPointReadOnly = baseDOMPointReadOnlyFactory;
/**
 * Factory function to create a new instance of DOMPointReadOnly.
 *
 * @returns {DOMPointReadOnly} A new instance of DOMPointReadOnly.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly | DOMPointReadOnly - MDN}
 *
 * @example
 * const point = makeDOMPointReadOnly();
 * console.log(point.x, point.y, point.z, point.w); // Outputs: 0 0 0 1 (default values)
 */
export const makeDOMPointReadOnly = baseDOMPointReadOnlyFactory;
/**
 * Factory function to create a new instance of DOMPointReadOnly.
 *
 * @returns {DOMPointReadOnly} A new instance of DOMPointReadOnly.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly | DOMPointReadOnly - MDN}
 *
 * @example
 * const point = constructDOMPointReadOnly();
 * console.log(point.x, point.y, point.z, point.w); // Outputs: 0 0 0 1 (default values)
 */
export const constructDOMPointReadOnly = baseDOMPointReadOnlyFactory;
