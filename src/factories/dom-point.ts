const baseDOMPointFactory = (
  ...args: ConstructorParameters<typeof DOMPoint>
): InstanceType<typeof DOMPoint> => new DOMPoint(...args);

/**
 * Creates a new DOMPoint object with the specified coordinates.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [z=0] - The z-coordinate of the point. Defaults to 0 if not provided.
 * @param {number} [w=1] - The w-coordinate (perspective value) of the point. Defaults to 1 if not provided.
 * @returns {DOMPoint} A new DOMPoint object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint | MDN: DOMPoint}
 *
 * @example
 * // Create a DOMPoint with x=10, y=20, z=0, w=1
 * const point = createDOMPoint(10, 20);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=1
 * const point3D = baseDOMPointFactory(10, 20, 30);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=0.5
 * const pointPerspective = baseDOMPointFactory(10, 20, 30, 0.5);
 */
export const createDOMPoint = baseDOMPointFactory;
/**
 * Creates a new DOMPoint object with the specified coordinates.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [z=0] - The z-coordinate of the point. Defaults to 0 if not provided.
 * @param {number} [w=1] - The w-coordinate (perspective value) of the point. Defaults to 1 if not provided.
 * @returns {DOMPoint} A new DOMPoint object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint | MDN: DOMPoint}
 *
 * @example
 * // Create a DOMPoint with x=10, y=20, z=0, w=1
 * const point = initDOMPoint(10, 20);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=1
 * const point3D = baseDOMPointFactory(10, 20, 30);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=0.5
 * const pointPerspective = baseDOMPointFactory(10, 20, 30, 0.5);
 */
export const initDOMPoint = baseDOMPointFactory;
/**
 * Creates a new DOMPoint object with the specified coordinates.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [z=0] - The z-coordinate of the point. Defaults to 0 if not provided.
 * @param {number} [w=1] - The w-coordinate (perspective value) of the point. Defaults to 1 if not provided.
 * @returns {DOMPoint} A new DOMPoint object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint | MDN: DOMPoint}
 *
 * @example
 * // Create a DOMPoint with x=10, y=20, z=0, w=1
 * const point = spawnDOMPoint(10, 20);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=1
 * const point3D = baseDOMPointFactory(10, 20, 30);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=0.5
 * const pointPerspective = baseDOMPointFactory(10, 20, 30, 0.5);
 */
export const spawnDOMPoint = baseDOMPointFactory;
/**
 * Creates a new DOMPoint object with the specified coordinates.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [z=0] - The z-coordinate of the point. Defaults to 0 if not provided.
 * @param {number} [w=1] - The w-coordinate (perspective value) of the point. Defaults to 1 if not provided.
 * @returns {DOMPoint} A new DOMPoint object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint | MDN: DOMPoint}
 *
 * @example
 * // Create a DOMPoint with x=10, y=20, z=0, w=1
 * const point = buildDOMPoint(10, 20);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=1
 * const point3D = baseDOMPointFactory(10, 20, 30);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=0.5
 * const pointPerspective = baseDOMPointFactory(10, 20, 30, 0.5);
 */
export const buildDOMPoint = baseDOMPointFactory;
/**
 * Creates a new DOMPoint object with the specified coordinates.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [z=0] - The z-coordinate of the point. Defaults to 0 if not provided.
 * @param {number} [w=1] - The w-coordinate (perspective value) of the point. Defaults to 1 if not provided.
 * @returns {DOMPoint} A new DOMPoint object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint | MDN: DOMPoint}
 *
 * @example
 * // Create a DOMPoint with x=10, y=20, z=0, w=1
 * const point = makeDOMPoint(10, 20);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=1
 * const point3D = baseDOMPointFactory(10, 20, 30);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=0.5
 * const pointPerspective = baseDOMPointFactory(10, 20, 30, 0.5);
 */
export const makeDOMPoint = baseDOMPointFactory;
/**
 * Creates a new DOMPoint object with the specified coordinates.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} [z=0] - The z-coordinate of the point. Defaults to 0 if not provided.
 * @param {number} [w=1] - The w-coordinate (perspective value) of the point. Defaults to 1 if not provided.
 * @returns {DOMPoint} A new DOMPoint object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint | MDN: DOMPoint}
 *
 * @example
 * // Create a DOMPoint with x=10, y=20, z=0, w=1
 * const point = constructDOMPoint(10, 20);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=1
 * const point3D = baseDOMPointFactory(10, 20, 30);
 *
 * // Create a DOMPoint with x=10, y=20, z=30, w=0.5
 * const pointPerspective = baseDOMPointFactory(10, 20, 30, 0.5);
 */
export const constructDOMPoint = baseDOMPointFactory;
