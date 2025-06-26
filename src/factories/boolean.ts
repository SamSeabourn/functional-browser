const baseBooleanFactory = (
  ...args: ConstructorParameters<typeof Boolean>
): InstanceType<typeof Boolean> => new Boolean(...args);

/**
 * Factory function to create a new Boolean object.
 *
 * @returns {Boolean} A new Boolean object.
 *
 * @example
 * const myBoolean = createBoolean();
 * console.log(myBoolean); // Outputs: false
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Boolean | MDN Boolean}
 */
export const createBoolean = baseBooleanFactory;
/**
 * Factory function to create a new Boolean object.
 *
 * @returns {Boolean} A new Boolean object.
 *
 * @example
 * const myBoolean = initBoolean();
 * console.log(myBoolean); // Outputs: false
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Boolean | MDN Boolean}
 */
export const initBoolean = baseBooleanFactory;
/**
 * Factory function to create a new Boolean object.
 *
 * @returns {Boolean} A new Boolean object.
 *
 * @example
 * const myBoolean = spawnBoolean();
 * console.log(myBoolean); // Outputs: false
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Boolean | MDN Boolean}
 */
export const spawnBoolean = baseBooleanFactory;
/**
 * Factory function to create a new Boolean object.
 *
 * @returns {Boolean} A new Boolean object.
 *
 * @example
 * const myBoolean = buildBoolean();
 * console.log(myBoolean); // Outputs: false
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Boolean | MDN Boolean}
 */
export const buildBoolean = baseBooleanFactory;
/**
 * Factory function to create a new Boolean object.
 *
 * @returns {Boolean} A new Boolean object.
 *
 * @example
 * const myBoolean = makeBoolean();
 * console.log(myBoolean); // Outputs: false
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Boolean | MDN Boolean}
 */
export const makeBoolean = baseBooleanFactory;
/**
 * Factory function to create a new Boolean object.
 *
 * @returns {Boolean} A new Boolean object.
 *
 * @example
 * const myBoolean = constructBoolean();
 * console.log(myBoolean); // Outputs: false
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Boolean | MDN Boolean}
 */
export const constructBoolean = baseBooleanFactory;
