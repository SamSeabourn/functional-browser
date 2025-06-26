const baseDOMQuadFactory = (
  ...args: ConstructorParameters<typeof DOMQuad>
): InstanceType<typeof DOMQuad> => new DOMQuad(...args);

/**
 * Creates a new instance of a DOMQuad object.
 *
 * @returns {DOMQuad} A new DOMQuad object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad}
 *
 * @example
 * const quad = createDOMQuad();
 * console.log(quad.p1, quad.p2, quad.p3, quad.p4);
 */
export const createDOMQuad = baseDOMQuadFactory;
/**
 * Creates a new instance of a DOMQuad object.
 *
 * @returns {DOMQuad} A new DOMQuad object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad}
 *
 * @example
 * const quad = initDOMQuad();
 * console.log(quad.p1, quad.p2, quad.p3, quad.p4);
 */
export const initDOMQuad = baseDOMQuadFactory;
/**
 * Creates a new instance of a DOMQuad object.
 *
 * @returns {DOMQuad} A new DOMQuad object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad}
 *
 * @example
 * const quad = spawnDOMQuad();
 * console.log(quad.p1, quad.p2, quad.p3, quad.p4);
 */
export const spawnDOMQuad = baseDOMQuadFactory;
/**
 * Creates a new instance of a DOMQuad object.
 *
 * @returns {DOMQuad} A new DOMQuad object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad}
 *
 * @example
 * const quad = buildDOMQuad();
 * console.log(quad.p1, quad.p2, quad.p3, quad.p4);
 */
export const buildDOMQuad = baseDOMQuadFactory;
/**
 * Creates a new instance of a DOMQuad object.
 *
 * @returns {DOMQuad} A new DOMQuad object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad}
 *
 * @example
 * const quad = makeDOMQuad();
 * console.log(quad.p1, quad.p2, quad.p3, quad.p4);
 */
export const makeDOMQuad = baseDOMQuadFactory;
/**
 * Creates a new instance of a DOMQuad object.
 *
 * @returns {DOMQuad} A new DOMQuad object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad}
 *
 * @example
 * const quad = constructDOMQuad();
 * console.log(quad.p1, quad.p2, quad.p3, quad.p4);
 */
export const constructDOMQuad = baseDOMQuadFactory;
