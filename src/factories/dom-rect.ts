const baseDOMRectFactory = (
  ...args: ConstructorParameters<typeof DOMRect>
): InstanceType<typeof DOMRect> => new DOMRect(...args);

/**
 * Creates a new DOMRect object with the specified dimensions and position.
 *
 * @param {number} x - The x-coordinate of the DOMRect's origin.
 * @param {number} y - The y-coordinate of the DOMRect's origin.
 * @param {number} width - The width of the DOMRect.
 * @param {number} height - The height of the DOMRect.
 * @returns {DOMRect} A new DOMRect object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect | MDN DOMRect}
 *
 * @example
 * const rect = createDOMRect(10, 20, 100, 200);
 * console.log(rect); // DOMRect { x: 10, y: 20, width: 100, height: 200 }
 */
export const createDOMRect = baseDOMRectFactory;
/**
 * Creates a new DOMRect object with the specified dimensions and position.
 *
 * @param {number} x - The x-coordinate of the DOMRect's origin.
 * @param {number} y - The y-coordinate of the DOMRect's origin.
 * @param {number} width - The width of the DOMRect.
 * @param {number} height - The height of the DOMRect.
 * @returns {DOMRect} A new DOMRect object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect | MDN DOMRect}
 *
 * @example
 * const rect = initDOMRect(10, 20, 100, 200);
 * console.log(rect); // DOMRect { x: 10, y: 20, width: 100, height: 200 }
 */
export const initDOMRect = baseDOMRectFactory;
/**
 * Creates a new DOMRect object with the specified dimensions and position.
 *
 * @param {number} x - The x-coordinate of the DOMRect's origin.
 * @param {number} y - The y-coordinate of the DOMRect's origin.
 * @param {number} width - The width of the DOMRect.
 * @param {number} height - The height of the DOMRect.
 * @returns {DOMRect} A new DOMRect object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect | MDN DOMRect}
 *
 * @example
 * const rect = spawnDOMRect(10, 20, 100, 200);
 * console.log(rect); // DOMRect { x: 10, y: 20, width: 100, height: 200 }
 */
export const spawnDOMRect = baseDOMRectFactory;
/**
 * Creates a new DOMRect object with the specified dimensions and position.
 *
 * @param {number} x - The x-coordinate of the DOMRect's origin.
 * @param {number} y - The y-coordinate of the DOMRect's origin.
 * @param {number} width - The width of the DOMRect.
 * @param {number} height - The height of the DOMRect.
 * @returns {DOMRect} A new DOMRect object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect | MDN DOMRect}
 *
 * @example
 * const rect = buildDOMRect(10, 20, 100, 200);
 * console.log(rect); // DOMRect { x: 10, y: 20, width: 100, height: 200 }
 */
export const buildDOMRect = baseDOMRectFactory;
/**
 * Creates a new DOMRect object with the specified dimensions and position.
 *
 * @param {number} x - The x-coordinate of the DOMRect's origin.
 * @param {number} y - The y-coordinate of the DOMRect's origin.
 * @param {number} width - The width of the DOMRect.
 * @param {number} height - The height of the DOMRect.
 * @returns {DOMRect} A new DOMRect object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect | MDN DOMRect}
 *
 * @example
 * const rect = makeDOMRect(10, 20, 100, 200);
 * console.log(rect); // DOMRect { x: 10, y: 20, width: 100, height: 200 }
 */
export const makeDOMRect = baseDOMRectFactory;
/**
 * Creates a new DOMRect object with the specified dimensions and position.
 *
 * @param {number} x - The x-coordinate of the DOMRect's origin.
 * @param {number} y - The y-coordinate of the DOMRect's origin.
 * @param {number} width - The width of the DOMRect.
 * @param {number} height - The height of the DOMRect.
 * @returns {DOMRect} A new DOMRect object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect | MDN DOMRect}
 *
 * @example
 * const rect = constructDOMRect(10, 20, 100, 200);
 * console.log(rect); // DOMRect { x: 10, y: 20, width: 100, height: 200 }
 */
export const constructDOMRect = baseDOMRectFactory;
