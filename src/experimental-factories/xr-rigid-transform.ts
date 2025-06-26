const baseXRRigidTransformFactory = (
  ...args: ConstructorParameters<typeof XRRigidTransform>
): InstanceType<typeof XRRigidTransform> => new XRRigidTransform(...args);

/**
 * Factory function to create an instance of `XRRigidTransform`.
 *
 * @param {DOMPointInit} position - The position of the transform in the form of a DOMPointInit object.
 * @param {DOMPointInit} orientation - The orientation of the transform in the form of a DOMPointInit object.
 * @returns {XRRigidTransform} A new instance of `XRRigidTransform`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform | MDN XRRigidTransform}
 *
 * @example
 * // Example usage:
 * const position = { x: 1, y: 2, z: 3, w: 1 };
 * const orientation = { x: 0, y: 0, z: 0, w: 1 };
 * const transform = createXRRigidTransform(position, orientation);
 *
 * @experimental
 */
export const createXRRigidTransform = baseXRRigidTransformFactory;
/**
 * Factory function to create an instance of `XRRigidTransform`.
 *
 * @param {DOMPointInit} position - The position of the transform in the form of a DOMPointInit object.
 * @param {DOMPointInit} orientation - The orientation of the transform in the form of a DOMPointInit object.
 * @returns {XRRigidTransform} A new instance of `XRRigidTransform`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform | MDN XRRigidTransform}
 *
 * @example
 * // Example usage:
 * const position = { x: 1, y: 2, z: 3, w: 1 };
 * const orientation = { x: 0, y: 0, z: 0, w: 1 };
 * const transform = initXRRigidTransform(position, orientation);
 *
 * @experimental
 */
export const initXRRigidTransform = baseXRRigidTransformFactory;
/**
 * Factory function to create an instance of `XRRigidTransform`.
 *
 * @param {DOMPointInit} position - The position of the transform in the form of a DOMPointInit object.
 * @param {DOMPointInit} orientation - The orientation of the transform in the form of a DOMPointInit object.
 * @returns {XRRigidTransform} A new instance of `XRRigidTransform`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform | MDN XRRigidTransform}
 *
 * @example
 * // Example usage:
 * const position = { x: 1, y: 2, z: 3, w: 1 };
 * const orientation = { x: 0, y: 0, z: 0, w: 1 };
 * const transform = spawnXRRigidTransform(position, orientation);
 *
 * @experimental
 */
export const spawnXRRigidTransform = baseXRRigidTransformFactory;
/**
 * Factory function to create an instance of `XRRigidTransform`.
 *
 * @param {DOMPointInit} position - The position of the transform in the form of a DOMPointInit object.
 * @param {DOMPointInit} orientation - The orientation of the transform in the form of a DOMPointInit object.
 * @returns {XRRigidTransform} A new instance of `XRRigidTransform`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform | MDN XRRigidTransform}
 *
 * @example
 * // Example usage:
 * const position = { x: 1, y: 2, z: 3, w: 1 };
 * const orientation = { x: 0, y: 0, z: 0, w: 1 };
 * const transform = buildXRRigidTransform(position, orientation);
 *
 * @experimental
 */
export const buildXRRigidTransform = baseXRRigidTransformFactory;
/**
 * Factory function to create an instance of `XRRigidTransform`.
 *
 * @param {DOMPointInit} position - The position of the transform in the form of a DOMPointInit object.
 * @param {DOMPointInit} orientation - The orientation of the transform in the form of a DOMPointInit object.
 * @returns {XRRigidTransform} A new instance of `XRRigidTransform`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform | MDN XRRigidTransform}
 *
 * @example
 * // Example usage:
 * const position = { x: 1, y: 2, z: 3, w: 1 };
 * const orientation = { x: 0, y: 0, z: 0, w: 1 };
 * const transform = makeXRRigidTransform(position, orientation);
 *
 * @experimental
 */
export const makeXRRigidTransform = baseXRRigidTransformFactory;
/**
 * Factory function to create an instance of `XRRigidTransform`.
 *
 * @param {DOMPointInit} position - The position of the transform in the form of a DOMPointInit object.
 * @param {DOMPointInit} orientation - The orientation of the transform in the form of a DOMPointInit object.
 * @returns {XRRigidTransform} A new instance of `XRRigidTransform`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRigidTransform | MDN XRRigidTransform}
 *
 * @example
 * // Example usage:
 * const position = { x: 1, y: 2, z: 3, w: 1 };
 * const orientation = { x: 0, y: 0, z: 0, w: 1 };
 * const transform = constructXRRigidTransform(position, orientation);
 *
 * @experimental
 */
export const constructXRRigidTransform = baseXRRigidTransformFactory;
