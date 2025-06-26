const baseTextFactory = (...args: ConstructorParameters<typeof Text>): InstanceType<typeof Text> =>
  new Text(...args);

/**
 * Creates a new Text node with the specified data.
 *
 * @param {string} data - The textual data for the Text node.
 * @returns {Text} A new Text node containing the specified data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Text | MDN Text}
 *
 * @example
 * const textNode = createText("Hello, World!");
 * console.log(textNode.data); // Outputs: Hello, World!
 */
export const createText = baseTextFactory;
/**
 * Creates a new Text node with the specified data.
 *
 * @param {string} data - The textual data for the Text node.
 * @returns {Text} A new Text node containing the specified data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Text | MDN Text}
 *
 * @example
 * const textNode = initText("Hello, World!");
 * console.log(textNode.data); // Outputs: Hello, World!
 */
export const initText = baseTextFactory;
/**
 * Creates a new Text node with the specified data.
 *
 * @param {string} data - The textual data for the Text node.
 * @returns {Text} A new Text node containing the specified data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Text | MDN Text}
 *
 * @example
 * const textNode = spawnText("Hello, World!");
 * console.log(textNode.data); // Outputs: Hello, World!
 */
export const spawnText = baseTextFactory;
/**
 * Creates a new Text node with the specified data.
 *
 * @param {string} data - The textual data for the Text node.
 * @returns {Text} A new Text node containing the specified data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Text | MDN Text}
 *
 * @example
 * const textNode = buildText("Hello, World!");
 * console.log(textNode.data); // Outputs: Hello, World!
 */
export const buildText = baseTextFactory;
/**
 * Creates a new Text node with the specified data.
 *
 * @param {string} data - The textual data for the Text node.
 * @returns {Text} A new Text node containing the specified data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Text | MDN Text}
 *
 * @example
 * const textNode = makeText("Hello, World!");
 * console.log(textNode.data); // Outputs: Hello, World!
 */
export const makeText = baseTextFactory;
/**
 * Creates a new Text node with the specified data.
 *
 * @param {string} data - The textual data for the Text node.
 * @returns {Text} A new Text node containing the specified data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Text | MDN Text}
 *
 * @example
 * const textNode = constructText("Hello, World!");
 * console.log(textNode.data); // Outputs: Hello, World!
 */
export const constructText = baseTextFactory;
