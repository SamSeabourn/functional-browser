const baseDOMMatrixFactory = (
  ...args: ConstructorParameters<typeof DOMMatrix>
): InstanceType<typeof DOMMatrix> => new DOMMatrix(...args);

/**
 * Factory function to create a new DOMMatrix instance.
 *
 * @returns {DOMMatrix} A new instance of DOMMatrix.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix | MDN DOMMatrix}
 *
 * @example
 * const matrix = createDOMMatrix();
 * console.log(matrix instanceof DOMMatrix); // true
 */
export const createDOMMatrix = baseDOMMatrixFactory;
/**
 * Factory function to create a new DOMMatrix instance.
 *
 * @returns {DOMMatrix} A new instance of DOMMatrix.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix | MDN DOMMatrix}
 *
 * @example
 * const matrix = initDOMMatrix();
 * console.log(matrix instanceof DOMMatrix); // true
 */
export const initDOMMatrix = baseDOMMatrixFactory;
/**
 * Factory function to create a new DOMMatrix instance.
 *
 * @returns {DOMMatrix} A new instance of DOMMatrix.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix | MDN DOMMatrix}
 *
 * @example
 * const matrix = spawnDOMMatrix();
 * console.log(matrix instanceof DOMMatrix); // true
 */
export const spawnDOMMatrix = baseDOMMatrixFactory;
/**
 * Factory function to create a new DOMMatrix instance.
 *
 * @returns {DOMMatrix} A new instance of DOMMatrix.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix | MDN DOMMatrix}
 *
 * @example
 * const matrix = buildDOMMatrix();
 * console.log(matrix instanceof DOMMatrix); // true
 */
export const buildDOMMatrix = baseDOMMatrixFactory;
/**
 * Factory function to create a new DOMMatrix instance.
 *
 * @returns {DOMMatrix} A new instance of DOMMatrix.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix | MDN DOMMatrix}
 *
 * @example
 * const matrix = makeDOMMatrix();
 * console.log(matrix instanceof DOMMatrix); // true
 */
export const makeDOMMatrix = baseDOMMatrixFactory;
/**
 * Factory function to create a new DOMMatrix instance.
 *
 * @returns {DOMMatrix} A new instance of DOMMatrix.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix | MDN DOMMatrix}
 *
 * @example
 * const matrix = constructDOMMatrix();
 * console.log(matrix instanceof DOMMatrix); // true
 */
export const constructDOMMatrix = baseDOMMatrixFactory;
