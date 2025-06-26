const baseXRRayFactory = (
  ...args: ConstructorParameters<typeof XRRay>
): InstanceType<typeof XRRay> => new XRRay(...args);

/**
 * Factory function to create a new instance of `XRRay`.
 *
 * @returns {XRRay} A new `XRRay` instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRay | MDN XRRay}
 *
 * @example
 * // Example usage:
 * const xrRay = createXRRay();
 *
 * @experimental
 */
export const createXRRay = baseXRRayFactory;
/**
 * Factory function to create a new instance of `XRRay`.
 *
 * @returns {XRRay} A new `XRRay` instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRay | MDN XRRay}
 *
 * @example
 * // Example usage:
 * const xrRay = initXRRay();
 *
 * @experimental
 */
export const initXRRay = baseXRRayFactory;
/**
 * Factory function to create a new instance of `XRRay`.
 *
 * @returns {XRRay} A new `XRRay` instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRay | MDN XRRay}
 *
 * @example
 * // Example usage:
 * const xrRay = spawnXRRay();
 *
 * @experimental
 */
export const spawnXRRay = baseXRRayFactory;
/**
 * Factory function to create a new instance of `XRRay`.
 *
 * @returns {XRRay} A new `XRRay` instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRay | MDN XRRay}
 *
 * @example
 * // Example usage:
 * const xrRay = buildXRRay();
 *
 * @experimental
 */
export const buildXRRay = baseXRRayFactory;
/**
 * Factory function to create a new instance of `XRRay`.
 *
 * @returns {XRRay} A new `XRRay` instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRay | MDN XRRay}
 *
 * @example
 * // Example usage:
 * const xrRay = makeXRRay();
 *
 * @experimental
 */
export const makeXRRay = baseXRRayFactory;
/**
 * Factory function to create a new instance of `XRRay`.
 *
 * @returns {XRRay} A new `XRRay` instance.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRRay | MDN XRRay}
 *
 * @example
 * // Example usage:
 * const xrRay = constructXRRay();
 *
 * @experimental
 */
export const constructXRRay = baseXRRayFactory;
